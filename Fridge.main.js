Fridge_img="";
Status="";

function preload()
{
    Fridge_img=loadImage('Fridge.jpg');
}

function setup()
{
    canvas=createCanvas(640,350);
    canvas.position(600,200);
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Object";
}

function modelLoaded()
{
    console.log("Model is Loaded");
    Status=true;
    object_detector.detect(Fridge_img,gotResult);
}

function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }
}

function draw()
{
    image(Fridge_img,0,0,640,350);
}