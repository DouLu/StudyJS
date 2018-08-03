/**
 *author:doulu
 *create time:2018-05-16
 *description: js 实现一个函数对javascript中json 对象进行克隆
 */
/*{
    //只能针对纯数据JSON克隆
    let obj ={
        'name':'name',
        'age':6,
        'class':3
    };
    let objCloned = JSON.parse(JSON.stringify(obj));
    console.log(objCloned);
}

{
    let obj = {name:'rey',info:{location:'beijing',age:'28'},hello:function(){console.log('hello world!');}};
    let objCloned = JSON.parse(JSON.stringify(obj));
    console.log(obj);
    console.log(JSON.stringify(obj));
    console.log(objCloned);
    console.log(JSON.stringify(objCloned));
    objCloned.name = 'luopan';
    console.log(obj);
    console.log(JSON.stringify(obj));
    console.log(objCloned);
    console.log(JSON.stringify(objCloned));
    obj.hello();
}
{
    //降维数组
    let arr=[[1,2],[3,4]];
    function Jw(obj){
        return Array.prototype.concat.apply([],obj);
    }
    console.log(Jw(arr));
}
{
    let data={a:1,b:2,c:3};
    function toArr(obj){
        let arr1=[];
        for(let i in obj){
            arr1.push(obj[i]);
        }
        return arr1;
    }
    console.log(toArr(data));
    //JS基本数据类型
    console.log('11'*2,'a8'*2);
}*/
var num = 10;
var obj = {
    num:8,
    inner: {
        num: 6,
        print: function () {
            console.log(this.num);
        }
    }
};
num = 888;
obj.inner.print(); // 6
var fn = obj.inner.print;
fn(); //888
(obj.inner.print)(); //6
(obj.inner.print = obj.inner.print)(); //888

var a = {};
var b = {key: 'b'};
var c = {key: 'c'};
var d = [3,5,6];
a[b] = 123;
a[c] = 345;
a[d] = 333;
console.log(a[b]);  // 345
console.log(a[c]);  // 345
console.log(a[d]);  // 333


