const headerBox=document.querySelector("#header");
const contactName =document.querySelector("#contactName");
const phoneNum =document.querySelector("#phoneNum");
const submitBtn =document.querySelector("#subBtn");
const displayed =document.querySelector("#belowHeader");
const serialNum =document.querySelector("#Snum");
const name =document.querySelector("#showName");
const number =document.querySelector("#showNum");
// const deleteDeta=document.querySelector("#delete");



let count=0;
submitBtn.addEventListener('click',(e)=>{
     e.stopPropagation();
     count++;

  let vat=document.querySelector("#contactName").value; 
  let cat=document.querySelector("#phoneNum").value;
  document.querySelector("#contactName").innerText="";
  document.querySelector("#phoneNum").innerText="";
  
  localStorage.setItem(vat,cat);

//   myData(count);
  data(count,vat,cat);
});
function myData(count){
     for(let i=0;i<localStorage.length;i++){
     let keys=localStorage.key(i);
     let val=localStorage.getItem(keys)
    data(count,keys,val);
}
}

function data(count,a,b){
     // console.log("this is run");
     // let count=localStorage.lenght;
     //  console.log(count);
let dataDisplay=document.createElement("div");
     dataDisplay.setAttribute('class','container');
     dataDisplay.setAttribute('id','belowHeader');

let  sNumDisplay=document.createElement("div");
sNumDisplay.innerText=`${count}`;
sNumDisplay.setAttribute('class','boxes');
sNumDisplay.setAttribute('id','Snum');

let  nameDisplay=document.createElement("div");
nameDisplay.innerText=`${a? a:"oh!you miss name "}`;
nameDisplay.setAttribute('class','boxes');
nameDisplay.setAttribute('id','showName');

let  numberDisplay=document.createElement("div");
numberDisplay.innerText=`${b ? b:"oh!you miss number"}`;
numberDisplay.setAttribute('class','boxes');
numberDisplay.setAttribute('id','showNum');

let  deleteBtn=document.createElement("div");
deleteBtn.innerHTML=`<svg
xmlns="http://www.w3.org/2000/svg"
width="16"
height="16"
fill="currentColor"
class="bi bi-trash3"
viewBox="0 0 16 16"
>
<path
  d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"
/>
</svg>`;
deleteBtn.setAttribute('class','boxes');
// deleteBtn.setAttribute('id','deleteBtn');
deleteBtn.addEventListener('click',(e)=>{
     e.target.setAttribute("id","deleteBtn")
dataDisplay.remove();
})

headerBox.insertAdjacentElement("beforeend",dataDisplay);
dataDisplay.appendChild(sNumDisplay);
dataDisplay.appendChild(nameDisplay);
dataDisplay.appendChild(numberDisplay);
dataDisplay.appendChild(deleteBtn);
}