var txt;
document.getElementById("fname").innerHTML = prompt("Please enter your full name:");
document.getElementById("username").innerHTML = prompt ("Please enter your username:");
if(confirm("What is your assigned gender at birth?\n Press OK if you are Male\n Cancel if Female")==1){
    alert ("Your profile gender is set to guy.");
    document.getElementById("gender").innerHTML = "guy";
}
else{
    alert ("Your profile gender is set to gal.");
    document.getElementById("gender").innerHTML = "gal";
}

document.getElementById("desc").innerHTML = prompt("Please type a brief description of yourself.");

var birthYear = prompt ("Please enter your Birth Year");

document.getElementById("year").innerHTML = birthYear;
document.getElementById("age").innerHTML = 2023 - birthYear;

if(confirm("Do you want to use a custom profile picture?")==1){
    document.getElementById("ppic").src = prompt ("Please enter the file name of the picture. (Ex: ass.jpg)");
    alert("Profile picture has been updated.")
}
else{
    alert("No image has been set.")
}