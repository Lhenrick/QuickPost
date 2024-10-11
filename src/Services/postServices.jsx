import axios from "axios";

const postsAPI = axios.create({ baseURL: 'https://quickpost-server-three.vercel.app/posts' });

async function getPosts() {
    const response = await postsAPI.get('/');
    return response.data
}

async function createPost(content) {
    await postsAPI.post('/', content);

}

async function searchPost(search) {

    const response = await postsAPI.get('/');
    const filtered = response.data.filter(post => post.title.toUpperCase().includes(search) || post.username.toUpperCase().includes(search));
    const sorted = filtered.reverse()
    return sorted;

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
