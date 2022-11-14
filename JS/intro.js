function run(){
var container = document.querySelector(".textBox")
container.classList.add("apare");

var speeds = {
    pause:500,
    slow:100,
    normal:70,
    fast:40
}


var textLines = [
    {String: "Hello stranger",speed:speeds.normal}, 
    {String: "...", speed:speeds.slow},
    {String: "propozitia a 2 a", speed:speeds.normal},
    {String: "propozitia a 3 a",speed:speeds.fast},
    {String:"",speed:speeds.pause},

]


var characters = [];

textLines.forEach((line, index) => {

    if(index < textLines.length -1){
        line.String +=  " ";
    }

    line.String.split("").forEach(character => {
        var span = document.createElement("span");
        span.textContent = character;
        container.appendChild(span);
        characters.push({
            span: span,
            isSpace: character === " ",
            delayAfter: line.speed,
            classes:line.classes || []
        })

    })

})

function revealOneCharacter(list) {
    var next = list.splice(0, 1)[0];
    
    next.span.classList.add("revealed");
    
    var delay = next.isSpace ? 0 : next.delayAfter;

    if(list.length > 0){
        setTimeout(function(){
            revealOneCharacter(list);
        },delay)
    }

}
revealOneCharacter(characters);
}