
let ball = document.getElementById("ball");
let ball2 = document.getElementById("ball2");
ball2.style.left = 1548 + "px";
ball2.style.top = 428 + "px";

let bro = document.getElementById("mario");
ball.style.left = 857 + "px";
ball.style.top = 149 + "px";
let score = document.getElementById("score");
let guai = document.getElementById("guai");
guai.style.left = 248 + "px";
guai.style.top = 605 + "px";


let input = document.getElementById("input");
input.addEventListener("keydown",
    function (event) {
        if (event.key === " ") {

            let position = parseInt(bro.style.left) || 0;
            if (position >= 60 && position <= 210) {
                setTimeout(function () {
                    bro.style.top = 350 + "px";
                }, 0);
                setTimeout(function () {
                    bro.style.top = 420 + "px";
                }, 500);

            } else if (position >= 800 && position <= 840) {
                setTimeout(function () {
                    bro.style.top = 220 + "px";
                }, 0);
                setTimeout(function () {
                    bro.style.top = 350 + "px";
                }, 500);
                setTimeout(function () {
                    ball.style.top = 50 + "px";
                }, 100);
                setTimeout(function () {
                    ball.style.top = 149 + "px";
                    score.innerHTML = parseInt(score.innerText) + 1;
                }, 700);


            } else if (position >= 1500 && position <= 1550) {
                setTimeout(function () {
                    bro.style.top = 490 + "px";
                }, 0);
                setTimeout(function () {
                    bro.style.top = 559 + "px";
                }, 500);
                setTimeout(function () {
                    ball2.style.top = 350 + "px";
                }, 100);
                setTimeout(function () {
                    ball2.style.top = 428 + "px";
                    score.innerHTML = parseInt(score.innerText) + 1;
                }, 700);

            } else if (position >= 770 && position <= 910) {
                setTimeout(function () {
                    bro.style.top = 220 + "px";
                }, 0);
                setTimeout(function () {
                    bro.style.top = 350 + "px";
                }, 500);
                console.log(position);
            } else {
                setTimeout(function () {
                    bro.style.top = 350 + "px";
                }, 0);
                setTimeout(function () {
                    bro.style.top = 559 + "px";
                }, 500);

            }

        };
        if (event.key === "d") {
            bro.style.backgroundImage = "url(img/marrio2.png)";
            let current = parseInt(bro.style.left) || 0;
            let newlf = current + 10;
            bro.style.left = newlf + "px";


        };
        if (event.key === "a") {
            bro.style.backgroundImage = "url(img/marrio3.png)";
            let current = parseInt(bro.style.left) || 0;
            let newlf = current - 10;
            bro.style.left = newlf + "px";

        }
    }
);



    input.addEventListener("focus",
        function () {
            
            setInterval(function walk() {

                setTimeout(function () {
                    guai.src = "img/guai.png"
                    guai.style.left = 310 + "px";
                }, 500)
                setTimeout(function () {
                    guai.style.left = 350 + "px";
                }, 1000)
                setTimeout(function () {
                    guai.style.left = 410 + "px";
                }, 1500)
                setTimeout(function () {
                    guai.style.left = 450 + "px";
                }, 2000)
                setTimeout(function () {
                    guai.style.left = 510 + "px";
                }, 2500)
                setTimeout(function () {
                    guai.style.left = 550 + "px";
                }, 3000)
                setTimeout(function () {
                    guai.style.left = 610 + "px";
                }, 3500)
                setTimeout(function () {
                    guai.style.left = 650 + "px";
                }, 4000)
                setTimeout(function () {
                    guai.style.left = 710 + "px";
                }, 4500)

                setTimeout(function () {
                    guai.src = "img/guai2.png"
                    guai.style.left = 710 + "px";
                }, 4500)
                setTimeout(function () {
                    guai.style.left = 650 + "px";
                }, 5000)
                setTimeout(function () {
                    guai.style.left = 600 + "px";
                }, 5500)
                setTimeout(function () {
                    guai.style.left = 550 + "px";
                }, 6000)
                setTimeout(function () {
                    guai.style.left = 500 + "px";
                }, 6500)
                setTimeout(function () {
                    guai.style.left = 450 + "px";
                }, 7000)
                setTimeout(function () {
                    guai.style.left = 400 + "px";
                }, 7500)
                setTimeout(function () {
                    guai.style.left = 350 + "px";
                }, 8000)
                setTimeout(function () {
                    guai.style.left = 310 + "px";
                }, 8500)
                setTimeout(function () {
                    guai.style.left = 248 + "px";
                }, 8500)

            }, 8500)
        })


