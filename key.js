const candidateKey = (value)=>{
    //bacause Student Number is Unique key, i dont do check again
    let Key = 1 //i put Student Number to the candidatekey
    for(let i=1; i<value[i].length; i++){
        for(let j=i; j<value[i].length; j++){
            let dum = []
            for(let k=0; k<value.length; k++){
                if(dum.includes(`${value[k][i]} ${value[k][j]}`)){
                    break
                }
                if(k===value.length-1){
                    Key = Key+1
                }
                dum.push(`${value[k][i]} ${value[k][j]}`)
            }
        }
    }
    console.log(Key);
    return Key
}

candidateKey([["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]])