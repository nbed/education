function expandAll(indNum, ind, callingElement) {
	var expOrCol;
	var divIter;
	var number = indNum.slice(9);

	var x = document.getElementById(callingElement);
	if(x.innerText==="Expand all Indicator " + number){
		x.innerText = "Collapse all Indicator " + number;
		expOrCol = "exp"
	} else{
		x.innerText = "Expand all Indicator " + number;
		expOrCol = "col"
	}

	var x = document.querySelectorAll('[id^=' + indNum + ']');
	for(divIter=0; divIter < x.length; divIter++){
		if (expOrCol === "exp") {
			x[divIter].style.display = "block";
		} else {
			x[divIter].style.display = "none";
		}
	}

	var x = document.querySelectorAll('[id^=' + ind + ']');
	for(divIter=0; divIter < x.length; divIter++){
		if (expOrCol==="exp") {
			x[divIter].innerText = "-";
		} else {
			x[divIter].innerText = "+";
		}
	}
}
function myFunction(id, id2) {
	var x = document.getElementById(id);
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
	x = document.getElementById(id2);
	if (x.innerText==="+") {
		x.innerText = "-";
	} else {
		x.innerText = "+";
	}
}
function expandTab(id, num, headerID, color) {
	var allDiv = document.getElementsByClassName(num);
	var divIter;

	for(divIter = 0; divIter<allDiv.length; divIter++){
		allDiv[divIter].style.display = "none";
	}

	var x = document.getElementById(id);
	x.style.display = "block";

	var idToFind = "Domain" + headerID.split('-')[0];
	console.log (idToFind);
	var x = document.querySelectorAll('[id^=' + idToFind + ']');
	console.log (x);
	for(divIter=0; divIter < x.length; divIter++){
		console.log (x[divIter].innerText);
		x[divIter].style.borderBottom = "1px solid #ddd";
		x[divIter].style.borderTop = "1px solid #ddd";
	}

	var x = document.getElementById("Domain" + headerID);
	x.style.borderBottom = "1px solid #ffffff";
	x.style.borderTop = "2px solid " + color;

}
