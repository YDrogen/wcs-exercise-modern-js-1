// With the shortest syntax, write the following functions:

/**
 * 1. Takes a number as a parameter and returns this number multiplied by 2
 * @function double
 * @param {number} number
 * @returns {number}
 * @example
 * double(2) // returns 4
 */
// code here

/**
 * 2. Takes two numbers as parameters, displays them in the console and returns the sum of these two numbers
 * @function logParamsAndReturnAddition
 * @param {number} number1
 * @param {number} number2
 * @returns {number}
 * @example
 * logParamsAndReturnAddition(2, 3) // returns 5
 * // displays 2 and 3 in the console
 * // returns 5
 */
// code here

/**
 * 3. Takes an array of numbers as a parameter, rounds each number to the nearest integer and returns a new array with the rounded numbers
 * @function roundMap
 * @param {number[]} numbers
 * @returns {number[]}
 * @example
 * roundMap([1.2, 2.5, 3.7]) // returns [1, 3, 4]
 */
// code here

/**
 * 4. Takes a src string, an alt string, a width number and a height number, and returns a string containing the HTML code for an image with the given src, alt, width and height
 * // default of width is 400 and default of height is 300
 * @function getImageMarkup
 * @param {string} src
 * @param {string} alt
 * @param {number} [width=400]
 * @param {number} [height=300]
 * @returns {string}
 * @example
 * getImageMarkup('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', 'Google logo') // returns '<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" width="400" height="300">'
 * getImageMarkup('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png', 'Google logo', 200, 100) // returns '<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" width="200" height="100">'
 */
// code here

export { double, logParamsAndReturnAddition, roundMap, getImageMarkup };
