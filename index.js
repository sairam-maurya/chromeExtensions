let myLeads = []

const inputEl = document.getElementById("input-el")

const ulEl = document.getElementById("ul-el")

const deleteBtn=document.getElementById("del-btn")


const inputBtn = document.getElementById("input-btn")

const leadsFromsLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromsLocalStorage){
    myLeads=leadsFromsLocalStorage
    renderLeads()
}

console.log(leadsFromsLocalStorage)


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""


    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads()

})


function renderLeads() {

    let listItems = ""


    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li>
         <a href='${myLeads[i]}' target='_blank'> ${myLeads[i]}</a>
         </li>`

    }
    ulEl.innerHTML = listItems


}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    ulEl.textContent = ""
})




// function deleteLeads(){
//     localStorage.clear()
//     ulEl.textContent=""



// }





