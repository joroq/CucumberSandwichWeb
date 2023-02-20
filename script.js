// Data
const teams = [
    "Accrington",
    "Aston Villa",
    "Blackburn Rovers",
    "Bolton Wanderers",
    "Burnley",
    "Derby County",
    "Everton",
    "Notts County",
    "Preston North End",
    "Stoke",
    "West Bromwich Albion",
    "Wolverhampton Wanderers"
];


// Functions

// Populates empty div with data from the array and a button
const populate = () => {
    let resultsDiv = document.getElementById('content');
    resultsDiv.innerHTML = '';
    for (let team of teams) {
        if (team == "Preston North End") {
            resultsDiv.innerHTML += '<div class="team change" id="winners">' + team + '</div>';
        } else {
            resultsDiv.innerHTML += '<div class="team change">' + team + '</div>';
        }
    }
    document.getElementById('button-div').innerHTML =
        '<button id="change-button" onclick="celebrate()">Click to change this site in recognition of the first league winners!</button>';
}


// Changes style elements of the page
const celebrate = () => {
    document.body.style.backgroundColor = 'darkblue';
    let items = document.getElementsByClassName('change');
    for (let i = 0; i < items.length; i++) {
        items[i].style.color = "white";
    }
    document.getElementById('content').style.border = '20px solid white';
    document.getElementById('content').style.backgroundColor = 'darkblue';
    document.getElementById('winners').style.fontSize = '2em';
}