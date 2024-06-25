import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TodosProvider } from "./store/TodosContext.tsx";
import { AuthContextProvider } from "./store/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <TodosProvider>
      <App />
    </TodosProvider>
  </AuthContextProvider>
);
