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
PhotoSelect.maxClicks = 5;
PhotoSelect.names = [];



// set up constructor method for pictures
function PhotoSelect(name, path, altText) {
  this.name= name;
  this.path= path;
  this.altText= altText;
  this.picks = 0;
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
      console.log("picks: ", PhotoSelect.photoArray[i].picks);
    }
  }
  // once 25 steps are done, - dispay results to user 
 
  // removeEvent listener
  if (PhotoSelect.totalClicks > PhotoSelect.maxClicks) {
    PhotoSelect.photoEventElement.removeEventListener('click', PhotoSelect.clickAction);
    // need to show list 
    PhotoSelect.renderList();

    // need to calcuate Votes
    // 
  }else {
    PhotoSelect.randomPhoto();
  }

};

PhotoSelect.renderList = function() {
  var itemOneEl = document.createElement('li');
  itemOneEl.textContent = `Thank you for your selections! `;
  PhotoSelect.listEl.appendChild(itemOneEl);
  for (var i in PhotoSelect.photoArray){
    var itemTwoEl = document.createElement('li');
    itemTwoEl.textContent = ` ${PhotoSelect.photoArray[i].name} has ${parseInt(PhotoSelect.photoArray[i].picks)} votes and was displayed ${PhotoSelect.photoArray[i].timesDisplayed} times.`;
    PhotoSelect.listEl.appendChild(itemTwoEl);
  }
};

PhotoSelect.updateVotes = function() {
  for(var i in PhotoSelect.photoArray[i]) {
    
    PhotoSelect.totalVotes[i] = PhotoSelect.photoArray[i].picks;
    PhotoSelect.names[i] = PhotoSelect.photoArray[i].name;
  }
};


  



// set array for photos ( use constructor)
new PhotoSelect('Bag', 'img/bag.jpg' , 'a bag shaped like R2-D2' );
new PhotoSelect('Banana', 'img/banana.jpg' , 'a banana shaped banana slicer' );
new PhotoSelect('Bathroom', 'img/bathroom.jpg' , 'a combination toilet paper roll/ tablet holder' );
new PhotoSelect('Boots', 'img/boots.jpg' , 'soleless and toeless rain boots ' );
new PhotoSelect('Breakfast', 'img/breakfast.jpg' , 'combination oven egg pan and coffee pot' );
new PhotoSelect('Bubblegum', 'img/bubblegum.jpg' , 'meatball flavored bubble gum' );
new PhotoSelect('Chair', 'img/chair.jpg' , 'a convex shaped chair' );
new PhotoSelect('Cthulhu', 'img/cthulhu.jpg' , 'A monster of vaguely anthropoid outline, but with an octopus-like head whose face was a mass of feelers, a scaly, rubbery-looking body, prodigious claws on hind and fore feet, and long, narrow wings behind');
new PhotoSelect('Dog-duck', 'img/dog-duck.jpg' , 'A picture of a dog with a plastic duck bill');
new PhotoSelect('Dragon meat', 'img/dragon.jpg' , 'A can of dragon meat');
new PhotoSelect('Pen utensils ', 'img/pen.jpg' , 'A pen with a fork knofe and spoon attachment');
new PhotoSelect('Pet sweep', 'img/pet-sweep.jpg' , 'Sweeper attachment for your pets');
new PhotoSelect('Pizza Scissors', 'img/scissors.jpg' , 'a combination scissor/pizza server');
new PhotoSelect('Shark bag', 'img/shark.jpg' , 'A shark shaped sleeping bag');
new PhotoSelect('Baby sweeper', 'img/sweep.png' , 'A combination floor mop/ baby onesie');
new PhotoSelect('Tauntaun', 'img/tauntaun.jpg' , 'A tauntaun shaped sleeping bag');
new PhotoSelect('Unicorn meat', 'img/unicorn.jpg' , 'Unicorn meat');
new PhotoSelect('Tentacle USB', 'img/usb.gif' , 'A USB storage stick shaped like a tentacle');
new PhotoSelect('Endless watering can', 'img/water-can.jpg' , 'A watering can whose spigot is turned back into the can ');
new PhotoSelect('Off center wineglass', 'img/wine-glass.jpg' , 'A wineglass with an off-center lip');

//need event listener for 'click'
PhotoSelect.photoEventElement.addEventListener('click', PhotoSelect.clickAction);


// PhotoSelect.renderChart = function () {
//   var context = document.getElementById('results-chart'). getContext('2d');
//   var chartColors =  ['red','green','blue','#fff'];

//   Var photoChart = new Chart (context, {
//     type: 'bar',
//     data : {
//       labels: PhotoSelect.names,
//       datasets: [{
//         label: 'votes for Photos',
//         data: PhotoSelect.totalClicks, 
//         backgroundColors: chartColors
//       }],
//     },
//     options:{
//       scales:{
//         yAxes:[{
//           tick:{
//             beginAtZero: true,
//           }
//         }],
//         xAxes:[{
//           tick:{
//             autoskip: false,
//           }
//         }]

        
//       }
//     }
//   });

// };





// // test instantiation
// // PhotoSelect.randomPhoto();


