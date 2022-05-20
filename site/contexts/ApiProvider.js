import { useEffect } from "react";


export const ApiProvider = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const loadData = async ()=> {
      setLoading(true);
      const response = await fetch('http://localhost:3001/codeblocks');

      setData(response.data);

      setLoading(false);

      console.log(data);
    };

    loadData();
  }, []);
};

