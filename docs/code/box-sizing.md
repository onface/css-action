# box-sizing

## input 溢出

IE6/7 中让一个 `<input>` 宽度100%会出现 `<input>` ”溢出“


````html
<div class="box1">
    <input type="text" class="box1-input">
</div>
````

````css
/* 外层绿色框 */
.box1 {
    border:1px solid green;
}
/* 红框 input */
.box1-input {
    display: block;
    height: 100%;
    width:100%;
    padding: 0;
    border:1px solid red;
}
````

## 增加包裹元素

给 `<input>`  增加一层 `<div>` 并设置这个 `<div>` 的宽度可实现宽度100%不溢出

````html
<div class="box2">
    <div class="box2-write">
        <input class="box2-write-input" type="text" />
    </div>
</div>
````

````css
/* 外层绿色框 */
.box2 {
    border:1px solid green;
}
/* input 父元素 红框 */
.box2-write {
    border:1px solid red;
}
/* 无边框 input */
.box2-write-input {
    display: block;
    height: 100%;
    width:100%;
    padding: 0;
    border:none;
}
````

## box-sizing

box-sizing: 规范(https://drafts.csswg.org/css-ui-3/#box-sizing)

如果你不需要兼容 IE6/7 则使用 IE8+ 支持的 `box-sizing: border-box;`

> 为元素设定的宽度和高度决定了元素的边框盒。
> 元素指定的任何内边距和边框都将在已设定的宽度和高度内进行绘制。
> 通过从已设定的宽度和高度分别减去边框和内边距才能得到内容的宽度和高度。


````html
<div class="box3">
    <input class="box3-input" type="text" />
</div>
````

````css
/* 外层绿色框 */
.box3 {
    border:1px solid green;
}
/* 红框 input */
.box3-input {
    box-sizing: border-box;
    display: block;
    height: 100%;
    width:100%;
    border:1px solid red;
    padding: 0;
}
````

有趣的是 `box-sizing: border-box;` 宽高计算方式是以前IE 怪异模式（Quirks mode）使用的 盒模型 。
