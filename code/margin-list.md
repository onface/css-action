## 带 margin 的列表

### 多层 div overflow
````html
<div class="box">
    <div class="inner b-clear">
        <div class="item"> 1 </div>
        <div class="item"> 2 </div>
        <div class="item"> 3 </div>
        <div class="item"> 4 </div>
        <div class="item"> 5 </div>
        <div class="item"> 6 </div>
    </div>
</div>
````
````css
body {
    padding-left:10px;
    padding-right:10px;
}
.box,
.box2 {
    background:#eee;
}
/* 清理浮动 */
.b-clear:after {visibility:hidden; display:block; font-size:0; content:" "; clear:both; height:0;}
.b-clear {zoom:1; /* for IE6 IE7 */}
````

````css
.box {
    width:320px;
    /*overflow:hidden;*/
}
.inner {
    width:330px;
}
.item {
    width:100px;
    height:100px;
    background:#ABCDEF;
    float:left;
    margin-right:10px;
    text-align:center;
    color:white;
    line-height:100px;
}
````

### css3 nth-child

> IE8不支持 `nth-child`

````html
<div class="box2 b-clear">
    <div class="item"> 1 </div> <div class="item"> 2 </div> <div class="item"> 3 </div> <div class="item"> 4 </div> <div class="item"> 5 </div> <div class="item"> 6 </div>
</div>
````

````css
.box2 {
    width:320px;
}
.box2 .item:nth-child(3n+0) {
    margin-right:0;
}
/* 配合媒体查询改变 nth-child 值 */
@media (min-width: 960px){
    .box2 {
        width:210px;
    }
    .box2 .item:nth-child(3n+0) {
        margin-right:10px;
    }
    .box2 .item:nth-child(2n+0) {
        margin-right:0px;
    }
}
````

### IE8 模拟 nth-child

> 使用 `.item:first-child+.item` 模拟，但只适用于内容较少的页面。

````html
<div class="box3 b-clear">
    <div class="item"> 1 </div> <div class="item"> 2 </div> <div class="item"> 3 </div> <div class="item"> 4 </div> <div class="item"> 5 </div> <div class="item"> 6 </div>
</div>
````


````css
.box3 {
    width:320px;
}
.box3 .item:first-child+.item+.item,
.box3 .item:first-child+.item+.item+.item+.item+.item {
    margin-right:0;
}
````
