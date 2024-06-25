import { Button } from "@/components/ui/button";
import { useAivenDataContext } from "@/store/AivenContext";
import React, { useState } from "react";

const AddEmployee = () => {
  const { createEmployeeData } = useAivenDataContext();
  const [user_name, setUser_name] = useState<string>("");
  const [first_name, setFirst_name] = useState<string>("");
  const [last_name, setLast_name] = useState<string>("");
  const [job_title, setJob_title] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [department_id, setDepartment_id] = useState<number>(101);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createEmployeeData(
      user_name,
      first_name,
      last_name,
      job_title,
      email,
      department_id
    );
    setUser_name("");
    setFirst_name("");
    setLast_name("");
    setJob_title("");
    setEmail("");
    setDepartment_id(101);
  };
  console.log(typeof department_id);
  return (
    <div className="w-[50%] mx-auto my-8">
      <h4 className="text-center font-bold text-xl my-4">Add Employee</h4>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 mb-4">
          <input
            autoFocus
            type="text"
            value={user_name}
            onChange={(e) => setUser_name(e.target.value)}
            placeholder="User Name"
            className="py-1 px-2 bg-slate-100 rounded "
          />
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            placeholder="First Name"
            className="py-1 px-2 bg-slate-100 rounded "
          />
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            placeholder="Last Name"
            className="py-1 px-2 bg-slate-100 rounded "
          />
          <input
            type="text"
            value={job_title}
            onChange={(e) => setJob_title(e.target.value)}
            placeholder="Job Title"
            className="py-1 px-2 bg-slate-100 rounded "
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="py-1 px-2 bg-slate-100 rounded "
          />
          <input
            type="number"
            value={department_id}
            onChange={(e) => setDepartment_id(Number(e.target.value))}
            placeholder="DP ID"
            className="py-1 px-2 bg-slate-100 rounded "
          />
        </div>
        <div className="flex items-center justify-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
export default AddEmployee;
