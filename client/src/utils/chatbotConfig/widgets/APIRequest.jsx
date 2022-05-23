import React, { useEffect, useState } from 'react';
import axios from 'axios';


const APIRequest = (message) => {
    const [apiResponse, setApiResponse] = useState('');

    useEffect(() => {
        async function getData() {
          try {
            const request = await axios.post(`http://alejomo.pythonanywhere.com/api/v1/consulta?text=undefined`);
            const response = await request.data
            setApiResponse(response)
          } catch (err) {
            throw err
          }
        }
        getData()
      }, [])

    return <div className="options-container">
        <h1>Resultados de la API</h1>
        <p>{apiResponse}</p>
    </div>;

}

export default APIRequest;