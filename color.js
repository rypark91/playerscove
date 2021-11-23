
let container = document.getElementsByClassName('owl-carousel');



var redNum = 255;
var greenNum = 0;
var blueNum = 0;

setInterval(function(){
    if(redNum === 255){
        if(greenNum < 255 && blueNum === 0){
            greenNum++;
        }
        else if(greenNum === 0 && blueNum !== 0){
            blueNum--;
        }
        else{
            redNum--;
        }
    }
    else if(greenNum === 255){
        if(blueNum < 255 && redNum === 0){
            blueNum++;
        }
        else if(blueNum === 0 && redNum !== 0){
            redNum--;
        }
        else{
            greenNum--;
        }

    }
    else if(blueNum === 255){
        if(redNum < 255 && greenNum === 0){
            redNum++;
        }
        else if(redNum === 0 && greenNum !== 0){
            greenNum--;
        }
        else{
            blueNum--;
        }
    }
    if(container[3].hasChildNodes()){
        var item = document.getElementsByClassName("owl-item");
        var active = document.getElementsByClassName("active");
        var center = document.getElementsByClassName("center");
        var texts = document.getElementsByClassName('text-glow');
        var i;
        for(i = 0; i < item.length; i++){
            item[i].style.boxShadow = `rgb(0, 0, 0) 0px 0px 4px 4px, inset rgb(0, 0, 0) 0px 0px 4px 4px`;
            item[i].style.textShadow = `0px 0px 0px rgb(0,0,0)`;
        }
        for(i = 0; i < active.length; i++){
            active[i].style.boxShadow = `rgb(0, 0, 0) 0px 0px 4px 4px, inset rgb(0, 0, 0) 0px 0px 4px 4px`;
            active[i].style.textShadow = `0px 0px 0px rgb(0,0,0)`;
        }
        for(i = 0; i < center.length; i++){
            center[i].style.boxShadow = `rgb(${redNum}, ${greenNum}, ${blueNum}) 0px 0px 4px 4px, inset rgb(${redNum}, ${greenNum}, ${blueNum}) 0px 0px 4px 4px`;
            center[i].style.textShadow = `0px 0px 8px rgb(${redNum}, ${greenNum}, ${blueNum})`;
        }
        for(i = 0; i < texts.length; i++){
            texts[i].style.textShadow = `0px 0px 10px rgb(${redNum}, ${greenNum}, ${blueNum})`
        }
    }
        
    },1);

