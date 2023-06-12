const toDoItems = document.querySelectorAll(".to-do-items")[0];
const input = document.querySelector("#input");
const trashIcon = document.querySelector("#trash");

input.addEventListener("keydown", function(event){
    if(event.key === "Enter")
    addItem();
})


function addItem(){
    const divParent = document.createElement("div");
    const divChild = document.createElement("div");
    const checkIcon = document.createElement("i");
    const trashIcon = document.createElement("i"); 

    divParent.className = "item";
        if(input.value === ""){
          alert("Please enter any text")  
        } 
        
        else {
            divParent.innerHTML = '<div>'+input.value+'</div>';        
       
            checkIcon.className = "fas fa-check-square";
            checkIcon.style.color = "lightgrey";
            checkIcon.addEventListener("click", function(){
            checkIcon.style.color = "limegreen";
            })

            divChild.appendChild(checkIcon);

            trashIcon.className = "fas fa-trash";
            trashIcon.style.color = "darkgray";
            trashIcon.addEventListener("click", function(){
            divParent.remove();
            })

            divChild.appendChild(trashIcon);

            divParent.appendChild(divChild);
            toDoItems.appendChild(divParent);

            input.value = " ";

        }      

}