document.addEventListener("DOMContentLoaded", function(event) {
    (function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
            if (window.pageYOffset > 50) {
                header.classList.add('header-active');
            } else {
                header.classList.remove('header-active');
            }
        };
    }());
  
    const signIn = document.querySelector('.header-sign'),
        modal = document.querySelector('.modal'),
        modalBg = document.querySelector(".modal-bg"),
        close = document.querySelector(".btn-close");

    signIn.addEventListener('click',(e) => {
        e.preventDefault();
        modal.classList.add('show');
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modalBg || e.target === close) {
            modal.classList.remove("show");
        }
    });

    document.addEventListener('keydown', function (e) {
        if(e.key == "Escape") {
            modal.classList.remove("show");
        }
    }); 

    const email = document.querySelector(".modal-login"),
          password = document.querySelector(".modal-password"),
          submit = document.querySelector(".modal-submit"),
          regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          go = document.querySelector(".go");

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        if (regexEmail.test(email.value) === true && password.value.length > 6) {
            go.textContent = "Succesful";
        } else {
            go.textContent = "Error";
        }
    })
});