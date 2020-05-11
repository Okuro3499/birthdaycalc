function getAkanName(){
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  var myBirthday = document.getElementById('birth').value;
  var myGender = document.getElementById('genders').value;
  var d = new Date(myBirthday);
  var CC, MM, YY, DD;
  if (!!d.valueOf()) {
    YY = d.getFullyear();
    MM = d.getMonth();
    CC = d.getDate();
    DD = d.getDay();
  } else {/*Invalid date */}
  var daycalculate = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
  dayCalculate = dayCalculate + 1;
  console.log(daycalculate);
  if (document.getElementById('male').checked) {
    myGender = document.getElementById('male').value;
    alert("You were born on " + dayOfTheWeek[dayCalculate] + " Your name is " + maleAkannames[dayCalculate]);
  }
  if (document.getElementById('female').checked) {
    myGender = document.getElementById('female').value;
    alert(" You were born on " + dayOfTheWeek[dayCalculate] + " Your name is " + femaleAkannames[dayCalculate]);
  }
  document.getElementById('message').innerHTML = dayOfTheWeek[dayCalculate];
}
