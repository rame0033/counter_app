//DOM for increment and save
let saveEl = document.getElementById("save-el") // Saving the logged numbers
let countEl = document.getElementById("count-el") // Logging the increment number on every click
let count = 0 // Counter initial value


// Function to increment the counter
function increment() {
    count += 1 // Increment by 1
    countEl.textContent = count // Display the count
}

// Function to save the count
function save() {
    let countStr = count + " - "; // String to display the counts
    saveEl.textContent += countStr
    count = 0 // Reset the counter
    countEl.textContent = count // Reset the display
}   
