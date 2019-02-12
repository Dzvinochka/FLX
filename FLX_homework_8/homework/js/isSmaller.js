function isBigger (a, b) {
 return a>b; 
}
function isSmaller (a,b) {
 return isBigger (b,a); 
}

isBigger(12,4);
isSmaller(-3,10);