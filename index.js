let myLeads = []

let inputEl = document.getElementById("input-el")

const ulEl = document.getElementById("ul-el")


let inputBtn = document.getElementById("input-btn")

let leadsFromsLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

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






