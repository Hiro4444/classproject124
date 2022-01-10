noseX=0;
noseY=0;
difference=0;
rightwristX=0;
leftwristX=0;
function setup() {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw() {
    document.getElementById("square_length").innerHTML="Width And Height Of A Square Will Be ="+difference+"px";
    background('#000000');
    fill('#000000')
    stroke('#30D5C8')
    square(noseX, noseY, difference);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!'); 
}
function gotPoses(results) {
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = "+ noseX + "noseY="+noseY);
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX)
    }
}