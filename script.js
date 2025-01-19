const display = document.getElementById("screen");

const wipe = () => {
  display.value = "";
};

const del = () => {
  display.value = display.value.toString().slice(0, -1);
};

const show = (n) => {
  display.value += n;
};

const calc = () => {
  display.value = eval(display.value);
  // display.value = "Hello World";
};
