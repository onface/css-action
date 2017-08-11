# arrow-shadow

````html
<div class="box">
    text
    <div class="arrows">
        <div class="arrows-wrap">
            <div class="arrows-icon"></div>
        </div>
    </div>
</div>

````

````css
.box {
    position: relative;
    width:120px;
    height:30px;
    line-height: 30px;
    border:1px solid #AAA;
    border-radius: 4px;
    box-shadow: 0px 0px 5px rgba(1,1,1,.3);
    text-align: center;
}
.arrows {
    position: absolute;
    left:50%;
    bottom:-11px;
}
.arrows-wrap {
    height: 11px;
    overflow: hidden;
    margin-left: -10px;
}
.arrows-icon {
    margin-top: -11px;
    padding:5px;
}
.arrows-icon:after {
    content: ' ';
    display: block;
    border:1px solid #AAA;
    width:10px;
    height:10px;
    background-color:white;
    overflow: hidden;
    transform: rotate(45deg);
    box-shadow: 0px 0px 5px rgba(1,1,1,.3);
}   
````


IE8: http://www.useragentman.com/IETransformsTranslator/
