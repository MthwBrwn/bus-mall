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
  this.picks;
  this.timesDisplayed = 0;
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
  do{
    var randomPicNumOne = Math.trunc(Math.random() * PhotoSelect.photoArray.length);
    var randomPicNumTwo = Math.trunc(Math.random() * PhotoSelect.photoArray.length);
    var randomPicNumThree = Math.trunc(Math.random() * PhotoSelect.photoArray.length);
    // set the src for the random pictures
    // first image
  }while (randomPicNumOne === randomPicNumTwo || randomPicNumOne === randomPicNumThree ||
    randomPicNumTwo === randomPicNumThree||
    PhotoSelect.lastDisplayed.includes(randomPicNumOne)||
    PhotoSelect.lastDisplayed.includes(randomPicNumTwo)||
    PhotoSelect.lastDisplayed.includes(randomPicNumThree)
  );

  PhotoSelect.imgOneElement.src = PhotoSelect.photoArray[randomPicNumOne].path;
  PhotoSelect.imgOneElement.alt = PhotoSelect.photoArray[randomPicNumOne].altText;
  // second image
  PhotoSelect.imgTwoElement.src = PhotoSelect.photoArray[randomPicNumTwo].path;
  PhotoSelect.imgTwoElement.alt = PhotoSelect.photoArray[randomPicNumTwo].altText;
  // third image
  PhotoSelect.imgThreeElement.src = PhotoSelect.photoArray[randomPicNumThree].path;
  PhotoSelect.imgThreeElement.alt = PhotoSelect.photoArray[randomPicNumThree].altText;

  // need to set last displayed array
  PhotoSelect.lastDisplayed[0] = randomPicNumOne;
  PhotoSelect.lastDisplayed[1] = randomPicNumTwo;
  PhotoSelect.lastDisplayed[2] = randomPicNumThree;

  // increment number of times displayed
  PhotoSelect.photoArray[randomPicNumOne].timesDisplayed++;
  PhotoSelect.photoArray[randomPicNumTwo].timesDisplayed++;
  PhotoSelect.photoArray[randomPicNumThree].timesDisplayed++;
};

// event listener method
PhotoSelect.clickAction = function (event) {
  PhotoSelect.totalClicks++;
  console.log(PhotoSelect.totalClicks);
  for (var i in PhotoSelect.photoArray) {
    if (event.target.alt === PhotoSelect.photoArray[i].altText) {
      PhotoSelect.photoArray[i].picks++;
      console.log("picks: ", PhotoSelect.photoArray.picks);
    }
  }
  // once 25 steps are done, - dispay results to user 
 
  // removeEvent listener
  if (PhotoSelect.totalClicks > 5) {
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

new PhotoSelect('chair', 'img/chair.jpg' , 'a convex shaped chair' );

new PhotoSelect('cthulhu', 'img/cthulhu.jpg' , 'A monster of vaguely anthropoid outline, but with an octopus-like head whose face was a mass of feelers, a scaly, rubbery-looking body, prodigious claws on hind and fore feet, and long, narrow wings behind');


//need event listener for 'click'
PhotoSelect.photoEventElement.addEventListener('click', PhotoSelect.clickAction);







// test instantiation
// PhotoSelect.randomPhoto();


