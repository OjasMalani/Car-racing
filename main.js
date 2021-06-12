canvas= document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
car1_width= 120;
car1_height= 70;
car1_image= "car1.jpg"
car1_x= 10;
car1_y= 10;

car1_width= 120;
car1_height= 70;
car1_image= "car1.jpg"
car1_x= 10;
car1_y= 10;

background_image= "racing.png";

function add(){
    background_imgTag= new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src= background_image;

    car1_imgTag= new Image();
    car1_imgTag.onload= uploadcar1;
    car1_imgTag.src= car1_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed= e.keyCode;
console.log(keypressed);

if(keypressed== "38"){
    car1_up();
    console.log("up arrow key");
}
if(keypressed== "40"){
    car1_down();
    console.log("down arrow key");
}
if(keypressed== "37"){
    car1_left();
    console.log("left arrow key");
}
if(keypressed== "39"){
    car1_right();
    console.log("right arrow key");
}
if(keypressed== "87"){
    car2_up();
    console.log("key w");
}
if(keypressed== "83"){
    car2_down();
    console.log("key s");
}
if(keypressed== "68"){
    car2_right();
    console.log("key d");
}
if(keypressed== "65"){
    car2_left();
    console.log("key a");
}
}

function car1_up(){
    if(car1_y>= 0){
    car1_y= car1_y-10;
    console.log("when up pressed car1_x= "+ car1_x+ " car1_y= "+ car1_y);
    uploadBackground();
    uploadcar1();    
    }
}
function car1_down(){
    if(car1_y<= 500){
    car1_y= car1_y+10;
    console.log("when down pressed car1_x= "+ car1_x+ "car1_y= "+ car1_y);
    uploadBackground();
    uploadcar1();    
    }
}
function car1_left(){
    if(car1_x>= 0){
    car1_x= car1_x-10;
    console.log("when left pressed car1_x= "+ car1_x+ " car1_y= "+ car1_y);
    uploadBackground();
    uploadcar1();    
    }
}
function car1_right(){
    if(car1_x<= 700){
    car1_x= car1_x+10;
    console.log("when right pressed x= "+ car1_x+ " car1_y= "+ car1_y);
    uploadBackground();
    uploadcar1();    
    }
}

function car2_up(){
    if(car2_y>= 0){
    car2_y= car2_y-10;
    console.log("when w pressed car2_x= "+ car2_x+ " car2_y= "+ car2_y);
    uploadBackground();
    uploadcar2();    
    }
}
function car2_down(){
    if(car2_y<= 500){
    car2_y= car2_y+10;
    console.log("when s pressed car2_x= "+ car2_x+ "car2_y= "+ car2_y);
    uploadBackground();
    uploadcar2();    
    }
}
function car2_left(){
    if(car1_x>= 0){
    car2_x= car2_x-10;
    console.log("when a pressed car2_x= "+ car2_x+ " car2_y= "+ car2_y);
    uploadBackground();
    uploadcar2();    
    }
}
function car2_right(){
    if(car2_x<= 700){
    car1_x= car2_x+10;
    console.log("when d pressed car2_x= "+ car2_x+ " car2_y= "+ car2_y);
    uploadBackground();
    uploadcar2();    
    }
}