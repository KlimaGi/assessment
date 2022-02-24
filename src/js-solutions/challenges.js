function HTMLElements(str) {
  let text = str
    .match(/<\/?[a-z][^>]*>/gi)
    .map((a) => a.replace(/</, ""))
    .map((a) => a.replace(/\//, ""))
    .map((a) => a.replace(/>/, ""));
  let temp = [...text];

  while (temp.length > 2) {
    let one = temp[0];
    let found = temp.find((el) => el === one);

    temp.splice(temp.indexOf(found), 1);
    temp.splice(temp.indexOf(one), 1);
  }
  if (temp[0] === temp[1]) return "true";
  return temp[0];
}

console.log(HTMLElements("<div><p></p></i>")); // div --wrong
console.log(HTMLElements("<div><b><p>hello world</p></b></div>")); // true
//_______________________________________
