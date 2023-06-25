let myLeads = []

const inputEl = document.getElementById("input-el")

const ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("del-btn")


const tabBtb = document.getElementById("tab-btn")



const inputBtn = document.getElementById("input-btn")

const leadsFromsLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromsLocalStorage) {
    myLeads = leadsFromsLocalStorage
    render(myLeads)
}


function render(leads) {

    let listItems = ""


    for (let i = 0; i < leads.length; i++) {
        listItems += `<li>
         <a href='${leads[i]}' target='_blank'> ${leads[i]}</a>
         </li>`

    }
    ulEl.innerHTML = listItems


}








tabBtb.addEventListener("click", function () {
    brower.tabs.query({ active: true, currentWindow: true }, function (tabs) {

        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })




})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    ulEl.textContent = ""
})


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""


    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

})









// function deleteLeads(){
//     localStorage.clear()
//     ulEl.textContent=""



// }





