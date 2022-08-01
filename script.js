var gen = document.getElementById("generator");
var gen1 = document.getElementById("gen1");
var gen2 = document.getElementById("gen2");
var submit = document.getElementById("submit");
var success = document.getElementById("success");
var time = document.getElementById("time");
var bt = document.querySelectorAll(".bt");
var l1 = document.getElementById("1");
var l2 = document.getElementById("2");
var l3 = document.getElementById("3");
var l4 = document.getElementById("4");
var l5 = document.getElementById("5");
var l6 = document.getElementById("6");
var l7 = document.getElementById("7");
var l8 = document.getElementById("8");
var l9 = document.getElementById("9");
var l0 = document.getElementById("0");
var lhash = document.getElementById("#");
var lc = document.getElementById("C");

btn = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l0, lhash];
var otp = null;
var otp1 = "";
var counter = 3;

btn.forEach(function (elem) {
  elem.addEventListener("click", function () {
    if (otp1.length < 4) {
      otp1 += elem.value;
      gen2.innerHTML = otp1;
    }
  });
});

lc.addEventListener("click", () => {
  otp1 = "";
  gen2.innerHTML = otp1;
});

gen.addEventListener("click", () => {
  otp = Math.floor(Math.random() * (9999 - 1111) + 1111);
  gen1.innerHTML = otp;
  counter = 3;
  count(counter);
  otp1 = "";
  gen2.innerHTML = otp1;
  success.innerHTML = "";
  submit.disabled = false;
  dis(1)
});

function auth() {
  count(counter);

  if (otp == otp1) {
    success.innerHTML = '<div class="in">PIN MATCHED</div>';
    submit.disabled = true;
    time.innerHTML = "SUCCESS! Generate new pin again";
  } else {
    otp1 = "";
    gen2.innerHTML = otp1;
    success.innerHTML = '<div class="out">PIN DON\'T MATCHED</div>';
  }
}

function count(counter) {
  time.innerHTML = counter + " try left";
  /* if (counter = 0) {
  } */
}

function dis(params) {
  if (params === 0) {
    bt.forEach(function (elem) {
      elem.disabled = true;
    });
  } else if (params === 1) {
    bt.forEach(function (elem) {
      elem.disabled = false;
    });
  }
}

submit.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
  }
  switch (counter) {
    case 3:
      auth();
      break;
    case 2:
      auth();
      break;
    case 1:
      auth();
      break;
    case 0:
      auth();
      submit.disabled = true;
      dis(0);
      time.innerHTML = "You FAIL! Generate pin again";
      break;
  }
});

console.log(bt);
