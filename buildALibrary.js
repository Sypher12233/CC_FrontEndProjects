// Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

// Book

// Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

// Movie

// Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
// CD

// Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
// Getters: all properties have a getter
// Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

// Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

class Media {
  // We will add the properties that are gonna be same on all of our child classes
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  toggleCheckOutStatus() {
    // This will change our isCheckedOut property from true to false and vice versa
    if (this._isCheckedOut == true) {
      return (this._isCheckedOut = false);
    } else if (this._isCheckedOut == false) {
      return (this._isCheckedOut = true);
    }
  }

  addRating(rating) {
    return this._ratings.push(rating);
  }

  getAverageRating() {
    // This will sum up the values of the ratings array
    const sum = this._ratings.reduce((curr, prev) => curr + prev, 0);

    // This is another way to sum up the values of the ratings array
    // let sum = 0;
    // for (let i = 0; i < this._ratings.length; i++) {
    //     sum += this._ratings[i];
    //   }

    let avg = sum / this._ratings.length;
    return avg;
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }
}

const newBook = new Book("sypher", "Cypher", 20);
const Mighty = new Movie("Will Javier", "The Movie", 60);
const Faded = new CD("Faded", "Alan Walker", 1000);
// console.log(newBook.isCheckedOut)
// console.log(Mighty)
Faded.addRating(1);
Faded.addRating(2);
Faded.addRating(3);
Faded.addRating(4);
console.log(Faded.getAverageRating());
