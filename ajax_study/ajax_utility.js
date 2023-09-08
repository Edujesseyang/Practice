
//这个练习时一个ajax的自解方程, 总结一下代码的功能：

// 1.代码创建了一个自执行的函数，其目的是为了创建一个函数作用域，以避免污染全局命名空间，并传入全局对象 window 作为参数。

// 2.代码创建了一个空对象 ajaxUtils，用于存放 AJAX 相关的功能。

// 3.代码定义了一个函数 getRequest，用于创建并返回一个 XMLHttpRequest 对象，用于发起 HTTP 请求。

// 4.代码定义了一个函数 sendGETRequest，用于发送 GET 请求，接受两个参数：请求的 URL 和响应处理函数。

// 5.代码定义了一个函数 hanlerResponse，用于处理响应数据。

// 6.最后，将 ajaxUtils 对象附加到全局对象 window 上，使其可以在其他地方访问，以便发送 GET 请求和处理响应。


(function (global) {//首先这是一个 IFEE 方程,自解.
  // step 0: 创建一个全局函数作用域（IIFE，立即执行函数表达式），传入一个全局对象 global。

  //step 1: 先创建一个 object, 名为此
  const ajaxUtils = {};//此为空 object, 用来存放 ajax 相关的功能.

  //step 2: 做一个方程, 执行此方程时 return XML 请求. 如果浏览器不支持 ajax, 则报错
  //该方程可以返回一个 XMLHttpRequest 对象。XMLHttpRequest 对象是用于发起 HTTP 请求的工具。
  let getRequest = function () {
    if (window.XMLHttpRequest) {//此处 check XMLHttpRequest 的值是否为真,
      return new XMLHttpRequest();//若 true, 则返回一个新 XMLHttpReuest 对象.
    } else {
      global.alert("不支持ajax");//若 false,则报错.
      return null;//return null 则表示不做任何创建.
    }
  }

  //step 3: 创建这个 ajax utility 的工作模式.
  //先在 ajaxUtils 这个obj下创建一个名叫 sendGETRequest 的方法函数. 用来发送 GET 请求.

  ajaxUtils.sendGETRequest =//创建这个子 object ,其工作方式如下:
    function (requstUrl, responseHandler) {//该方程有两个 arguments, 一个是请求,一个是响应.

      const request = getRequest();//建立一个request 变量, 其中为 step2 中的新 XML object.
      // 调用 getRequest 函数来获取一个 XMLHttpRequest 对象，并将其存储在名为 request 的变量中。

      request.onreadystatechange = () => {//设置 request 变量作为 ajax 对象的 status

        // 配置请求的回调函数，当请求状态发生变化时，将调用 hanlerResponse 函数。
        hanlerResponse(request, responseHandler)
      };
      request.open('GET', requstUrl);//打开一个 GET 请求. 指定请求的url.
      request.send(null);//发送一个不包含请求体的 GET 请求.
    }

  //step:4:  // 创建一个函数 hanlerResponse，用于处理响应。
  let hanlerResponse = (request, responseHandler) => {

    //  检查请求的状态和响应的状态码。
    if ((request.readyState == 4) && (request.status == 200)) {

      // 如果请求状态为 4（已完成）且响应状态码为 200（成功）。
      // 调用传入的 responseHandler 函数来处理响应数据。
      responseHandler(request);
    }
  }
  //step 5: 将 ajaxUtils 对象附加到全局对象 global 上，以便在其他地方可以访问到这个对象。
  global.$ajaxUtils = ajaxUtils;
})(window);//最后立即执行函数，并传入全局对象 window。

//这是一个简单的library. 其功能是建立一个ajax utility. 目的是创建一个object,其中包含了一个GET的方法
//该工具库可以发送get请求给服务器. 并处理相应.

//--9/7/2023