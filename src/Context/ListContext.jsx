import { createContext, useContext, useState } from "react";

const listContext = createContext({});

export const ListProvider = ({ children }) => {
  const [listData, setListData] = useState([]);
  return (
    <listContext.Provider value={{ groupDetail, setGroupDetail }}>
      {children}
    </listContext.Provider>
  );
};

export const useGroup = () => useContext(groupContext);
