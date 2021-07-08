class record{
    constructor(email,uname,city,college){
     this.email = email;
     this.uname = uname;
     this.city = city;
     this.college = college;


    }




// storing input from register-form

edit = ()=> {
  const email = document.getElementById('email').value;
  const uname = document.getElementById('uname').value;
  const password = document.getElementById('password').value;
  const city = document.getElementById('city').value;
  const college = document.getElementById('college').value;

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  
  // email validation

  if (email === '') {
    alert(' Enter your Email')
    return false
  }
  else if (emailRegex.test(email) !== true) {
    console.log(emailRegex.test(email));
    alert('please enter valid email')
    return false
  }
 
 else if (password ===''){
      alert('please enter your password')
      return(false)
    }
  
  
    else if(uname ===''){
      alert('Name Please')
      return(false)
    }
  else{
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('uname', uname);
    localStorage.setItem('city', city);
    localStorage.setItem('college', college);

    return true
    
  }
  

}
printUser = () => {
  const printEmail =  localStorage.getItem('email')
  const printPass =  localStorage.getItem('password')
  const printName =  localStorage.getItem('uname')
  const printCity =  localStorage.getItem('city')
  const printCollege =  localStorage.getItem('college')
  
  return {printEmail,printPass,printName,printCity,printCollege}
  
}
}

const kd = new record()
 kd.printUser()

 edit = () => {
    kd.edit()
 }

document.querySelector('#databt').addEventListener('click', (e) => {
  e.preventDefault();
  kd.edit()
  window.location.href = 'profile.html';
  });
 

