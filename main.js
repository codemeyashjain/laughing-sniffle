canvas.getElementById('myCanvas');
ctx=canvas.getContext("2d");

windows.addEventListner("keydown",my_keyDown);

function my_keyDown(e){
keypressed=e.keyCode;
    console.log(keypressed);

    function alphabetkey(){
        img_image=""
    }

if((keyPressed >=97 && keyPressed<=122)|| (keyPressed<= 90)){
alphabetkey();
document.getElementById("d1").innerHTML="You press an alphabet key";
console.log("alphabet key");
}