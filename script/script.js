
const subscribeForm = document.getElementById("subscribeForm");
const email = document.getElementById("email");
const formContainer = document.querySelector(".form-container");
const successContainer = document.querySelector(".success-container");
const userEmail = document.querySelector(".user-email");
const dismissBtn = document.getElementById("dismissBtn");


subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const validEmail = /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/; 

    if(!validEmail.test(email.value.trim())){
        subscribeForm.classList.add("show-error");
    } else{
        userEmail.textContent = email.value;
        subscribeForm.classList.remove("show-error");
        formContainer.classList.add("hide-form");
        successContainer.classList.add("show-success");
    }
})


email.addEventListener("input", () => {
    subscribeForm.classList.remove("show-error");
})


dismissBtn.addEventListener("click", () => {
    email.value = "";
    formContainer.classList.remove("hide-form");
    successContainer.classList.remove("show-success");
})