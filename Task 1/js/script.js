const addForm = document.querySelector("#addForm")
const contentWrap= document.querySelector("#contentWrap")
const taskHeads = ["taskTitle", "taskContent","taskPhone", "age"]
// read from storage //union operator ||
const readFromStorage = (key) =>{
    let data 
    try{
        // data = JSON.parse(localStorage.getItem(key)) || [] 
        data = JSON.parse(localStorage.getItem(key))
        if(!Array.isArray(data)) throw new Error("is not array")
    }
    catch(e){
        // console.log(e)
        data = []
    }
    return data
}
// write to storage
const writeDataToStorage = (key, value) =>{
    try{
        localStorage.setItem(key, JSON.stringify(value))
    }
    catch(e){
        localStorage.setItem(key, "[]")
    }
}
// add (create)
if(addForm){
    addForm.addEventListener("submit", function(e){
        e.preventDefault()
        // console.log(this)
        // console.log("test")
        // const task = {
        //     taskTitle: addForm.elements['taskTitle'].value,
        //     taskContent: addForm.elements.taskContent.value
        // }
        const task = { status: false, id: Date.now() }
        taskHeads.forEach( h => task[h] = addForm.elements[h].value )
        const allTasks = readFromStorage("tasks")
        allTasks.push(task)
        writeDataToStorage("tasks", allTasks)
        addForm.reset()
        window.location.href = "index.html"
    })    
}

const createMyOwnElement = (parent, ele, text, classes) =>{
    const myEle = document.createElement(ele)
    if(text) myEle.textContent = text
    if(classes) myEle.classList=classes
    parent.appendChild(myEle)
    return myEle
}

/*if(contentWrap){
        const allData = readFromStorage('tasks')
         allData.forEach((task, i)=>{
            const tr = document.createElement("tr")
             contentWrap.appendChild(tr)
             let td = document.createElement("td")
             tr.appendChild(td)
             td.textContent = task.id
             td = document.createElement("td")
             tr.appendChild(td)
             td.textContent = task.taskTitle
             td = document.createElement("td")
             tr.appendChild(td)
             td.textContent = task.taskPhone
             td = document.createElement("td")
             tr.appendChild(td)
             td.textContent = task.age
             td = document.createElement("td")
             tr.appendChild(td)
             const activeBtn = document.createElement("button")
             activeBtn.textContent = "active"
             activeBtn.classList="btn btn-success mx-3"
             td.appendChild(activeBtn)
             activeBtn.addEventListener("click", function(e){
                 activeBtn.textContent = "inactive"
                    activeBtn.classList="btn btn-danger mx-3"

                    if(!task.status){
                        activeBtn.classList="btn btn-danger mx-3";
                        activeBtn.textContent="Inactive"
                        task.status=true;
                        writeDataToStorage("tasks",allData)
                    }
                    else
                   {
                    activeBtn.classList="btn btn-success mx-3";
                    activeBtn.textContent="Active";
                    task.status=false;
                    writeDataToStorage("tasks",allData)
            
                
                   } 


            })
             td = document.createElement("td")
             tr.appendChild(td)
             const showBtn = document.createElement("button")
             showBtn.textContent = "show"
             showBtn.classList="btn btn-primary mx-3"
             td.appendChild(showBtn)
             showBtn.addEventListener("click", function(e){
                 window.alert(`${i}`)
             })
             const editBtn = document.createElement("button")
             editBtn.textContent = "Edit"
             editBtn.classList="btn btn-warning mx-3"
             td.appendChild(editBtn)
             const delBtn = document.createElement("button")
             delBtn.textContent = "Delete"
             delBtn.classList="btn btn-danger mx-3"
             td.appendChild(delBtn)
        } )} */



        const showAll = (allData) =>{
            contentWrap.innerHTML=""
            if(allData.length==0){
                const tr = createMyOwnElement(contentWrap, "tr", null, "alert alert-danger")
                const td = createMyOwnElement(tr, "td", "No Data Yet", "alert alert-danger")
                td.setAttribute("colspan", "3")
            }
            allData.forEach((task, i)=>{
                const tr = createMyOwnElement(contentWrap, "tr", null, null)
                createMyOwnElement(tr, "td", task.id, null)
                createMyOwnElement(tr, "td", task.taskTitle, null)
                createMyOwnElement(tr, "td", task.taskPhone, null)
                createMyOwnElement(tr, "td", task.age, null)

                td = createMyOwnElement(tr, "td", null, null)
                const activeBtn = createMyOwnElement(td, "button", "active","btn btn-success mx-3")

                activeBtn.addEventListener("click", function(e){
                 
                    if(!task.status){
                        activeBtn.classList="btn btn-danger mx-3";
                        activeBtn.textContent="Inactive"
                        task.status=true;
                        writeDataToStorage("tasks",allData)
                    }
                    else
                   {
                    activeBtn.classList="btn btn-success mx-3";
                    activeBtn.textContent="Active";
                    task.status=false;
                    writeDataToStorage("tasks",allData)
            
                
                   } 

                })



                td = createMyOwnElement(tr, "td", null, null)

                const showBtn = createMyOwnElement(td, "button", "show","btn btn-primary mx-3")
                const editBtn = createMyOwnElement(td, "button", "Edit","btn btn-warning mx-3")
                const delBtn = createMyOwnElement(td, "button", "Delete","btn btn-danger mx-3")
                showBtn.addEventListener("click", function(e){
                    window.alert(`${i}`)
                })     
                delBtn.addEventListener("click", (e)=>{
                    allData.splice(i, 1)
                    writeDataToStorage("tasks",allData)
                    showAll(allData)
                })   
            })
        }
        if(contentWrap){
            const allData = readFromStorage('tasks')    
            showAll(allData)
        }