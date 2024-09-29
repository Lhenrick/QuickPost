import axios from "axios";

const postsAPI =  axios.create({baseURL:'http://localhost:8000/posts'});

async function getPosts() {
    const response = await postsAPI.get('/');
    return response.data
}

async function createPost(content){
     await postsAPI.post('/', content);

}

async function searchPost(title){
    const response = await postsAPI.get(`/`)
    const filtered = response.data.filter(post => post.title.includes(title))
    return filtered
           
}




export {
    getPosts,
    createPost,
    searchPost
}
