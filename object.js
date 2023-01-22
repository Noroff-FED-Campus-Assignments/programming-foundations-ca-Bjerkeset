
let aUser = {
    name: "Alice", 
    age: 27,
    updateAge: function() {
        return ++user.age;
    },
    hasFriends: true,
    friends: ["bob", "Charlie"]
}


//Object Constructor 
function User(name, age, friends, hasFriends) {
    this.name = name; 
    this.age = age; 
    this.friends = friends;
    this.hasFriends = hasFriends;
}

let user01 = new User("Bendik", 27, ["Charlie", "bob"], true)
console.log(user01.friends)

