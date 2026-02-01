// nullish coalescing operator (??) : null undefined 

let result = value ?? defaultValue;


/*

--> “If value is null or undefined, use defaultValue. Otherwise, keep value.”
--> ?? walks left → right and returns the first defined value.
If none are defined, it returns the last null/undefined value.   
  
*/


is else 
switch 
ternary 

falsy 
0 , false, "" , -0 , null ,undefined, BigInt 0n

truty
"0","false"," ",[],{},function(){}
