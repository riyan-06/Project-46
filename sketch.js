var fighter_plane;
var missile;
var asteroid_image_1,asteroid_image_2,asteroid_image_3,asteroid_image_4;
var space_background;
var fighterPlaneImg,missileImg,asteroidImg_1,asteroidImg_2,asteroidImg_3,asteroidImg_4,spaceImg;

function preload(){
fighterPlaneImg = loadImage("./assets/fighterPlane.png");
missileImg = loadImage("./assets/missile.png");
asteroidImg_1 = loadImage("./assets/asteroid_1.png");
asteroidImg_2 = loadImage("./assets/asteroid_2.png");
asteroidImg_3 = loadImage("./assets/asteroid_3.png");
asteroidImg_4 = loadImage("./assets/asteroid_4.png");
spaceImg = loadImage("./assets/space.jpg");

}



function setup(){
    createCanvas(windowWidth,windowHeight);

    space_background = createSprite(800,300,1200,1200);
    space_background.addImage(spaceImg);
    space_background.scale = 0.9;

    fighter_plane = createSprite(780,630,200,200);
    fighter_plane.addImage(fighterPlaneImg);
    fighter_plane.scale = 0.35;
    
    




}

function draw(){

    background(0);

    fighter_plane.x = mouseX;

    console.log(fighter_plane.y);
    


    // var select_sprites = Math.round(random(1,4));

    // if(frameCount % 60 == 0){
    //     if(select_sprites == 1){
    //         asteroid_1();
    //     }
    // }

    drawSprites();
    
}

function asteroid_1(){
asteroid_image_1 = createSprite(random(100,100),10,10,20);
asteroid_image_1.addImage(asteroidImg_1);
asteroid_image_1.scale = 0.1;
asteroid_image_1.velocityY = 3;
asteroid_image_1.lifetime = 100;


}

function asteroid_2(){
 asteroid_image_2 = createSprite(random(100,100),10,10,20);
 asteroid_image_2.addImage(asteroidImg_2);
 asteroid_image_2.scale = 0.1;
 asteroid_image_2.velocityY = 3;
 asteroid_image_2.lifetime = 100;

}

function asteroid_3(){
    asteroid_image_3 = createSprite(random(100,100),10,10,20);
    asteroid_image_3.addImage(asteroidImg_3);
    asteroid_image_3.scale = 0.1;
    asteroid_image_3.velocityY = 3;
    asteroid_image_3.lifetime = 100;
   
   }

   function asteroid_4(){
    asteroid_image_4 = createSprite(random(100,100),10,10,20);
    asteroid_image_4.addImage(asteroidImg_4);
    asteroid_image_4.scale = 0.1;
    asteroid_image_4.velocityY = 3;
    asteroid_image_4.lifetime = 100;
   
   }
   
   
   
   