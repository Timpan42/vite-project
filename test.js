export function test(element){

// max msg, 10st X
// förbjud tomma meddelande X
// /h hjälp X
// msg historik X
// lyssna på enter X

    const send = element.querySelector('#send')
    const sendEnter = element.querySelector('#msg')
    const history = element.querySelector('#history')
    const msglist = element.querySelector('#msglist')
    const historiyList = element.querySelector('#historyList')
    const li = document.createElement('li')
    let saveList = []

    history.addEventListener('click', (r) =>{
        r.preventDefault()
        const hidenHistory = element.querySelector("#hidenHistory")
        if(hidenHistory.style.display === "none"){
            hidenHistory.style.display = "block"
        } else{
            hidenHistory.style.display = "none"
        }

        
        for(let i = 0; i < saveList.length; i++){
            historiyList.appendChild(saveList[i])
        }
    })


    send.addEventListener('click', (e) =>{ 
        e.preventDefault()
        
        const msg = element.querySelector('#msg').value;
        
        if(msg == "" ){
            alert("You need ext!")
        }
        else if(msg == "/h" || msg == "/help"){
            alert("You can add text to the input field. " +
            "Use the /h or /help to show the help menu. " +
            "When pressing the History button the information get stord. " + 
            "When exceeding 10 messages the messages gets deleted from the list below but gets stord in the history list. ")
        }
        else if(msglist.children.length > 10){
            li.textContent = msg
            msglist.appendChild(li)
            msglist.removeChild(msglist.children[0])
            saveList.push(li)
            
        } 
        else{
            const li = document.createElement('li')
            li.textContent = msg
            msglist.appendChild(li)
            saveList.push(li)
        }
    })
    sendEnter.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          send.click();
        }
    })
}
