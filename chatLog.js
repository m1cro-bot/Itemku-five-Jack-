const chatLog = (value) => {
    let Nick = []
    let User = []
    let logUser = []
    let logChat = []
    value.forEach((item) => {
        let data = item.split(" ")
        if(item.startsWith("Enter")){
            let x = User.indexOf(data[1])
            if(x>=0){
                Nick.splice(x, 1, data[2])
            } else{
                User.push(data[1])
                Nick.push(data[2])
            }
            logUser.push(`${data[1]} came in`)
        } else if(item.startsWith("Leave")){
            logUser.push(`${data[1]} hash left`)
        } else if(item.startsWith("Change")){
            let nickIndex = User.indexOf(data[1])
            Nick.splice(nickIndex, 1, data[2])
        }
    });
    logUser.forEach((item) => {
        let data = item.split(" ")
        let dataIndex = User.indexOf(data[0])
        data.splice(0, 1, Nick[dataIndex])
        logChat.push(data.join(" "))
    });
    console.log(logChat);
    return logChat
}

chatLog(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"])