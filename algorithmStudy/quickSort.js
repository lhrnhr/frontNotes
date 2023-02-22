const _quickSort = array => {
    if(array.length <= 1) return array
    var pivotIndex = Math.floor(array.length / 2)
    var pivot = array.splice(pivotIndex, 1)[0]
    var left = []
    var right = []
    for (var i=0 ; i<array.length ; i++){
    if (array[i] < pivot) {
    left.push(array[i])
    } else {
    right.push(array[i])
    }
    }
    return _quickSort(left).concat([pivot], _quickSort(right))
    }

    console.log(_quickSort([0,-1,1,-2,2]))

    function Person(name,age,gender){
        this.name = name
        this.age = age
        this.gender = gender
        this.sayName = function(){
            // alert("Hello大家好，我是："+this.name)
        }
    }
    console.log(Person.prototype);
    var per = new Person("lhr",24,"男")
    per.sayName()
