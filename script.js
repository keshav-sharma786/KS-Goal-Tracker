console.log("Namaste Javascript");
let count = 0;
// it will also give us an htmlCollection
const input = document.getElementsByClassName("goal-input");

const errorLable = document.querySelector(".error-lable");

// it will give an htmlCollection
const customCheckBox = document.getElementsByClassName("custom-checkbox");

const progressLabel = document.querySelector(".progress-label");

const progressBar = document.querySelector(".progress-bar");

const refresh = document.getElementById("refresh");

// let us make an goalsArray,initially goalsArray will be an empty array, because initially no goal has been selected.
const goalsArray = [];

const checkmarkingAllGoals = (checkboxClicked) => {
  alert("Are you sure that you want check mark this Goal?");
  // if you are inside this function, it means that all the input fields are already filled
  for (const inputs of input) {
    inputs.style.pointerEvents = "none";
  }
  const myBar = document.getElementById("myBar");

  // let currentWidth = parseFloat(myBar.style.width);
  // let totalWidth = parseFloat(progressBar.style.width);
  // let increment = totalWidth / customCheckBox.length;

  // myBar.style.width = currentWidth + increment + "%";

  // Progress bar is 85% wide

  let currentWidth = parseFloat(myBar.style.width);
  let increment = 100 / customCheckBox.length;
  myBar.style.width = currentWidth + increment + "%";

  // so basically you will only reach this function when you will write all the goals on the five input fields provided
  // let count;
  // console.log(checkboxClicked);
  // console.log(checkboxClicked.nextElementSibling);
  checkboxClicked.style.backgroundColor = "wheat";
  checkboxClicked.innerText = "✔️";
  checkboxClicked.nextElementSibling.style.textDecoration = "line-through";
  checkboxClicked.style.pointerEvents = "none";
  count++;
  if (count == 1) {
    progressLabel.innerText = "Well begun is half done!";
  } else if (count == 2) {
    progressLabel.innerText = "Keep Going Champ 🎯🔥💪🏻";
  } else if (count == 3) {
    progressLabel.innerText = "Well Done! Work Hard and Never Give Up!";
  } else if (count == 4) {
    progressLabel.innerText = "You are very close, Just one more!!";
  } else {
    progressLabel.innerText =
      "Whoa! You just completed all the goals, time for chill";
  }
  // next major task is to build the progressBar. Super Exciting Part
};

for (const customCheckBoxes of customCheckBox) {
  // now click event listener has been applied to all the custom checkboxes
  customCheckBoxes.addEventListener("click", function eventTriggered(e) {
    let areAllGoalsSet;
    // let inputVal;
    // console.log("checkbox clicked");
    // we also check the condition that weather all the goals are being filled by the user or not
    for (const inputs of input) {
      // attaching eventListener to all the inputs as well
      // inputs.addEventListener('input', (evt) => {
      //   console.log(evt.target);
      // })
      if (inputs.value == "") {
        // console.log("set all the 5 goals");
        errorLable.style.opacity = 1;
        // break;
        areAllGoalsSet = false;
        break;
      } else {
        // inputVal = inputs.value;
        areAllGoalsSet = true;
        errorLable.style.opacity = 0;
      }
    }

    if (areAllGoalsSet) {
      checkmarkingAllGoals(e.target);
    }
  });
}

// demo for using the local storage in the project

for (const inputs of input) {
  inputs.addEventListener("change", (e) => {
    const goalWritten = e.target.value;
    // console.log(goalWritten);
    goalsArray.push(goalWritten);
    // console.log(goalsArray);
    // converting goalsArray into a string using JSON.stringify() method
    let goalsArrayString = JSON.stringify(goalsArray);
    // storing the converted string into the local storage
    localStorage.setItem("goal", goalsArrayString);
    // let goals = localStorage.getItem("goal")
    // console.log(goals);
    // disabling the input field also
    
  });
}

refresh.addEventListener("click", () => {
  localStorage.clear();
});

// retrieving array from the local storage

// retrieving the string
const goalsString = localStorage.getItem("goal");
// console.log(goalsString);

// Retrieved Array
const goalsRetrievedArray = JSON.parse(goalsString);
// console.log(goalsRetrievedArray);

if (goalsRetrievedArray && goalsRetrievedArray.length === 5) {
  for (let i = 0; i < 5; i++) {
    input[i].value = goalsRetrievedArray[i];
  }
}

// additional extra check if some array indexes of the local storage are undefined
for(let i = 0; i < 5; i++) {
  if(goalsRetrievedArray[i] === undefined) localStorage.clear();
} 
