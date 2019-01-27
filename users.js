const users = [
    {id: 1, username: 'Moe'},
    {id: 2, username: 'Larry'},
    {id: 3, username: 'Curly'}
]

const list = () => {
    return [...users]
};

const find = (id) => {
    const user = users.find(usr => usr.id === +id);
    return {...user}; // Again, we copy the post data before returning so the original information is safe.
}

module.exports = {list, find};
