const searchFunction = (t_key, t_productName) => {
    const n = t_key.length;
    const m = t_productName.length;
    var key = t_key.toLowerCase();

    const productName = t_productName.toLowerCase();
    
    if(n===0) return true;
    
    if(n>m) return false;
    let i=0; // for product
    let j=0; // for key

    while(i<m) {
        let tempI=i;
        j=0;
        while(tempI<m && j<n) {
            if(key[j] === productName[tempI]) {
                j++;
                tempI++;
            }
            else  break;
        }

        if(j === n)   return true;
        i++;
    }

    return false;
}

export default searchFunction;