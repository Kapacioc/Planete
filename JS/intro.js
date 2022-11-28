function run(){
var container = document.querySelector(".textBox")
container.classList.add("apare");

var speeds = {
    pause:100,
    slow:100,
    normal:70,
    fast:40
}


var textLines = [
   [ {String: "Ohh lost one",speed:speeds.normal}, 
    {String: "...", speed:speeds.slow},
    ],

    [{String: "I waited a long time to meet you.", speed:speeds.normal}],
    
    [{String: "It is so pleasant that you finally appeared. Our solar system is very great full.",speed:speeds.fast}],

    [{String:"We are in great danger. Some planets are strike by a disease and it is spreading really fast.",speed:speeds.pause}],

    [{String:"Your job is to STOP the disease from spreading on all of us. I wish you good luck on your jurney",speed:speeds.pause}]

    

]


var characters = [];

textLines.forEach(([line], index) => {
    


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