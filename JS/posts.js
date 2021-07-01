const createPostList = (post) => {
    const li = document.createElement('li');
    li.textContent = `title: ${post.title}, body: ${post.body}`;
    return li;
};


const appendPostToDOM = (posts) => {
    const ul = document.querySelector('ul');
    posts.map(post => {
        ul.appendChild(createPostList(post));
    });
};

const fetchPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/users/1/posts')
        .then(response => {
            const posts = response.data;
            console.log(`GET: posts list`, posts);
            appendPostToDOM(posts);
        })
        .catch(error => console.error(error));
};

fetchPosts();