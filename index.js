// Run this function after the page is loaded
document.addEventListener("DOMContentLoaded", function(){
    console.log("Hello, world!")

    var links = document.getElementsByClassName("assignment");
    console.log(links)
    for (link of links) {
        link.addEventListener("mouseover", assignmentMouseOver);
        link.addEventListener("mouseout", assignmentMouseOut);
        console.log("added");
    }
    //document.getElementsByClassName("assignment").addEventListener("mouseover", assignmentMouseOver);
    //document.getElementsByClassName("assignment").addEventListener("mouseout", assignmentMouseOut);

});

function rollDie() {
	console.log("Rolled the die")

	// Get the element with the id "fireplace"
	let el = document.getElementById("roll_die");

    let rand = 1 + Math.floor(Math.random() * 6);
    let rand_color = 30 * rand;
    // Add 20 fire emoji to it
    el.innerHTML = `<button type="button" onclick="rollDie()">Your roll: ${rand}, click to roll again!</button>`

	// Also set its color to red
	el.style.backgroundColor = `rgba(20, ${rand_color}, ${rand_color}, 1)`;
}

var link_dict = {
    "A2": "A2: Animated GIFs",
    "A3": "A3: Drawing Tool",
    "A4": "A4: Swarm",
    "A5": "A5: Chatbot",
    "A6": "A6: An Emoji Argument",
    "A7": "A7: An Array of Floats",
    "A8": "A8: Big Data Visualization",
    "A9": "A9: Virtual Costume"
}

function findKeyFromValue(dict, val){
    for (var key in dict){
        if (dict[key] == val) {
            return key;
        }
    }
    return -1;
}

function assignmentMouseOver() {
    //console.log("triggered");
    event.target.innerHTML = link_dict[event.target.innerHTML];
}

function assignmentMouseOut() {
    //console.log(event.target.innerHTML);
    event.target.innerHTML = findKeyFromValue(link_dict, event.target.innerHTML);
}