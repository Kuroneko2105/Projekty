const input = document.getElementById("input");
const buttons = document.querySelectorAll('.btn');
const inputTab = input.value.split("");

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    input.value += btn.innerText;
  });
});

function deleteInput() {
    document.getElementById("input").value = "";
}

function deleteSomething() {
    
    inputTab.pop();
    document.getElementById("input").value = inputTab.join("");
}

function result() {
    try {
        input.value = eval(input.value);
    } catch (e) {
        input.value = "Błąd";
    }
}

function minus () {
  const value = input.value;

  const match = value.match(/(\(-\d+(\.\d+)?\)|\d+(\.\d+)?)$/);

  if (!match) return;

  const number = match[0];

  if (number.startsWith('(-')) {
    const positive = number.slice(2, -1);
    input.value = value.slice(0, -number.length) + positive;
  } else {
    input.value = value.slice(0, -number.length) + `(-${number})`;
  }
}