Array.prototype.reduce2=function(func,initialValue){
    let array=this;
    let counter,acc;
    if(initialValue==undefined){
        acc=array[0];
        counter=1;
    }else{
        acc=initialValue;
        counter=0;
    }
    for(let i=counter;i<array.length;i++){
        acc=func(acc,array[i]);
    }
    return acc;
}

Array.prototype.map2=function(func){
    const newArray=[];
    for(let i=0;i<this.length;i++){
        newArray[i]=func(this[i],i,this);
    }
    return newArray;
}
