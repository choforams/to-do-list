let btn = document.querySelector("button")
let ul = document.querySelector("ul")

btn.addEventListener("click", function(){
    let task = document.querySelector("input").value

    if (task.trim() !==0){
        let li = document.createElement("li")
        li.textContent = task
        ul.appendChild(li)
        li.appendChild(addDeleteBtn())
        ul.appendChild(li)

    }
    else{
        alert("Error!");
    }
})

function addDeleteBtn(){
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"

    deleteBtn.addEventListener("click", (e)=>{
        let item = e.target.parentElement
        ul.removeChild(item)
    })
    return deleteBtn
}