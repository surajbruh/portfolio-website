import { createContext, useContext } from "react";
import data from "../config/data.json";

const DataContext = createContext(data);

const useDataContext = () => useContext(DataContext);
export default useDataContext;
