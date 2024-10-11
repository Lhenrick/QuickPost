import axios from "axios";

const userLogin = axios.create({ baseURL: 'https://quickpost-server-git-main-lhenricks-projects.vercel.app/login', withCredentials:true });

async function login(data) {
    try {
        const response = await userLogin.post('/', data, { withCredentials: true});

        localStorage.setItem('authToken', response.data.token);
                   
        return true;
        

    } catch (error) {
        console.log(`Could not login: ${error} `);
        return false;
    }
}



export {
    login
}