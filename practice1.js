
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
//---------------------------------------
//测试 JSON.parse() 和 JSON.stringify()
// let obj = {
//     name: "yang",
//     age: 30,
//     family: ["luycky", "Chloe"],
//     address: {
//         state: "CA",
//         city:"Sunnyvale"
//     }
// }

// let string = JSON.stringify(obj);

// console.log(string);

// let object = JSON.parse(string);

// console.log(object);

//-------------------------------------
//测试function的 argument 的 index

// function addup() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     } return sum;
// }

// console.log(addup(1, 4, 5,6,3,6,1));

// //--------------------------------------
// //一个测试function作用域的例子

// let x = 1;
// function a() {
//     x = 2;
// }

// console.log(x); //1
// a();
// console.log(x);  //2
// //此时会发现 x 变成了2, 因为 a() 方程改变了内存中 x 的值.

// var y = 5;
// function b() {
//     y = 4;
//     alert(y);
// }

// console.log(y); //5
// b(); //4
// console.log(y); //4
// // //上面的例子表示,在一个 function 中 define 的 varible.
// // //在全域无法找到.


// var a = 3;
// var a = 4; // var 声明的变量可以被再次声明. 易出错.
// // let b = 5;
// // let b = 4; //let 声明的变量当被再次声明的hi和会报错.
// const c = 5;
// c = 45; //会报错. 常数变量不可修改.

// console.log(a); // a = 4; 第二次声明时覆盖掉第一次值.

//阶乘递归
// function factorial(n) {
//     if (n === 0) {
//         return 1; //0 的阶乘为 1;
//     } else {
//         return n * factorial(n - 1);
//         //n 的 阶乘等于 n 乘以 (n - 1)的阶乘
//         // n! = n[(n-1)!]
//     }
// }
// console.log(factorial(6));
//它就是可以这么算错了,就是这么奇怪!

//或者用 loop 去做
// function factorial2(n) {
//     let result = 1;
//     if (n === 0) {
//         return 1;
//     } else {
//         for (let i = 1; i <= n; i++) {
//             result = result * i;
//         }
//     } return result;
// }
// console.log(factorial2(5));
//也可以实现阶乘,但是没有递归看起来那么牛逼,那么高深,那么科幻.

//递归从1加到n:
// function addup(n) {
//     if (n < 0) {
//         return "操! 请输入自然数!"
//     }
//     if (n <= 1) {
//         return n; //
//     } else {
//         n = n + addup(n - 1);
//     } return n;
// }
// console.log(addup(10));
// //这样也行,很神奇!
// //但是如果 console.log(addup) 时,方程本身是不能被log出来的

// //如果用loop实现此功能可以:
// function addup2(n) {
//     let result = 0;
//     if (n < 0) {
//         return "come on bro! don't be silly!"
//     } else {
//         for (let i = 1; i <= n; i++){
//             result = result + i;
//         }
//     } return result;

// }
// console.log(addup2(10));
//也可以实现,但不如递归那般高深莫测.
//原理: 当函数被建立时,内存会开辟一个空间给这个函数,函数运行
//到该计算 n + addup(n-1) 时 内存又会开辟一个区域去计算addup(n-1)
//以此类推,最后内存开辟出一个空间计算addup(1)时,得出一个base case
//然后,内存addup(1)的值算addup(2),以此类推
//最后得出addup(n)的值. 原理如loop类似. 占用更多资源.

//----------------------------------------------------------------------
// let x = 2.17;
// let y = 9;
// let ary = [2.29, 2.76, 3.22, 1.85, 1.15, 1.45, 2.14, 1.97, 2.68];
// let sum = 0;
// let avg = 0;
// for (let i = 0; i < 9; i++) {
//     sum = sum + ary[i];
//     avg = sum / y;
// }
// let sum2 = 0;
// let avg2 = 0;
// console.log("sum=" + avg);
// for (let i = 0; i < 9; i++) {
//     sum2 = sum2 + Math.pow((ary[i] - x), 2);

//     console.log(Math.pow((ary[i] - x), 2));

// }
// avg2 = sum2 / 8;
// console.log("std=" + avg2);
// console.log("sqr the answer=" + Math.sqrt(avg2));

//----------------Above: This is a would problem in the engnineer 10 course---------