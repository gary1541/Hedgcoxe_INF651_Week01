// Gary Hedgcoxe CSCI651 Assignment01 due 082426

//    Store a reference to the <h1> in a variable called myHeading
//const myHeading = document.querySelector("h1");   // Store in variable myHeading
//    Update the text content of the <h1>
//myHeading.textContent = "Hello world!";	    // Change header text content



const myImage = document.querySelector("img");        // Store a reference to my <img> element in myImage variable

myImage.addEventListener("click", () => {	      // Click event handler function assigned to myImage
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {          // Checks if src value is equal to the path of the original image
    myImage.setAttribute("src", "images/earth1.png"); // If it is, we change the src value to the second image, earth1.png
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png"); // Otherwise, the image has already been changed and we change the src value the original image, firefox-icon.png
  }
});	// End Click Event handler function


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {			          // setUserName() function to set personalized greeting
  const myName = prompt("Please enter your name.");       // prompt() function then stores the entry in myName
  if (!myName) {					  // if myName has no value run setUserName() again from the start
    setUserName();
  } else {						  // if it does not have a value then store the value in localStorage and set it as the heading's text
    localStorage.setItem("name", myName);                 // This function creates and stores the data item called "name", setting its value to the myName variable
						          // containing the user's input. 
    myHeading.textContent = `Mozilla is cool, ${myName}`; // Finally, textContent of the heading is set to a string that includes the user's stored name.
  }
}

// Uses the Web Storage API to store data in the browser for later retrieval
if (!localStorage.getItem("name")) {			// Check whether the name data item is not already stored in localStorage
  setUserName();					// If not, the setUserName() function runs to create it
} else {
  const storedName = localStorage.getItem("name");	     // If it is, the user set a username during a previous visit, we retrieve the stored name
  myHeading.textContent = `Mozilla is cool, ${storedName}`;  // Also, if it is, we set the textContent of the heading to a string plus the user's name
}

myButton.addEventListener("click", () => {		// This adds a click event handler function to the button. This allows the user to store a differnet name if they want
  setUserName();					// When the button is clicked setUserName() runs
}	);						// End Click Event handler function						