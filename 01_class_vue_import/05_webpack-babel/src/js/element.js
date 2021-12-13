import "../css/title.less";
import "../css/sytle.css";
import "../css/image.css";
import zznhImage from "../img/zznh.png";
import "../font/iconfont.css"

const divEL = document.createElement("div");
divEL.className = "title";
divEL.innerHTML = "你好啊";

//设置背景图片
const bgDivEl = document.createElement('div');
bgDivEl.className = "image-bg";

//设置img元素的src
const imgEl = document.createElement('img');
imgEl.src = zznhImage;


const iEl = document.createElement('i');
iEl.className = "iconfont icon-ashbin";


document.body.appendChild(divEL);
document.body.appendChild(bgDivEl);
document.body.appendChild(imgEl);
document.body.appendChild(iEl);
