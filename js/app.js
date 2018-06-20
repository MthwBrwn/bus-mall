'use strict';

/* <li> <img id = "onePhoto" src="http://via.placeholder.com/300x300" alt=""> </li>
<li> <img id = "twoPhoto" src="http://via.placeholder.com/300x300" alt=""> </li>  
<li> <img id = "threePhoto" src="http://via.placeholder.com/300x300" alt=""> </li> */


// STEPS

// set up variables global? spec.to const. Object?

PhotoSelect.photoArray = [];
// get Element for list
PhotoSelect.listEl = document.getElementById('listBuild');
PhotoSelect.totalClicks = 0;
PhotoSelect.lastDisplayed = [];
PhotoSelect.totalVotes =[];

// set up constructor method for pictures
function PhotoSelect(name, path, altText) {
  this.name= name;
  this.path= path;
  this.altText= altText;
  PhotoSelect.photoArray.push(this);
  
  
  console.log(PhotoSelect.photoArray);
}

// get elements
PhotoSelect.photoEventElement = document.getElementById('photoUl');
PhotoSelect.imgOneElement = document.getElementById('onePhoto');
PhotoSelect.imgTwoElement = document.getElementById('twoPhoto');
PhotoSelect.imgThreeElement = document.getElementById('threePhoto');



// track number of clicks by user (25)
//track number of displays cannot have repeats
PhotoSelect.randomPhoto = function() {
  var randomArrayNumOne = Math.trunc(Math.random() * PhotoSelect.photoArray.length);
  var randomArrayNumTwo = Math.trunc(Math.random() * PhotoSelect.photoArray.length);
  var randomArrayNumThree = Math.trunc(Math.random() * PhotoSelect.photoArray.length);
  
  
  // set the src for the random pictures
  // first image
  PhotoSelect.imgOneElement.src = PhotoSelect.photoArray[randomArrayNumOne].path;
  PhotoSelect.imgOneElement.alt = PhotoSelect.photoArray[randomArrayNumOne].altText;
// second image
  PhotoSelect.imgTwoElement.src = PhotoSelect.photoArray[randomArrayNumTwo].path;
  PhotoSelect.imgTwoElement.alt = PhotoSelect.photoArray[randomArrayNumTwo].altText;
  // third image
  PhotoSelect.imgThreeElement.src = PhotoSelect.photoArray[randomArrayNumThree].path;
  PhotoSelect.imgThreeElement.alt = PhotoSelect.photoArray[randomArrayNumThree].altText;



};

// event listener method
PhotoSelect.clickAction = function (event) {
  PhotoSelect.totalClicks++;
  console.log('words');
  console.log(PhotoSelect.totalClicks);
  for (var i in PhotoSelect.photoArray) {
    if (event.target.alt === PhotoSelect.photoArray[i].altText) {
      PhotoSelect.photoArray[i].totalVotes;
      console.log("total votes: ", PhotoSelect.totalVotes);
    }
  }
  // once 25 steps are done, - dispay results to user 
  // removeEvent listener
  if (PhotoSelect.totalClicks > 3) {
    PhotoSelect.photoEventElement.removeEventListener('click', PhotoSelect.clickAction);
    // need to show list 
    // need to calcuate Votes
    // 
  }else {
    PhotoSelect.randomPhoto();
  }

};


  



// set array for photos ( use constructor)
new PhotoSelect('bag', 'img/bag.jpg' , 'a bag shaped like R2-D2' );

new PhotoSelect('banana', 'img/banana.jpg' , 'a banana shaped banana slicer' );

new PhotoSelect('bathroom', 'img/bathroom.jpg' , 'a combination toilet paper roll/ tablet holder' );

new PhotoSelect('boots', 'img/boots.jpg' , 'soleless and toeless rain boots ' );

new PhotoSelect('breakfast', 'img/breakfast.jpg' , 'combination oven egg pan and coffee pot' );

new PhotoSelect('bubblegum', 'img/bubblegum.jpg' , 'meatball flavored bubble gum' );


// Goat.imgElement.addEventListener 
//need event listener for 'click'
PhotoSelect.photoEventElement.addEventListener('click', PhotoSelect.clickAction);


// need way to prevent similar selections (for loop)

// increment number of times displayed



// test instantiation
// PhotoSelect.randomPhoto();


