const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hour>=12){
        text("time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        text("time : 12 AM",100,100);
    }else{
        text("time : "+ hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata"); 

 
    //change the data in JSON format and store it in variable responseJSON
    var responseJSON= await response.json();


    
    //fetch datetime from responseJSON
    var dt= responseJSON.datetime;
    
    

    // slice the datetime to extract hour
    var hr= dt.slice(11,13);

    
    if(hour>=06 && hour<19 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png";
    }
    
    backgroundImg = loadImage("bg");

}
