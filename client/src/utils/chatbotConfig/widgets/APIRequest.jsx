import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const APIRequest = (props) => {
  const [apiResponse, setApiResponse] = useState('');

  useEffect(() => {

    async function getData() {

      try {
        const request = await axios({
          url: `https://nlptripu-env-1.eba-mzkvmkcp.us-east-1.elasticbeanstalk.com/api/v1/consulta?text=despedida`,
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

    // eslint-disable-next-line
  }, [])

  return <div className="bot">

    {apiResponse.respond ? <p>{apiResponse.respond}</p> : ""}
    <p>"Te preocupan las despedidas? Muchos han pasado por eso, aquí tienes algunos consejos de como llevarlo lo mejor posible. En el siguiente enlace podrás encontrar toda la información.:"</p>
    
    <Link to="customhelp"><button className="chatbot__finish-button ">Ir a contenido</button></Link>
  </div>;

}

export default APIRequest;