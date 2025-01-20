
class Book {
  
  constructor(title, author, year) {
      this.title = title;   
      this.author = author; 
      this.year = year;    
  }

 
  getInfo() {
      return `Title: "${this.title}", Author: ${this.author}, Year: ${this.year}`;
  }
}


const myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(myBook.getInfo());


const anotherBook = new Book("1984", "George Orwell", 1949);
console.log(anotherBook.getInfo());

