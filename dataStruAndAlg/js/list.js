// listSize pos length toString getElement insert append remove front end prev next currPos moveTo

function List() {
    this.listSize = 0;
    this.pos =0;
    this.dataStore = []
    // this.clear =clear;
    // this.find = find
    this.toString =toString
    // this.insert = insert
    this.append = append
    this.remove = remove
    // this.front = front
    // this.end = end;
    // this.prev = prev;
    // this.next = next;
    this.length = length;
    // this.currPos = currPos;
    // this.moveTo = moveTo;
    // this.getElement = getElement;
    // this.length = length;
    // this.contains = contains;
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
    return this.dataStore
}

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
console.log(names.toString());

