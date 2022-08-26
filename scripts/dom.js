
var todos = []
var rendertodos = (todos) =>{
    var lis = document.querySelectorAll("ul li")
    lis.forEach((li) =>{
        li.remove()
    })
    todos.forEach((val) => {
        var li = document.createElement("li")
        if(val.done){
            li.className = "done"
        }
        li.innerHTML = `<input class="check" data-id=${val.id} type="checkbox">
        ${val.content} 
        <span data-id=${val.id} class="btn-edit"><i class="fas fa-edit"></i></span>
        <span id=${val.id} class="btn-delete"><i class="fas fa-trash"></i></span>`
        
        ul.appendChild(li)
    })
    document.querySelector(".nb-todos").textContent = `(${todos.length})`
    if(todos.length > 5){
        var hight = document.querySelector("li").offsetHeight
        document.querySelector("ul").style.height = `${hight * 5}px`
    }
}
var ul = document.querySelector("ul")

rendertodos(todos)
var submit = document.querySelector(".submit")
var input = document.querySelector(".text-input")
var addInput = document.querySelector(".input-add")


var renderbuttons = (e) =>{
    var btnb = addInput.querySelectorAll(".input-add button")
    btnb.forEach((val) =>{
        val.remove()
    })
    if(selectedTodos){
        var cedit = document.createElement("button")
        var ccancel = document.createElement("button")
        cedit.textContent = "Edit"
        cedit.className = "submit-edit"
        ccancel.textContent = "Cancel"
        ccancel.className = "submit-cancel"
        addInput.appendChild(cedit)
        addInput.appendChild(ccancel)
    }else{
        var csubmit = document.createElement("button")
        var ccancel = document.createElement("button")
        csubmit.textContent = "Submit"
        csubmit.className = "submit"
        ccancel.textContent = "Cancel"
        ccancel.className = "submit-cancel"
        addInput.appendChild(csubmit)
        addInput.appendChild(ccancel)
    }
}
var selectedTodos = null
var handlesubmit = (todos) =>{
    var textInput = input.value
    if(!textInput){
        alert("input is empty!")
    }else{
        todos.push({
        id: Date.now(),
        content: textInput,
        done: false
        })
        rendertodos(todos)
    }
}

var handleedit = (todos) =>{
    selectedTodos.content = input.value;
    input.value = ''
    selectedTodos = null
    rendertodos(todos)
    renderbuttons(selectedTodos)
    
}
var handlecancel = (todos) =>{
     input.value = ''
     selectedTodos = null
    renderbuttons(selectedTodos)
    
}

document.addEventListener("click",function(e){
    var target = e.target
    var btnDelete = target.closest(".btn-delete")
    var btnEdit = target.closest(".btn-edit")
    var btnsubmit = target.closest(".submit")
    var btncheck = target.closest(".check")
    var btnupdate = target.closest(".submit-edit")
    var btncancel = target.closest(".submit-cancel")
    if(btnDelete){
        var iddlt = btnDelete.getAttribute("id")
        var inxdlt = todos.findIndex((val) => val.id == iddlt)
        todos.splice(inxdlt,1)
        rendertodos(todos)
    } 
    if(btnEdit){
        var ided = btnEdit.dataset.id;
        document.querySelector(".text-input").focus()
        var indxed = todos.findIndex((val) => val.id == ided)
        input.value = todos[indxed].content
        selectedTodos = todos[indxed]
        renderbuttons(selectedTodos)
    }
    if(btncancel){
        handlecancel(todos)
        
    }
    if(btnupdate){
        handleedit(todos)
    }
    if(btnsubmit){
        handlesubmit(todos)
    }
    if(btncheck){
        var idc = btncheck.dataset.id
        var inxc = todos.findIndex((val) => val.id == idc);
        todos[inxc].done = !todos[inxc].done
        rendertodos(todos)
    }
})

input.addEventListener("keyup",function(e){
    if(e.keyCode === 13 ){
        if(!selectedTodos){
            handlesubmit(todos)
        }
        else{
            handleedit(todos)
        }
    }
    
    if(e.keyCode === 27){
        handlecancel(todos)
    }
})
