const loginForm = document.querySelector('#loginForm');
const userName = loginForm.querySelector('#iptUserName');
const loginInfo = document.querySelector('#loginInfo');
const loginUserName = loginInfo.querySelector('#loginUserName');
const btnLogout = loginInfo.querySelector('#btnLogout');

const CLASSNAME_BLIND = 'blind';
const INDEXED_KEY = 'userName';

function showLoginInfo(ele) {
    loginUserName.textContent = ele;
    loginInfo.classList.remove(CLASSNAME_BLIND);
    btnLogout.addEventListener('click', handleLogout);
}

function handleLogin(event) {
    event.preventDefault();

    const userNameVal = userName.value;

    loginForm.classList.add(CLASSNAME_BLIND);
    localStorage.setItem(INDEXED_KEY, userNameVal);

    showLoginInfo(userNameVal);
}

function handleLogout() {
    localStorage.removeItem(INDEXED_KEY);
    loginUserName.textContent = '';
    userName.value = '';
    loginForm.classList.remove(CLASSNAME_BLIND);
    loginInfo.classList.add(CLASSNAME_BLIND);
}

const savedUserName = localStorage.getItem(INDEXED_KEY);

if(savedUserName === null) {
    loginForm.classList.remove(CLASSNAME_BLIND);
    loginForm.addEventListener('submit', handleLogin);
} else {
    loginForm.classList.add(CLASSNAME_BLIND);
    showLoginInfo(savedUserName);
}
