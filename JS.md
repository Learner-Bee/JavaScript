#JavaScript#
##JS简介##
JS是脚本语言  
JS是一种轻量级编程语言  
**问题1**  
>遇到问题：用Sublime编写的JS，用浏览器打开，汉字显示乱码？
>原因：编辑器的和浏览器的编码格式不一致导致。  
>解决办法：Sublimefile->save with incoding->UTF_8；    
    Chrome->设置->显示高级设置->自定义字体->编码选择UTF-8

**JS变量**  
*变量名称必须以字母开头  
*变量名称也可以以$和_开头（不推荐）  
*变量区分大小写  
*JS变量很多种，目前只关注数字和字符串  
*向变量分配文本值时，应以单引号或双信号；数字无需用引号，加引号表明是文本  
*声明变量用var  
*声明无值的变量，默认其值为undefined  
*重新声明变量，其值不变：var a="x";var a; 
##JS数据类型##
JS数据类型包括数字、数组、字符串、布尔（true/false）、null、undefined、对象  
var x                 //x是undefined (undefined表示变量不含有值)  
var x=null           //x是null类型，可以通过将变量值赋值为null来清空变量  
var x='lily'         //x是字符串类型  
var x=true(false)    //x是true(false)类型  
var x=['1','2','3']  //创建名为x的数组  
var x=1 (1.5/123e5)  //JS里只有一种数字类型  
var x={name:"lily",sex:"female",age:20}  //x为对象。对象以{}分隔，对象属性以name:value来定义，属性以逗号隔开  
**问题2**  
>难点：JS中==、!=、===、!==的用法和区别
>var num=1;  
>var str='1';  
>var test=1;  
>test==num   //true 数据类型、数值相同  
>test===num   //true 数据类型、数值严格相等  
>test!==num  //false   
>num==str //true 数据类型不同，但转换后的数值相同  
>num!=str//false 因为转换后的值相等，所以是false  
>num===str//false 数据类型不同，直接返回false  
>num！==str//true 数据类型不同，所以不是严格相等  
>==和!= 若类型不同，进行类型转换，再做值比较，最后返回值比较结果  
>===和！== 只有在相同类型下，再比较值  

**问题3**  
 >undefined 和null  
 >undefined类型只有一个值undefined。表示声明的变量没有初始化赋值时。此时变量值为undefined    
 >null类型只有一个值null。null表示尚未存在的对象  
 >var a   
 >alert(a==undefined)  //true 因为变量a没有赋值，此时a的值就是undefined  
 >alert(null==getElementById('notExist'))//true 当页面不存在id为'notExist'时，那就是不存在这个对象，所以找到值为null  
 >alert(typeof(undefined)) //undefined   
 >alert(tpyeof(null))//输出object   JS最初实现的错误，现在可以理解为null是一个不存在的对象的占位符
 >alert(null==undefined)//true  ECMAScript规定两个值相等  
 >alert(null===undefined)//false ===表示严格相等，但数据类型不同，所以false  
 >alert(typeof(null)==typeof(undefined))//false   类型不等，所以false  

