// var f = () => 5;
// var x = f()

// var f2 = function(num){
//     if(num%2===0){
//         return true
//     }else return false
// }

// var f3 = function(name,age,gender){
//     console.log('姓名:'+name+'年龄');
// }

// function sayHello(name,age,gender,address){
//     console.log("我是"+name+",今年我"+age+"岁了,"+"我是一个"+gender+"人，我住在"+address)
// }

// console.log(sayHello(1,2,3,4))

var obj = {
    name:"孙悟空",
    age:28,
    gender:"男",
    address:"花果山"
}
// function sayHello2(info){
//     console.log("我是"+info.name+",今年我"+info.age+"岁了,"+"我是一个"+info.gender+"人，我住在"+info.address)
// }
// sayHello2(obj)

// function fun(a){
//     a(obj)
// }
// fun(sayHello2)

function fun(){
    //在函数内部再声明一个函数
    function fun2(){
        alert("我是内部函数")
    }
    return fun2
}
// a=fun()
// console.log(a)
// a()

// (function(a,b){
//     console.log('a and b',a,b);
// })(1,2)

// obj = {
//     sayName:function(){console.log('就这样了吗')}
// }
// console.log(obj.sayName())

for (var a in obj){
    console.log("hello",a,obj[a])
}

console.log(d)
var d = 123

// for (var i = 0; i <10; i++) {  
//     setTimeout(function() {  // 同步注册回调函数到 异步的 宏任务队列。
//          console.log(i);        // 执行此代码时，同步代码for循环已经执行完成
//       }, 0);
// }
// 输出结果
//10   共10个 

function fun(){
    console.log(this.name)
}
var name = '全局的name属性'
fun()//打印的是window的name
var obj={
    name:'孙悟空',
    sayName:fun
}
obj.sayName()//打印的是孙悟空

function Person(){}
var per = Person()
var per2 = new Person()
console.log(per)
console.log(per2)