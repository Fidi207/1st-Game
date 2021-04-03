canvas=document.getElementById("cnvs");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
Mars=["Mars.jpg", "Mars1.jpg", "Mars2.jpg", "Mars3.jpg", "Mars4.jpg", "Mars5.jpg"];
randomNumber=Math.floor(Math.random()*6);


background_img=Mars[randomNumber];
rover_img="rover.png";

function add(){
    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= background_img;

    rover_imgTag= new Image();
    rover_imgTag.onload= uploadRover;
    rover_imgTag.src= rover_img;
}


function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height)
}

window.addEventListener("keydown", myKeyIsDown);

function myKeyIsDown(e){
    keypressed=e.keyCode;

    if(keypressed=='37'){
        left();
    }

    if(keypressed=='39'){
        right();
    }

    if(keypressed=='38'){
        up();
    }

    if(keypressed=='40'){
        down();
    }
}

function up(){
    if(rover_y>=0){
        rover_y= rover_y-10;
        uploadBackground();
        uploadRover();
        console.log("Up, x=" + rover_x + "y=" + rover_y);
    }
}

function down(){
    if(rover_y<=500){
        rover_y= rover_y+10;
        uploadBackground();
        uploadRover();
        console.log("Down, x=" + rover_x + "y=" + rover_y);
    }
}

function left(){
    if(rover_x>=0){
        rover_x= rover_x-10;
        uploadBackground();
        uploadRover();
        console.log("Left, x=" + rover_x + "y=" + rover_y);
    }
}

function right(){
    if(rover_x<=700){
        rover_x= rover_x+10;
        uploadBackground();
        uploadRover();
        console.log("Right, x=" + rover_x + "y=" + rover_y);
    }
}