<div class="box" >
    <div class="side">
        side
    </div>
    <div class="cnt">
        cnt
        <hr />1
        <hr />2
        <hr />3
        <hr />4
        <hr />5
        <hr />6
        <hr />7
        <hr />8
        <hr />9
        <hr />10
        <hr />11
        <hr />12
        <hr />13
        <hr />14
        <hr />15
        <hr />16
        <hr />17
        <hr />18
        <hr />19
        <hr />20
        <hr />21
        <hr />22
        <hr />23
        <hr />24
        <hr />25
        <hr />26
        <hr />27
        <hr />28
        <hr />29
        <hr />30
    </div>
</div>


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
