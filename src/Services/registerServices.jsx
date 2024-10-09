import axios from "axios";

const usersRegistered = axios.create({baseURL:'http://localhost:8000/users'});

async function registerUser(data){

    try {
        await usersRegistered.post('/', data );
    }catch(error){
        alert(`Something went wrong: ${error}`)
    }
}

export {
    registerUser
}

