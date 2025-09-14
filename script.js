const eins = document.getElementById("id1");
const zwei = document.getElementById("id2");
const drei = document.getElementById("id3");
const vier = document.getElementById("id4");
const funf = document.getElementById("id5");
const sechs = document.getElementById("id6");
const sieben = document.getElementById("id7");
const acht = document.getElementById("id8");
const neun = document.getElementById("id9");

var money = document.getElementById("money");

var trail = document.getElementById("trails");



var one;
var two;
var three;
var four;
var five;
var six;
var seven;
var aigth ;
var nine ;


one = false;
two = false;
three = false;
four = false;
five = false;
six = false;
seven = false;
aigth = false;
nine = false;

function plus(index){
    var number = money.textContent;
    number = parseInt(number)
    money.textContent += index;

}

function minus(index){
    var number = money.textContent;
    number = parseInt(number)
    money.textContent -= index;

}



function money1(){
    var number = money.textContent;
    number = parseInt(number)
    number -= 1000;
    money.textContent = number;
    console.log(number);
}

function trail1(){
    var trails = trail.textContent;
    trails = parseInt(trails)
    trails++;
    trail.textContent = trails;
    console.log(trails);
}


function random(){
    var x = Math.floor(Math.random()*9);
    return x
    
}

function color(x){
    x.style.backgroundColor = "red";
}

function color2(x){
    x.style.backgroundColor = "green";
}

function colorBlue(){
    const main = document.getElementById("main");



        
    for(let i of main.children){
        i.style.backgroundColor = "blue"
    }
 

}




function action(){


    trail1()
    money1();

    colorBlue();

    one = false;
    two = false;
    three = false;
    four = false;
    five = false;
    six = false;
    seven = false;
    aigth = false;
    nine = false;   

    var number = random()
    console.log(number)
    
    if(number == 0){
        one = true;
        console.log(true);
        
    }
    else if(number == 1){
        two = true;
        console.log(true);
    }
        else if(number == 2){
        three = true;
        console.log(true);
    }
        else if(number == 3){
        four = true;
        console.log(true);
    }
        else if(number == 4){
        five = true;
        console.log(true);

    }
        else if(number == 5){
        six = true;
        console.log(true);    
    }
        else if(number == 6){
        seven = true;
        console.log(true);        
    }
        else if(number == 7){
        aigth = true;
        console.log(true);        
    }
        else if(number == 8){
        nine = true;
        console.log(true);
        
        
        
    }

        else if(number == 9){
        ten = true;
        console.log("nine");
        
        
        
    }
  
}

var clickCount;
clickCount = 0;
var mall = 0;

function getMoney(index){
    if(index === 2){
        var cash = 150;
        var plus2 = mall*0.2 * cash;
        plus(plus2);
    }
    else if(index === 2){
        minus(50000);
        console.log("rot");
    }
    else{
        console.log("error");
    }





}





function click1(element){

    
    
    

    if(element.id === "id1"){
        console.log("ja")
        if(one === true){
            color(eins);
            getMoney(2);
            
        }
        else{
            color2(eins)
            
            
            mall++;
            getMoney(1);
        }
    }

    else if(element.id === "id2"){
        if(two === true){
            color(zwei);
        }
        else{
            color2(zwei)
        }
    }

    else if(element.id === "id3"){
        if(three === true){
            color(drei);
        }
        else{
            color2(drei)
        }
    }

    else if(element.id === "id4"){
        if(four === true){
            color(vier);
        }
        else{
            color2(vier)
        }
    }

    else if(element.id === "id5"){
        if(five === true){
            color(funf);
        }
        else{
            color2(funf)
        }
    }

    else if(element.id === "id6"){
        if(six === true){
            color(sechs);
        }
        else{
            color2(sechs)
        }
    }

    else if(element.id === "id7"){
        if(seven === true){
            color(sieben);
        }
        else{
            color2(sieben)
        }
    }

    else if(element.id === "id8"){
        if(aigth === true){
            color(acht);
        }
        else{
            color2(acht)
        }
    }

    else if(element.id === "id9"){
        console.log("ja2")
        if(nine === true){
            
            color(neun);
        }
        else{
            color2(neun)
        }
    }

    

}


