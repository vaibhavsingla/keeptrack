import React ,{useState,useEffect} from "react";
import GetData from "./api";
const TestApiData=(url: string)=> {
    const [apiData, setApiData] = useState([]);
    useEffect(()=>{
      GetData(url).then(value=>setApiData(value));
    },[]);
    return
    {
        apiData
    };
  };

  export default TestApiData;