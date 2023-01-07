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

var link_dict = {
    "Home": "HOME",
    "Current Research": "Current Research",
    "Publications": "Publications",
    "Birds": "Birds"
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