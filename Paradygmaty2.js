//zadanie 2

class Book{
    constructor() {
        this.users=[]
    }
    addUser(name, age, phone){
        this.users.push({
            name: name,
            age: age,
            phone //phone:phone
        })
    }
    showUsers(){
        for(let user of this.users){
            console.log(user)
        }
    }
    findByName(name){
        let user = this.users.find(
            (user)=>user.name===name
        )
        if(!user) return false
        console.log(user)
    }
    findByPhone(phone){
        let user = this.users.find(
            (user)=>user.phone===phone
        )
        if(!user) return false
        console.log(user)
    }
    getCount(){
        return this.users.length
    }
}
let book = new Book
book.addUser("Test", 20, "213788420")
book.showUsers()
book.findByName("Test")
book.findByPhone("213788420")
console.log(book.getCount())


console.log("\n")
//

let animal = {
    eat: ()=>console.log("eat"),
    drink: ()=>console.log("drink")
}

let dog = {
    __proto__:animal,
    drink: () => console.log("drink from dog")
}

dog.eat()
animal.drink()
dog.drink()
//
let x=10
setTimeout(()=>(x=12), 1000)
x=14
setTimeout(()=>(x=16), 0)

console.log("\n",x)
//
function f(){
    let x=5

    return function (){
        console.log("\n",x)
    }
}

f()()

