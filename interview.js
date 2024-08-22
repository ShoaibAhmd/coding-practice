// function CountingAnagrams(str) { 


//     // code goes here  
//     const words = str.split(' ');
  
//     console.log(checkAnagram('hec', 'che'));
  
//     console.log(checkAnagram('dog', 'ddw'));
  
//     console.log(checkAnagram('ee', 'ss'));
  
//     // for (let i=0; i++; i<words.length) {
//     //   const current = words[i];
//     //   const anagramDict = {};
//     //   let anagramCount = 0;
  
//     //   for (let j=0; j++; j < words.length) {
//     //     if (i === j) {
//     //       continue;
//     //     }
  
//     //     const characterDictionary = {};
  
  
  
  
  
  
//     //   }
//     // }
  
  
//     return str;
  
//   }
  
//   function checkAnagram(word, word1) {
  
//     const characterDict = {};
//     const characterDict1 = {};
  
//     if (word.length !== word1.length) {
//       return false;
//     } else if (word === word1) {
//       return false;
//     }
  
//     for (let i=0; i < word.length; i++) {
//       if (characterDict[word[i]]) {
//         characterDict[word[i]] += 1;
//       } else {
//         characterDict[word[i]] = 1;
//       }
//     }
  
//     for (let i=0; i < word1.length; i++) {
//       if (characterDict1[word1[i]]) {
//         characterDict1[word1[i]] += 1;
//       } else {
//         characterDict1[word1[i]] = 1;
//       }
//     }

//     console.log('characterDict', characterDict);
//     console.log('characterDict1', characterDict1);

//     Object.keys(characterDict).forEach((key, index) => {
//       if (characterDict1[key]) {
//         if (characterDict1[key] !== characterDict[key]) {
//           return false;
//         }
//       } else {
//         return false;
//       }
      
//     })
  
//     return true;
//   }
  
//   // keep this function call here 
//   console.log('Sample test passing: ' + (CountingAnagrams("aa aa odg dog gdo") == '3'));
//   console.log('Sample test passing: ' + (CountingAnagrams("a c b c run urn urn") == '1'));


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }

  const characterDict = {};

  for (let i=0; i<s.length; i++) {
      if (!characterDict[s[i]]) {
          characterDict[s[i]] = 1
      } else {
          characterDict[s[i]] += 1; 
      }
  }

  for (let i=0; i<s.length; i++) {
      if (characterDict[t[i]] && characterDict[t[i]] > 0) {
          characterDict[t[i]] -= 1
      }
  }

  let sum = 0;

  for (let i=0; i<s.length; i++) {
      sum += characterDict[t[i]];
  }

  if (sum === 0) {
      return true;
  }

  return false;
};

console.log(isAnagram("anagram", "nagaram"))