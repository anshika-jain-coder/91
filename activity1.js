score=0;
function update_Score(){
    score=score+1;
    document.getElementById("score").innerHTML= "Score:"+ score;
}
function save_Score(){
    localStorage.setItem("score",score);
}
function next_page(){
    window.location="activity_2.html";
}