var reset = document.getElementById("cancel");
var submit = document.getElementById("submit");
var mainform = document.querySelector('.form');

reset.addEventListener('click',function() { 
	document.querySelector(".form").reset();
});

submit.addEventListener('click',validateform);
var alldata=[];
var fname=document.getElementById('fname');
var lname= document.getElementById('lname');
var address= document.getElementById('address');
var terms= document.getElementById('terms');
var gender = document.forms["myform"]["gender"];


function validateform() {
  var	fname1=fname.value;
	var lname1= lname.value;
	var address1= address.value;
	var gender1 = gender.value;
	if(fname1 == null || fname1 == '') {
		alert("Please fill First Name");	
	}
	else if(lname1 == null || lname1 == '') {
		alert("PLease fill Last Name");
	}
	else if(address1 == null || address1 =='')
	{
		alert("PLease fill adress");
	}else if(gender1 != "female" && gender1 != "male") {
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
	formdata.push(fname.value,lname.value,gender.value,address.value);
	return formdata;
}

function showdata(alldata) {
	var b=alldata;
	var lastdata=b.length-1;
	// console.log(b);
	// console.log(lastdata);
      var r=document.querySelector('.result');
    

  var newUl = document.createElement("ul");
  newUl.classList.add('ul'+lastdata);
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

fname.value=b[lastdata][0];
lname.value=b[lastdata][1];
var gendervalue=b[lastdata][2];
if(gendervalue=="female") {
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
	b.splice(b.indexOf(lastdata));
	console.log("deleted");
	var ulremove = document.querySelector('.ul'+lastdata).remove();

	//console.log(b);	
}










