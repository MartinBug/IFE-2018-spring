var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
// var newImage = new Array();
/* 迭代图片 */
for (var i = 0; i < 5; i++) {
    var newImage = document.createElement('img');
    var path = "images/pic" + (i + 1) + ".jpg";
    // newImage.className = "thumbBarImages";
    newImage.setAttribute('src', path);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", function () {
        displayedImage.src = event.target.src
    })
}
/* 编写 变亮/变暗按钮 处理器 */

btn.onclick = function () {
    if ( btn.getAttribute("class") === "dark" ) {
        btn.setAttribute("class", "light");
        btn.textContent = "变亮";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "变暗";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }

}