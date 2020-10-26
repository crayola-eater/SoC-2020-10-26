# Recap Tasks for Week 5 - Object Oriented Programming

## Task 1.1 - Shelf Stacking

You have been stacking shelves your whole life. Nobody knows shelves better than you. Each of the items in a shelf is always the
same. Each shelf is either the bottom shelf, the middle shelf or the top shelf. Shelves are your life, and you decide you want to stack
cyber shelves at home.

Declare a new Class, `Shelf`. In its constructor function, the Class `Shelf` should take in two arguments: the item
the shelf will contain (string) and the position of the shelf - bottom, middle or top (string). A `Shelf` will be created with two
properties: the item and the position.

## Task 1.2

Declare a new variable, `teaShelf`, as an instance of the `Shelf` class. The `teaShelf`'s item property should be `'tea'` and its
position should be `'middle'`.

## Task 1.3

Every shelf can actually hold six items. You decide to refactor the `Shelf` class to reflect this. Write a method, `stackShelf()`,
on the `Shelf` class. The `stackShelf` method should take in an `item` (string) as its only argument. It should return an array
containing six of these items.

Next, change the item property on the `Shelf` class. It should be the value returned by calling the `stackShelf()` method with the `item` taken in in the class's constructor function.

## Task 2.1 - The Garden Center

Consider the `Plant` class below:

```
class Plant {
  constructor(name, position, soil, growth, floweringTime, hardiness) {
    this.name = name;
    this.position = position;
    this.soil = soil;
    this.growth = growth;
    this.floweringTime = floweringTime;
    this.hardiness = hardiness;
  }

  getSummary() {
    const summary = `The ${name} thrives in ${position}. Be sure to plant it in ${soil}. It can grow up to ${growth}, and flowers in ${floweringTime}. It can survive in tempertures as low as ${hardiness}`;

    return summary;
  }
}

```

The `Plant` class has been made to organise the growing information for all of the different plants in your garden center. The system
is working well, but you realise there is some further information to capture for plants that are kept indoors.

Declare a new Class, `HousePlant`, which extends the class `Plant`. The `HousePlant`'s constructor function should take in all of the
same arguments as the `Plant`'s constructor function, with the additional arguments of `whenToWater` (string) and `whenToRepot` (string).
Use the `super` keyword to initialise the class with the same properties as its parent class. Then add the two new properties of
`whenToWater` and `whenToRepot`.

## Task 2.1

The `HousePlant` now needs a modified version of the `getSummary()` method. Re-declare the `getSummary()` method in the `HousePlant` class. Using the `super` keyword to make use of the parent method, `getSummary()` should return a string which also uses the properties
which are unique to the `HousePlant` class.

## Task 3.1 - Your Canvas

Using the canvas element in the index.html, draw a picture of your choice. It can be as simple or as complex as you like!

## Task 4.1 - The Juggler

Read through the classes contained within the task-4 folder. Link the JavaScript Class files in the index.html. Then, complete
the classes so that when the `juggle()` method is called on an instance of the `Juggler` class, the juggling balls move between the
left hand, the air, and the the right hand in a basic juggling pattern. For example, the pattern should be:

- The juggler starts by throwing a juggling ball out of their left hand into the air.

The the pattern continues as follows:

- Then they throw the juggling ball from their right hand into the air.
- Then they catch the ball from the air in their right hand.
- Then they throw the juggling ball from their left hand into the air.
- Then they catch the ball from the air in their left hand.

The pattern should continue for 10 seconds before stopping.

Change as much of the code as you need to to get the program working.

## Task 4.2 - BONUS

Create some graphics for your juggler in the browser!
