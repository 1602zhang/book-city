// mockjs封装根据接口不同返回不同的数据
var home = require('./shouye/data.json');
var r1 = require('./shouye/recommend1.json');
var r2 = require('./shouye/recommend2.json');
var r3 = require('./shouye/recommend3.json');
var search = require('./search/searchKey.json');
var searchlist = require('./search/search.json');
var detail = require('./detail/352876.json');
var read1 = require('./read/data1.json');
var read2 = require('./read/data2.json');
var read3 = require('./read/data3.json');
var read4 = require('./read/data4.json');
var menu = require('./read/menu.json');
var data = {
    "/book/index": home,
    "/book/list?page=1&limit=10": r1,
    "/book/list?page=2&limit=10": r2,
    "/book/list?page=3&limit=10": r3,
    "/book/search": search,
    "/book/searchlist": searchlist,
    "/book/detail?id=352876": detail,
    "/book/read?page=1": read1,
    "/book/read?page=2": read2,
    "/book/read?page=3": read3,
    "/book/read?page=4": read4,
    "/book/menu": menu
}
module.exports = function(url) {
    if (/\/searchlist/g.test(url)) {
        url = "/book/searchlist"
    }
    return data[url]
}