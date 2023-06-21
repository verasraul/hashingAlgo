function encryptPhoneNumber(number) {
    //Holds our new encrypted string
    let encrypted = "";
    //Loops through the string
    for (let i = 0; i < number.length; i++){
      //Checks if i is < 7 to get the first 6 digits
      //Also checks to make sure the - is not turned into *
      //Adds to encrypted
      (i < 7 && number[i] != "-") ? encrypted += "*" : encrypted += number[i];
    }
    //Return our new string
    return encrypted;
  };

  console.log(encryptPhoneNumber("718-987-6543"));