````css
.arrows {
    padding:5px;
    clip: rect(0px, 100px, 10px, 0px);
    &:after {
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
}
````


IE8: http://www.useragentman.com/IETransformsTranslator/
