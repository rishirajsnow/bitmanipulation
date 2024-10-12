//YOU are given an array with all elements repeats three times except want. Find that element.
// A=[1,1,1,2,2,2,3]

let A=[1,1,1,2,2,2,3];
let ans=0;

for(let b=0;b<32;b++){
    let cnt=0;
   for(let i=0;i<A.length;i++){
    cnt+=(A[i]>>b)&1
   }
   if(cnt%3===1){
    ans |=(1<<b);
   }
    
}

console.log(ans);