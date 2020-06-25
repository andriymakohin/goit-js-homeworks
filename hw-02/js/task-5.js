'use strict';
const checkForSpam = function (message) {
    message = message.toLowerCase();
    let reportSpan = false;
    if (message.includes('spam') || message.includes('sale')) {
        reportSpan = true;
    }
    return reportSpan;
  };
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(checkForSpam('Latest technology news')); // false
  
  console.log(checkForSpam('JavaScript weekly newsletter')); // false
  
  console.log(checkForSpam('Get best sale offers now!')); // true
  
  console.log(checkForSpam('[SPAM] How to earn fast money?')); // true