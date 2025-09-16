const eins = document.getElementById("id1");
const zwei = document.getElementById("id2");
const drei = document.getElementById("id3");
const vier = document.getElementById("id4");
const funf = document.getElementById("id5");
const sechs = document.getElementById("id6");
const sieben = document.getElementById("id7");
const acht = document.getElementById("id8");
const neun = document.getElementById("id9");
const eins1 = document.getElementById("id10");

const zwei1 = document.getElementById("id11");
const drei1 = document.getElementById("id12");
const vier1 = document.getElementById("id13");
const funf1 = document.getElementById("id14");
const sechs1 = document.getElementById("id15");
const sieben1 = document.getElementById("id16");
const acht1 = document.getElementById("id17");
const neun1 = document.getElementById("id18");

const eins2 = document.getElementById("id19");
const zwei2 = document.getElementById("id20");
const drei2 = document.getElementById("id21");
const vier2 = document.getElementById("id22");
const funf2 = document.getElementById("id23");
const sechs2 = document.getElementById("id24");
const sieben2 = document.getElementById("id25");




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

var one1;
var two1;
var three1;
var four1;
var five1;
var six1;
var seven1;
var aigth1 ;
var nine1 ;

var one2;
var two2;
var three2;
var four2;
var five2;
var six2;
var seven2;



one = false;
two = false;
three = false;
four = false;
five = false;
six = false;
seven = false;
aigth = false;
nine = false;

one1 = false;
two1 = false;
three1 = false;
four1 = false;
five1 = false;
six1 = false;
seven1 = false;
aigth1 = false;
nine1 = false;

one2 = false;
two2 = false;
three2 = false;
four2 = false;
five2 = false;
six2 = false;
seven2 = false;



var number = money.textContent;
number = parseInt(number);


var trails = trail.textContent;
trails = parseInt(trails);

function money1(){
    
    
    number -= 1500;
    money.textContent = number;
    
}

function trail1(){
    
    
    trails++;
    trail.textContent = trails;
    
}


function random(){
    var x = Math.floor(Math.random()*25);
    return x
    
}

function color(x){
    x.style.backgroundColor = "#E53935";
}

function color2(x){
    x.style.backgroundColor = "#00C853";
}

function colorBlue(){
    const main = document.getElementById("main");



        
    for(let i of main.children){
        i.style.backgroundColor = "blue"
    }


}




function action(){

    clickCount = 0;
    mall = 0;

    document.querySelectorAll(".blue").forEach(btn => btn.disabled = false);


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
    
    one1 = false;
    two1 = false;
    three1 = false;
    four1 = false;
    five1 = false;
    six1 = false;
    seven1 = false;
    aigth1 = false;
    nine1 = false; 

    one2 = false;
    two2 = false;
    three2 = false;
    four2 = false;
    five2 = false;
    six2 = false;
    seven2 = false;
 

    var number = random()
    console.log(number)
    
if(number == 0){
    one = true;
}
else if(number == 1){
    two = true;
}
else if(number == 2){
    three = true;
}
else if(number == 3){
    four = true;
}
else if(number == 4){
    five = true;
}
else if(number == 5){
    six = true;
}
else if(number == 6){
    seven = true;
}
else if(number == 7){
    aigth = true;
}
else if(number == 8){
    nine = true;
}
else if(number == 9){
    one1 = true;
}
else if(number == 10){
    two1 = true;
}
else if(number == 11){
    three1 = true;
}
else if(number == 12){
    four1 = true;
}
else if(number == 13){
    five1 = true;
}
else if(number == 14){
    six1 = true;
}
else if(number == 15){
    seven1 = true;
}
else if(number == 16){
    aigth1 = true;
}
else if(number == 17){
    nine1 = true;
}
else if(number == 18){
    one2 = true;
}
else if(number == 19){
    two2 = true;
}
else if(number == 20){
    three2 = true;
}
else if(number == 21){
    four2 = true;
}
else if(number == 22){
    five2 = true;
}
else if(number == 23){
    six2 = true;
}
else if(number == 24){
    seven2 = true;
}

  
}

function plus(index){
    
    
    var pluss = number += index;
    money.textContent = pluss;
    

}

function minus(index){
    
    
    var minuss = number -= index;
    money.textContent = minuss;
    

}


var clickCount;
clickCount = 0;
var mall = 0;

function getMoney(index){
    if(index === 1){
      var cash = 150;
      var plus2 = mall*0.18 * cash;
      var plusRound = Math.round(plus2);
      plus(plusRound);
      

    }
    else if(index === 2){
        minus(2000);
        console.log("rot");
    }
    else{
        console.log("error");
    }





}


function TimeOut(){
    document.querySelectorAll(".blue").forEach(btn => btn.disabled = true);
    setTimeout(action, 1500)
    console.log("du hs");


}

function click1(element){

    
    
   if(element.id === "id1"){
        
    element.disabled = true;
    if(one === true){
        color(eins);
        getMoney(2);
        TimeOut()
            
        }
    else{
        color2(eins)
            
            
        mall++;
        
        getMoney(1);
        }
    } 

else if(element.id === "id2"){
    element.disabled = true;
    if(two === true){
        color(zwei);
        getMoney(2);
        TimeOut()
    } else {
        color2(zwei)
        mall++;
       
        getMoney(1);
    }
}

else if(element.id === "id3"){
    element.disabled = true;
    if(three === true){
        color(drei);
        getMoney(2);
        TimeOut()
    } else {
        color2(drei)
        mall++;
        
        getMoney(1);
    }
}

else if(element.id === "id4"){
    element.disabled = true;
    if(four === true){
        color(vier);
        getMoney(2);
        TimeOut()
    } else {
        color2(vier)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id5"){
    element.disabled = true;
    if(five === true){
        color(funf);
        getMoney(2);
        TimeOut()
    } else {
        color2(funf)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id6"){
    element.disabled = true;
    if(six === true){
        color(sechs);
        getMoney(2);
        TimeOut()
    } else {
        color2(sechs)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id7"){
    element.disabled = true;
    if(seven === true){
        color(sieben);
        getMoney(2);
        TimeOut()
    } else {
        color2(sieben)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id8"){
    element.disabled = true;
    if(aigth === true){
        color(acht);
        getMoney(2);
        TimeOut()
    } else {
        color2(acht)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id9"){
    element.disabled = true;
    if(nine === true){
        color(neun);
        getMoney(2);
        TimeOut()
    } else {
        color2(neun)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}


else if(element.id === "id10"){
    element.disabled = true;
    if(one1 === true){
        color(eins1);
        getMoney(2);
        TimeOut()
    } else {
        color2(eins1)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id11"){
    element.disabled = true;
    if(two1 === true){
        color(zwei1);
        getMoney(2);
        TimeOut()
    } else {
        color2(zwei1)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id12"){
    element.disabled = true;
    if(three1 === true){
        color(drei1);
        getMoney(2);
        TimeOut()
    } else {
        color2(drei1)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id13"){
    element.disabled = true;
    if(four1 === true){
        color(vier1);
        getMoney(2);
        TimeOut()
    } else {
        color2(vier1)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id14"){
    element.disabled = true;
    if(five1 === true){
        color(funf1);
        getMoney(2);
        TimeOut()
    } else {
        color2(funf1)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id15"){
    element.disabled = true;
    if(six1 === true){
        color(sechs1);
        getMoney(2);
        TimeOut()
    } else {
        color2(sechs1)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id16"){
    element.disabled = true;
    if(seven1 === true){
        color(sieben1);
        getMoney(2);
        TimeOut()
    } else {
        color2(sieben1)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id17"){
    element.disabled = true;
    if(aigth1 === true){
        color(acht1);
        getMoney(2);
        TimeOut()
    } else {
        color2(acht1)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id18"){
    element.disabled = true;
    if(nine1 === true){
        color(neun1);
        getMoney(2);
        TimeOut()
    } else {
        color2(neun1)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}


else if(element.id === "id19"){
    element.disabled = true;
    if(one2 === true){
        color(eins2);
        getMoney(2);
        TimeOut()
    } else {
        color2(eins2)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id20"){
    element.disabled = true;
    if(two2 === true){
        color(zwei2);
        getMoney(2);
        TimeOut()
    } else {
        color2(zwei2)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id21"){
    element.disabled = true;
    if(three2 === true){
        color(drei2);
        getMoney(2);
        TimeOut()
    } else {
        color2(drei2)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id22"){
    element.disabled = true;
    if(four2 === true){
        color(vier2);
        getMoney(2);
        TimeOut()
    } else {
        color2(vier2)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id23"){
    element.disabled = true;
    if(five2 === true){
        color(funf2);
        getMoney(2);
        TimeOut()
    } else {
        color2(funf2)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id24"){
    element.disabled = true;
    if(six2 === true){
        color(sechs2);
        getMoney(2);
        TimeOut()
    } else {
        color2(sechs2)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}

else if(element.id === "id25"){
    element.disabled = true;
    if(seven2 === true){
        color(sieben2);
        getMoney(2);
        TimeOut()
    } else {
        color2(sieben2)
        mall++;
        console.log(mall)
        getMoney(1);
    }
}



}


