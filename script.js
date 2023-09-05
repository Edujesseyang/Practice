
// prictice 1:

// alert("Are You Ready!");
// let questions = [
//     {
//         prompt: "1+4=?",
//         answer: 5
//     }, {
//         prompt: "2+5=?", answer: 7
//     }, {
//         prompt: "5+5=?", answer: 10
//     }, {
//         prompt: "天是什么颜色?/na:白色; /nb:绿色; /nc:蓝色", answer: "c"
//     }, {
//         prompt: "谁是你的老公?/na:海洋; /nb:lucky; /nc:老王", answer: "a"
//     }, {
//         prompt: "谁是你的猫咪?/na:海洋; /nb:lucky; /nc:老王", answer: "b"
//     }, {
//         prompt: "晚上吃不吃羊蝎子?/na:吃; /nb:不吃; /nc:你说", answer: "a"
//     }
// ]
// let input;
// let score = 0;
// for (let i = 0; i < questions.length; i++) {
//     input = prompt(questions[i].prompt);
//     if (input == questions[i].answer) {
//         alert("right answer!");
//         score++;
//     } else {
//         alert("wrong answer!");
//     }
// }

// alert("You have answered " + score + " questions right");
// if (score > 4) {
//     document.write("<h1>恭喜你,通过测试!</h1>");
//     document.write("</br>");
//     document.write("Test Report: Yor have answered 7 questions");
//     document.write("</br>");
//     document.write(score + " of them are correct!");
//     document.write("</br>");
//     document.write("<h2>GOOD JOB!!</h2>");

// } else {
//     document.write("<h2>YOU FIALED!!</h2>");
//     document.write("</br>");
//     document.write("<h2>Do it again!</h2>");
// }



// practice 2:

// let thing = [
//     [1, 2, 3,],
//     [4, 5, 6,],
//     [7, 8, 9,],
//     [0]
// ]

// for (let i = 0; i < thing.length; i++) {
//     for (let j = 0; j < thing[i].length; j++) {
//         document.write(thing[i][j]);
//         document.write("</br>");
//     }
// }

// practice 3:


// class cat {
//     constructor(name, brand, color, sex, year) {
//         this.name = name;
//         this.brand = brand;
//         this.color = color;
//         this.sex = sex;
//         this.year = year;
//         this.age = 2023 - this.year;
//     }
// }


// let cat1 = new cat("lucky", "俄罗斯蓝猫", "gray", "male", 2018);
// let cat2 = new cat("sushi", "狸花猫", "棕色条纹", "female", 2020);

// document.write(cat1.age,);
// document.write("</br>");
// document.write(cat2.,);

// let obj = {
//     a: 1,
//     get b() {
//         return this.a + 1
//     },

//     get c() {
//         return this.b + 1
//     }

// }

// document.write(obj.c)




// practice 4:


// const obj = {
//   a:12,
//   b:32,
//   get total(){
//  return this.a + this.b
// }
// }


// console.log(obj.total);

// class computer {
//     constructor(brand, size, color, weight) {
//         this.brand = brand;
//         this.size = size;
//         this.color = color;
//         this.weight = weight + "lb";
//     }
// }

// let pc1 = new computer("Dell", "large", "white", 4);
// let pc2 = new computer("Apple", "small", "grey", 2)
// document.write(pc1.weight);
// document.write("</br>");
// document.write(pc2.weight);


// practice 5:

// let hi = document.getElementById("hi");
// hi.style.color = "red";

// ducument.write("hi");

// function tanchu() {
//     title.innerText = "你好吗";
// }

// let btn = document.getElementById("btn");
// // let title = document.getElementById("title");
// btn.addEventListener("click", function () {

//     alert("Stop!");
//     btn.innerText = "Dont Click";
// })

// practice 6:

// let btn1 = document.getElementById("btn1");
// btn1.addEventListener("mouseenter", function () {
//     // btn.style.color = "red";
//     btn1.style.float = "right";
// });
// btn1.addEventListener("mouseleave", function () {
//     // btn.style.color = "green";
//     btn1.style.float = "left";
// });

// let btn2 = document.getElementById("btn2");
// btn2.addEventListener("click", function () {
//     let answer = prompt("谢谢老婆打赏! 么么哒!\n 现在给吗? \nA: Yes!   B: No!:");

//     if (answer === "a") {
//         return alert("老婆真好! 谢谢老婆!");

//     } else {
//         while (answer !== "a") {
//             alert("回答不正确, 请输入正确选项!");
//             answer = prompt("谢谢老婆打赏! 么么哒!\n 现在给吗? \nA: Yes!   B: No!:");
//         }
//         return alert("老婆真好! 谢谢老婆!");
//     }
// });

// practice 7:

// let img = document.getElementById("img");
// img.addEventListener("mouseover", function () {
//     this.src = "img/profilePic.jpg";
// })
// img.addEventListener("mouseleave", function () {
//     this.src = "img/profilePic_withe.jpg";
// })

//留言板练习:

// let title = document.getElementById("title");
// let content = document.getElementById("content");
// let btn = document.getElementById("btn");


// let div = document.getElementById("div");


// btn.addEventListener("click", function () {

//     div.innerHTML = div.innerHTML + `
//     <div id="div" >
//         <h5>${title.value}</h5>
//         <p>${content.value}</p>

//     </div>
// `
// })


//practice//-----------constructor-------------------

// class newObj {
//     constructor(name1, name2) {
//         this.name1 = name1;
//         this.name2 = name2;
//     }
// }

// let obj = new newObj("Jesse", "Chloe");
// console.log(obj);


// document.write("check")

// function newObj(name1, name2) {
//     this.name1 = name1;
//     this.name2 = name2;
// }

// let obj = new newObj("woshi", "nibaba");

// console.log(obj)

// class family{
//     constructor(wife, husband, haveSon) {
//         this.wife = wife;
//         this.husband = husband;
//         this.haveSon = haveSon;
//     }
// }

// let catFamily = new family("Lucky", "sushi", false);

// family.prototype.son = function () {
//     if (this.haveSon = true) {
//         console.log("they have son");
//     } else {
//         console.log("they dont have son");
//     }
// }

// console.log(catFamily);

// class objs{
//     constructor(a, b, c, d) {
//         this.a = a;
//         this.b = b;
//         this.c = c;
//         this.d = d;
//     }
// }


// let obj2 = {
//     a: 1,
//     b: 2,
//     c: 5
// }
// let obj1 = new objs(1, 2, 3, "df");
// console.log(JSON.stringify(obj1));

// console.log(obj2.toString());



// objs.prototype.new = ["er","gr",123];

// function Triangle(height, base) {
//     this.height = height;
//     this.base = base;
// }



// class Triangle {
//     constructor(height, base) {
//         this.height = height;
//         this.base = base;
//     }
// }

// Triangle.prototype.getArea =
//     function () {
//         return this.height * this.base / 2;
//     };

// let triangle = new Triangle(4, 6);
// console.log(triangle);
// console.log(triangle.getArea());

// let trig2 = new Triangle(34, 54);
// console.log(trig2);
// console.log(trig2.getArea());

// function sumArea() {
//     return triangle.getArea() + trig2.getArea();
// }

// console.log(sumArea());


// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };

// let ary = [34, 556, 123, 65];
// console.log(obj["a"]);
// console.log(obj.a);
// console.log(obj[prop]);


// function list(x) {
//     for (let i = 0; i < x.length; i++) {
//         console.log(x[i]);
//     }
// };
// ary.somethin = "laile";

// function listObj(x) {
//     for (let p in x) {
//         console.log(p + ":" + x[p]);
//     }
// }

// function listAry(x) {
//     for (let y in x) {
//         console.log(x[y]);
//     }
// }



// // list(ary);
// listObj(obj);
// listAry(ary);

//----------------Closures-------------------

// function DamageTake(totalhp) {

//     return function (damage) {
//         return totalhp - damage
//     }
// }

// // let myHealth = DamageTake(100);


// // console.log(myHealth(10));
// console.log(DamageTake(23));

//------------------------------------

// function Price(priceBylb) {
//     return function (weight) {
//         return weight * priceBylb
//     }
// }

// let pork = Price(4.95);
// console.log(pork(5));

//------------------------------------

// function BodyMass(height, sex) {
//     if (sex === "male") {
//         return function (weight, age) {
//             return weight / Math.pow(height, 2) * 1.2 + 0.23 * age - 10.8 * 1 - 5.4;
//         }
//     } else if (sex === "female") {
//         return function (weight, age) {
//             return weight / Math.pow(height, 2) * 1.2 + 0.23 * age - 10.34 * 0 - 5.4;
//         }
//     }
// }

// let MaleBodyMass = BodyMass(1.68, "male");
// let FemaleBodyMass = BodyMass(1.63, "female");
// console.log(MaleBodyMass(65, 35));
// console.log(FemaleBodyMass(60, 36));

//---------------------------------------

// function CardCredit(totalCredit, cardNumber) {
//     return function (priceCharged) {
//         totalCredit -= priceCharged;
//         if (totalCredit >= 0) {
//             console.log("Card Number (" + cardNumber + ") : You have " + totalCredit + " credit ");
//             return totalCredit;
//         } else {
//             console.log("Card Number (" + cardNumber + ") : You have " + Math.abs(totalCredit) + " balance need to pay ");
//             return totalCredit;
//         }
//     }
// }

// let myCard = CardCredit(500, "5277 1424 2755 9596");
// let yourCard = CardCredit(5000, "3434 5446 7676 3423");
// myCard(12);
// myCard(288);
// myCard(200);
// myCard(23);
// yourCard(234);
// myCard(64);
// yourCard(3433);
// yourCard(1233);
// myCard(-50);
// myCard(-50);
// yourCard(250);
// yourCard(-150);
// myCard(13);



//------------------------------------------

// let obj = {
//     "di yi": 123,
//     $number: 3434,
//     name: "dfeeg"
// };

// console.log(obj);
// console.log(obj["name"]);
// console.log(obj["di yi"]);
// console.log(obj.$number);
// console.log(obj["$number"]);
// console.log(obj.name);

//---------------------------------------------

// function a(x, y) {
//     let result;
//     result = x + y;
//     console.log(result);
//     return result;
// }

// a(34, 25);

// let b = function (x, y) {
//     let result;
//     result = x - y;
//     console.log(result);
//     return result;
// };

// b(3, 5);

// (function (x, y) {

//     function multiple() {
//         let result;
//         result = x * y;
//         return console.log(result);

//     };

//     window.sth = multiple();//这行命令可以将function multiple暴露在全域里面.

// })(3, 3);// 这个就是IIFE, 立即执行函数表达式. 也可叫匿名函数.

// console.log(sth());

// (function (a) {
//     let x = "hello! ";
//     console.log(x + a);
//     window.a = function () { console.log(x) };
//     //同理,用window.名字 = IIFE 方程中的某项向外暴露.
// })("world!")

// a();

//---------------------------------------------------------------------------

//用简单的html来写一些event listener. 这种方法会让html 的文件变得很混乱,
//所以可以用另一种方法来制作event listener.

// function clicked() {
//     let age = document.getElementById("age").value;
//     let input = document.getElementById("input").value;
//     let output;
//     if (age === "" || input === "") {
//         output = "Please input your correct information!";
//     } else {
//         output = "Your name is <h2 style='color:red; display:inline-block'>" + input
//             + "</h2>, </br>Your age is <h1 style='color:green display:inline-block'>" + age + "</h1> years old.";
//     }
//     document.getElementById("content").innerHTML = output;
// }

// function mouse() {
//     let btn = document.getElementById("button");
//     btn.style.color = "red";

// }

// function press() {
//     let btn = document.getElementById("button");


//     btn.style.color = "blue";

//     document.getElementById("input").value = "请输入";

// }

//-----------------------------------------------------------------------------
// //另一种制作enent listener 的方法.
// let btn = document.getElementById("button");
// btn.addEventListener("click", function () {

//     btn.style.color = "red";
// })

// document.getElementById("age").addEventListener("focus", function () {
//     let spaceHolder = document.getElementById("age");
//     spaceHolder.value = "23523523525";
// })

// document.querySelector("input").addEventListener("blur", function () {
//     document.getElementById("content").innerHTML = "<h1>WHAT FUCK DO YOU WANT, BRUH?</h1>";
// })

// function changeIt() {
//     let ctt = document.getElementById("content");
//     ctt.innerText = "fuck shit!";
// }

// btn.onclick = changeIt;

// btn.addEventListener("click", changeIt);

// document.querySelector("#box")
//     .addEventListener("mousemove",
//         function (event) {
//             if (event.altKey === true) {
//                 let ball = document.getElementById("ball");
//                 ball.style.position = "absolute";
//                 let delay = 250;
//                 setTimeout(function () {
//                     ball.style.top = event.clientY + "px";
//                     ball.style.left = event.clientX + "px";
//                 }, delay)
//                 ball.style.backgroundColor = "red";

//                 console.log("x: " + event.clientX);
//                 console.log("y: " + event.clientY);
//             }
//         }
//     );
// // document.getElementById("mario").addEventListener("keydown",
//     function (event) {

//         if (KeyboardEvent.keyCode === 13) {
//             mario.style.right = bor.style.left + 10;
//             console.log("wocao")
//         }
//     })
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
        // while (true) {
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
        // }
    });
