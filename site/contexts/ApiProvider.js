import { createContext, useContext, useState } from "react";

const ApiContext = createContext();

export const ApiProvider = ({children}) => {
  const [data, setData] = useState(null); 

  // const axios = require('axios');
  // const variabletoto = axios.get('http://localhost:3001/codeblocks');

  // async function getData(){
  //   try {
  //     const response = await axios.get('http://localhost:3001/codeblocks');
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  async function getData() {
    const response = await axios.get('http://localhost:3001/codeblocks');
    console.log(response);
    setData(response);
  };

  return ( 
    <ApiContext.Provider>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  const context = useContext(ApiContext);

  if (context === undefined) {
    throw new Error("useApi must be used within and ApiProvider");
  }

  return context;
};
