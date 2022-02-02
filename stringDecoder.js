

const decoder = (code)=>{

    const encode=  code.split("")
    let realCode = []

    for(let i = 0; i < encode.length; i++ )
{   x = Number(code[i])
    if(  isNaN(code[i] ) === false){
        realCode.push(code[i +x+1])
    }else if ( code[i] === 0 ){
        realCode.push(code[i+1])
    }
}

console.log(realCode)

}

decoder('0h2xce5ngbrdy')