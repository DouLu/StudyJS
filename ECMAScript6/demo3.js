/**
 *author:doulu
 *create time:2018-02-22
 *description: ES6 let 声明
 */
(function () {
    var a = [];
    for(var i = 0;i<10;i++){
        a[i] = function () {
            console.log(i);
        };
        a[i]();
    }
    a[1]();
})();