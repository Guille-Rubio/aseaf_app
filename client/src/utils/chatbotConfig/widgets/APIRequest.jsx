import React, { useEffect, useState } from 'react';
import axios from 'axios';


const APIRequest = (message) => {
  const [apiResponse, setApiResponse] = useState('');

  useEffect(() => {

    async function getData() {
      try {
        const request = await axios({
          url: `http://monca.pythonanywhere.com/api/v1/consulta?text=despedida`,
          method: 'get',
          headers: { 'Content-Type': 'application/json' }
        })
        const response = await request.data;
        setApiResponse(response);

      } catch (err) {
        throw err
      }
    }

    getData()


  }, [])

  return <div className="options-container">
    <h1>Resultados de la API</h1>
    {apiResponse.message ? <img src={apiResponse.message} alt="perro random" /> : ""}
    {apiResponse.respond ? <p>{apiResponse.respond}</p> : ""}

  </div>;

}

export default APIRequest;