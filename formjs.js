	function viewPassword() 
	{
	  var passwordInput = document.getElementById('upass');
  		var passStatus = document.getElementById('pass-status');
  	  if (passwordInput.type == 'password')
		  {
		    passwordInput.type='text';
		    passStatus.className='fa fa-eye-slash';
		  }
		  else
		  {
		    passwordInput.type='password';
		    passStatus.className='fa fa-eye';
		  }
	}
	function uName()
	{
		var a=document.getElementById('uname');
		if(a.value!="")
		{
			a.style.borderColor="green";
			document.getElementById('nerror').innerHTML="";
		}
		else{
			a.style.borderColor="red";
		}		
	}
	function uEmail()
	{
		var a=document.getElementById('uemail');
		if(a.value!="")
		{
			a.style.borderColor="green";
			document.getElementById('eerror').innerHTML="";
		}
		else{
			a.style.borderColor="red";
		}	
	}
	function uPass()
	{
		var a=document.getElementById('upass');
		if(a.value!="")
		{
			a.style.borderColor="green";
		}
		else{
			a.style.borderColor="red";
		}	
		b=a.value;
		if(b.length<8)
		{
			document.getElementById("perror").innerHTML='Password must be 8 characters long.'
		}
		else{
			document.getElementById('perror').innerHTML="";
		}
	}
	function ucPass()
	{
		var a=document.getElementById('upass').value;
		var b=document.getElementById('ucpass');
		if(b.value=="")
		{
			b.style.borderColor="red";
		}
		if(b.value===a)
		{
			b.style.borderColor="green";
			document.getElementById('cperror').innerHTML="";
		}
		else{
			b.style.borderColor="red";
			document.getElementById('cperror').innerHTML="Password not matched."
		}
	}
	function uCon()
	{
		var a=document.getElementById('ucon');
		if(a.value!="")
		{
			a.style.borderColor="green";
			document.getElementById('cerror').innerHTML="";
		}
		else{
			a.style.borderColor="red";
		}	
	}
	function uAdd()
	{
		var a=document.getElementById('uadd');
		if(a.value!="")
		{
			a.style.borderColor="green";
			document.getElementById('aderror').innerHTML="";
		}
		else{
			a.style.borderColor="red";
		}	
	}
	function uState()
	{
		var a=document.getElementById('ustate');
		if(a.value=="")
		{
			a.style.borderColor="red";
		}
		else
		{
			a.style.borderColor="green";
			document.getElementById('serror').innerHTML="";
		}
	}
	function validate()
	{
		var uname=document.getElementById("uname");
		var uemail=document.getElementById("uemail");
		var upass=document.getElementById("upass");
		var ucpass=document.getElementById('ucpass');
		var male=document.getElementById('male').checked;
		var female=document.getElementById('female').checked;
		var umobile=document.getElementById("ucon");
		var ustate=document.getElementById("ustate");
		var uadd=document.getElementById("uadd");
		if(uname.value.trim()==="")
		{
			document.getElementById('nerror').innerHTML=male;
			uname.focus();
			return false;
		}
		else{
			document.getElementById('nerror').innerHTML="";
		}
		if(uemail.value.trim()==="")
		{
			document.getElementById('eerror').innerHTML="Email required";
			uemail.focus();
			return false;
		}
		else{
			document.getElementById('eerror').innerHTML="";
		}
		if(upass.value.trim()==="")
		{
			document.getElementById('perror').innerHTML="Password required";
			upass.focus();
			return false;
		}
		else{
			document.getElementById('perror').innerHTML="";
		}
		if(ucpass.value.trim()==="")
		{
			document.getElementById('cperror').innerHTML="Verify your Password";
			ucpass.focus();
			return false;
		}
		else{
			document.getElementById('cperror').innerHTML="";
		}
		if(umobile.value.trim()==="")
		{
			document.getElementById('cerror').innerHTML="Mobile number required";
			umobile.focus();
			return false;
		}
		else{
			document.getElementById('cerror').innerHTML="";
		}
		if(ustate.value.trim()==="")
		{
			document.getElementById('serror').innerHTML="Select your state";
			ustate.focus();
			return false;
		}
		else{
			document.getElementById('serror').innerHTML="";
		}
		if(uadd.value.trim()==="")
		{
			document.getElementById('aderror').innerHTML="Adddress required";
			uadd.focus();
			return false;
		}
		else
		{
			document.getElementById('aderror').innerHTML="";
		}
		if(male==false&&female==false)
		{
			document.getElementById('gerror').innerHTML="Select Gender";
			male.checked=true;
			return false;
		}
	}
	function rst()
	{	document.getElementById('nerror').innerHTML="";
		document.getElementById('eerror').innerHTML="";
		document.getElementById('perror').innerHTML="";
		document.getElementById('cperror').innerHTML="";
		document.getElementById('cerror').innerHTML="";
		document.getElementById('serror').innerHTML="";
		document.getElementById('aderror').innerHTML="";
		document.forms["myform"]["uname"].style.borderColor='#8cc9fd';
		document.forms["myform"]["uemail"].style.borderColor='#8cc9fd';
		document.forms["myform"]["upass"].style.borderColor='#8cc9fd';
		document.forms["myform"]["ucpass"].style.borderColor='#8cc9fd';
		document.forms["myform"]["umobile"].style.borderColor='#8cc9fd';
		document.forms["myform"]["ustate"].style.borderColor='#8cc9fd';
		document.forms["myform"]["uadd"].style.borderColor='#8cc9fd';
	}