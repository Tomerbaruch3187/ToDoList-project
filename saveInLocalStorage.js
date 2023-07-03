function saveInLocalStorage() {
    const divAllMissions = document.getElementById('addToPage');

    localStorage.setItem('allMisions', divAllMissions.innerHTML);
};