//Given a array all ement appears twice except for two elemnts which appears once. Find those two unique elements.

//Normal solution:
//Brute force-Travel->TC=O(n^2) , SC=O(1)
    //       -Frequency-> TC=O(N), SC=O(N)
// let A=[1,1,2,3]
// ht={}
// for(let i=0;i<A.length;i++){
// if(!ht[A[i]])ht[A[i]]=0;
// ht[A[i]]+=1
// }

// console.log(Object.keys(ht));


// for(elem in ht){
// if(ht[elem]===1)console.log(elem);
// }

// Using bit manipulation:

//Step 1-> XOR of all elements.
let A=[1,1,2,2,3,4]// Expect ans->{3,4}
let xor=0;
for(let i=0;i<A.length;i++){
    xor^=A[i];
}
console.log("xor",xor)
//Step-2  Find any set bit in xor.

let b=-1;
for(let i=0;i<32;i++){
    if((xor>>i)&1===1){b=i;break;}
}

//Step-3 Take xor of two groups seperately. Where b th bit is set and unset.

let x=0;
let y=0;

for(let i=0;i<A.length;i++){
    if((A[i]>>b)&1===1){
        x^=A[i];
    }
    else{
        y^=A[i];
    }
}

console.log(x,y);

