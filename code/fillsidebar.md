<!-- {
    "prehide": true
} -->
````html
<div class="box" >
    <div class="side">
        side
    </div>
    <div class="cnt">
        Start
        <div style="width:0;height:600px;border:1px dotted blue;" ></div>
        ...
        <div style="width:0;height:600px;border:1px dotted blue;" ></div>
        End
    </div>
</div>
````

<!--MARKRUN-HTML
<div style="display:none;" >
-->

# 侧栏高度与 body 一致

实现的关键代码是：*`height:100%;` `overflow: auto;`*

````css
html,
body {
    height: 100%;
    padding:0;
    margin:0;
}
.box {    
    padding-left: 200px;
    background-color: pink;
    height: 100%;
}
.side {
    height: 100%;
    float: left;
    margin-left: -200px;
    width:200px;
    background-color: skyblue;
}
.cnt {
    background-color: orange;
    height: 100%;
    overflow: auto;
}
````

<!--MARKRUN-HTML
</ div>
-->
