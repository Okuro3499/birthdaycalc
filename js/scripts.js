function getAkanname(){
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  var myBirthday = document.getElementById('birth').value;
  myBirthday= myBirthday.split("/");
  var day =parseInt(myBirthday[1]);
  var month= parseInt(myBirthday[0]);
  var year= parseInt(myBirthday[2]);
  var century = parseInt(myBirthday[2].substring(0,2));
  console.log(day, month, year, century );
  var myGender = document.getElementById('genders').value;

  var dayCalculate = Math.floor(parseInt(((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + day) % 7);
  dayCalculate= dayCalculate - 2;
  console.log(dayCalculate)
  if (document.getElementById('male').checked) {
    myGender = document.getElementById('male').value;
    alert("You were born on " + days[dayCalculate] + " Your name is " + male[dayCalculate]);
  }
  if (document.getElementById('female').checked) {
    myGender = document.getElementById('female').value;
    alert(" You were born on " + days[dayCalculate] + " Your name is " + female[dayCalculate]);
  }
  document.getElementById('message').innerHTML = days[dayCalculate];
}
