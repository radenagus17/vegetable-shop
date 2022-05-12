import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ListCompanies } from "./components";
import { Home, Login, Register } from "./pages";

export const MyContext = createContext();

function App() {
  const [url, setUrl] = useState("http://localhost:3000");
  return (
    <MyContext.Provider value={url}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/companies" element={<ListCompanies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;
