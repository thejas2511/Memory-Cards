backimages="images/backside.jpg";
front="images/front.jpg";
var time;
var numbers=[]
var tap_counts;
let prev_card;
let prev_cardinner;
let curr_cardinner;
let curr_card;
let prev_val;
let curr_val;
let score;
let ifopen=false;
let level=1;
let totalcards;

function start(level){
    document.getElementsByClassName("tiles")[0].style.display="block";
    document.getElementById("level").innerHTML=level;
    document.getElementById("levelhead").style.display="block";
    numbers=[];
    for(let i=0;i<10;i++){
        a=Math.floor(Math.random() * 100) + 1;
        numbers.push(a,a);
    }
    for(let i=1;i<21;i++){
        document.getElementById('inner'+i).style.transform="none";
        document.getElementById('card'+i+i).style.display="block"
    }

    numbers=shuffle(numbers);
    tap_counts=0;
    console.log(numbers);
    if(level==1)time=600;
    else if(level==2)time=450;
    else time=300;
    setTimeout(timeup,time*1000);
    totalcards=20;
    score=0;
    document.getElementById("score").innerHTML=score;
    setInterval(timer,1000);
    

}

easy=1;


async function switchcard(id){
    
    tap_counts+=1;
    console.log('hello');
    image=document.getElementById(id);
    var cardnumber=parseInt(id.replace('card',''));
    
    cardinner=document.getElementById("inner"+cardnumber);

    cardinner.style.transform="rotateY(180deg)";
    await new Promise(r => setTimeout(r, 450));

    
    value=numbers[cardnumber-1];
    valueimage=document.getElementById(id+cardnumber);
    
        
   
    valueimage.innerHTML=value;

    console.log(valueimage.innerHTML)

    curr_val=value;
    curr_card=valueimage;
    curr_cardinner=cardinner;

    console.log(curr_cardinner,'curr inner','prev-',prev_cardinner);
 
    console.log(prev_val,curr_val);

    if(!prev_card){
        prev_val=value;
        prev_card=valueimage;
        prev_cardinner=cardinner;
        curr_card=null;
        curr_val=null;
        curr_cardinner=null;

        ifopen=true;
    }
    else{
        if(prev_val==curr_val){
            score+=1;
            console.log(prev_val,curr_val,45454545);
            totalcards-=2;
            prev_card.style.display="none";
            curr_card.style.display="none";
            document.getElementById("score").innerHTML=score;
            if(totalcards<=0){
                if(level+1==4){
                    window.alert("Yayy You wonnnnn!!!");
                    location.reload();
                }
                else{
                window.alert(`Now level-${level+1}`);
                start(level+1);
                }
            }
        }
        else{
            await new Promise(r => setTimeout(r, 200));
            
           
            prev_cardinner.style.transform="none";
                
            
            
            curr_cardinner.style.transform="none";
            
            console.log("vetti mundam");
        }
        console.log(prev_val,curr_val);
        prev_card=null;
        prev_cardinner=null;
        curr_card=null;
        prev_val=null;
        curr_cardinner=null;
        curr_val=null;

        
    }
    console.log(prev_val,curr_val);

 
  
    
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }


function timer(){
    time-=1;
    document.getElementById("timer").innerHTML=`${Math.floor(time/60)}mins:${time%60}secs`;

}

function timeup(){
    window.alert("Timeup:(");
    location.reload();
}
