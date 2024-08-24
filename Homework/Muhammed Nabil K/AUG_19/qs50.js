function palindrome(word)
{
    const revword = word.split('').reverse().join('');
    return word == revword

}
const result=palindrome("aba");
console.log(result)