function mean(arr:number[]):number{
    if (arr.length===0) {
        return 0;
    }
    const sum  = arr.reduce((acc,val)=>acc+val,0)
    const mean =sum/arr.length;
    return mean
}
const arr:number[]=[1,2,3]
const meann :number = mean(arr)
console.log(meann)
const arr1:number[]=[]
const meannn:number = mean(arr1)
console.log(meannn)