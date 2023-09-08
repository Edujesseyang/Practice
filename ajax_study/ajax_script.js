//该 JS 文件旨在操纵 html 文件的对相应 event 的 reaction.

document.addEventListener("DOMContentLoaded",//DOMContentLoaded eventListener 是监视当
    //html page 完成 loading 时, 将触发该 event.
    function (event) {
        document.getElementById("btn1") //监视html上的 id 为 button 的 element.
            .addEventListener("click", function () { //当 click 该 button 时 触发 event.


                $ajaxUtils.sendGETRequest("readme.txt",    //这里是精华, 从我们之前做的ajaxUtils的
                    function (request) {                   //libary中通过服务器调取同一文件夹下的readme.txt
                        let content = request.responseText;//创建一个变量值为响应text.
                        console.log(content);              //console一下确定成功拿到响应text.

                        //最后,改变content box 的innerHTML内容, 使其呈现readme.txt的内容.
                        document.getElementById("output")
                            .innerHTML = "<p>This is readme of this practice: " + content + "</p>";
                    });
            });
    });

//如上述之类的 ajax 操作可以完成在不对页面进行刷新的情况下就完成对页面的加载与更新.
//可以大大提高网页的反应速度, 使网页更加流畅. 并且大大减少了资源的使用.

//以下是对按钮2 的ajax 运用.
document.addEventListener("DOMContentLoaded",
    function (event) {
        document.getElementById("btn2")
            .addEventListener("click", function () {

                $ajaxUtils.sendGETRequest("lucky.jpg",
                    function (request) {
                        let content = request.responseText;
                        console.log(content);
                        document.getElementById("output")
                            .innerHTML = content;
                    });
            });
    })
//以上的代码是点击按钮输出lucky的头像, 但是输出是乱码. 是因为在
//request.responseText只会解析相应头为text 格式, 如果是一个img 则会出现乱码. 回头再修复此错误.

//--9/7/2023


document.addEventListener("DOMContentLoaded",
    function (event) {
        document.getElementById("btn3")
            .addEventListener("click",
                function () {
                    $ajaxUtils.sendGETRequest("Json.txt",
                        function (res) {
                            let content = res.responseText;
                            let obj = JSON.parse(content);
                            let add = JSON.stringify(obj.home);

                            document.getElementById("output")
                                .innerHTML = "<h2>Your name is" + obj.name + "</h2>"
                                + "<h3>Your have " + obj.family + " in your home. </br>" +
                                "You live in " + add + "!!!</h3>";
                            console.log(obj);
                    })
            })
})