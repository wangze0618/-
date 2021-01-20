window.onload = function () {
    //切换图片就是修改img的src属性
    //要修改一个元素的属性 => 元素.属性=属性值
    //点击按钮切换图片
    //先获取两个button按钮和img元素
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var img = document.getElementsByTagName("img")[0];

    //创建一个数组，用来保存图片的路径
    var arr = ["../img/1.jpg", "../img/2.jpg", "../img/3.jpg", "../img/4.jpg", "../img/5.jpg"];

    //创建一个变量，来保存当前正在显示的图片的索引
    var index = 0;

    //设置提示文字
    //获取id为info的元素
    var info = document.getElementById("info");
    info.innerHTML = "共" + arr.length + "张,当前第1张!";

    //给"上一张"按钮绑定事件函数
    prev.onclick = function () {
        index-- //切换上一张，索引自减
        if (index < 0) {
            index = arr.length - 1; // index=arr.length - 1可以重复循环图片
        }
        img.src = arr[index] //根据索引，来自动修改src的图片地址
        info.innerHTML = "共" + arr.length + "张,当前第" + (index + 1) + "张!"
    }

    //给"下一张"按钮绑定事件函数
    next.onclick = function () {
        index++ //切换下一张，索引自增
        if (index > arr.length - 1) {
            index = 0; // index=0可以重复循环图片
        }
        img.src = arr[index] //根据索引，来自动修改src的图片地址
        info.innerHTML = "共" + arr.length + "张,当前第" + (index + 1) + "张!"
    }
};