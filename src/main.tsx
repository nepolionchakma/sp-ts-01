import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TodosProvider } from "./store/TodosContext.tsx";
import { AuthContextProvider } from "./store/AuthContext.tsx";
import { AivenDataProvider } from "./store/AivenContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <AivenDataProvider>
      <TodosProvider>
        <App />
      </TodosProvider>
    </AivenDataProvider>
  </AuthContextProvider>
);
