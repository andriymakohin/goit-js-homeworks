'use strict';
const findLongestWord = function (string) {
    const strSplit = string.split(' ');
    let longStr = strSplit[0];
    
    for (const str of strSplit) {
        if (str.length > longStr.length) {
            longStr = str;
        }
    }
    
    const massage = `В реченні "${string}", найдовше слово: ${longStr}.`;

    return massage;
  };
  
  /*
   * Виклич функції для перевірки працездатності твоєї реалізації.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'