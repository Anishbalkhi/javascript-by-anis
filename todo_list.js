let todo = []
let req = prompt("enter your task:")
while(true){
    if(req == "add"){
        let task = prompt("enter your task:")
        todo.push(task)
        if(task == "list"){
            console.log("list")
            
                console.log(todo)
            
            
        }
        else if(task == "quit"){
            console.log("quit")
            console.log("--------------------------")
            break;
        }
    }

}