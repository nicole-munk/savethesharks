var shark;
var net;
var net_collected;
var trash;
var fish_count;
var win;

function setup(){
    createCanvas(windowWidth, windowHeight);
    start_game();
    net_collected = false;
}

function draw(){
    
    draw_shark(shark.x, shark.y);
    
    if(net_collected === false){
        draw_net(net.x, net.y);
    }
    
    for(var i = 0; i < trash.length; i++){
        draw_trash(trash[i]);
    }
    
    check_win();
    
    //finish game if win is true
    if(win == true){
        document.getElementById("cont").style.visibility = "visible";
        fill(255);
        stroke(0, 0, 200);
        textSize(35);
        text("YOU WON! Click continue", width/3, height/2-50);
        return;
    }
    
}

function mousePressed(){
    
    if(dist(net.x, net.y, mouseX, mouseY) < 200){
        net_collected = true;
    }
    else{
        draw_fish(mouseX, mouseY);
        console.log(fish_count);
    }
}

function draw_shark(x_pos, y_pos){
    //body
    fill(211, 211, 211);
    noStroke();
    stroke(0);
    strokeWeight(1);
    triangle(x_pos-270, y_pos, x_pos-300, y_pos-100, x_pos-200, y_pos);
    triangle(x_pos-270, y_pos, x_pos-300, y_pos+100, x_pos-200, y_pos);
    triangle(x_pos-210, y_pos, x_pos-30, y_pos-100, x_pos-30, y_pos+100);
    triangle(x_pos-120, y_pos-50, x_pos-110, y_pos-80, x_pos-80, y_pos-72);
    triangle(x_pos-120, y_pos+50, x_pos-110, y_pos+80, x_pos-80, y_pos+72);
    rect(x_pos-30, y_pos-100, 300, 200);
    triangle(x_pos+70, y_pos-100, x_pos+80, y_pos-160, x_pos+170, y_pos-100);
    triangle(x_pos+110, y_pos+100, x_pos+95, y_pos+140, x_pos+170, y_pos+100);
    triangle(x_pos+270, y_pos, x_pos+270, y_pos-100, x_pos+400, y_pos-75);
    triangle(x_pos+270, y_pos, x_pos+270, y_pos+100, x_pos+400, y_pos+75);
    
    //eye
    fill(0);
    circle(x_pos+290, y_pos-60, 20);
    fill(255);
    circle(x_pos+293, y_pos-65, 7);
    
    //teeth
    //bottom
    beginShape();
    vertex(x_pos+285, y_pos+9);
    vertex(x_pos+302, y_pos+1);
    vertex(x_pos+305, y_pos+20);
    endShape(CLOSE);
    
    beginShape();
    vertex(x_pos+305, y_pos+20);
    vertex(x_pos+322, y_pos+12);
    vertex(x_pos+325, y_pos+32);
    endShape(CLOSE);
    
    beginShape();
    vertex(x_pos+325, y_pos+32);
    vertex(x_pos+342, y_pos+24);
    vertex(x_pos+345, y_pos+44);
    endShape(CLOSE);
    
    beginShape();
    vertex(x_pos+345, y_pos+44);
    vertex(x_pos+362, y_pos+35);
    vertex(x_pos+365, y_pos+55);
    endShape(CLOSE);
    
    beginShape();
    vertex(x_pos+365, y_pos+55);
    vertex(x_pos+382, y_pos+46);
    vertex(x_pos+385, y_pos+66);
    endShape(CLOSE);
    
    //top
    beginShape();
    vertex(x_pos+285, y_pos-9);
    vertex(x_pos+302, y_pos-1);
    vertex(x_pos+305, y_pos-20);
    endShape(CLOSE);

    beginShape();
    vertex(x_pos+305, y_pos-20);
    vertex(x_pos+322, y_pos-12);
    vertex(x_pos+325, y_pos-32);
    endShape(CLOSE);
    
    beginShape();
    vertex(x_pos+325, y_pos-32);
    vertex(x_pos+342, y_pos-24);
    vertex(x_pos+345, y_pos-44);
    endShape(CLOSE);
    
    beginShape();
    vertex(x_pos+345, y_pos-44);
    vertex(x_pos+362, y_pos-35);
    vertex(x_pos+365, y_pos-55);
    endShape(CLOSE);
    
    beginShape();
    vertex(x_pos+365, y_pos-55);
    vertex(x_pos+382, y_pos-46);
    vertex(x_pos+385, y_pos-66);
    endShape(CLOSE);
    
    //gills
    noFill();
    stroke(0);
    strokeWeight(6);
    line(x_pos+230, y_pos-30, x_pos+230, y_pos+30);
    line(x_pos+245, y_pos-30, x_pos+245, y_pos+30);
    line(x_pos+260, y_pos-30, x_pos+260, y_pos+30);
}

function draw_fish(x_pos, y_pos){
    //body
    noStroke();
    fill(255, 165, 0);
    ellipse(x_pos, y_pos, 60, 30);
    triangle(x_pos-5, y_pos-15, x_pos+13, y_pos-30, x_pos+13, y_pos-13);
    triangle(x_pos+25, y_pos, x_pos+50, y_pos-15, x_pos+50, y_pos+15);
    stroke(0);
    strokeWeight(1);
    triangle(x_pos+5, y_pos, x_pos+15, y_pos-7, x_pos+15, y_pos+7);
    
    //eyes
    fill(255);
    ellipse(x_pos-18, y_pos-3, 10);
    fill(0);
    ellipse(x_pos-20, y_pos-1, 5);
    
    fish_count+=1;
}

function draw_net(x_pos, y_pos){
    noFill();
    stroke(0);
    strokeWeight(5);
    rect(x_pos-200, y_pos-200, 400, 400, 20);
    line(x_pos-100, y_pos-200, x_pos-100, y_pos+200);
    line(x_pos, y_pos-200, x_pos, y_pos+200);
    line(x_pos+100, y_pos-200, x_pos+100, y_pos+200);
    line(x_pos-200, y_pos-100, x_pos+200, y_pos-100);
    line(x_pos-200, y_pos, x_pos+200, y_pos);
    line(x_pos-200, y_pos+100, x_pos+200, y_pos+100);
}

function draw_trash(t_trash){
    fill(0, 100, 0);
    noStroke();
    rect(t_trash.x-10, t_trash.y-50, 20, 50);
    rect(t_trash.x-5, t_trash.y-70, 10, 20);
    fill(160, 82, 45);
    rect(t_trash.x-10, t_trash.y-35, 20, 20);
}

function check_win(){
    if(fish_count >= 10 && net_collected == true){
        win = true;
    }
}
       

function start_game(){
    shark = {x: 500, y: 320};
    net = {x: 600, y: 320};
    trash = [{x: 100, y: 667}, 
             {x: 250, y: 667},
             {x: 320, y: 667},
             {x: 380, y: 667},
             {x: 450, y: 667},
             {x: 567, y: 667},
             {x: 700, y: 667},
             {x: 785, y: 667},
             {x: 900, y: 667}]; 
    fish_count = 0;
    win = false;
}
