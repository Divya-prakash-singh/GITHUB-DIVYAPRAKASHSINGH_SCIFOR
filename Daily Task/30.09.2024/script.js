document.getElementById('loadUsers').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const users = data.map(user => `<p>${user.name} - ${user.email}</p>`).join('');
            document.getElementById('dataDisplay').innerHTML = users;
        })
        
});

document.getElementById('loadData').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const posts = data.map(post => `<p><strong>${post.title}</strong><br>${post.body}</p>`).join('');
            document.getElementById('dataDisplay').innerHTML = posts;
        } else {
            document.getElementById('dataDisplay').innerHTML = 'Error loading data.';
        }
    };
    
    xhr.send();
});
