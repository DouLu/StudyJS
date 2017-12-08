/**
 *author:doulu
 *create time:2017-12-08
 *description:
 */
var tmp = 'hello world';

(function () {
    console.log(tmp);
    if(true){
        var tmp = 'hello';
    }
})();//undefined

(function () {
    console.log(tmp);
    if(true){
        let tmp = 'world';
    }
})();//hello world

{
    console.log(tmp);
    if(true){
        let tmp = 'world';
    }
}//hello world

function f() {
    return 10;
}
//do表达式 提案中
/*let x = do {
    let y = f();
    y*y+1;
};
console.log(x);*/
