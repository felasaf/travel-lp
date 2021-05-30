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

    const go = document.querySelector(".go");
  
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
            go.style.display = 'none';
        }
    });

    document.addEventListener('keydown', function (e) {
        if(e.key == "Escape") {
            modal.classList.remove("show");
        }
    }); 

    const email = document.querySelector(".modal-login"),
          password = document.querySelector(".modal-password"),
          regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //   go = document.querySelector(".go");

    modal.addEventListener("submit", (e) => {
        e.preventDefault();
        if (regexEmail.test(email.value) === true && password.value.length > 6) {
            go.style.display = 'block';
            go.textContent = "Succesful";
            go.style.color = 'green';
            email.value = '';
            password.value = '';
        } else {
            go.textContent = "Error";
            go.style.color = 'red';
            email.value = '';
            password.value = '';
        }
    })
    // 

    const articles = document.querySelector("#articles"),
          locations = document.querySelector('#locations'),
          videos = document.querySelector('#videos'),
          arrLink = [articles, locations, videos],
          link = document.querySelectorAll(".js-scroll");

    for (let index = 0; index < link.length; index++) {
        link[index].addEventListener('click', (e) => {
            e.preventDefault();
            window.scroll({
                left: 0,
                top: arrLink[index].offsetTop - 107,
                behavior: "smooth"  
            })
        })
        
    }

    const navBtn = document.querySelector(".navbar-btn"),
          headerList = document.querySelector(".header-list")
    let tumbler = false;

    navBtn.addEventListener('click', () => {
        tumbler = !tumbler;
        if (tumbler) {
            headerList.style.display = 'block';
            link.forEach(element => {
                element.addEventListener('click', () => {
                    // const a = this.tumbler;
                    tumbler = false;
                    headerList.style.display = 'none';
                })
            });
        } else {
            headerList.style.display = 'none'
        }
    });
 });