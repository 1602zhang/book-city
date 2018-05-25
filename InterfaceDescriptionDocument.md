时- 接口说明文档

>首页书城书架请求

1 接口：/book/index

2 数据：

```
{
    "items":[{
        "ad_name":"内容区域名称",
        "data":[{
            "data":[{
                "ad_pic_url":"banner图片地址",
                "title":"图片下文字",
                "cover":"其他图片地址",
                "fiction_id":"详情页id",
                "authors":"作者",
                "summary":"总结",
                "tags":"标签"
            }]
        }]
    }]
}

```

>首页上拉加载请求

1 接口：/book/list

2 数据：

```
{   
    "items":[{
       "cover":"图片地址",
       "fiction_id":"详情页id",
       "authors":"作者",
       "summary":"总结",
       "tags":"标签"
    }]
}

```

3 参数：

```
{
    page:"页码",
    limit:"条数"
}

```

>搜索页热门标签请求

1 接口：/book/search

2 数据：

```
{
    "ads":[{
        "ad_name":"标签名称"
    }]
}

```

>模糊搜索数据请求

1 接口：/book/searchlist

2 数据：

```
{
    "ads":[{
        "cover":"图片地址",
        "fiction_id":"详情页id",
        "title":"图片下文字",
        "intro":"描述"
    }]
}

```

>详情页数据

1 接口：/book/detail

2 数据：

```
{
    "item":{
        "title":"图片下文字",
        "authors":"作者",
        "comment_count":"评价数",
        "price":"价格",
        "score_count":"字数",
        "content":"内容",
        "tags":"标签"
    },
    "author_books":[{
        "cover":"图片地址",
        "title":"图片下文字"
    }]
}

```

3 参数

```
{
    id: "对应的id"
}

```

>阅读页请求(跨域请求)

1 接口：/book/read

2 数据 

```
{
    "jsonp:"地址"
}

```

3 参数 

```
{
    page:"页码"
}

```

>阅读目录请求

1 接口：/book/menu

2 数据

```
{
    "items":{
        "toc":[{
            "title":"章节名称",
            "chapter_id":"第几章的id"
        }]
    }
}

```

>登录请求

1 接口：/loginPage


