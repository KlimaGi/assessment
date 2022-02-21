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
