/* Author: 

*/

var reset=document.getElementById("cancel");
var submit=document.getElementById("submit");
      var mainform=document.querySelector('.form');

reset.addEventListener('click',function(){ document.querySelector(".form").reset();});

submit.addEventListener('click',validateform);
var alldata=[];

function validateform() {
	var fname=document.getElementById('fname').value;
	var lname= document.getElementById('lname').value;
	var address= document.getElementById('address').value;
	var terms= document.getElementById('terms');
    var gender = document.forms["myform"]["gender"].value;

	if(fname == null || fname == '') {
		alert("Please fill First Name");	
	}
	else if(lname == null || lname == '') {
		alert("PLease fill Last Name");
	}
	else if(address== null || address =='')
	{
		alert("PLease fill adress");
	}else if(gender != "female" && gender!= "male") {
    alert("Please select gender");
    } 
    else if(terms.checked == false) {
    	alert("PLease check terms and conditions");
    }
    else { 
    	var a=formdata();
    	alldata.push(a);
  //  	console.log(alldata);
    	showdata(alldata);
    	document.querySelector(".form").reset();
    	alert("Thank you"); 
    }  

    //console.log(a);
}
function formdata() {
	var formdata=[];
	gender=	 document.forms["myform"]["gender"].value;
	formdata.push(fname.value,lname.value,gender,address.value);
	return formdata;
}

function showdata(alldata) {
	var b=alldata;
	var lastdata=b.length-1;
	// console.log(b);
	// console.log(lastdata);
      var r=document.querySelector('.result');
    

  var newUl = document.createElement("ul");
    newUl.class = "formList";
    r.appendChild(newUl);

       // var innerArrayLength = b[i].length;
           for (var j = 0; j < 4; j++) {
   //     console.log(b[i][j]);
           var singledata=b[lastdata][j];
// var newLi = document.createElement('li');
            var list=document.createElement('li');
        list.innerHTML=singledata;

        newUl.appendChild(list);
    
    }
            var list1=document.createElement('li');

           var edit_button = document.createElement("a");
  var t = document.createTextNode("Edit");
  edit_button.setAttribute("href", "#fixme");
  edit_button.addEventListener('click',get_value);
  edit_button.appendChild(t);
  list1.appendChild(edit_button);
  newUl.appendChild(list1);
            var list2=document.createElement('li');

  var delete_button = document.createElement("a");
  var t1 = document.createTextNode("Delete");
  delete_button.setAttribute("href", "#fixme");
    delete_button.addEventListener('click',get_value1);

  delete_button.appendChild(t1);
 list2.appendChild(delete_button);
  newUl.appendChild(list2);


function get_value(e) {
	e.preventDefault();
edit_data(lastdata,b);
}

function get_value1(e) {
	e.preventDefault();
delete_data(lastdata,b);
}
     
}

function edit_data(lastdata,b){
	var b=b;
	console.log(lastdata);
	console.log(b);

		var fname=document.getElementById('fname');
	var lname= document.getElementById('lname');
	var address= document.getElementById('address');

fname.value=b[lastdata][0];
lname.value=b[lastdata][1];
lnamevalue=b[lastdata][2];
if(lnamevalue=="female") {
document.querySelector("#female").checked=true;
}
else {
document.querySelector("#male").checked=true;

}
address.value=b[lastdata][3];
document.getElementById('terms').checked=true;

console.log(fname);


}


function delete_data(lastdata,b){
	var b=b;
	b.splice(b.indexOf(lastdata));
	console.log("deleted");
	//console.log(b);	
}










