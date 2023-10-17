status1 = " ";
object = [];
function preload(){
    image1 = loadImage("car.jpg");
}
function setup(){
    canvas = createCanvas(600,400);
    canvas.center();
    object = ml5.objectDetector("cocossd",moedloaded);
 
}
function moedloaded(){
    console.log("done");
    status1= true;
    object.detect(image1,gotresult);
}
function gotresult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        object=result;
    }
}
function draw(){
    image(image1,0,0,600,400);
    if(status1 != " "){
     for(i=0;i<object.length;i++){
        
        percent = floor(object[i].confidence*100);
        fill("red");
        text(object[i].label + " " +percent+"%",object[i].x,object[i].y);
        noFill();
        stroke("red");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
     } 
    }
}
function back(){
    window.location="index.html";

}
function bed(){
    window.location = "bed.html";
}
