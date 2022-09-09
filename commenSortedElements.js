const arr1=[5,6,9,15,20,30,80];;
const arr2=[6,7,9,20,80,100];
const arr3=[3,4,5,6,7,8,9,10,20,30];


function check(arr1,arr2,arr3,n1,n2,n3){
    let result=[];
    let i=0,j=0,k=0;
    while(i!=n1 && j!=n2 && k!=n3){
        let max=arr1[i];
        if(max==arr2[j] && arr2[j]==arr3[k]){
            result.push(max);
            i++;
            j++;
            k++;
        }
        else if(arr2[j]>max)
            i++;
        else if(arr3[k]>arr2[j])
            j++;
        else 
            k++;
        console.log(result);
    }
}
check(arr1,arr2,arr3,arr1.length,arr2.length,arr3.length);
