function fun1(cb) {
  const value = "rohan";
  cb(value);
}

function fun2() {
  const value2 = "Chougule";
  fun1(value => {
    console.log(value + " " + value2);
  });
}

// fun2();
var os = require("os");
console.log(os.hostname());
console.log(os.type());
