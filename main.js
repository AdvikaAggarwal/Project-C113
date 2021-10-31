function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 350);
    circle(30,30,30);
    circle(30,110,20);
    circle(30,180,30);
    circle(30,250,20);
    circle(30,320,30);
    circle(30,390,20);
    circle(30,460,30);


    rect(110,30,45,35,10);
    rect(188,30,35,25,10);
    rect(258, 30,45,35,10);
    rect(328,30,35,25,10);
    rect(398,30,45,35,10);
    rect(468,30,35,25,10);
    rect(538,30,45,35,10);


    rect(575,130,35,35);
    rect(575,210,25,25);
    rect(575,280,35,35);
    rect(575,350,25,25);
    rect(575,420,35,35);
    
    rect(70,415,45,45,20,15,10,5);
    rect(150,415,45,45,20,15,10,5);
    rect(230,415,45,45,20,15,10,5);
    rect(310,415,45,45,20,15,10,5);
    rect(390,415,45,45,20,15,10,5);
    rect(470,415,45,45,20,15,10,5);
    
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}
 
function draw() {
    image(video, 95, 90, 450, 300);
    tint(tint_color);
}

function take_snapshot(){
    save('advika.png');
}

function filter_tint() 
{
    tint_color = document.getElementById("color_name").value;
}