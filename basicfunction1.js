// If I'm understanding this correctly, I believe I got 10/15 correct on this assignment. 

// 1
function a(){
    return 35;
}
console.log(a())
// answer: the function will display 35.


// 2
function a(){
    return 4;
}
console.log(a()+a());
// answer: the function will display 4. 

// 3
function a(b){
    return b;
}
console.log(a(2)+a(4));
// answer: 2+4= 6. the function will display 6.

// 4
function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));
// answer: 3*3=9. the function will display 9. 

// 5
function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));
// answer: Once it completes return, the function is done. 

// 6
function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));
// answer: Once it completes return, the function is done.

// 7
function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
// answer: 10*3= 30. The function will log 30.

// 8
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
// answer: not a proper function. 

// 9
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
// answer: the console would log 2.

// 10
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
// answer: this is an incorrect function. 

// 11
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
// answer: incorrect function. 

// 12
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
// answer: incorrect function. 

// 13
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);
// answer: z=10. The console would log 10.

// 14
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);
// answer: z=15. The console would log 15.


// 15
var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
// answer: z=15. The console would log 15. same as function above ^. 
