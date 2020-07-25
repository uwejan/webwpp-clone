async function fetchUsers() {
    
    let lista= document.getElementById('lista');

    const res = await fetch('https://api.github.com/users')
    const json = await res.json()

    allUsers = json.map(user => {

        const { id, login, avatar_url, url } = user

        return {
            id: id,
            name : login,
            icon : avatar_url,
            url
        };
    });

    function renderUsers(){
        let usersDiv = '<div>';

        allUsers.forEach(user => {
            const { id, name, icon, url } = user;
            let eachUser = `
            <div class="user">
                <img src="${icon}">
                <div class="usercont">
                    ${name}
                </div>
            </div>
            `;
            usersDiv += eachUser;

            console.log(user)
        });

        usersDiv += '</div>';

        lista.innerHTML = usersDiv;
    }

    renderUsers()
}

fetchUsers();