noseX=0
noseY=0

function preload(){
    ThenamesJOHNSENA=loadImage('https://i.postimg.cc/GmJ8qCSr/johnSENA.png');
    lifeisTHUG=loadImage('https://i.postimg.cc/PJ5h8KXn/lifesss.png');
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.position(100,250);
    Video=createCapture(VIDEO);
    Video.size(290,290);
    Video.hide();
    Posenet=ml5.poseNet(Video, modelLoaded);
    Posenet.on("pose",gotPoses);
}


function modelLoaded(){
    console.log("IT IS NOT GOING TO WORK SO CLOSE THE CONSOLE WINDOW");

}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-170;
        console.log("noseX="+noseX);
        noseY=results[0].pose.nose.y-180;
        console.log("noseY="+noseY);
    }
    console.log("noseX = " + noseX +", noseY = " + noseY);
    
}

function draw(){
    image(Video,5,5,290,290);
    image(lifeisTHUG, noseX, noseY, 300,300);
    
}

function take_snapshot(){
    save('myImage.jpg');
}