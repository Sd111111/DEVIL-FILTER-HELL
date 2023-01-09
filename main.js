right_eyeX=0;
right_eyeY=0;
left_eyeX=0;
left_eyeY=0;
function preload(){
  lefthorn=loadImage("https://i.postimg.cc/ryGYyB1f/Capture-2-removebg-preview.png");
  righthorn=loadImage("https://i.postimg.cc/C5dZtTSw/Capture-3-removebg-preview.png");
}
 function setup() {
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(400,400);

    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose" , gotPoses);
 }

 function gotPoses(results){
   if(results.length>0){
      console.log(results);
      left_eyeX=results[0].pose.leftEye.x;
      left_eyeY=results[0].pose.leftEye.y;
      right_eyeY=results[0].pose.rightEye.y;
      right_eyeX=results[0].pose.rightEye.x;
      console.log(" Right_eyes X =  " + right_eyeX );
      console.log("Right_eyes Y =  " + right_eyeY );
      console.log("Left_eyes X=  " + left_eyeX);
      console.log("Left_eyes Y = " + left_eyeY);
   }
 }

 function modelloaded(){
   console.log("poseNet is initialized");
 }
  function draw(){
   image(video,0,0,400,400);
image(righthorn,right_eyeX+70,right_eyeY-120,55,75);
image(lefthorn,left_eyeX-110,left_eyeY-130,55,75);
  }


   function takesnapshot(){
    save("devil.jpg");
   }