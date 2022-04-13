//_______________________________________________________________
//here codes dont touch thatඞ
function big_run(){
var counter = 0
var index_size = imgs_list.length - 1

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
document.getElementById("img1").className = position;
if(position == "top" || position == "bottom"){
    document.getElementsByTagName("BODY")[0].style = "display: flex; justify-content: center;";
}
else{
    document.getElementById("img1").style = "position: fixed;"
}
document.getElementById("img1").style.width = size+"px";
document.getElementById("img1").style.borderRadius = border + "em";

function set_img(){
    document.getElementById("img1").src="pics/" + imgs_list[counter];
    if(counter != index_size){
       counter = counter + 1
       console.log(index_size)
    }
    else{
       counter = 0
    }
    
}
set_img()

function enter(){
    document.getElementById("img1").style.animation = 'fadeInAnimation-' + position + ' forwards 1s'
}
function exit(){
    document.getElementById("img1").style.animation = 'fadeOutAnimation-' + position + ' forwards 1s'
}

async function run(){
    while (true){
        enter()
        await sleep(time_stay * 1000)
        exit()
        await sleep(time_out * 1000)
        set_img()
    }
}

run()}