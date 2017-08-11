# 水平垂直居中

## 方法一 : 
使用 `:after` 生成一个 `inline-block` 元素，利用 `inline-block` 的特性占位配合 `vertical-align:middle;` 让 `.pic` 居中。

````html
<div class="box">
    <span class="pic">
        
    </span>
</div>
````

````css
.box {
    text-align:center;
    width:300px;
    height:300px;
    border:1px solid black;
}
.box:after{
    content: " ";
    display:inline-block;
    width:0;
    height:100%;
    overflow:hidden;
    margin-left:-1px;
    font-size:0;
    line-height:0;
    vertical-align:middle;
}
.pic {
    width:100px;
    height:100px;
    background-color:skyblue;
    display:inline-block;
    *display:inline;
    *zoom:1;
    vertical-align:middle;
}

/* 即使内外宽度都改变也能居中 */
.box:hover{
    width:400px;
    height:450px;
}
.box:hover .pic{
    width:50px;
    height:50px;
}
````

## 方法二 : 
使用 `absolute` 定位将需要居中的方向定位为0，配合其方向上 `margin:auto`，让非行内元素居中。

````html
<div class="demo2-box">
    <div class="demo2-inner"></div>
</div>
````

````css
.demo2-box {
    width:300px;height:300px;
    position:relative;
    background:#999;
}
.demo2-inner {
    width:100px;height:100px;
    position:absolute;
    top:0;bottom:0;left:0;right:0;
    margin:auto;
    background:green;
}
````


## 方法三 : 
制造 `table-cell` 配合 `vertical-align` 和 `text-align` ，使其非行内元素居中。

````html
<div class="demo3-box">
    <div class="demo3-inner"></div>
</div>
````

````css
.demo3-box {
    width: 300px;height: 300px;
    background:#999;
    display: table-cell;
    vertical-align: middle; /* 垂直居中 */
    text-align: center; /* 水平居中 */
}
.demo3-inner {
    width: 100px;height: 100px;
    display: inline-block;
    background: green;
}
````
