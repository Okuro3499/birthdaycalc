function getAkanName(){
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  var maleAkannames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var femaleAkannames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  var myBirthday = document.getElementById("myBirthDate").value;
  var myGender = document.getElementsByName("gender");
  var dateOfBirth = new Date(myBirthday);
  var dayOfTheWeek = dateOfBirth.getDay();
}
