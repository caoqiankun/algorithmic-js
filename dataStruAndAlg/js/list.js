/*
  对象属性值：
  listSize 列表的元素个数
  pos 列表的当前位置
  length 返回列表中元素的个数
  clear 清空列表中的所有元素
  toString 返回列表的字符串形式
  getElement 返回当前位置的元素
  insert 在现有元素后插入新元素
  append 在列表的末尾添加新元素
  remove 从列表中删除元素
  front 将列表的当前位置设移动到第一个元素
  end 将列表的当前位置移动到最后一个元素
  prev 将当前位置后移一位
  next 将当前位置前移一位
  currPos 返回列表的当前位置
  moveTo 将当前位置移动到指定位置
  */

/*列表对象*/
function List() {
    this.listSize = 0;
    this.pos =0;
    this.dataStore = []
    this.clear =clear;
    this.find = find
    this.toString =toString
    this.insert = insert
    this.append = append
    this.remove = remove
    this.front = front
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element //添加一个元素+1
}

function find(element) {
    for(var i =0; i<this.dataStore.length; ++i) {
        if(this.dataStore[i] ===element) {
            return i
        }
    }
    return -1

}

function remove(element) {
    var fountAt = this.find(element) //找到元素位置
    if(fountAt>-1) {//如果元素存在
        this.dataStore.splice(fountAt,1) //删除元素
        --this.listSize
        return true
    }
    return false
}

function length() {
    return this.listSize
}

function toString() {
    return this.dataStore.join(" ")
}

function insert(element,after) {
    var insertPos = this.find(after)
    if(insertPos>-1) {
        this.dataStore.splice(insertPos+1, 0,element)
        ++this.listSize
        return true
    }
    return false
}

function clear() {
    delete this.dataStore
    this.dataStore = []
    this.listSize = this.pos = 0
}

function contains(element) {
    for(var i=0;i<this.dataStore.length;++i){
        if(this.dataStore[i] == element){
            return true
        }
    }
    return false
}

function front() {
    this.pos =0
}
function end() {
    this.pos = this.listSize-1
}

function prev() {
    if(this.pos>0){
        --this.pos;
    }
}

function next() {
    if(this.pos<this.listSize-1) {
        ++this.pos
    }
}

function currPos() {
    return this.pos
}

function moveTo(position) {
    this.pos = position
}

function getElement() {
    return this.dataStore[this.pos]
}


var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front(); //指向第一个元素
console.log(names.getElement());
names.next()
names.next()
// names.prev()
console.log(names.getElement())
console.log(names.currPos())
console.log(names.toString())