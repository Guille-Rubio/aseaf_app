import axios from "axios";


const axiosRequest = async (message) => {
    try {
        const request = await axios({
            url: `http://alejomo.pythonanywhere.com/api/v1/consulta/?text=${message}`,
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
                }
            
        });
        console.log(" 2****************");
        const response = request;
        console.log(" 3****************", response);

        return response

    } catch (error) {
        console.log(error)
        throw error;
    }
};


export default axiosRequest;