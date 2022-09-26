let count=0;

document.getElementById("decrese").onclick = function(){
    if(count<=0)
    {
        return count;
    }
    count-=1;
    document.getElementById("number").innerHTML = count;
}

document.getElementById("increase").onclick = function(){
    if(count>=100)
    {
        return count;
    }
    count+=1;
    document.getElementById("number").innerHTML = count;
}