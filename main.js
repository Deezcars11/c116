function preload()
{
    mustache = loadImage("https://i.postimg.cc/QMYrT8LK/must-removebg-preview.png")
}
noseX = 0;
noseY = 0;
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("model is loaded");

}
function draw()
{
image(video, 0, 0, 300, 300);
image(mustache, noseX, noseY, 80, 35)

}
function gotPoses(results)
    {
if (results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x-36;
    noseY = results[0].pose.nose.y+5;
    console.log("nose x= " + results[0].pose.nose.x);
    console.log("nose y= " + results[0].pose.nose.y);
}

    }

function take_snapshot()
{
    save("UglyFilter.png")
}