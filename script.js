const state = {
  ui: false,
  pay: false,
  ana: false
};

function toggle(key) {
  state[key] = !state[key];

  if (key === "ui") {
    document.getElementById("uiStatus").innerText = state[key] ? "ON" : "OFF";
  }
  if (key === "pay") {
    document.getElementById("payStatus").innerText = state[key] ? "ON" : "OFF";
  }
  if (key === "ana") {
    document.getElementById("anaStatus").innerText = state[key] ? "ON" : "OFF";
  }
}
