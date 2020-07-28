// const { request } = require("express");

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

(function(){
    let lista= document.getElementById('lista');
    const input = document.getElementById('txtsearch');
    let filtro = input.value.toLowerCase();
    const btn = document.getElementById('usersearch');
    const api = 'https://api.github.com/users';
    const clientId = 'Iv1.026a5ce36f373e21';
    const clientSecret = 'abb93829946907c1879cc6744721d2c745ec67f7';

    async function getUser(user){
        const profileRes= await fetch(`${api}/${user}?client_id=${clientId}&client_secret=${clientSecret}`)
        const profile = profileRes.json();
        return profile;
    }

    function showProfile(user){
        lista.innerHTML = `
        <div class="user">
            <img src="${user.avatar_url}">
            <div class="usercont">
                ${user.login}
            </div>
        </div>
        `;
    }

    input.addEventListener('keyup', (event) => {
        let user = event.target.value;
        if(user.length > 0){
        getUser(user).then(res => showProfile(res))
        }
    })

    input.addEventListener('blur', (event) => {
        fetchUsers();
    });

})();

//const db = request('./database')

//function save(){
//    var mensagem = document.getElementById('chat').value;

//    db.run(function(){
//        ('INSERT INTO places (message) VALUES (?)',[mensagem]);
//    });
//}

//save();

//function show(){
//    db.all(`SELECT * FROM places`, [], function (err, rows) {
//        var chat = document.getElementById('msg');
//        var mensagens = '';
//    
//        for (var i = 0; i < rows.length; i++) {
        
//            mensagens += `
//            <div class="texto">
//            ${rows[i].message}
//            </div>`

//            console.log(rows)
//        }
//        chat += mensagens
//    })
//}

// show();
