
class Person {
  
  constructor(name, age) {
      this.name = name; 
      this.age = age;   
  }


  introduce() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Example usage
const person1 = new Person("Sneha", 21); 
person1.introduce(); 
const person2 = new Person("Haryy", 30); 
person2.introduce();