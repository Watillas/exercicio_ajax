document.addEventListener("DOMContentLoaded", function() {
    const ProfileAvatar = document.querySelector(".profile-avatar");
    const ProfileName = document.querySelector(".profile-name");
    const ProfileUserName = document.querySelector(".profile-username");
    const NumberRepos = document.querySelector(".repositories");
    const NumberFollowers = document.querySelector(".followers");
    const NumberFollowing = document.querySelector(".following");
    const ProfileLink = document.querySelector(".profile-link");

    try {
        fetch('https://api.github.com/users/Watillas')
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        ProfileAvatar.src = json.avatar_url;
        ProfileName.textContent = json.name;
        ProfileUserName.textContent = json.login;
        NumberRepos.textContent = json.public_repos;
        NumberFollowers.textContent = json.followers;
        NumberFollowing.textContent = json.following;
        ProfileLink.href = json.html_url;
    });
    } catch (error) {
        console.error('Erro ao buscar dados do GitHub:', error);
    }
});















