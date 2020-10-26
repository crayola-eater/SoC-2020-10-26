/* Task 1.1 - Shelf Stacking 

You have been stacking shelves your whole life. Nobody knows shelves better than you. Each of the items in a shelf is always the 
same. Each shelf is either the bottom shelf, the middle shelf or the top shelf. Shelves are your life, and you decide you want to stack 
cyber shelves at home.

Declare a new Class, 'Shelf'. In its constructor function, the Class 'Shelf' should take in two arguments: the item
the shelf will contain (string) and the position of the shelf - bottom, middle or top (string). A 'Shelf' will be created with two
properties: the item and the position.

*/

class Shelf {
  constructor(item, position) {
    this.item = this.stackShelf(item);
    this.position = position;
  }

  stackShelf(item) {
    return Array.from({ length: 6 }).map(() => item);
  }
}

/* Task 1.2

Declare a new variable, 'teaShelf', as an instance of the 'Shelf' class. The teaShelf's item property should be 'tea' and its
position should be 'middle'. 

*/
const teaShelf = new Shelf("tea", "middle");

/* Task 1.3

Every shelf can actually hold six items. You decide to refactor the 'Shelf' class to reflect this. Write a method, 'stackShelf',
on the 'Shelf' class. The 'stackShelf' method should take in an 'item' (string) as its only argument. It should return an array
containing six of these items. 

Next, change the item property on the 'Shelf' class. It should be the value returned by calling the 'stackShelf' method with the 'item'
taken in in the class's constructor function.

*/
