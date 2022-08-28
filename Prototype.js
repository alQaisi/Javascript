Array.prototype.reduce2=function(func,initial=0){
    let acc=initial;
    for(let i=0;i<this.length;i++){
        acc=func(acc,this[i],i);
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
