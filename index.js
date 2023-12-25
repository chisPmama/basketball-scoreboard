let home_score = document.getElementById("home-score")
let h_score = 0

let guest_score = document.getElementById("guest-score")
let g_score = 0

function add1Home() {
    h_score +=1
    home_score.innerText = h_score
    leadingTeam();
}

function add2Home() {
    h_score +=2
    home_score.innerText = h_score
    leadingTeam();
}

function add3Home() {
    h_score +=3
    home_score.innerText = h_score
    leadingTeam();
}

function add1Guest() {
    g_score +=1
    guest_score.innerText = g_score
    leadingTeam();
}

function add2Guest() {
    g_score +=2
    guest_score.innerText = g_score
    leadingTeam();
}

function add3Guest() {
    g_score +=3
    guest_score.innerText = g_score
    leadingTeam();
}

function resetGame() {
    h_score = 0
    g_score = 0
    home_score.innerText = 0
    guest_score.innerText = 0
    
    document.getElementById("leading-team").innerText = "Leading Team:"
}

function leadingTeam(){
    let leading

    if (h_score > g_score) { 
        leading = " Home"
    } else if (h_score === g_score) { 
        leading = " Tie"
    } else {
        leading = " Guest";
    }
    
    document.getElementById("leading-team").innerText = "Leading Team:" + leading;
}