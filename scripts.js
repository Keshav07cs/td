function revealMessage() {
    console.log("Button clicked!"); // Debugging message to check if the function is firing

    // Change the text after the button is clicked
    document.getElementById('response').innerHTML = "Only 1 kiss to the sender! 💋";

    // Show the teddy bear after the button is clicked
    let teddy = document.getElementById('teddy');
    teddy.style.display = 'block'; // This will make the teddy appear
}
