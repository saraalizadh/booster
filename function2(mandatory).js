/**
 *
 * Write a function that:
 * - takes an array of strings as input
 * - removes any spaces in the beginning or end of the strings
 * - removes any forward slashes (/) in the strings
 * - makes the string all lowercase
 * - return the new array
 * @format
 *
 *
 */

function tidyUpString(strArr) {
  return strArr.map(ele => 
     ele.trim().replace("/", "").toLowerCase()
  );
}

/*
Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  return typeof num === "number" && num % 2 === 0 && num <= 100;
}

/* 
Write a function that returns a copy of the given array "arr"(first parameter of the function)
but the element at the given index(second parameter of the function) should be removed from the new array 
The function must NOT change the original array, arr.
*/

function remove(arr, index) {
  const copy = arr.slice()
  const result = copy.splice(index,1)
  return copy
}

/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the decimal numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100 (e.g. 135 => '100%')
*/
function formatPercentage(arr) {
  return arr.map(
    ele => {
      
      if (ele>100) {
        return '100%'
      }
      else if ((ele - Math.floor(ele)) !== 0) {
        return `${ele.toFixed(2)}%`
      }
      return `${ele}%`
    }
  )
}

/* ======= TESTS - DO NOT MODIFY ===== */

function test(test_name, actual, expected) {
  let status;

  let isEqual;
  if (Array.isArray(expected)) {
    isEqual = arraysEqual(actual, expected);
  } else {
    isEqual = actual === expected;
  }

  if (isEqual) {
    status = 'PASSED';
  } else {
    status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
  }

  console.log(`${test_name}: ${status}`);
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

test(
  'tidyUpString function works - case 1',
  tidyUpString(['/Daniel ', 'irina ', ' Gordon', 'ashleigh ']),
  ['daniel', 'irina', 'gordon', 'ashleigh']
);
test(
  'tidyUpString function works - case 2',
  tidyUpString([' /Sanyia ', ' Michael ', 'AnTHonY ', '   Tim   ']),
  ['sanyia', 'michael', 'anthony', 'tim']
);

test('validate function works - case 1', validate(10), true);
test('validate function works - case 2', validate(18), true);
test('validate function works - case 3', validate(17), false);
test('validate function works - case 4', validate('Ten'), false);
test('validate function works - case 5', validate(108), false);

test(
  'remove function works - case 1',
  remove([10, 293, 292, 176, 29], 3),
  [10, 293, 292, 29]
);
test(
  'remove function works - case 2',
  remove(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 6),
  ['a', 'b', 'c', 'd', 'e', 'f']
);

test(
  'formatPercentage function works - case 1',
  formatPercentage([23, 18.103, 187.2, 0.372]),
  ['23%', '18.10%', '100%', '0.37%']
);
