//Check if i th bit is set for given number.
//n=44;   ->Binary->   101100

let n=44;

const checkithbit=(n,i)=>{
    if(((n>>i)&1)===1)return true;
    return false;
    
}

console.log(checkithbit(n,2));