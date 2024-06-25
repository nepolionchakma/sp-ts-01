import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/store/AuthContext";
import { useState } from "react";

const Login: React.FC = () => {
  const { login } = useAuthContext();
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, username);
  };

  return (
    <div className="w-[40%] mx-auto mt-10 p-4 border">
      <form onSubmit={handleLogin}>
        <div className="flex flex-col gap-4">
          <input
            className="px-4 py-2 bg-slate-100 rounded border"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="px-4 py-2 bg-slate-100 rounded border"
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div>
            <Button type="submit">LogIn</Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
