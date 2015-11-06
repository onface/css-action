## 纯CSS箭头
````html
<span class="arrows"></span>
````
````css
.arrows {
    display:inline-block;width:0;height:0;overflow:hidden;line-height:0;font-size:0;
    vertical-align:middle;
    border-bottom:7px solid skyblue;
    border-top:0 none;
    border-left:7px solid transparent;
    border-right:7px solid transparent;
    _color:#FF3FFF;
    _filter:chroma(color=#FF3FFF);
}
````

[边框border制作三角的小工具 ](http://linxz.github.io/tianyizone/triangle.html)

---
### 使用建议

border 制作的三角形有以下优点：

- 节省一个图片资源
- 控制 `border-bottom-color` 值可改变箭头颜色

建议当设计稿中的箭头是规则的三角形时使用 border 制作，不规则的箭头也可以用 [iconfont](http://iconfont.cn/help/iconuse.html)