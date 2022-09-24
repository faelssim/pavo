---
title: "纯CSS实现文本的展开/收起"
date: "2022-09-15"
---

<font size="2" color="red">先上效果图：</font>

![img1](https://s-bj-4351-lyra.oss.dogecdn.com/127.0.0.1_5500_cat.html.png)

![img2](https://s-bj-4351-lyra.oss.dogecdn.com/127.0.0.1_5500_cat.html%20(1).png)

```
<style>
    :root{
        font-size: 14px;
    }
    .wrapper{
        width: 500px;
        padding: 15px;
        overflow: hidden;
        box-shadow: 0 0 10px 10px #d3d3d3;
        border-radius: 10px;
        margin: 50px auto;
        font-size: 14px;
        display: flex;
    }
    .i_fold{
        display: none;
    }
    .content{
        overflow: hidden;
        position: relative;
        line-height: 1.5em;
        max-height: 4.5em;
        text-overflow: ellipsis;
        text-align: justify;
        font-size: 14px;
    }
    .content::before{
        content: '';
        height: calc(100% - 20px);
        float: right;
    }
    .l_btn{
        position: relative;
        clear: both;
        float: right;
        font-size: 14px;
        padding: 0 5px;
        /* height: 20px; */
        line-height: 20px;
        border-radius: 4px;
        background: dodgerblue;
        color: #fff;
        margin-left: 15px;
        cursor: pointer;
    }
    .l_btn::before{
        content: '...';
        position: absolute;
        left: -13px;
        color: #000;
    }
    .l_btn::after{
        content: '展开';
        font-size: 12px;
    }
    .i_fold:checked + .content{
        max-height: none;
    }
    .i_fold:checked + .content .l_btn::after{
        content: '收起';
    }
    .i_fold:checked + .content .l_btn::before{
        visibility: hidden;
    }
</style>

<div class="wrapper">
    <input class="i_fold" type="checkbox" id="isFold" />
    <div class="content">
        <label class="l_btn" for="isFold"></label>
        山海关区，隶属于河北省秦皇岛市，位于河北省东北部，是连接东北与华北的咽喉要道，素有“两京锁钥无双地，万里长城第一关”之称。山海关古称榆关，也作渝关，又名临闾关，明朝洪武十四年（1381年），中山王徐达奉命在此地创建山海关，因其北倚燕山，南连渤海，故得名山海关。区域面积193.5平方千米。根据第七次人口普查数据，截至2020年11月1日零时，山海关区常住人口为164989人。 [11] 
        山海关区南襟渤海，北依燕山，交通便利，海陆空立体交通条件十分便捷，京哈高速公路、京哈铁路均在此交汇，京哈高速公路出口距城区仅5公里。是举世闻名的旅游胜地，名胜古迹荟萃、风光绮丽，是国家级历史文化名城。境内历史文化遗存众多，山、海、关、城、楼、湖、洞、庙种类齐全。作为世界文化遗产地的山海关已获国家级森林公园、国家级地质公园、中国长城文化之乡、中国孟姜女文化之乡、中国书法之乡等称号。截至2013年，山海关区辖3个镇、4个街道，距离沈阳市363公里。
        2020年，山海关区地区生产总值预计增长3.2%左右；一般公共预算收入增长7.7%；限额以上社会消费品零售总额完成1.48亿元，增速74.6%，全市排名第一；规上工业增加值增长10.4%，全市排名第二；固定资产投资增长7.9%，全市排名第二；城乡居民人均可支配收入预计分别增长7.5%和8%。 
    </div>
</div>
```

<font size="2" color="red">几个说明：</font>

1. wrapper容器要**flex**，目的是为了其<kbd>.content</kbd>的**before**伪元素的<font color="red">height</font>设置可以为<font color="red">百分比</font>的形式
---
2. <kbd>.l_btn</kbd>元素需要添加<font color="red">clear: both</font>，以清除**before**伪元素带来的浮动影响
