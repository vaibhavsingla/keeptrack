import React from "react";
const GetData=async(url: string): Promise<any>=> {
    const myHeaders = new Headers({
      "Content-Type": "application/json"
    });
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
    try {
      const response = await fetch(url, requestOptions);
      if (response.ok) {
        const res = await response.json();
        return res;
        console.log("Hi",res);
      }
    }
    catch {
      return null;
    }
  }

  export default GetData;