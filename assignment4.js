/*
        Brendan Ready
        Assignment 4
        FEWD 2
*/


// Practice with JavaScript OOP Concepts

// STEP 1
/*
var ANIMAL = ANIMAL || {};

ANIMAL.Cat = function() {};

ANIMAL.Dog = function() {};
*/

// STEP 2
/*
var Cat = {};

var Dog = function() {};
*/

// STEP 3
/*
var fido = new Dog();
*/

// STEP 4
/*
var Animal = function() {
    console.log('The Animal has been created');
};

var lion = new Animal();
*/

// STEP 5
/*
var Animal = function(type) {
    this._type = type;
    console.log(this._type);
};

var myAnimal = new Animal('Lion');
*/

// STEP 6
/*
var Animal = function(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
}

var myAnimal = new Animal('dog', 'Samoyed', 'white', '22 inches', '30 inches');
*/

// STEP 7
/*
var Animal = function(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
}

var myAnimal = new Animal();

for (var property in myAnimal) {
    console.log(property);
};
*/

// STEP 8
/*
var Animal = function(type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
    this.speak = function() {
        if (this._type == 'dog') {
            return 'The ' + this._color + ' ' + this._type + ' is barking!';
        } else if (this._type == 'cat') {
            return 'The ' + this._color + ' ' + this._type + ' is meowing!';
        }
    }
}

var myDog = new Animal('dog', 'Samoyed', 'white', '22 inches', '30 inches');

console.log(myDog.speak());

var myCat = new Animal('cat', 'Siamese', 'chocolate', '23 inches', '24 inches');

console.log(myCat.speak());
*/

// STEP 9
/*
var Animal = function(type, breed, color, height, length) {
    var _type = type;
    var _breed = breed;
    var _color = color;
    var _height = height;
    var _length = length;
    var checkType = function() {
        if (_type == 'dog') {
            return 'The ' + _type + ' has made a noise!';
        }
        else if (_type == 'cat') {
            return 'The ' + _type + ' has made a noise!';
        }
    }
    this.speak = function() {
        return checkType();
    }
}

var myDog = new Animal('dog', 'Samoyed', 'white', '22 inches', '30 inches');
console.log(myDog.speak());

var myCat = new Animal('cat', 'Siamese', 'chocolate', '23 inches', '24 inches');
console.log(myCat.speak());
*/

// STEP 10
/*
String.prototype.findWords = function(paragraph, word) {
    var allWords = paragraph.match(/\S(\w*)/g);
    var num = 0;
    for (var index in allWords) {
        if (allWords[index].toLowerCase() === word.toLowerCase()) {
            num += 1;
        }
    }
    alert('The number of times the word ' + '"' + word + '"' + ' is found in the following paragraph is ' + num + ':\n\n' + paragraph);
}

var myParagraph = new String('The practice of writing paragraphs is essential to good writing. Paragraphs help to break up large chunks of text and makes the content easier for readers to digest. They guide the reader through your argument by focusing on one main idea or goal.');

myParagraph.findWords(myParagraph, 'the');
*/


// The Recipe Card ––––––––––––––––––––––––––––––––––––––––––––––––––

/*
var Recipe = function(title, servings, ingredients) {
    this._title = title;
    this._servings = servings;
    this._ingredients = ingredients;
    this.displayRecipe = function() {
        console.log(this._title + '\nServes: ' + this._servings + '\nIngredients: ');
        
        for (var index in this._ingredients) {
            console.log('- ' + this._ingredients[index]);
        }
    }
}

var ingredients = ['3 Avocados', '1 Lime', '1 Teaspoon Salt', '1/2 Cup Onion', '3 Tablespoons Cilantro', '2 Diced Tomatoes', '1 Teaspoon Garlic', '1 Pinch Ground Pepper'];

var favRecipe = new Recipe('Guacamole', '4', ingredients);

favRecipe.displayRecipe();
*/


// The Reading List ––––––––––––––––––––––––––––––––––––––––––––––––––

/*
var Book = function(title, author, alreadyRead) {
    this._title = title;
    this._author = author;
    this._alreadyRead = alreadyRead;
}

var book1 = new Book('The Hobbit', 'J.R.R. Tolkien', true);
var book2 = new Book('A Farewell to Arms', 'Ernest Hemingway', true);
var book3 = new Book('A Dance with Dragons', 'George R. R. Martin', false);
var book4 = new Book('The Art of War', 'Sun Tzu', false);
var book5 = new Book('No Country for Old Men', 'Cormac McCarthy', true);

var myBooks = [book1, book2, book3, book4, book5];

for (var index in myBooks) {
    if (myBooks[index]._alreadyRead === true) {
        console.log('You already read ' + myBooks[index]._title + ' by ' + myBooks[index]._author);
    } else {
        console.log('You still need to read ' + myBooks[index]._title + ' by ' + myBooks[index]._author);
    }
}
*/