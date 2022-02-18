//---------------Canal Management
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
//-------------------------------
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

const pointInCircle = (x, y) => Math.hypot(x, y) < 1;

console.log(pointInCircle(0, 0));
console.log(pointInCircle(2, 0));
console.log(pointInCircle(0, 0.9));
console.log(pointInCircle(0.5, 0.5));
console.log(pointInCircle(1, 0));

//---------------------
