var Book = function (id, bookname, price) {
  //私有属性
  var num = 1
  //私有方法
  function checkId() {}
  //特权方法
  this.getName = function () {}
  this.getPrice = function () {}
  this.setName = function () {}
  this.setPrice = function () {}
  //对象公有属性
  this.id = id
  //对象公有方法
  this.copy = function () {}
  //构造器
  this.setName = function (name) {}
  this.setPrice = function (price) {}
}
//类静态公有属性（对象无法访问）
Book.isChinese = true
//类静态公有方法（对象无法访问）
Book.resetTime = function () {
  console.log('new time')
}
Book.prototype = {
  //公有属性
  isJsBook: false,
  //公有方法
  display: function () {}
}

// 闭包
var Book = (function () {
  //静态私有变量
  var bookNum = 0
  //静态私有方法
  function checkBook(name) {}
  //创建类
  function _book(newId, newName, newprice) {
    //私有变量
    var name, price
    //私有方法
    function checkId(id) {}
    //特权属性
    this.getName = function () {}
    this.getPrice = function () {}
    this.setName = function () {}
    this.setPrice = function () {}
  }
  //构建原型
  _book.prototype = {
    //静态公有属性
    isJsBook: false,
    //静态公有方法
    display: function () {}
  }
  //返回类
  return _book
})()

//安全模式
var Book = function (title, time, type) {
  if (this instanceof Book) {
    this.title = title
    this.time = time
    this.type = type
  } else {
    return new Book(title, title, type)
  }
}