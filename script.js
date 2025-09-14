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


var number = money.textContent;
number = parseInt(number);


var trails = trail.textContent;
trails = parseInt(trails);

function money1(){
    
    
    number -= 1000;
    money.textContent = number;
    console.log(number);
}

function trail1(){
    
    
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

function plus(index){
    
    
    var pluss = number += index;
    money.textContent = pluss;
    console.log(pluss);

}

function minus(index){
    
    
    var minuss = number -= index;
    money.textContent = minuss;
    console.log(minuss);

}


var clickCount;
clickCount = 0;
var mall = 0;

function getMoney(index){
    if(index === 1){
      var cash = 150;
      var plus2 = mall*0.3 * cash;
      var plusRound = Math.round(plus2);
      plus(plusRound);
      console.log("green", plus2);

    }
    else if(index === 2){
        minus(900);
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
            console.log(mall)
            getMoney(1);
        }
    }

    else if(element.id === "id2"){
        if(two === true){
            color(zwei);
            getMoney(2);
        }
        else{
            color2(zwei)
            mall++;
            console.log(mall)
            getMoney(1);
        }
    }

    else if(element.id === "id3"){
        if(three === true){
            color(drei);
            getMoney(2);
        }
        else{
            color2(drei)
            mall++;
            console.log(mall)
            getMoney(1);
        }
    }

    else if(element.id === "id4"){
        if(four === true){
            color(vier);
            getMoney(2);
        }
        else{
            color2(vier)
            mall++;
            console.log(mall)
            getMoney(1);
        }
    }

    else if(element.id === "id5"){
        if(five === true){
            color(funf);
            getMoney(2);
        }
        else{
            color2(funf)
            mall++;
            console.log(mall)
            getMoney(1);
        }
    }

    else if(element.id === "id6"){
        if(six === true){
            color(sechs);
            getMoney(2);
        }
        else{
            color2(sechs)
            mall++;
            console.log(mall)
            getMoney(1);
        }
    }

    else if(element.id === "id7"){
        if(seven === true){
            color(sieben);
            getMoney(2);
        }
        else{
            color2(sieben)
            mall++;
            console.log(mall)
            getMoney(1);
        }
    }

    else if(element.id === "id8"){
        if(aigth === true){
            color(acht);
            getMoney(2);
        }
        else{
            color2(acht)
            mall++;
            console.log(mall)
            getMoney(1);
        }
    }

    else if(element.id === "id9"){
        console.log("ja2")
        if(nine === true){
            
            color(neun);
            getMoney(2);
        }
        else{
            color2(neun)
            mall++;
            console.log(mall)
            getMoney(1);
        }
    }

    

}


