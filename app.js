alert("GAME RULES:- \nThe game has 2 players, playing in rounds\n- In each turn, a player rolls a dice as many times as he whishes.\n Each result get added to his ROUND score\n- BUT, if the player rolls a 1, all his ROUND score gets lost.\n After that, it's the next player's turn\n- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score\n. After that, it's the next player's turn\n- The first player to reach 100 points on GLOBAL score wins the game");
var s1,s2;
s1=s2=0;
var temp=0;
c=0;
function new1(){
    s1=0;
    s2=0;
    document.getElementById('current-1').innerHTML ="0";
    document.getElementById('current-0').innerHTML ="0";
    document.getElementById('score-1').innerHTML ="0";
    document.getElementById('score-0').innerHTML ="0";
    document.querySelector('.btn-roll').style.display='block';
    document.querySelector('.btn-hold').style.display='block';
}
function roll(){
if(c%2==0){
    var no=Math.floor(Math.random()*6)
    switch(no){
        case 0:temp=temp+no+1;document.getElementById("dice").src="dice-1.png";document.getElementById("current-0").innerHTML=0;c=c+1;temp=0;document.querySelector(".player-0-panel").classList.remove('active');document.querySelector(".player-1-panel").classList.add('active');break;
        case 1:temp=temp+no+1;document.getElementById("dice").src="dice-2.png";document.getElementById("current-0").innerHTML=temp;break;
        case 2:temp=temp+no+1;document.getElementById("dice").src="dice-3.png";document.getElementById("current-0").innerHTML=temp;break;
        case 3:temp=temp+no+1;document.getElementById("dice").src="dice-4.png";document.getElementById("current-0").innerHTML=temp;break;
        case 4:temp=temp+no+1;document.getElementById("dice").src="dice-5.png";document.getElementById("current-0").innerHTML=temp;break;
        case 5:temp=temp+no+1;document.getElementById("dice").src="dice-6.png";document.getElementById("current-0").innerHTML=temp;break;       
    }
    

}
else{
    var no=Math.floor(Math.random()*6)
    switch(no){
        case 0:temp=temp+no+1;document.getElementById("dice").src="dice-1.png";document.getElementById("current-1").innerHTML=0;c=c+1;temp=0;document.querySelector(".player-1-panel").classList.remove('active');document.querySelector(".player-0-panel").classList.add('active');break;
        case 1:temp=temp+no+1;document.getElementById("dice").src="dice-2.png";document.getElementById("current-1").innerHTML=temp;break;
        case 2:temp=temp+no+1;document.getElementById("dice").src="dice-3.png";document.getElementById("current-1").innerHTML=temp;break;
        case 3:temp=temp+no+1;document.getElementById("dice").src="dice-4.png";document.getElementById("current-1").innerHTML=temp;break;
        case 4:temp=temp+no+1;document.getElementById("dice").src="dice-5.png";document.getElementById("current-1").innerHTML=temp;break;
        case 5:temp=temp+no+1;document.getElementById("dice").src="dice-6.png";document.getElementById("current-1").innerHTML=temp;break;
    }
    
}
}
function check(m){
    if(m>200){
        return true;
    }
    else{
        return false;
    }
}

function hold(){
    if(c%2==0){
        document.getElementById('current-1').innerHTML ="0";
        document.getElementById('current-0').innerHTML ="0";
        console.log(temp);
        s1=s1+temp;
        temp=0;
        document.getElementById('score-0').innerHTML=s1;
        c+=1;
        document.querySelector(".player-0-panel").classList.remove('active');
        document.querySelector(".player-1-panel").classList.add('active');
        var chk=check(s1);
        if (chk){
            alert("Player 1 won")
        document.querySelector('.btn-roll').style.display='none';
        document.querySelector('.btn-hold').style.display='none';
         }
    }
    else{
        document.getElementById('current-1').innerHTML ="0";
        document.getElementById('current-0').innerHTML ="0";
        console.log(temp);
        s2=s2+temp;
        temp=0;
        document.getElementById('score-1').innerHTML=s2;
        c+=1;
        document.querySelector(".player-1-panel").classList.remove('active');
        document.querySelector(".player-0-panel").classList.add('active');
        var chk=check(s2);
        if (chk){
            alert("Player 2 won")
            document.querySelector('.btn-roll').style.display='none';
            document.querySelector('.btn-hold').style.display='none';
            
        }
    }

}
