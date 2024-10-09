//Given an integer array every element appears twice. Only for one element. Find that element.
//Prerequisite concept of XOR operator - "Same same puppy same."

let A=[1,2,1,2,3]

const unique=(A)=>{
    let ans=0;
    for(let i=0;i<A.length;i++){
        ans^=A[i];
    }
    return ans;
}

console.log(unique(A));