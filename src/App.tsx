import React, { useEffect, useState } from 'react';
import './table.css';
import GetData from './api';

function App  ()  {

  const url: string = "https://jsonplaceholder.typicode.com/users";
  const [apiData, setApiData] = useState([]);
  useEffect(()=>{
    GetData(url).then(value=>setApiData(value));
  },[]);
  return (
    <div>
    <div className="col-xl-8 order-xl-1">
      <div className="card bg-secondary shadow">
        <div className="card-header bg-white border-0">
          <div className="row align-items-center">
            <ul className="responsive-table">
              <li className="col-md-12 table-header">
                <h3 className="c-1 mb-0">Id</h3>
                <h3 className="c-4 mb-0">Name</h3>
                <h3 className="c-4 mb-0">User Name</h3>
                <h3 className="c-4 mb-0">City</h3>
                <h3 className="c-4 mb-0">Suite</h3>
                <h3 className="c-4 mb-0">Zip Code</h3>
              </li>
              <div>
                {
                  apiData.map((post: any, index: number) => (
                    <li key={index} className="col-md-12 table-row">
                      <div className="c-1">{post.id}</div>
                      <div className="c-4">{post.name}</div>
                      <div className="c-4">{post.username}</div>
                      <div className="c-4">{post.address.city}</div>
                      <div className="c-4">{post.address.suite}</div>
                      <div className="c-4">{post.address.zipcode}</div>
                    </li>
                  ))
                }
              </div>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
