// Given an integer array, find max value of A[i]& A[j] s.t i!=j.
// A=[10 4 6 12 13 16]-> 12 & 13 =12
//Bit on left side has more preference
// AND -> return 1 when both are one.

//A[i]<=10^9
let A=[26,13,23,28,27,7,25];
let ans=0;
for(let b=30;b>=0;b--){
    //count #A[i] where bth bit is 1
    let cnt=0;
    for(let i=0;i<A.length;i++){
        cnt+=((A[i]>>b)&1)
    }
    if(cnt>=2){
        ans|=(1<<b)//Set b th bit in ans
        //console.log(ans);
        for(let i=0;i<A.length;i++){
            
            if(((A[i]>>b)&1)===0){A[i]=0;}
            //console.log(b)
        }
    }
}
//console.log(A);
console.log(ans);