/**
 * Created by asus on 2017/1/18.
 */

//函数调用中的this
var numbers1 = {
    numberA: 5,
    numberB: 10,
    sum: function () {
        console.log(this === numbers1); // => true
        function calculate() {
            // this is window or undefined in strict mode
            console.log(this === numbers1); // => false
            return this.numberA + this.numberB;
        }

        return calculate();//函数调用this为全局对象
    }
};
numbers1.sum(); // => NaN or throws TypeError in strict mode
console.log(numbers1.sum());
var numbers2 = {
    numberA: 5,
    numberB: 10,
    sum: function () {
        console.log(this === numbers2); // => true
        function calculate() {

            console.log(this === numbers2); // => true
            return this.numberA + this.numberB;
        }

        //使用call(this)修改calculate函数的上下文,将calculate函数上下文变为numbers2
        return calculate.call(this);
    }
};
numbers2.sum(); // => 15
console.log(numbers2.sum());


//方法是作为对象的属性存储的函数：
//方法调用
var myOBJ = {
    myFun: function () {
        return 'hello world';
    }
};
var mes = myOBJ.myFun();
console.log(mes);

//方法调用中的this
//this 是拥有这个方法的对象
var calc = {
    num: 0,
    increment: function () {
        console.log(this === calc); // => true
        this.num += 1;
        return this.num;
    }
};
// method invocation. this is calc
calc.increment(); // => 1
calc.increment(); // => 2