// Declare initial variables: imgs paths, captions, link the arrows in html with JS, set counter
let picArray = ["img/1.gif", "img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg"];

let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");
let imageSource = document.getElementById("image");
let indexCounter = 0;

// Set initial pic
setPic();

function setPic() {
document.getElementById("image").src = "img/1.gif";
}

// code for left arrow image change
leftArrow.addEventListener("click", function() {
    if (indexCounter > 0) {
        indexCounter--; 
    } else if (indexCounter === 0) {
        indexCounter = picArray.length - 1;
    };
imageSource = picArray[indexCounter];
document.getElementById("image").src = imageSource;
});

// code for right arrow image change
rightArrow.addEventListener("click", function() {
    (indexCounter < picArray.length - 1) ? indexCounter++ : indexCounter = 0;
    imageSource = picArray[indexCounter];
    document.getElementById("image").src = imageSource;
    });