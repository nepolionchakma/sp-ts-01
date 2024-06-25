import { Toaster } from "@/components/ui/toaster";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";

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

  const value = { employees, employee, getEmployeeData };
  return (
    <AivenContext.Provider value={value}>
      {children}
      <ToastContainer />
      <Toaster />
    </AivenContext.Provider>
  );
};
