//capa review time!

function SelectAll(id){
	document.getElementById(id).focus();
	document.getElementById(id).select();
	}

function question1(){
	var q1_m = 4.5
	var q1_c = 7.35e-7
	var q1_a = 23.5*(Math.PI/180)
	var g = 9.81
	var k = 8.987552e9
	var q1_a_result = g*(q1_m/1000) 
	var q1_b_result = Math.sqrt(k*Math.pow(q1_c, 2)*(Math.cos(q1_a)/(q1_a_result*Math.sin(q1_a))))/(2*Math.sin(q1_a))
	document.getElementById("q1a").setAttribute("value", q1_a_result.toPrecision(3) + " N");
	document.getElementById("q1b").setAttribute("value", q1_b_result.toPrecision(3) + " m");
}

function question9(){
	var q9_ke = 6
	var q9_bfield = 1.08
	var q9_a = 45
	var q9_a_result = 0.00
}