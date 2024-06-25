import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface IAivenDataProviderProps {
  children: ReactNode;
}
interface IEmployee {
  employee_id: number;
  user_name: string;
  first_name: string;
  last_name: string;
  job_title: string;
  email: string;
  department_id: number;
}
interface IAivenContextDataType {
  employees: IEmployee[] | null;
  employee: IEmployee[] | null;
  getEmployeeData: (id: number) => void;
  createEmployeeData: (
    user_name: string,
    first_name: string,
    last_name: string,
    job_title: string,
    email: string,
    department_id: number
  ) => void;
  date: string;
}
export const AivenContext = createContext<IAivenContextDataType | undefined>(
  undefined
);

export const useAivenDataContext = (): IAivenContextDataType => {
  const aivenDataConsumer = useContext(AivenContext);
  if (!aivenDataConsumer) {
    throw new Error("Error inside Data Base.");
  }
  return aivenDataConsumer;
};

export const AivenDataProvider: React.FC<IAivenDataProviderProps> = ({
  children,
}) => {
  const [employees, setEmployees] = useState<IEmployee[] | null>(null);
  const [employee, setEmployee] = useState<IEmployee[] | null>(null);
  const { toast } = useToast();
  const now = new Date();
  const localDateString = now.toLocaleDateString();
  const localTimeString = now.toLocaleTimeString();
  const date = localDateString + ", " + localTimeString;

  //Get All employee Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:3000/employees");
        const data: IEmployee[] = await res.json();
        setEmployees(data);
      } catch (error) {
        console.log(error);
      }
    };
    // if (user) {
    //   fetchData();
    // }
    fetchData();
  }, [employees]);

  //Create a Employee data
  const createEmployeeData = async (
    user_name: string,
    first_name: string,
    last_name: string,
    job_title: string,
    email: string,
    department_id: number
  ) => {
    const postData = {
      user_name: user_name,
      first_name: first_name,
      last_name: last_name,
      job_title: job_title,
      email: email,
      department_id: department_id,
    };
    try {
      const res = await fetch("http://127.0.0.1:3000/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      if (res.ok) {
        toast({
          title: "SuccessFully Submitted",
          description: date,
        });
      }
    } catch (error) {}
  };

  //Get single employee Data
  const getEmployeeData = async (id: number) => {
    try {
      const res = await fetch(`http://127.0.0.1:3000/employees/${id}`);
      const data: IEmployee[] = await res.json();
      setEmployee(data);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    employees,
    employee,
    getEmployeeData,
    createEmployeeData,
    date,
  };
  return (
    <AivenContext.Provider value={value}>
      {children}
      <Toaster />
    </AivenContext.Provider>
  );
};
