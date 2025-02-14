function checkURL(inputText) {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    console.log("The check url issssssssss" , regex.test(inputText));
    return regex.test(inputText);
  }
  
  export { checkURL };
  