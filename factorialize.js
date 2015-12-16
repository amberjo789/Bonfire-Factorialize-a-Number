function factorialize(num) {
 
  var acc=1;
  for(var i = num; i>0; i--){
    acc = acc*i;
  }
  num = acc;
  return num;
}

/*
Can also do this recursively: 

function factorialize(num){
	  if(num == 0) {
	    return 1;
	  }  
	  else {
	    return num*factorialize(num-1);
	  }
	}
*/

factorialize(5);