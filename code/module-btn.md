# 组件化按钮

按钮是非常常用的元素，这里推荐以组件化的方式开发按钮。

通过3个 class 名组成一个按钮
```
// 基础样式
ui-btn
// 外观样式
ui-btn-info
// 尺寸样式
ui-btn-1
```
- **基础样式**负责解决一些兼容性和默认样式
- **外观样式**负责控制背景色、边框、文字颜色等
- **尺寸样式**负责控制按钮宽高、字体大小、内外边距等

我们可以将 `ui-btn-info` 和 `ui-btn-1` 看做是按钮的状态，通过切换不同状态改变按钮外观。而不需要每个外观都重写一遍尺寸和外观的样式。这样就能以少量的、易维护的代码组件化开发按钮。

````html
<button class="ui-btn ui-btn-info">ui-btn ui-btn-info</button>
<button class="ui-btn ui-btn-danger">ui-btn ui-btn-danger</button>

<hr>

<button class="ui-btn ui-btn-danger ui-btn-1">ui-btn ui-btn-danger ui-btn-1</button>
<button class="ui-btn ui-btn-danger ui-btn-2">ui-btn ui-btn-danger ui-btn-2</button>
<button class="ui-btn ui-btn-danger ui-btn-3">ui-btn ui-btn-danger ui-btn-3</button>
````


````css
/* 以 ui- 为前缀是为了不与其他样式冲突，ui- 前缀是一种自定义代码约定 */
.ui-btn {
    /* 处理一些兼容性 */
    display: inline-block;
    *display: inline;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    font-family: inherit;
    *zoom: 1;
    *overflow: visible; /* for a ie6/7 bug http://blog.csdn.net/jyy_12/article/details/6636099 */    
    background-image: none; /* for old alice button style conflict */
    /* 加边框是为了防止未来需要增加一种带边框的按钮，现在将边框设为和背景一样的颜色，需要加边框就改变颜色。这样有边框和无边框所占的位置都一样大
    */
    border: 1px solid transparent;
    padding:0;
    border-radius:3px;
}
/* 默认尺寸等于 ui-btn-2 */
.ui-btn {
    padding-left:.5em;
    padding-right:.5em;
    color:white;
    font-size:16px;
    line-height:30px;
}
/* 定义多个尺寸 */
.ui-btn-1 {
    font-size:12px;
    height:28px;
    line-height:28px;
}
.ui-btn-2 {
    font-size:14px;
    height:30px;
}
.ui-btn-3 {
    font-size:16px;
    line-height:34px;
}
/* 定义多种颜色 */
.ui-btn-info {
    border-color:#5bc0de;
    background-color:#5bc0de;
}
.ui-btn-danger {
    border-color:#d9534f;
    background-color:#d9534f;
}
````

这种方式与 [Bootstrap按钮](http://v3.bootcss.com/css/#buttons) 是类似的