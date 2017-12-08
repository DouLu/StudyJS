(function testLet() {
    b = 1;
    {
        let count = 0;
        var a = 0;
        console.log(count,a);
    }
    console.log(a);
    // console.log(count)报错
}());
// console.log(a);报错
console.log(b);

/*var let*/
(function () {
    var a = [];
    for(var i=0;i<10;i++){
        a[i] = function () {
            console.log(i);
        }
    }
    var b = [];
    for(let i=0;i<10;i++){
        b[i] = function () {
            console.log(i);
        }
    }
    a[6]();//10
    a[5]();//10
    b[6]();//6
}());

/* for 循环的作用域 循环变量部分是父级作用域，循环体内部是单独的子作用域*/
for(let i=0;i<3;i++){
    let i=10;
    console.log(i);//10,10,10
}

/*暂时性死区*/
var tmp = 123;
if(true){
    // console.log(tmp);//报错
    let tmp = 'abc';
}

(function test(x=2,y=x) {
    return [x,y];
})();

(function test(x=y,y=2) {
    return [x,y];
})();