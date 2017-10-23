/*类式继承*/

//声明父类
function SuperClass() {
  this.superValue = true
}
//创建父类公有方法
superClass.prototype.getSuperValue = function () {
  return this.superValue
}
//创建子类
function SubClass() {
  this.subValue = false
}
//继承父类
SubClass.prototype = new SuperClass()
//创建子类公有方法
SubClass.prototype.getSubValue = function () {
  return this.subValue
}

/* 构造函数继承 */
function SuperClass(id) {
  this.books = ['javascript', 'html', 'css']
  this.id = id
}

SuperClass.prototype.showBooks = function () {
  console.log(this.book)
}
//声明子类
function SubClass(id) {
  //继承父类
  SuperClass.call(this, id)
}

/* 组合式继承 */
function SuperClass(name) {
  this.name = name
  this.books = ['html', 'css', 'javascript']
}

SuperClass.prototype.getName = function () {
  console.log(this.name)
}

function SubClass(name, time) {
  SuperClass.call(this, name)
  this.time = time
}

SubClass.prototype = new SuperClass()
SubClass.prototype.getTime = function () {
  console.log(this.time)
}

/* 原型式继承 */
function inheritObject(o) {
  function F() {}
  F.prototype = o
  return new F()
}

/* 寄生式继承 */
var book = {
  name: 'js Book',
  alikeBook: ['css', 'html']
}
function createBook(obj) {
  //使用原型继承方式创建新对象
  var o = inheritObject(obj)
  //拓展新对象
  o.getName = function () {
    console.log(name)
  }
  return o
}