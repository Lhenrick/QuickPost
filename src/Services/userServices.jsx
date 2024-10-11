import axios from "axios";

const userInfo = axios.create({baseURL:'https://quickpost-server-git-main-lhenricks-projects.vercel.app/profile'});


async function fetchProfile() {
    try {
        const response = await userInfo.get('/', {withCredentials:true});    
        return response.data

    }catch(error) {
        console.error('Error fetching profile:', error);
    }

    

}
export{
    fetchProfile
}