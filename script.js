"use strict";

const upperButtons = document.querySelectorAll(".buttons button");
const time = document.querySelectorAll(".time div");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const minutes = document.querySelectorAll(".minutes");
const seconds = document.querySelectorAll(".seconds");
let interval = undefined;

upperButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    for (let i = 0; i < upperButtons.length; i++) {
      upperButtons[i].classList.remove("active");
      time[i].style.display = "none";
      time[i].classList.remove("display");
    }
    btn.classList.add("active");
    time[index].style.display = "block";
    time[index].classList.add("display");
  });
});

function setTime(currTime) {
  const seconds = currTime.querySelector(".seconds");
  const minutes = currTime.querySelector(".minutes");

  interval = setInterval(() => {
    if (+seconds.textContent > 0) {
      if (+seconds.textContent <= 10) {
        seconds.textContent = `0${+seconds.textContent - 1}`;
      } else {
        seconds.textContent = +seconds.textContent - 1;
      }
    } else if (+minutes.textContent > 0) {
      seconds.textContent = "59";
      if (+minutes.textContent <= 10) {
        minutes.textContent = `0${+minutes.textContent - 1}`;
      } else {
        minutes.textContent = +minutes.textContent - 1;
      }
    } else if (+minutes.textContent === 0 && +seconds.textContent === 0) {
      clearInterval(interval);
    }
  }, 1000);
}

start.addEventListener("click", () => {
  const currTime = document.querySelector(".display");
  setTime(currTime);
});

stop.addEventListener("click", () => {
  clearInterval(interval);
});

reset.addEventListener("click", () => {
  upperButtons.forEach((btn, index) => {
    if (btn.classList.contains("active")) {
      if (index === 0) {
        time[index].innerHTML =
          "<span class = 'minutes'>24</span>:<span class='seconds'>59</span>";
      } else if (index === 1) {
        time[index].innerHTML =
          "<span class = 'minutes'>04</span>:<span class='seconds'>59</span>";
      } else {
        time[index].innerHTML =
          "<span class = 'minutes'>09</span>:<span class='seconds'>59</span>";
      }
    }
  });
});
