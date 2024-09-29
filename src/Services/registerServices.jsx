import axios from "axios";

const usersRegistered = axios.create({baseURL:'http://localhost:8000/users'})

async function registerUser(data){

    await usersRegistered.post('/', data );
    console.log('New account successfully created!')

}



export {
    registerUser
}

