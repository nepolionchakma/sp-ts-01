import { useAivenDataContext } from "@/store/AivenContext";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PenLine, Save, Trash } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Employees = () => {
  interface IEmployee {
    employee_id: number;
    user_name: string;
    first_name: string;
    last_name: string;
    job_title: string;
    email: string;
    department_id: number;
  }
  const { employees, date } = useAivenDataContext();
  const [user_name, setUser_name] = useState<string>("");
  const [job_title, setJob_title] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isActionClicked, setIsActionClicked] = useState<number>();
  const { toast } = useToast();

  //Get employee data
  const handleGetEmployee = async (id: number) => {
    setIsActionClicked(id);
    try {
      const res = await fetch(`http://127.0.0.1:3000/employees/${id}`);
      const data: IEmployee[] = await res.json();
      setUser_name(data[0].user_name);
      setJob_title(data[0].job_title);
      setEmail(data[0].email);
    } catch (error) {
      console.log(error);
    }
  };

  const updatedEmployeeData = {
    user_name: user_name,
    job_title: job_title,
    email: email,
  };
  const handleUpdateEmployee = async (id: number) => {
    try {
      const updateEmpoyeeData = await fetch(
        `http://127.0.0.1:3000/employees/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedEmployeeData),
        }
      );
      if (updateEmpoyeeData.ok) {
        toast({
          title: "SuccessFully Updated",
          description: date,
        });
        setUser_name("");
        setJob_title("");
        setEmail("");
        setIsActionClicked(0);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteEmployee = async (id: number) => {
    try {
      const deleteEmpoyeeData = await fetch(
        `http://127.0.0.1:3000/employees/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      if (deleteEmpoyeeData.ok) {
        toast({
          title: "SuccessFully Deleted",
          description: date,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h4 className="text-center font-bold text-xl">Employees</h4>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>User-Name</TableHead>
            <TableHead>Job-Title</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees?.map((employee) => (
            <TableRow key={employee.employee_id}>
              {isActionClicked === employee.employee_id ? (
                <>
                  <TableCell className="font-medium">
                    {employee.employee_id}
                  </TableCell>
                  <TableCell>
                    {" "}
                    <input
                      autoFocus
                      type="text"
                      value={user_name}
                      onChange={(e) => setUser_name(e.target.value)}
                      className="py-1 px-2 bg-slate-100 rounded "
                    />
                  </TableCell>
                  <TableCell>
                    <input
                      type="text"
                      value={job_title}
                      onChange={(e) => setJob_title(e.target.value)}
                      className="py-1 px-2 bg-slate-100 rounded "
                    />
                  </TableCell>
                  <TableCell>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-1 px-2 bg-slate-100 rounded "
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 items-center justify-center">
                      <div className="hover:bg-green-500 hover:text-white rounded p-1 cursor-pointer duration-100">
                        <Save
                          onClick={() => handleUpdateEmployee(isActionClicked)}
                        />
                      </div>

                      <div className="hover:bg-red-500 hover:text-white rounded p-1 cursor-pointer duration-100">
                        <Trash
                          onClick={() =>
                            handleDeleteEmployee(employee.employee_id)
                          }
                        />
                      </div>
                    </div>
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell className="font-medium">
                    {employee.employee_id}
                  </TableCell>
                  <TableCell>{employee.user_name}</TableCell>
                  <TableCell>{employee.job_title}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex gap-2 items-center justify-center">
                      <div className="hover:bg-green-500 hover:text-white rounded p-1 cursor-pointer duration-100">
                        <PenLine
                          onClick={() =>
                            handleGetEmployee(employee.employee_id)
                          }
                        />
                      </div>

                      <div className="hover:bg-red-500 hover:text-white rounded p-1 cursor-pointer duration-100">
                        <Trash
                          onClick={() =>
                            handleDeleteEmployee(employee.employee_id)
                          }
                        />
                      </div>
                    </div>
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default Employees;
