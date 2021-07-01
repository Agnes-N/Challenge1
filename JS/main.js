const createList = (user) => {
    const li = document.createElement('li');
    li.textContent = `${user.name}, ${user.email}`;
    li.appendChild(createButton(`${user.UserId}`))
    return li;
};

const createButton = () => {
    const btn = document.createElement('button');
    btn.appendChild(document.createTextNode("Get User’s Posts"));
    btn.onclick = e => fetchUsers(window.location.href = 'posts.html');
    return btn
}

const appendToDOM = (users) => {
    const ul = document.querySelector('ul');
    users.map(user => {
        ul.appendChild(createList(user));
    });
};

const fetchUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data;
            console.log(`GET: list users`, users);
            appendToDOM(users);
        })
        .catch(error => console.error(error));
};

fetchUsers();

const fetchPosts = (UserId) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${UserId}/posts`)
        .then(response => {
            const posts = response.data;
            console.log(`GET: posts list`, posts);
        })
        .catch(error => console.error(error));
};
