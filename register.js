class record{
 constructor(email,uname,city,college,jobprofile){
   this.email = email;
   this.uname = uname;
   this.city = city;
   this.college = college;
   this.jobprofile= jobprofile;

  }
getUserData = () => {
  const email = document.getElementById('email');
  var Password = document.getElementById('password');
  var uname = document.getElementById('uname');
}




// storing input from register-form
 store = () => {
  const email = document.getElementById('email').value;
  const uname = document.getElementById('uname').value;
  const password = document.getElementById('password').value;
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  
  // email validation
  console.log(email);

  if (email === '') {
     document.getElementById("error1234").innerHTML = "Enter your Email!";
    return false
  }
  else if (emailRegex.test(email) !== true) {
    console.log(emailRegex.test(email));
    document.getElementById("error1234").innerHTML = "Please Enter a valid Email!";
    return false
  }
 
 else if (password ===''){
  document.getElementById("alert2").innerHTML = "Password Please !";
      return(false)
    }
  
  
    else if(uname ===''){
      document.getElementById("alert3").innerHTML = "Enter your name please!";
      return(false)
    }
  else{
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('uname', uname);
    window.location.href = 'login.html';
    return true
  }
 
}



loginUser = () => {
  var storedName = localStorage.getItem('email');
  var storedPw = localStorage.getItem('password');


  var emailLogin = document.getElementById('emailLogin');
  var passwordLogin = document.getElementById('passwordLogin');

  if (emailLogin.value === storedName && passwordLogin.value === storedPw) {
    window.location = 'welcome.html'
  } else {

    document.getElementById("alert1").innerHTML = "Invalid details!";
   

  }
  
}
// edit data

edit = ()=> {
  const email = document.getElementById('email').value;
  const uname = document.getElementById('uname').value;
  const password = document.getElementById('password').value;
  const city = document.getElementById('city').value;
  const college = document.getElementById('college').value;
  const jobprofile = document.getElementById('jobprofile').value;
  // const salary = document.getElementById('salary').value;

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  
  // email validation

  if (email === '') {
   
    document.getElementById('alert1').innerHTML = "Enter  your Email!";
    
    return false
  }
  else if (emailRegex.test(email) !== true) {
    console.log(emailRegex.test(email));
    document.getElementById('alert1').innerHTML = "please Enter valid Email!";
    return false
  }
 
 else if (password ===''){
  document.getElementById("alert2").innerHTML = "Password please!";
      return(false)
    }
  
  
    else if(uname ===''){
      document.getElementById("alert3").innerHTML = "Enter your name please!";
      return(false)
    }
  else{
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('uname', uname);
    localStorage.setItem('city', city);
    localStorage.setItem('college', college);
    localStorage.setItem('jobprofile', jobprofile);
    // // localStorage.setItem('salary', salary);
     window.location.href = 'profile.html';
    return true
    
  }
  
}
printeditUser = () => {
  const printEmail =  localStorage.getItem('email')
  const printPass =  localStorage.getItem('password')
  const printName =  localStorage.getItem('uname')
  const printCity =  localStorage.getItem('city')
  const printCollege =  localStorage.getItem('college')
  const printjobProfile =  localStorage.getItem('jobprofile')
  // const printSalary =  localStorage.getItem('salary')
  
  return {printEmail,printPass,printName,printCity,printCollege,printjobProfile}
  
}

getValue =() => {
  let gemail = localStorage.getItem("email");
  let guname = localStorage.getItem("uname");
  let gcity = localStorage.getItem("city");
  let gcollege = localStorage.getItem("college");
  let gjobprofile = localStorage.getItem("jobprofile");

  const email = document.getElementById('email').value;
  const uname = document.getElementById('uname').value;
  const password = document.getElementById('password').value;
  const city = document.getElementById('city').value;
  const college = document.getElementById('college').value;
  const jobprofile = document.getElementById('jobprofile').value;


   email.value=gemail;
   uname.value=guname;

  


}
deleteUser = () =>{
  localStorage.clear()
}
}


const kd = new record()

getUserData = () => {
    kd.getUserData()
}

loginUser = () => {
    kd.loginUser()
}
store = () => {
  kd.store()
}
edit = () => {
  kd.edit()
}
printeditUser = ()=>{
  kd.printeditUser()
}
deleteUser = ()=>{
  kd.deleteUser()
}

getValue = () =>{
  kd.getValue()
}