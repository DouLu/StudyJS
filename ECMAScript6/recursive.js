/**
 *author:doulu
 *create time:2018-01-18
 *description:一个函数用自身来定义称为递归
 * 1、基准情形：必须总要有某些基准的情形，它们不用递归就能求解。
 * 2、不断推进：对那些要递归求解的情形，递归调用必须总能够朝着一个基准情形推进。
 */
//1到N求和
function sum(n) {
    if(n===1){
        return 1;
    }
    return sum(n-1)+n;
}
console.log(sum(100));
//求 1,3,5,7,9,...第n项的结果和前n项和,序号从0开始
/**
 * x = 2*n+1;
 * f(0) = 1;
 * f(1) = 4;
 * f(n) = f(n-1) + (2*n+1); n>=1;
 */
class oddRec{
    nRes(n){
        return 2*n+1;
    }
    oddFormula(n){
        return (n+1)*(n+1);
    }
    oddSum(n){
        let _sum = (n) =>{
            if(n===0){
                return 1;
            }else if(n===1){
                return 4;
            }
            return _sum(n-1)+(2*n+1);
        };
        return _sum(n);
    }
}
let odd = new oddRec();
console.log(odd.nRes(50),odd.oddSum(10),odd.oddFormula(10));
//求 2,4,6,8,10... 第n项与前n项之和，序号从0开始
/**
 * x = 2*(n+1)
 * f(0) = 2;
 * f(n) = f(n-1) + 2*(n+1); n>=0;
 */
class evenRec{
    nRes(n){
        return 2*(n+1);
    }
    evenFormula(n){
        return (n+1)*(n+2);
    }
    evenSum(n){
        let _sum = (n) =>{
            if(n===0){
                return 2;
            }
            return _sum(n-1)+2*(n+1);
        };
        return _sum(n);
    }
}
let even = new evenRec();
console.log(even.nRes(50),even.evenSum(10),even.evenFormula(10));
//数列 1,1,2,4,7,11,16...求第 n 项,求前n项和，序号从0开始
/**
 * Xn = X(n-1) + (n-1); n>=1;
 * f(0) = 1;
 * f(n) = f(n-1) + [X(n-1) + (n-1)]; n>=1;
 */
function Xn(n) {
    if( n===0){
        return 1;
    }else if( n===1){
        return 1;
    }
    return Xn(n-1) + (n-1);
}
function Fn(n) {
    if(n===0){
        return 1;
    }else if( n===1){
        return 2;
    }
    return Fn(n-1) + Xn(n);
}
console.log(Xn(6),Fn(6),Xn(0),Fn(0));
/**
 * Fibonacci数列(斐波那契数列)1,1,2,3,5,8,13,21,34,55,89...求第 n 项
 * X0 = 1;
 * X1 = 1;
 * X2 = 2;
 * Xn = X(n-1) + X(n-2) ; n>=2;
 * fn = f(n-1) + Xn; n>=2;
 */
const fibonacci = function (n) {
    let fib = (n) =>{
        if( n===1){
            return 0;
        }else if( n===2){
            return 1;
        }
        return fib(n-1)+fib(n-2);
    };
    return fib(n);
};
console.log(fibonacci(1),fibonacci(2),fibonacci(10),fibonacci(40));

const fibonacci1 = function (n) {
    let i, a, b, c;
    a = 0;
    b = 1;
    for (i = 0; i < n - 1; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return a;
};
console.log(fibonacci1(1),fibonacci1(2),fibonacci1(10),fibonacci1(40));
const fibonacci2 = (n) => /* TODO */
{
    let a = 1,b=1,c;
    for(let i=1;i<n;i++){
        c = a + b;
        a = b;
        b = c;
    }
    return a;
};
console.log(fibonacci2(5));