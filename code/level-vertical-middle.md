# 水平垂直居中

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
    display:inline-block;width:0;height:100%;overflow:hidden;margin-left:-1px;font-size:0;line-height:0;vertical-align:middle;
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

## 实现方法
使用 `:after` 生成一个 `inline-block` 元素，利用 `inline-block` 的特性占位配合 `vertical-align:middle;` 让 `.pic` 居中。
