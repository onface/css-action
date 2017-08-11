# fill-sidebar

## table

````html
<div class="root">
    <div class="header">header</div>
    <div class="wrap">
        <div class="row">
            <div class="side">
                side
            </div>
            <div class="cnt">
                <div style="height:99px;border-left:1px dotted blue;"></div>
                cnt
                <div style="height:99px;border-left:1px dotted blue;"></div>
                <div style="height:99px;border-left:1px dotted blue;"></div>
                cnt
                <div style="height:99px;border-left:1px dotted blue;"></div>
                <div style="height:99px;border-left:1px dotted blue;"></div>
                cnt
                <div style="height:99px;border-left:1px dotted blue;"></div>
            </div>
        </div>
    </div>
</div>
````

````css
.root {
    height: 400px;
    position: relative;
    padding-top: 30px;
    overflow: auto;
}
.header {
    position: absolute;
    left:0;top:0;
    width:100%;
    display: block;
    height: 30px;
    background-color: skyblue;
}
.wrap {
    width:100%;
    height: 100%;
    display: table;
    border-collapse:collapse;
}
.row {
    display: table-row;
}
.side {
    width: 80px;
    background-color: #bbb;
    background: linear-gradient(#eee, #bbb);
    border-right:1px solid #ccc;
    display: table-cell;
    vertical-align:top;
}
.cnt {
    display: table-cell;
    vertical-align:top;
    background-color: #D1F007;
}
````


## position-top-bottom

````html
<div class="b-root">
    <div class="b-header">
        header
    </div>
    <div class="b-side">
        side
    </div>
    <div class="b-cnt">
        <div style="height:99px;border-left:1px dotted blue;"></div>
        cnt
        <div style="height:99px;border-left:1px dotted blue;"></div>
        <div style="height:99px;border-left:1px dotted blue;"></div>
        cnt
        <div style="height:99px;border-left:1px dotted blue;"></div>
        <div style="height:99px;border-left:1px dotted blue;"></div>
        cnt
        <div style="height:99px;border-left:1px dotted blue;"></div>
    </div>
</div>
````

````css
.b-root {
    height: 400px;
    overflow: auto;
    position: relative;
}
.b-header {
    height: 30px;
    background-color: skyblue;
}
.b-side {
    width:200px;
    position: absolute;
    left:0;top:30px;bottom:0;
    background-color: #bbb;
    background: linear-gradient(#eee, #bbb);
    border-right:1px solid #ccc;
}
.b-cnt {
    position: absolute;
    left:200px;top:30px;bottom:0;right: 0;
    background-color: #D1F007;
    overflow: auto;
}
````
