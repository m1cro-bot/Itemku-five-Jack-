const stageLog = (N, Users)=>{
    let x = 0
    let n = 1
    let failRate = []
    let stageRate = []
    do{
        let dum = 0
        let user = Users.length-x
        for(let i=0; i<Users.length; i++){
            if(Users[i] === n){
                x = x+1
                dum = dum+1
            }
        }
        let rate = dum/user*100
        failRate.push({stage: n, rate: rate})
        n++
    }while(n<N+1)
    failRate.sort(function(a, b){
        return b.rate-a.rate;
    })
    failRate.forEach(stage => {
        stageRate.push(stage.stage)
    })
    console.log(stageRate);
    return stageRate
}
stageLog(5, [2,1,2,6,2,4,3,3])