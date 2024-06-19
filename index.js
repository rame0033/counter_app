//DOM for increment and save buttons 
let saveEl = document.getElementById("save-el") // Save-btn
let countEl = document.getElementById("count-el") // Increment-btn
let count = 0 // Counter initial value


// Function to increment the counter
function increment() {
    count += 1 // Increment by 1
    countEl.textContent = count // Display the count
}

// Function to save the count
function save() {
    let countStr = count + " - "; // String to display the counts
    saveEl.textContent += countStr // Display the counts
    count = 0 // Reset the counter
    countEl.textContent = count // Display the saved counts
}
