let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/*你好，我是Carina
接下来我将制作一个八卦
首先我要准备一个div*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/*将div变成八卦的第一步是：
把div变成一个圆圈*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦有阴阳两极,因此第二步为：
把圆圈变为一半白一半黑*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*第三步为：
形成阴阳鱼状*/
#div1::before{
    width:100px;
    height:100px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/*就这样八卦图就画好啦！*/
`;
let string2 = "";
let n = 0;
let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    // string2 += string[n] === "\n" ? "<br>" : string[n];
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99998); //页面滚动到最低端
    html.scrollTo(0, 99998);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 40);
};
step();
