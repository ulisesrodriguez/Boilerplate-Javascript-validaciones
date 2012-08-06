// JavaScript Document

/*

  Author		Ulises Rodríguez
  Site:			http://www.ulisesrodriguez.com	
  Twitter:		https://twitter.com/#!/isc_ulises
  Facebook:		http://www.facebook.com/ISC.Ulises
  Github:		https://github.com/ulisesrodriguez
  Email:		ing.ulisesrodriguez@gmail.com
  Skype:		systemonlinesoftware
  Location:		Guadalajara Jalisco Mexíco

  	
*/


/**
   Object General Functions
 
 	Usage
 	
 	var object = new Obj();
 	
 	if( object. method( value ) == true ) do something; 
 
 	or 
 	
	if( Obj.method ( value ) == true ) do something;
	
 **/


// Object General
var Obj = {

// Setting base url	example: http://www.domain.com/
// Use Ajax Base url
	base         	:  '',

// Integer Number
// Example: 123
	integer	: 	function( number ){
		
		// Regular Expresion
		if ( !/^([0-9])*$/.test( number ) ){
	 		
			return false;
 
		}else{
		
			return true;
		
		}
	
	},

// Floar number 
// Example: 12.12
	float	:	function( number ){
		 
		 // Regular Expresion
		 if ( !/^([0-9])*[.]?[0-9]*$/.test( number ) ){
  		
				return false;
				
		  }else{
			
				return true;
			
		  }
	
	},

// Number Format
// Example: 1000 -> 1.000
	format	:	function( number ){
		
		var pos;
		val=number.split(",").join(""); // remove existing commas if present.
		var dot=val.indexOf("."); // locate decmal
		
		if(dot<0) dot=val.length; // use end if no decimal
		
		var r="";
		
		for(pos=dot-3;pos>=1;pos-=3) // put commas in
			
			r="."+val.substr(pos,3)+r;
			r=val.substring(0,pos+3)+r; // put start of string on
			dot=val.indexOf("."); // check for decimal
		
		if(dot>0)r+=val.substring(dot);// put fraction part on
		
		return r;
		
	
	},	

// email  
// example: mail@mail.com
 	email	:	function( email ){
		
// Regular Expresion
		if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test( email ) ){
		
			return true; 
		
		} else {
			
			return false;
		
		}
	
	},

// url 
// example 
// http://www.domain.com/
// ftp.domain.com
	url	:	function( url ){
		
// Regular Expresion				
		if ( /^(http|ftp)(s)?:\/\/\w+(\.\w+)*(-\w+)?\.([a-z]{2,3}|info|mobi|aero|asia|name)(:\d{2,5})?(\/)?((\/).+)?$/.test( url ) ){
		
			return true;	
		
		}else{
		
			return false;
		
		}
			
	
	},

// empty
	empty	:	function( value ){
		
		if( value.length == 0 ){
			
			return false;
		
		}else{
			
			return true;
			
		}		
	
	
	},

// Alfanumeric
// Example 123ABC
	alfanumeric	: 	function( data ){
		
// Regular Expresion
		if ( !/^([a-zA-Z0-9])*$/.test( data ) ){
	 		
			return false;
 
		}else{
		
			return true;
		
		}
	
	},

// Alfabetic
// Example ABC	
	alfabetic	: 	function( data ){
		
// Regular Expresion
		if ( !/^([a-zA-Z])*$/.test( data ) ){
	 		
			return false;
 
		}else{
		
			return true;
		
		}
	
	}
}