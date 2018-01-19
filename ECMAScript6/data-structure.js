/**
 *author:doulu
 *create time:2018-01-19
 *description:数据结构
 * list列表、栈stack、队列queue
 */
function List() {
    // 初始化数据
    this.data = [];
    // 添加
    this.add = function (item){};
    // 删除
    this.remove = function (id){};
    // 查找
    this.find = function (id){};
    // 清空
    this.clear = function () {};
    // 获取列表数据
    this.getData = function (){};

}
let ins1 = new List();
//后入先出，任何不在栈顶的元素都无法访问
function Stack() {
    this.dataStore = [];
    this.top = 0; //栈顶
    this.push = push; // 入栈
    this.pop = pop; // 出栈并删除
    this.peek = peek; // 出栈单不删除
    this.clear = clear;
    this.getLength = getLength;
}
function push(el) {
    this.dataStore[this.top++] = el;
}
function pop() {
    return this.dataStore[--this.top];
}
function peek() {
    return this.dataStore[this.top-1];
}
function clear() {
    this.top = 0;
}
function getLength() {
    return this.top;
}
let ins2 = new Stack();
ins2.push('a');
ins2.push('b');
ins2.push('c');
// console.log(ins);
//数制转换
function mulBase(num, base) {
    let s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    let converted = "";
    while (s.getLength() > 0) {
        converted += s.pop();
    }
    return converted;
}
console.log(mulBase(25,2));// 11001
//回文判断
function isPalindrome(word) {
    let stack = new Stack(),
        i = 0,
        l = word.length;
    for (; i < l; i++) {
        stack.push(word.charAt(i))
    }
    let rword = "";
    while (stack.getLength() > 0) {
        rword += stack.pop();
    }
    return rword === word;
}
console.log(isPalindrome("rar")) ;//true
console.log(isPalindrome("test"));//false
//先进先出
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
function enqueue(element) {
    this.dataStore.push(element)
}
function dequeue() {
    this.dataStore.shift()
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length - 1];
}
function toString() {
    let str = '',
        i = 0,
        l = this.dataStore.length;
    for ( ; i < l; i++) {
        str += this.dataStore[i] + "\n";
    }
    return str;
}
function empty() {
    return this.dataStore.length === 0;
}
// 实例化
let q = new Queue();
q.enqueue('aadad');
