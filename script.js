var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="5px";
button.addEventListener("click",foo);

let result=document.createElement("div"); 
result.setAttribute("id","result");


div.append(input,button,result);
document.body.append(div);

async function foo(){
    try{
    let res=document.getElementById("country").value;
    console.log(res);
    let url=`https://api.covid19api.com/total/dayone/country/${res}`;
let res1=await fetch(url);
let res2=await res1.json();
let index=res2.length-1;
console.log(res2[index].Active);
console.log(res2[index].Deaths);
console.log(res2[index].Recovered);
result.innerHTML=
`Total Active cases: ${res2[index].Active}<br>
Total Death cases: ${res2[index].Deaths}<br>
Total Recovered cases: ${res2[index].Recovered}<br>
Total Sum:${res2[index].Active+res2[index].Deaths+res2[index].Recovered}`;
    }
    catch(Error){
        console.log(error);
    }

}