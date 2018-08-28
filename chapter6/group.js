/** GROUP
 * Write a class called Group (since Set is already taken). 
 * Like Set, it has add, delete, and has methods. Its constructor 
 * creates an empty group, add adds a value to the group (but only 
 * if it isn’t already a member), delete removes its argument 
 * from the group (if it was a member), and has returns a Boolean 
 * value indicating whether its argument is a member of the group.
 * Use the === operator, or something equivalent such as indexOf, 
 * to determine whether two values are the same.
 * Give the class a static from method that takes an iterable 
 * object as argument and creates a group that contains all the 
 * values produced by iterating over it.
 */


class Group {

    constructor(){
        //An empty group
        this.members = [];
    }

    //Add method
    add(value){
        if (!this.has(value)){
            this.members.push(value);
        }
    }

    //Delete method
    delete(value){
        this.members = this.members.filter( i => i !== value);

    }

    //Has method
    has(values){
        return this.members.includes(values);
    }

    static fromGroup (collection){
        let group = new Group;
        for (let value of collection){
            group.add(value);
        }
        return group;
    }
}

let group = Group.fromGroup([]);

group.add(10);
console.log(group);
//Group { members: [ 10 ] }
console.log(group.has(10));
//true
group.add(40);
console.log(group);
//Group { members: [ 10, 40 ] }
console.log(group.has(30));
//false
group.delete(10);

console.log(group);


