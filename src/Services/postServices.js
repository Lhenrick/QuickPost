import axios from "axios";

const postsAPI =  axios.create({baseURL:'http://localhost:8000/posts'});

async function getPosts() {
    const response = await postsAPI.get('/');
    return response.data
}

export{
    getPosts
}
