function clickButton() {
	var name = document.getElementById("name").value;
	alert("Hello, " + name + "!");
}

function addPost() {
	var postText = document.getElementById("post").value;
	
	// I'm going to create a new paragraph <li>
	var li = document.createElement("li");
	li.innerHTML = postText;
	
	// Get my list
	var posts = document.getElementById("posts");
	posts.appendChild(li);
}

function  calcButton(num){
	var result = document.getElementById("result");
	if (result.value=== "0") {
	result.value = "";
	}
	result.value = result.value + num;
}

function calcButtonDot() {
	var result = document.getElementById("result");
	result.value = result.value + ".";
	document.getElementById("dot").disabled = true;
}

function calcButtonOp(operator){
	var result = document.getElementById("result");
	document.getElementById("temp").value = result.value;
	document.getElementById("operator").value = operator;
	
	document.getElementById("add").disabled = true;
	document.getElementById("subtract").disabled = true;
	document.getElementById("multiply").disabled = true;
	document.getElementById("divide").disabled = true;
	
	result.value= 0;
	
	document.getElementById("dot").disabled = false;
	
	document.getElementById("equals").disabled = false;
}
function calculate(){
	var temp = document.getElementById("temp").value;
	var result = document.getElementById("result").value;
	var operator = document.getElementById("operator").value;
	if (operator === "+") {
		document.getElementById("result") .value =
		Number(temp)+ Number(result);
	}
	//Clear the temp and operator elements
	if (operator === "-"){
	document.getElementById("result").value = Number(temp) - Number(result);
	}

	if (operator === "x"){
	document.getElementById("result").value = Number(temp) * Number(result);
	}

	if (operator === "/"){
	document.getElementById("result").value = Number(temp) / Number(result);
	}
	
}

function login() {
	var username = document.getElementById("username");
	var password = document.getElementById("password");
	var error = document.getElementById("error")
	
	//Check that the user and passwordare not blank
	if( username.value.length === 0){
		error.innerHTML="please enter a user or email";
		return false;
	}
	if( password.value.length === 0){
		error.innerHTML="please enter a password";
		return false;
	}
	
	//check the password is correct
	var realPassword ="abc123";
	if (password.value != realPassword){
	    error.innerHTML = "Wrong Password!";
	   return false;
	}
	else{
		return true;
	}
}



function addBlogs() {
	var postText = document.getElementById("post").value;
	
	// I'm going to create a new paragraph <li>
	var li = document.createElement("li");
	li.innerHTML = postText;
	
	// Get my list
	var posts = document.getElementById("posts");
	posts.appendChild(li);
}



function getParameterByName(name, url) { 
if (!url) { 
url = window.location.href; 
} 
name = name.replace(/[\[\]]/g, "\\$&"); 
var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), 
results = regex.exec(url); 
if (!results) return null; 
if (!results[2]) return ''; 
return decodeURIComponent(results[2].replace(/\+/g, " ")); 
}

function loadHome(){
	var username = getParameterByName("username");
	//Create a new <p> element to show username
	var newP = document.createElement("p");
	newP.innerHTML = "Welcome, " + username;
	// Add the new <p> to the logout bar 
	var logoutBar = document.getElementById("logout-bar");
	logoutBar.appendChild(newP);
	
	//Creat a logout: button 
	var logoutButton = document.createElement("button");
		logoutButton.innerHTML = "Log out";
		logoutButton.setAttribute("class", "form-button");
		logoutButton.setAttribute("onclick","logout();")
		//<button class="form-button">Log out</button>
		logoutBar.appendChild(logoutButton);
		
	
}


function logout(){
	//take me back to form.html
	window.location = "forms.html";
}

// part 1: Automatically do something whem page loads 
function autoload(){
	console.log("welcome!");
	
	// Add some content to <div id="part1">
	// 1. Get the div where you want to add the content 
	var part1Div = document.getElementById("part1");
	// 2. Create new elements to put inside the <div>
	var newHeader = document.createElement("h3");
	var newParagraph = document.createElement("p");
	// 3. Put some text in those elements
	newHeader.innerHTML = "Part 1 - On Load";
	newParagraph.innerHTML = "Automatically do stuff";
	// Add new elementto the <div>
	part1Div.appendChild(newHeader);
	part1Div.appendChild(newParagraph);
	part1Div.appendChild(document.createElement("hr"));
	
}

//Part 2: Add text from input
function addText(){
	//1. Get the input 
	var input = document.getElementById("part2-input");
	//2. Get <div> where i want to add the text
	var div = document.createElement("p");
	
	var newParagraph = document.createElement("p")
	newParagraph.innerHTML = input.value;
	
	div.appendChild(newParagraph);
	
	
}


//Part 3: Change Style
function changeStyle(){
	var part3p = document.getElementById("part3-p");
	part3.setAttribute("class", "new-style");
}

//Part 4
function originalStyle(){
	var body = document.getElementById("body");
	body.setAttribute("class", "");
}

function style1(){
	var body = document.getElementById("body");
	body.setAttribute("class", "style1");
}

function style2(){
	var body = document.getElementById("body");
	body.setAttribute("class", "style2");
}

function style3(){
	var body = document.getElementById("body");
	body.setAttribute("class", "style3");
}

//Part 5
function addPicture(){
	var part5img = document.createElement("img");
	part5img.setAttribute("src", "https://i.ytimg.com/vi/prALrHUJ8Ns/hqdefault.jpg");
	var div = document.getElementById("part5-img");
	div.appendChild(part5img);
	
}

function changePic1(){
	var img = document.getElementById("img");
	img.setAttribute("src", "http://images.all-free-download.com/images/graphiclarge/natural_beauty_of_hd_picture_1_166092.jpg");
}

function changePic2(){
	var img = document.getElementById("img");
	img.setAttribute("src", "http://ghk.h-cdn.co/assets/15/17/980x490/gallery-1429890420-new-york.jpg");
}

function changePic3(){
	var img = document.getElementById("img");
	img.setAttribute("src", "http://images.all-free-download.com/images/graphiclarge/natural_beauty_of_hd_picture_4_166089.jpg");
}

function changePic4(){
	var img = document.getElementById("img");
	img.setAttribute("src", "http://images.all-free-download.com/images/graphiclarge/natural_beauty_highdefinition_picture_166133.jpg");
}

function changePic5(){
	var img = document.getElementById("img");
	img.setAttribute("src", "http://img1.izismile.com/img/img3/20100325/640/plitvice_lakes_640_07.jpg");
}


