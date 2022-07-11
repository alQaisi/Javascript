for(let i=1;i<8;i+=2){
    let j=0;
    let stars="";
    let empty="";
    while(j<i){
        stars+="*";
        j++;
    }
    j=i;
    while(j<8){
        empty+=" ";
        j+=2;
    }
    console.log(empty+stars);
}