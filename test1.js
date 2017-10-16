function stringDiff(a,b){
	var count = 0;
    var arrA = a.split("");
	var arrB = b.split("");
	var charCountA = {};
	var charCountB = {};
	var allChars = Array.from(new Set(a+b));
	for(var i = 0; i < arrA.length; i++){
        if(charCountA[arrA[i]] == undefined){
            charCountA[arrA[i]] = 1;
        }else{
            charCountA[arrA[i]] += 1;
        }
	}
    for(var j = 0; j < arrB.length; j++){
        if(charCountB[arrB[j]] == undefined){
            charCountB[arrB[j]] = 1;
        }else{
            charCountB[arrB[j]] += 1;
        }
    }
    
    for(var x = 0; x < allChars.length; x++){
        switch(true){
            case charCountA[allChars[x]] == undefined && charCountB[allChars[x]] !== undefined:
            count += charCountB[allChars[x]];
            break;

            case charCountA[allChars[x]] !== undefined && charCountB[allChars[x]] == undefined:
            count += charCountA[allChars[x]];
            break;

            case charCountA[allChars[x]] !== undefined && charCountB[allChars[x]] !== undefined:
            count += Math.abs(charCountA[allChars[x]] - charCountB[allChars[x]]);
            break;
        } 
    }
    return count;
  }
  
  console.log(stringDiff('bacdc', 'dcbac'));
  console.log(stringDiff('bacdc', 'dcbad'));
  console.log(stringDiff('taha', 'feras'));