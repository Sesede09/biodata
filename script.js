// JavaScript code to mimic the functionality of the provided Python script

// Function to simulate input like Python's input() function
function input(promptText) {
    return prompt(promptText); // Using prompt for simplicity, not best practice for modern web applications
}

// Function to convert input to integer (like Python's int())
function parseIntInput(promptText) {
    return parseInt(input(promptText), 10); // Parse input as integer
}

// Function to simulate print() like in Python
function print(label, value) {
    console.log(label + ':', value); // Log output to console
}

// Variables to hold student information
var stid = input('Enter student ID:');
var stname = input('Enter student name:');
var stgen = input('Enter student gender:');
var stage = parseIntInput('Enter student age:');
var stmail = input('Enter student email:');
var stlevel = parseIntInput('Enter student level:');
var stdept = input('Enter student department:');
var staddr = input('Enter student address:');
var stphone = input('Enter student phone:');
var stnation = input('Enter student nationality:');

// Printing out student information
console.log('Student ID:', stid);
console.log('Student Name:', stname);
console.log('Student Gender:', stgen);
console.log('Student Age:', stage);
console.log('Student Email:', stmail);
console.log('Student Level:', stlevel);
console.log('Student Department:', stdept);
console.log('Student Address:', staddr);
console.log('Student Phone:', stphone);
console.log('Student Nationality:', stnation);
