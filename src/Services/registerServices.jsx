import axios from "axios";

const usersRegistered = axios.create({ baseURL: 'http://localhost:8000/users' });

async function registerUser(data) {

    try {
        await usersRegistered.post('/', data);
        return true;

    } catch (error) {
        alert(`Something went wrong: ${error}`);
        return false;
    }
}

async function compareData({info, infoToCompare}) {

    const response = await usersRegistered.get('/');

    const existingData = response.data.filter(user => user[infoToCompare].toUpperCase() == (info))

    if(existingData.length > 0){
        return true
    } else {
        return false
    }

}

export {
    registerUser,
    compareData
}

