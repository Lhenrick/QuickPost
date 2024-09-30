import axios from "axios";

const userLogin = axios.create({ baseURL: 'http://localhost:8000/login', withCredentials:true });

async function login(data) {
    try {

        const response = await userLogin.post('/', data, { withCredentials: true});

            console.log('you are logged in!', response.data);
            return true;
        

    } catch (error) {
        console.log(`Could not login: ${error} `);
        return false;
    }
}



export {
    login
}