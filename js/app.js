'use strict';

/* <li> <img id = "onePhoto" src="http://via.placeholder.com/300x300" alt=""> </li>
<li> <img id = "twoPhoto" src="http://via.placeholder.com/300x300" alt=""> </li>  
<li> <img id = "threePhoto" src="http://via.placeholder.com/300x300" alt=""> </li> */


// STEPS

// set up variables global? spec.to const. Object?

PhotoSelect.photoArray = [];
// get Element for list
PhotoSelect.listEl = document.getElementById('listBuild');


// set up constructor method for pictures
function PhotoSelect(name, path, altText) {
  this.name= name;
  this.path= path;
  this.altText= altText;
  PhotoSelect.photoArray.push(this);

  console.log(PhotoSelect.photoArray);
}

// get elements
PhotoSelect.imgOneElement = document.getElementById('onePhoto');
PhotoSelect.imgTwoElement = document.getElementById('twoPhoto');
PhotoSelect.imgThreeElement = document.getElementById('threePhoto');



// track number of clicks by user (25)
//track number of displays cannot have repeats
PhotoSelect.randomPhoto = function() {
  var randomArrayNum = Math.trunc(Math.random() * PhotoSelect.photoArray.length);
  console.log (randomArrayNum);
  
  // set the src for the random picture 
  PhotoSelect.imgOneElement.src = PhotoSelect.photoArray[randomArrayNum].path;
};

// removeEvent listener

// set array for photos ( use constructor)
new PhotoSelect('bag', 'img/bag.jpg' , 'a bag shaped like R2-D2' );

// new PhotoSelect('banana', '../img/banana' , 'a banana shaped banana slicer' );

// new PhotoSelect('bathroom', '../img/bathroom' , 'a combination toilet paper roll/ tablet holder' );

// new PhotoSelect('boots', '../img/boots' , 'soleless and toeless rain boots ' );

// new PhotoSelect('breakfast', '../img/breakfast' , 'combination oven egg pan and coffee pot' );

// new PhotoSelect('bubblegum', '../img/bubblegum' , 'meatball flavored bubble gum' );


// Goat.imgElement.addEventListener 
//need event listener for 'click'



// need way to prevent similar selections (for loop)
// once 25 steps are done, - dispay results to user 

// increment number of times displayed

// <!-- set up js to get element by ID -->


// test instantiation
PhotoSelect.randomPhoto();


