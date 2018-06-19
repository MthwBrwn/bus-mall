'use strict'

/* <li> <img id = "onePhoto" src="http://via.placeholder.com/300x300" alt=""> </li>
<li> <img id = "twoPhoto" src="http://via.placeholder.com/300x300" alt=""> </li>  
<li> <img id = "threePhoto" src="http://via.placeholder.com/300x300" alt=""> </li> */


// STEPS

// set up variables global? spec.to const. Object?
photoSelect.photoArray = [];

// set up constructor method for pictures
function photoSelect(label, path, access) {
  this.name= name;
  this.path= path;
  this.access= access;
  photoSelect.photoArray.push(this);
}

// get elements
photoSelect.imgOneElement = document.getElementById('onePhoto');
photoSelect.imgTwoElement = document.getElementById('twoPhoto');
photoSelect.imgThreeElement = document.getElementById('threePhoto');


//need event listener for 'click'

// track number of clicks
//track number of displays 

photoSelect.randomPhoto = function(elPic) {
  var randomArrayNum = Math.trunc(Math.random() * photoSelect.photoArray.length);
  
  var pickPhoto = photoSelect.photoArray[randomArrayNum];
  photoSelect.elPic.src = pickPhoto.path;
};

// set array for photos ( use constructor)
photoSelect.bag = new photoSelect('bag', '../img/bag' , 'a bag shaped like R2-D2' );

photoSelect.banana = new photoSelect('banana', '../img/banana' , 'a banana shaped banana slicer' );

// Goat.imgElement.addEventListener



// need way to prevent similar selections (for loop)
// once 25 steps are done, - dispay results to user 



// <!-- set up js to get element by ID -->

console.log(pickPhoto);
// test instantiation
photoSelect.randomPhoto(imageOneElement);

console.log(photoSelect.photoArray);
