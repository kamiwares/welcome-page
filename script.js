


//Changing background color 

var square = document.getElementsByClassName('square');

function colorChange(){
    let red = Math.floor(Math.random() * 184);

    let green = Math.floor(Math.random() * 248);;

    let blue = 255;

    
    for(let i = 0; i<square.length; i++){
        var width = Math.floor(Math.random() * 264) +'px';
        square[i].style.width = width;
        square[i].style.height = width;
        

    }

    var rgb = '('+red+','+green+','+blue+')';
    
    document.getElementById('content').style.backgroundColor = 'rgb'+rgb;
}


window.setInterval(colorChange, 2000)

//Moving squares in background 

function movingSquare(){
    for(let i = 0; i<square.length; i++){
        let top = Math.floor(Math.random() * 100);
        let left = Math.floor(Math.random() * 100);
        
        console.log(top+' '+left)
        console.log(square[i])
        square[i].style.top = top+'%';
        square[i].style.left = left+ '%';
    }
    
}

movingSquare()
window.setInterval(movingSquare, 6000)


//Attractive title

const titles = ["W", "Wa", "War", "Ware", "Wares", "Waresi", "Waresia", "Waresiak", "Waresiak.", "Waresiak.p", "Waresiak.pl", "Waresiak.pl", "Waresiak.pl", "Waresiak.p", "Waresiak.", "Waresiak", "Waresia", "Waresi", "Wares", "Ware", "War", "Wa", "W"];
let i = 0;

setInterval(() => {
    i = i % 21;
    document.title = titles[i];
    i++;
}, 200);


