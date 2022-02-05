function ucFirst(str){
    str = str.toLowerCase()
    str = str.replace(str[0],str[0].toUpperCase())
    return str
}


function checkSpam(str){
    return str.include("xxx") || str.include("viagra")


}

function truncate(str,maxlength){

    str = str.substring(0, maxlength);
    str = str.padEnd(maxlength + 3, '.');
    return str

}


function extractCurrencyValue(string, rate) {
    return rate * Number(string.substring(1))

}