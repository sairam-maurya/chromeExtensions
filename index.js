let myLeads = [];
let inputEl = document.getElementById("input-el")

const ulEl =document.getElementById("ul-el")


let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value=""
    renderLeads()

})


function renderLeads(){

    let listItems=""
    
    
    for( let i=0; i< myLeads.length; i++){
        listItems +="<li>"+ myLeads[i]+"</li>"
    
       }
       ulEl.innerHTML=listItems


}






