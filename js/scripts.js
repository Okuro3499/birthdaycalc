function getAkanName(){
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  var maleAkannames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var femaleAkannames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  var myBirthday = document.getElementById("myBirthDate").value;
  var myGender = document.getElementsByName("gender");
  var dateOfBirth = new Date(myBirthday);
  var dayOfTheWeek = dateOfBirth.getDay();
  var CC, MM, YY;
  if (!!d.valueOf()) {
    YY = d.getFullyear();
    MM = d.getMonth();
    CC = d.getDate();
  } else {/*Invalid date */}
  var daycalculate = parseInt(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD)%7
}
