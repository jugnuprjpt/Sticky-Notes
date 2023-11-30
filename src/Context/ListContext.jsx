import { createContext, useContext, useState } from "react";

const groupContext = createContext({});

export const ListProvider = ({ children }: any) => {
  const [groupDetail, setGroupDetail] = useState([]);
  return (
    <groupContext.Provider value={{ groupDetail, setGroupDetail }}>
      {children}
    </groupContext.Provider>
  );
};

export const useGroup = () => useContext(groupContext);
