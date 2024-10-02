import axios from "axios";

const userInfo = axios.create({baseURL:'http://localhost:8000/profile'});


async function fetchProfile() {
    try {
        const response = userInfo.get('/', {withCredentials:true});
        console.log(response.data);

    }catch(error) {
        console.error('Error fetching profile:', error);
    }

}

export{
    fetchProfile
}