/* Task 2.1 - The Garden Center

Consider the 'Plant' class below:

*/

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
    const summary = `The ${this.name} thrives in ${this.position}. Be sure to plant it in ${this.soil}. It can grow up to ${this.growth}, and flowers in ${this.floweringTime}. It can survive in tempertures as low as ${this.hardiness}`;
    return summary;
  }
}

/* 

The 'Plant' class has been made to organise the growing information for all of the different plants in your garden center. The system
is working well, but you realise there is some further information to capture for plants that are kept indoors.

Declare a new Class, 'HousePlant', which extends the class 'Plant'. The HousePlant's constructor function should take in all of the
same arguments as the Plant's constructor function, with the additional arguments of 'whenToWater' (string) and 'whenToRepot' (string).
Use the 'super' keyword to initialise the class with the same properties as its parent class. Then add the two new properties of
'whenToWater' and 'whenToRepot'.

*/

class HousePlant extends Plant {
  constructor(
    name,
    position,
    soil,
    growth,
    floweringTime,
    hardiness,
    whenToWater,
    whenToRepot
  ) {
    super(name, position, soil, growth, floweringTime, hardiness);
    this.whenToWater = whenToWater;
    this.whenToRepot = whenToRepot;
  }

  getSummary() {
    const summary = super.getSummary();
    return `${summary}. It should be watered: ${this.whenToWater}. It should be repotted: ${this.whenToRepot}`;
  }
}

/* Task 2.1

The 'HousePlant' now needs a modified version of the 'getSummary' method. Re-declare the 'getSummary' method in the 'HousePlant' class. 
Using the 'super' keyword to make use of the parent method, 'getSummary' should return a string which also uses the properties 
which are unique to the 'HousePlant' class.

*/
