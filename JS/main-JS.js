var inventar = {
 oxigen : 0,
 foame : 0,
 energie : 0,
 viata : 0 
}
function funcOxigen() {
document.getElementById('oxigen').value= ++inventar.oxigen;


}


function funcFoame() {
    document.getElementById('foame').value= ++inventar.foame;
    
    
}

function funcEnergie() {
document.getElementById('energie').value= ++inventar.energie;


}

function funcViata() {
    document.getElementById('viata').value= ++inventar.viata;
    
    
}



    

function inaintare(){
    
    document.getElementById('oxigen').value= inventar.oxigen -5;
    
}
