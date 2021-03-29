var keys = document.getElementsByClassName("key");
var text = "";
var isCapsLock = false;
var isShift = false;


for (let i = 0; i < keys.length; i++) {
  keys[i].onclick = function () {
    var key = keys[i].innerHTML;
    debugger;
    if (isCapsLock) {
      key = key.toUpperCase();
    }
    if (isShift) {
      key = key.toUpperCase();
      isShift = false;
    }
    text += key;
    document.getElementById("text-area").innerHTML = text;
  };
}

var backSpace = document.getElementById("back_space");
backSpace.onclick = function () {
  text = text.slice(0, -1);
  document.getElementById("text-area").innerHTML = text;
};

var enter = document.getElementById("enter");
enter.onclick = function () {
  text = text + "\n";
  document.getElementById("text-area").innerHTML = text;
};

var space = document.getElementById("btn_4");
space.onclick = function () {
  text = text + " ";
  document.getElementById("text-area").innerHTML = text;
};

var shift = document.getElementById("btn_3");
shift.onclick = function () {
  isShift = true;
};

var ok = document.getElementById("btn_5");
ok.onclick = function () {
  alert(text);
};

var capsLock = document.getElementById("caps_lock");
capsLock.onclick = function () {
  if (isCapsLock) {
    isCapsLock = false;
  } else {
    isCapsLock = true;
  }
};
