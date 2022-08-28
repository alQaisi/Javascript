function mergeSort(arr){
    if(arr.length==1)
        return arr;
    const m=parseInt(arr.length/2);
    const left=new Array(m);
    const right=new Array(arr.length-m);
    for(let i=0;i<left.length;i++)
        left[i]=arr[i];
    for(let i=0;i<right.length;i++)
        right[i]=arr[i+m];
    return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right){
    let i=0,j=0,k=0;
    let result=new Array(left.length+right.length);
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result[k]=left[i];
            i++;
        }else{
            result[k]=right[j];
            j++;
        }
        k++;
    }
    while(i<left.length){
        result[k]=left[i];
        i++;
        k++;
    }
    while(j<right.length){
        result[k]=right[j];
        j++;
        k++;
    }
    return result;
}
