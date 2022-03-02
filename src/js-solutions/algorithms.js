//---------------Canal Management
function queu(arr, L) {
  let totalTime = 0;
  let num1 = arr;
  let tempLength = L;

  while (num1[0] <= tempLength) {
    let go = num1.shift();
    go *= 2;
    totalTime += go;
    tempLength -= go / 2;
  }
  totalTime += 2;

  console.log("totalTime " + totalTime);
  console.log("tempLength " + tempLength);
  return [num1, totalTime];
}
function canalMania(lowQueue, highQueue, lockLength) {
  let totalTime = 0;
  let low = lowQueue;
  let high = highQueue;

  if (lowQueue.length === 0 && highQueue.length === 0) {
    return 0;
  }
  while (low.length !== 0 || high.length !== 0) {
    if (low.length === 0) {
      totalTime += 2;
    } else {
      let result = queu(low, lockLength);
      low = result[0];
      totalTime += result[1];
    }

    if (high.length === 0) {
      totalTime += 2;
    } else {
      let result = queu(high, lockLength);
      high = result[0];
      totalTime += result[1];
    }
  }
  console.log("end " + totalTime);
  return totalTime;
}

canalMania([4, 1, 8, 2, 6], [], 8);

//---------------Help the bookseller!--------------
function stockList(listOfArt, listOfCat) {
  const getSum = (n) => {
    const aList = listOfArt.filter((a) => a[0] === n);
    if (aList === []) return 0;
    const sep = aList.map((a) => a.split(" "));
    const num = sep.map((n) => parseInt(n[1], 10));
    const sum = num.reduce((a, b) => a + b, 0);
    return sum;
  };

  if (listOfCat.length === 0 || listOfArt.length === 0) return "";
  const change = listOfCat
    .map((a) => "(" + a + " : " + getSum(a) + ")")
    .join(" - ");
  // const change = listOfCat.map((a) => `(${a} : ${getSum(a)})`).join(' - ');
  return change;
}

const b = ["CBART 0", "CDXEF 0", "BKWRK 0", "BTSQZ 0", "DRTYM 0"];
const c = ["Z", "W"];
console.log(stockList(b, c));

//res = "(A : 200) - (B : 1140)"

//-----
function stockList2(listOfArt, listOfCat) {
  const getSum = (n) => {
    const aList = listOfArt.filter((a) => a[0] === n);
    if (aList === []) return 0;
    const sep = aList.map((a) => Number(a.split(" ")[1]));
    const sum = sep.reduce((a, b) => a + b, 0);
    return sum;
  };

  if (listOfCat.length === 0 || listOfArt.length === 0) return "";
  const change = listOfCat
    .map((a) => "(" + a + " : " + getSum(a) + ")")
    .join(" - ");
  return change;
}

const book = ["CBART 0", "CDXEF 0", "BKWRK 20", "BTSQZ 10", "DRTYM 0"];
const co = ["Z", "W", "B"];
console.log(stockList2(book, co));
//----------------------------Shortest Word ---

const findShort = (s) => {
  const lengths = s.split(" ").map((a) => a.length);
  const sm = lengths.sort((a, b) => a - b).shift();
  return sm;
};

console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
);
console.log(findShort("Let's travel abroad shall we"));

//--------------Tortoise racing --- kada pavys? kokiu laiku atstumai bus lygus?
function race(v1, v2, g) {
  const time = g / (v2 - v1);

  const sec = time * 60 * 60;
  const t = new Date(sec * 1000)
    .toISOString()
    .substring(11, 11 + 8)
    .split(":");
  const num = t.map((n) => Number(n));
  return num;

  //   const h = Math.floor(time);
  //   const min = Math.floor((time * 60) % 60);
  //   const sec = Math.floor((time * 3600) % 60);
  //   return [h, min, sec];
}

console.log(race(720, 850, 70)); // [0, 32, 18]);
console.log(race(80, 91, 37)); // [3, 21, 49]);
console.log(race(80, 100, 40)); // [2, 0, 0]);

//-------------Point in a unit circle ---

function pointInCircle(x, y) {
  const n = Math.sqrt(x * x + y * y);
  return n >= 1 ? false : true;

  //const n = Math.hypot(x, y);
  // return n < 1;
}

const pointInCircle2 = (x, y) => Math.hypot(x, y) < 1;

console.log(pointInCircle(0, 0));
console.log(pointInCircle(2, 0));
console.log(pointInCircle(0, 0.9));
console.log(pointInCircle(0.5, 0.5));
console.log(pointInCircle2(1, 0));

//---------------Collision Detection ---
function collision(x1, y1, radius1, x2, y2, radius2) {
  const distance = Math.hypot(x1 - x2, y1 - y2);
  return distance - radius1 - radius2 >= 0 ? false : true;
}

function collision2(x1, y1, radius1, x2, y2, radius2) {
  const distance = Math.hypot(x1 - x2, y1 - y2);
  return distance <= radius1 + radius2;
}

console.log(collision(1, 1, 1, 1.1, 1.1, 0.1)); // true
console.log(collision(-1, 1, 10, -10.1, 1.1, 1)); // true
console.log(collision(-5, 5, 5.0001, 5, -5, 5 * Math.sqrt(5))); // true

console.log(collision(1, 1, 0.01, 1, 1.1, 0.01)); // false
console.log(collision(-1, 1, 6, -10.1, 1.1, 1)); // false
console.log(collision2(-5, 5, 5.0001, 5, -5, 4 * Math.sqrt(5))); // false

//--------------------------------Find the unique number
function findUniq(arr) {
  const unique = arr.sort((a, b) => a - b);
  const one = unique[0] !== unique[1] ? unique[0] : unique[unique.length - 1];
  return one;
}
console.log(findUniq([3, 3, 3, 3, 1, 3, 3]));
//------------------------------- CubeSummation
function cubeSum(n, m) {
  if (n === m) return 0;
  const sorted = n > m ? [n, m] : [m, n];
  let nums = 0;
  for (let one = sorted[0]; one > sorted[1]; one--) {
    nums += Math.pow(one, 3);
  }
  return nums;
}

console.log(cubeSum(5, 0)); // 225
console.log(cubeSum(2, 3)); // 27
//--------------------------------------------

function FirstFactorial(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

// keep this function call here
console.log(FirstFactorial(8)); // 40320

//----------------------------
function LetterCapitalize(str) {
  return str
    .split(" ")
    .map((a) => a[0].toUpperCase() + a.slice(1))
    .join(" ");
}

// keep this function call here
console.log(LetterCapitalize("i ran there")); // I Ran There
///------------------------------------------
function Palindrome(str) {
  const byOne = str.split("");
  const letter = byOne.filter((a) => a.match(/[a-z]/i));
  const one = letter.join("");
  const rev = letter.reverse().join("");
  return one === rev;
}

// keep this function call here
console.log(Palindrome("never, odd or? even")); // true
console.log(Palindrome("eye")); // true
//___________________________________________
function CheckNums(num1, num2) {
  return num2 > num1 ? "true" : num2 === num1 ? "-1" : "false";
}

// keep this function call here
console.log(CheckNums(5, 2));
//___________________________________________
function SimpleEvens(num) {
  const numArr = num
    .toString()
    .split("")
    .map((a) => Number(a));
  const evenArr = numArr.filter((a) => a % 2 === 0);

  return numArr.length === evenArr.length ? "true" : "false";
}

console.log(SimpleEvens());
//___________________________________________
function DashInsert(str) {
  const numArr = str.split("").map((a) => Number(a));
  let numOut = [];
  for (let i = 0; i <= numArr.length - 1; i++) {
    if (numArr[i] % 2 !== 0 && numArr[i + 1] % 2 !== 0) {
      numOut.push(numArr[i]);
      if (i !== str.length - 1) numOut.push("-");
    } else {
      numOut.push(numArr[i]);
    }
  }
  return numOut.join("");
}

console.log(DashInsert(99946)); // 9-9-946

function OneDecremented(str) {
  let total = 0;
  const arr = str.split("").map((a) => Number(a));
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] - arr[i + 1] === 1) {
      total++;
    }
  }
  return total;
}

console.log(OneDecremented("9876541110")); // 6
//_____________________________________________________;
function Superincreasing(arr) {
  let total = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] <= total) return "false";
    total += arr[i];
  }
  return "true";
}

console.log(Superincreasing([1, 3, 6, 13, 54])); // true
//_____________________________________________________;
function ChangingSequence(arr) {
  let i = 0;

  if (arr[i] < arr[i + 1]) {
    while (arr[i] < arr[i + 1]) {
      i++;
    }
    return i === arr.length - 1 ? -1 : i;
  }

  if (arr[i] > arr[i + 1]) {
    while (arr[i] > arr[i + 1]) {
      i++;
    }
    return i === arr.length - 1 ? -1 : i;
  }
}

console.log(ChangingSequence());
//___________________________________________
function BitwiseOne(strArr) {
  let i = 0;
  let arr = [];
  while (i <= strArr[0].length - 1) {
    if (strArr[0][i] === strArr[1][i]) {
      arr.push(Number(strArr[0][i]));
    } else {
      arr.push(1);
    }
    i++;
  }

  return arr.join("");
}

console.log(BitwiseOne(["100", "000"])); // 100
console.log(BitwiseOne(["00011", "01010"])); // 01011
//___________________________________________
function VowelCount(str) {
  // do not count y as vowel in this case
  const vowel = str.match(/[aeiou]/gi);

  return vowel ? vowel.length : 0;
}

console.log(VowelCount("coderbyte")); // 3
//___________________________________________
function SwapCase(str) {
  const arr = str.split("");
  const change = arr
    .map((a) =>
      a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 90
        ? a.toLowerCase()
        : a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 122
        ? a.toUpperCase()
        : a
    )
    .join("");

  return change;
}

console.log(SwapCase("Hello-LOL?!")); //"hELLO-lol?!"
//___________________________________________
function FindIntersection(strArr) {
  const arr0 = strArr[0].split(",").map((a) => a.trim());
  const arr1 = strArr[1].split(",").map((a) => a.trim());
  let arr = [];
  for (let i = 0; i <= arr0.length - 1; i++) {
    if (arr1.includes(arr0[i])) arr.push(arr0[i]);
  }
  return arr.length ? arr.join() : "false";
}

console.log(FindIntersection(["2, 3, 4", "3"])); // 3
console.log(FindIntersection(["1, 5, 6, 7, 10, 11, 12", "5, 6, 8, 11, 17"])); // 5,6,11
console.log(FindIntersection(["1, 2, 3, 4, 5", "6, 7, 8, 9, 10"])); // false
console.log(FindIntersection(["1, 2, 4, 5, 6, 9", "2, 3, 4, 8, 10"])); // 2,4
//____________________________________________________
function RemoveBrackets(str) {
  const arr = str.split("");
  const first = arr.filter((a) => a === "(").length;
  const sec = arr.filter((a) => a === ")").length;
  const num = first - sec > 0 ? first - sec : sec - first;
  if (arr.indexOf(")") < arr.indexOf("(") && num % 2 === 0) return num + 2;
  return num;
}

console.log(RemoveBrackets("()()("));
//___________________________________________
function DistinctCharacters(str) {
  let temp = [];
  const arr = str.split("");
  for (let i = 0; i <= arr.length - 1; i++) {
    if (!temp.includes(arr[i])) {
      temp.push(arr[i]);
    }
  }

  return temp.length >= 10 ? "true" : "false";
}

console.log(DistinctCharacters("racecar")); // fasle // unique simbols less than 10
//___________________________________________
function TimeConvert(num) {
  const min = num % 60;
  const h = (num - min) / 60;

  return `${h}:${min}`;
}

console.log(TimeConvert(126)); // 2:6
console.log(TimeConvert(45)); // 0:45
//___________________________________________
function GroupTotals(strArr) {
  let letters = strArr.map((a) => a[0]);
  let uniq = [];
  for (let i = 0; i <= letters.length - 1; i++) {
    if (!uniq.includes(letters[i])) uniq.push(letters[i]);
  }

  const getSum = (n) => {
    const aList = strArr.filter((a) => a[0] === n);
    const sep = aList.map((a) => Number(a.split(":")[1]));
    const sum = sep.reduce((a, b) => a + b, 0);
    return sum;
  };

  const counted = uniq.map((a) => `${a}:${getSum(a)}`);
  return counted
    .filter((a) => !a.includes(":0"))
    .sort()
    .join(); // remove sum of 0
}

console.log(GroupTotals(["B:-1", "A:1", "B:3", "A:5"])); // A:6,B:2
//___________________________________________
function CountingMinutesI(str) {
  const times = str.split("-");
  const firstH = Number(times[0].split(":")[0]);
  const firstM = Number(times[0].split(":")[1].slice(0, 2));

  const secH = Number(times[1].split(":")[0]);
  const secM = Number(times[1].split(":")[1].slice(0, 2));

  let first = 0;
  if (firstH === 12) first = firstM;
  else first = firstH * 60 + firstM;

  let second = 0;
  if (secH === 12) second = secM;
  else second = secH * 60 + secM;

  let min = 0;
  if (
    (times[0].includes("am") && times[1].includes("am")) ||
    (times[0].includes("pm") && times[1].includes("pm"))
  ) {
    if (first < second) min = second - first;
    // 1440 = 24h * 60
    else if (first > second) min = 1440 + second - first;
  } else if (times[0].includes("pm") && times[1].includes("am")) {
    // 720 = 12h * 60
    min = 720 + second - first;
  } else if (times[0].includes("am") && times[1].includes("pm")) {
    min = 720 - first + second;
  }

  return min;
}

console.log(CountingMinutesI("11:00am-2:10pm")); // 190
console.log(CountingMinutesI("12:30pm-12:00am")); // 690
console.log(CountingMinutesI("1:23am-1:08am")); // 1425
//___________________________________________
function LongestWord(sen) {
  const word = sen
    .split("")
    .filter((a) => /[a-z]/i.test(a) || /[0-9]/.test(a) || /\s/.test(a))
    .join("");
  const wordArr = word.split(" ");
  return wordArr.sort((a, b) => b.length - a.length)[0];
}

console.log(LongestWord("123456789 98765432")); // 123456789
console.log(LongestWord("fun&!! time")); // time
//
function NonrepeatingCharacter(str) {
  // show first one, when there allways will be at least one not repeading char

  const arr = str.split(" ").join("").split("");
  const one = arr.filter((a) => arr.indexOf(a) === arr.lastIndexOf(a));
  return one[0];
}

console.log(NonrepeatingCharacter("agettkgaeee")); // k
//___________________________________________;
function OverlappingRanges(arr) {
  let first = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    first.push(i);
  }
  let second = [];
  for (let i = arr[2]; i <= arr[3]; i++) {
    second.push(i);
  }
  let overlapping = first.filter((a) => second.includes(a));
  return overlapping.length >= arr[4] ? "true" : "false";
}

console.log(OverlappingRanges([4, 10, 2, 6, 3])); // true overlapping at least 3 numbers
console.log(OverlappingRanges([1, 8, 2, 4, 4])); // false
//___________________________________________;
function NumberAddition(str) {
  const num = str.match(/(\d+)/g);
  if (num === null) return 0;
  const sum = num.reduce((a, b) => Number(a) + Number(b));
  return sum;
}

console.log(NumberAddition("75Number9")); // 84
console.log(NumberAddition("10 2One Number*1*")); // 13
console.log(NumberAddition("no numbers sorry**")); // 0

//___________________________________________;
function LetterCountI(str) {
  let arr = str.split(" ");

  let wordCount = (word) => {
    let many = word.split("");
    let same = many.filter((a) => many.indexOf(a) !== many.lastIndexOf(a));
    // repeaded letters
    let temp = [];
    same.filter((a) => {
      if (!temp.includes(a)) temp.push(a);
    });
    let count = 0;
    for (let i = 0; i <= temp.length; i++) {
      let see = same.filter((a) => a === temp[i]).length;
      if (see > count) count = see;
    }
    return [word, count];
  };

  let el = [];
  arr.forEach((a) => el.push(wordCount(a)));
  let higher = el[0];
  el.forEach((a) => {
    if (a[1] > higher[1]) higher = a;
  });
  return higher[1] ? higher[0] : -1;
}

console.log(LetterCountI("hello world")); // hello
console.log(LetterCountI("No words")); // -1
//___________________________________________
function StarRating(str) {
  let num = Number(str);
  let full = Math.floor(num / 0.5) * 0.5; // round to nearest half
  let rem = num - full;
  let half = full - Math.trunc(full);
  let text = [];

  if (full > 0) {
    let count = 1;
    while (count <= full) {
      text.push("full");
      count++;
    }
  }
  if (half === 0.5 && rem < 0.25) text.push("half");
  else if (half === 0.5 && rem >= 0.25) text.push("full");
  else if (rem > 0.25) text.push("half");

  if (text.length < 5) {
    let count = 5 - text.length;
    let emptyCount = 1;
    while (emptyCount <= count) {
      text.push("empty");
      emptyCount++;
    }
  }
  return text.join(" ");
}

console.log(StarRating("3.02")); // full full full empty empty
console.log(StarRating("2.75")); // full full full empty empty
console.log(StarRating("0.38")); // half empty empty empty empty
//___________________________________________
function likes(names) {
  let s = names.length > 1 ? "" : "s";
  let text = `like${s} this`;
  if (names.length === 0) return `no one ${text}`;
  else if (names.length === 1) return `${names} ${text}`;
  else if (names.length === 2) return `${names[0]} and ${names[1]} ${text}`;
  else if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} ${text}`;
  else if (names.length >= 4)
    return `${names[0]}, ${names[1]} and ${names.length - 2} others ${text}`;
}

console.log(likes([])); // 'no one likes this')
console.log(likes(["Peter"])); // 'Peter likes this')
console.log(likes(["Jacob", "Alex"])); // 'Jacob and Alex like this')
console.log(likes(["Max", "John", "Mark"])); // 'Max, John and Mark like this')
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // 'Alex, Jacob and 2 others like this')
//___________________________________________
function highAndLow(numbers) {
  let sep = numbers.split(" ");
  let nums = sep.map((a) => Number(a));
  let sorted = nums.sort((a, b) => b - a);
  return `${sorted[0]} ${sorted[sorted.length - 1]}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); //"42 -9"
//___________________________________________
function highAndLow2(numbers) {
  let nums = numbers.split(" ").map(Number);
  let sorted = nums.sort((a, b) => b - a);
  return `${sorted[0]} ${sorted[sorted.length - 1]}`;
}
//___________________________________________
function humanReadable(seconds) {
  const f = (num) => (num <= 9 ? `0${num}` : `${num}`);

  const hh = Math.trunc(seconds / 3600);
  const mm = Math.trunc((seconds % 3600) / 60);
  const ss = (seconds % 3600) % 60;

  return [f(hh), f(mm), f(ss)].join(":");
}
console.log(humanReadable(0)); // '00:00:00'
console.log(humanReadable(3600)); // '01:00:00'
console.log(humanReadable(86399)); // '23:59:59'
console.log(humanReadable(90)); // '00:01:30'
//___________________________________________;
function removeChar(str) {
  return str.slice(1, str.length - 1);
}

console.log(removeChar("eloquent")); // 'loquen'
console.log(removeChar("place")); // 'lac'
//___________________________________________;
function createPhoneNumber(numbers) {
  let one = numbers.slice(0, 3).join("");
  let two = numbers.slice(3, 6).join("");
  let three = numbers.slice(6).join("");
  return `(${one}) ${two}-${three}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //"(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); //"(111) 111-1111"
//___________________________________________;
function HTMLElements(str) {
  let text = str
    .match(/<\/?[a-z][^>]*>/gi)
    .map((a) => a.replace(/</, ""))
    .map((a) => a.replace(/>/, ""));
  let temp = [...text];

  while (temp.length > 2) {
    let one = temp[0];
    let found = temp.find((el) => el === `/${one}`);
    //console.log([found, temp.indexOf(found)]);
    if (!found) return one;

    temp.splice(temp.indexOf(one), 1);
    temp.splice(temp.indexOf(found), 1);
  }
  if (temp.length === 1) return temp[0];
  if (temp[0] === temp[1].replace(/\//, "")) return "true";
  return temp[0];
}

console.log(HTMLElements("<div><b><p>hello world</p></b></div>")); // true
console.log(HTMLElements("<div><b><p>p</p></b></div>")); // true
console.log(HTMLElements("<p>hello</p><div></div>")); // true
console.log(HTMLElements("<div>")); // div
console.log(HTMLElements("<p><p><em></em><p></p><i></p>")); // i ? result temp['p', 'i']
//___________________________________________;
function assembleString(array) {
  let result = array[0];
  let i = 1;

  while (i <= array.length - 1) {
    let snow = result.indexOf("*");
    if (array[i][snow] !== "*") {
      result = result.replace("*", array[i][snow]);
    }
    i++;
  }

  if (result[0] === "*") {
    for (let n = 0; n <= result.length - 1; n++) {
      result = result.replace(result[n], "#");
    }
  }

  return result;
}
console.log(assembleString(["a*cde", "*bcde", "abc*e"])); // "abcde"
console.log(assembleString(["a*c**", "**cd*", "a*cd*"])); // "a#cd#"
console.log(
  assembleString(["H*llo, W*rld!", "Hel*o, *or*d!", "*ello* World*"])
); //'Hello, World!'
console.log(assembleString(["*****"])); // "#####"
//___________________________________________;
function matrix(array) {
  let arr = [...array];
  for (let i = 0; i <= arr[0].length - 1; i++) {
    if (arr[i][i] < 0) arr[i][i] = 0;
    else if (arr[i][i] >= 0) arr[i][i] = 1;
  }
  return arr;
}
console.log(
  matrix([
    [-1, 4, -5, -9, 3],
    [6, -4, -7, 4, -5],
    [3, 5, 0, -9, -1],
    [1, 5, -7, -8, -9],
    [-3, 2, 1, -5, 6],
  ])
);
// [
//  [ 0,  4, -5, -9,  3 ],
// [ 6,  0, -7,  4, -5 ],
//  [ 3,  5,  1, -9, -1 ],
//  [ 1,  5, -7,  0, -9 ],
// [-3,  2,  1, -5,  1 ]
//]
//___________________________________________;
function matrix2(array) {
  let arr = [...array];
  for (let i = 0; i <= arr[0].length - 1; i++) {
    arr[i][i] = arr[i][i] < 0 ? 0 : 1;
  }
  return arr;
}
//________________________________________
function getCountedNucleotides(genCode) {
  let gen = genCode.toUpperCase().split("");
  let A = gen.filter((a) => a === "A");
  let C = gen.filter((a) => a === "C");
  let G = gen.filter((a) => a === "G");
  let T = gen.filter((a) => a === "T");
  let result = { A: A.length, C: C.length, G: G.length, T: T.length };
  return result;
}
console.log(getCountedNucleotides("aCCggT")); // {A: 1, C: 2, G: 2, T: 1}
//___________________________________________;
function rot13(message) {
  let msg = message.split("");

  let change = (a) => {
    if (
      (a.charCodeAt(0) >= 65 && a.charCodeAt(0) <= 77) ||
      (a.charCodeAt(0) >= 97 && a.charCodeAt(0) <= 109)
    )
      return String.fromCharCode(a.charCodeAt(0) + 13);
    else if (
      (a.charCodeAt(0) >= 78 && a.charCodeAt(0) <= 90) ||
      (a.charCodeAt(0) >= 110 && a.charCodeAt(0) <= 122)
    )
      return String.fromCharCode(a.charCodeAt(0) - 13);
    else return a;
  };

  let result = msg.map((n) => change(n)).join("");
  return result;
}
//console.log(rot13('gemm')); // 'trzz'
//console.log(rot13('test')); // 'grfg'
//console.log(rot13('Test')); // 'Grfg'
console.log(rot13("Ruby is cool!")); // 'Ehol vf pbby!'
//___________________________________________;

function isToday(date) {
  let today = new Date();

  let dateStr = (d) => {
    return d.toString().slice(4, 15);
  };

  return dateStr(today) === dateStr(date);
}

var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
console.log(isToday(tomorrow)); // fasle
//___________________________________________;
function isToday2(date) {
  return new Date().toDateString() === date.toDateString();
}
//___________________________________________;
function animals(heads, legs) {
  if (heads === 0 && legs === 0) return [0, 0];
  if (heads <= 0 || legs <= 0 || legs % 2 > 0) return "No solutions";

  let cows = legs / 2 - heads;
  let chickens = heads - cows;

  if (cows < 0 || chickens < 0) return "No solutions";

  return [chickens, cows];
}

console.log(animals(72, 200)); // [44, 28]
//console.log(animals(-72, 200)); // "No solutions"
//console.log(animals(0, 0)); // [0, 0]
//___________________________________________;
