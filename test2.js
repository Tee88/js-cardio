function stringCounter(x,y){
	var xStrings = {};
    var result = [];
	for(var i = 0; i < x.length; i++){
    	if(xStrings[x[i]] == undefined){
        	xStrings[x[i]] = 1;
        }else{
        	xStrings[x[i]] += 1;
        }
    }
    
    for(var j = 0; j < y.length; j++){
    	if(xStrings[y[j]] == undefined){
        	result.push(0)
        }else{
        	result.push(xStrings[y[j]]);
        }
    }
    
    return result;
}

var a = ['aba','baba','aba','xzxb'];
var b = ['aba','xzxb','ab'];
console.log(stringCounter(a,b));

var c = ['aba','baba','aba','xzxb'];
var d = ['aba','xzxb','ab','baba','mama'];
console.log(stringCounter(c,d));