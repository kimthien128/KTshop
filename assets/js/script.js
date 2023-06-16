const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Heart on/off
let voteHeart = $$('.product-main-unit-content-vote__heart');
voteHeart.forEach(function(item, index){
    item.addEventListener('click', function(e){
        item.classList.toggle('heart--enable');
        e.preventDefault();
    })
})

// Switch Languages
const switchLanguages = $$('.language-item__link');
var navLanguageShowText = $('.navbar-language__text');
switchLanguages.forEach(function(item){
    item.addEventListener('click', function(e){
        switchLanguages.forEach(function(item){
            item.classList.remove('language-item__link--active');
        });
        item.classList.add('language-item__link--active');
        let activeText = this.innerText;
        navLanguageShowText.innerText = activeText;
    });
})

// Show form register/login
const modalLayout = $('.modal');
const modalOverlay = $('.modal__overlay');
const registerNav = $('.register');
const loginNav = $('.login');
const registerForm = $('.register-form');
const loginForm = $('.login-form');
const switchLogin = $('.register-form .auth-header__switch-btn');
const switchRegister = $('.login-form .auth-header__switch-btn');
const backToRegister = $('.login-form .btnBack');
const registerSuccess = $('.register-form .btnModalForm');
const loginSuccess = $('.login-form .btnModalForm:not(.btnBack)');
const socialLogin = $$('.auth-social__link');
const user = $('.navbar-item.navbar__user');
const userLogoutBtn = $('.navbar__user .logOut')
registerNav.onclick = () => {
    showRegisterForm();
};
switchRegister.onclick = () => {
    showRegisterForm();
};
backToRegister.onclick = () => {
    showRegisterForm();
};
loginNav.onclick = () => {
    showLoginForm();
};
switchLogin.onclick = () => {
    showLoginForm();
};
registerSuccess.onclick = () => {
    showLoginForm();
};
modalOverlay.onclick = () => {
    hideModal();
};

function showRegisterForm (){
    modalLayout.style.display = 'flex';
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
}
function showLoginForm (){
    modalLayout.style.display = 'flex';
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
}
function hideModal (){
    modalLayout.style.display = 'none';
    registerForm.style.display = 'none';
    loginForm.style.display = 'none';
}

loginSuccess.onclick = function(){
    hideModal();
    loginSuccessState();
};
socialLogin.forEach(function(item) {
    item.onclick = function(){
        hideModal();
        loginSuccessState();
    };
});
userLogoutBtn.onclick = function(){
    notLoginState();
};
function loginSuccessState(){
    registerNav.style.display = 'none';
    loginNav.style.display = 'none';
    user.style.display = 'flex';
}
function notLoginState(){
    registerNav.style.display = 'list-item';
    loginNav.style.display = 'list-item';
    user.style.display = 'none';
}