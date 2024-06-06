const checkPalindromeBtn = document.getElementById("check-btn");
const userInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");

const checkPalindrome = input =>{
  const originalInput = input;
  if(input === ""){ 
    alert("Please input a value");
    return;
  }
  let resultMsg = `${originalInput} is a palindrome`;
  resultDiv.replaceChildren();
  const newstr = input.replace(/[^A-Za-z0-9]/gi,'').toLowerCase();
  for(let i = 0 , j = newstr.length-1 ; i < j ; i++ ,j--){
    if(newstr[i] != newstr[j]){
      resultMsg = `${originalInput} is not a palindrome`;
      break;
    }
  }
  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerHTML = resultMsg;
  resultDiv.appendChild(pTag);
  // Show the result.
  resultDiv.classList.remove('hidden');
};

userInput.addEventListener('keydown' , e =>{
  if(e.key === "Enter"){
  checkPalindrome(userInput.value);
  userInput.value = "";
  }
});

checkPalindromeBtn.addEventListener('click',() => {
  checkPalindrome(userInput.value);
  userInput.value = "";
});
