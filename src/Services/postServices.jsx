import axios from "axios";

const postsAPI = axios.create({ baseURL: 'http://localhost:8000/posts' });

async function getPosts() {
    const response = await postsAPI.get('/');
    return response.data
}

async function createPost(content) {
    await postsAPI.post('/', content);

}

async function searchPost(title) {
    const response = await postsAPI.get('/');
    const filtered = response.data.filter(post => post.title.toUpperCase().includes(title));
    return filtered;

}


// get the all user's posts by it's id
async function userPosts(id) {
    const response = await postsAPI.get('/');
     
    const filtered = response.data.filter(post => post.userId == id);

    return filtered;

}







export {
    getPosts,
    createPost,
    searchPost,
    userPosts
}
