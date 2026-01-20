document.addEventListener("DOMContentLoaded", function() {
    const ProfileAvatar = document.querySelector(".profile-avatar");
    const ProfileName = document.querySelector(".profile-name");
    const ProfileUserName = document.querySelector(".profile-username");
    const NumberRepos = document.querySelector(".number-repos");
    const NumberFollowers = document.querySelector(".number-followers");
    const NumberFollowing = document.querySelector(".number-following");
    const ProfileLink = document.querySelector(".profile-link");

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
    })



});















