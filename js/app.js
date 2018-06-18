{/* <li> <img id = "onePhoto" src="http://via.placeholder.com/300x300" alt=""> </li>
<li> <img id = "twoPhoto" src="http://via.placeholder.com/300x300" alt=""> </li>  
<li> <img id = "threePhoto" src="http://via.placeholder.com/300x300" alt=""> </li> */}


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

//need event listener for 'click'

// track number of clicks
//track number of displays 

// set array for photos ( use constructor)
photoSelect.bag = new photoSelect ('bag', '../img/bag' , 'a bag shaped like R2-D2' );

photoSelect.banana = new photoSelect ('banana', '../img/banana' , 'a banana shaped banana slicer' );





// need way to prevent similar selections (for loop)
// once 25 steps are done, - dispay results to user 



// <!-- set up js to get element by ID -->

// <!-- set up random number  -->

// test instantiation


console.log(photoSelect.photoArray);
