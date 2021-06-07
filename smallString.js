function decimalValueFrom26(y){
    var value=0;
    var lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var string2=y.split("");
    string2=string2.reverse();
    var k=0;
    //console.log(string2);
    for(var j=0;j<string2.length;j++){
        for(var i=0;i<lower.length;i++){
            if(lower[i]==string2[j]){
                value=value+(Math.pow(26,k))*i;
                k++;
            }                        
    }
    //console.log(value);
    
    }
    return value;
    

}
function decimalValueFrom62(y){
    var value=0;
    var alphanum=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var string2=y.split("");
    string2=string2.reverse();
    var k=0;
    //console.log(string2);
    for(var j=0;j<string2.length;j++){
        for(var i=0;i<alphanum.length;i++){
            if(alphanum[i]==string2[j]){
                value=value+(Math.pow(62,k))*i;
                k++;
            }                        
    }
    //console.log(value);
    
    }
    return value;
    

}
decimalValueFrom26("abc");
function convertToSixtyTwo(x) {
var alphaNum=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//var alphaNum={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"a",11:"b",12:"c",13:"d",14:"e",15:"f",16:"g",17:"h",18:"i",19:"j",20:"k",21:"l",22:"m",23:"n",24:"o",25:"p",26:"q",27:"r",28:"s",29:"t",30:"u",31:"v",32:"w",33:"x",34:"y",35:"z",36:"A",37:"B",38:"C",39:"D",40:"E",41:"F",42:"G",43:"H",44:"I",45:"J",46:"K",47:"L",48:"M",49:"N",50:"O",51:"P",52:"Q",53:"R",54:"S",55:'T',56:"U",57:"V",58:"W",59:"X",60:"Y",61:"Z"}
var string="";
var rem;
var dict={0:"a",}
while (x != 0) {
rem = x % 62;
//console.log(rem);
x = parseInt(x / 62);
string=string+alphaNum[rem];
}
var split=string.split("");

var revString=split.reverse();
revString=revString.join("");

string=revString;

console.log(`Shortened String": ${string}`);
}
function convertToTwentySix(x) {
var lowerAlpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// var lowerAlpha={0:"a",1:"b",2:"c",3:"d",4:"e",5:"f",6:"g",7:"h",8:"i",9:"j",10:"k",11:"l",12:"m",13:"n",14:"o",15:"p",16:"q",17:"r",18:"s",19:"t",20:"u",21:"v",22:"w",23:"x",24:"y",25:"z"}
var string="";
var rem;
var dict={0:"a",}
while (x != 0) {
rem = x %26 ;
//console.log(rem);
x = parseInt(x / 26);
string=string+lowerAlpha[rem];

}
var split=string.split("");

var revString=split.reverse();
revString=revString.join("");

string=revString;

console.log(`Original String": ${string}`);
}



function codeToSixyTwo(x){
var decimalValue=decimalValueFrom26(x);
convertToSixtyTwo(decimalValue);
}
function codeToTwentySix(x){
var decimalValue2=decimalValueFrom62(x);
convertToTwentySix(decimalValue2);
}
codeToSixyTwo("heythere");
codeToTwentySix("112qKqy");
codeToSixyTwo("srikanth");
codeToTwentySix("2DEcUiJ");