function validation()
{

var name =document.getElementById("name");
var subject =document.getElementById("subject");

var email =document.getElementById("email");

var message =document.getElementById("Message");

var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
var flag=true;
if (name.value == "") {
        name.style.backgroundColor = "#FF7E87";
        name.placeholder="NAME CANNOT BE NULL";
        flag=false;
    }
 else{
 
 	 name.style.backgroundColor ="#F0F0F0";
 }
 if (subject.value=="") 
 	{	
 		subject.style.backgroundColor = "#FF7E87";
 		 subject.placeholder="SUBJECT CANNOT BE NULL";
 		 flag=false;
 	}
 	else{
 		 	 subject.style.backgroundColor ="#F0F0F0";

 	}

 if (!re.test(email.value)) 
 {
 	email.style.backgroundColor = "#FF7E87";
 	email.placeholder="EMAIL INVALID";
 	flag=false;

 } 
 else{
 		 	 email.style.backgroundColor ="#F0F0F0";

 }
if (message.value=="") 
 	{	
 		message.style.backgroundColor = "#FF7E87";
 		 message.placeholder="MESSAGE CANNOT BE NULL";
 		 flag=false;
 	}
 	else{
 		 		message.style.backgroundColor = "#F0F0F0";

 	}
 	if (flag) {
 		alert("MESSAGE IS SENT");
 	}
 	return flag;
}
