"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

const resolution = "Learn JavaScript"; //immutable variable "resolution"
const currentYear = "2025";  //immutable variable "currentYear"
let willMeetResolution = "yes";  //mutable variable "willMeetResolution"

function updateYear() {
    yearElement.innerText = currentYear; //I had trouble here because I did not capitalize the T in text

}

function updateResolution() {
    resolutionElement.innerText = resolution;  //Same here
}

function updateWillMeetResolution() {
    willMeetResolutionElement.innerText = willMeetResolution;  //Same here

}

function render() {
    updateYear();
    updateResolution();
    updateWillMeetResolution();

}

submissionBtn.addEventListener("click", function () {  //I don't understand why there is not a " ) " here after the word "click"
    render();

})
