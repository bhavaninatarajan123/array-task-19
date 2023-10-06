var a=[];
var n=parseInt(prompt("Enter the size of the array"));

	
for (let i=0; i<n; i++){
	a[i]=parseInt(prompt("Enter the" + (i+1) +" value"));
}

document.write("Given Array = "+a+"<br><br>");


var b=[];
for (i=a.length-1;i>=0;i--){
b.push(a[i]);

}
document.write("the reverse of the given number is"+b);