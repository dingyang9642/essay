// 测试数据
var testdata={'b':2,'a':2,'3':1,'6':5,'4':3};
/**
 * 一：对单个json数据进行排序如：{'b':2,'a':2,'3':1,'6':5,'4':3};
 * 当遇到相同的value值时，会对键进行比较。主要是数组中sort方法的比较函数编写
 * @param  {[type]} json_data [description]
 * @return {[type]}           [description]
 */
function sortJson_Sin(json_data) {
  var arr = [];
  for (var k in json_data){
      var tmpjson = {};
      tmpjson[k] = json_data[k];
      arr.push(tmpjson);
  }
  //然后此时对这个数组进行排序
  arr.sort(function(json1,json2) {
    var n1 = 0,
    n2 = 0;
    for(var k in json1) {
        n1 = parseInt(json1[k]);
    }
    for(var kk in json2) {
        n2 = parseInt(json2[kk]);
    }
    if((n1 - n2) == 0) {
      for(var mm in json1){
        n1 = mm;
      }
      for(var mmm in json2){
        n2 = mmm;
      }
      if(n1 > n2){
        return 1;
      }else {
        return -1;
      }
    }else{
      return n1-n2;
    }
  });
  return arr;
}
// 二：对多个json数据进行排序：类似单个json数据排序方法