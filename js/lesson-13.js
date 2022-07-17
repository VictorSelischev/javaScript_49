// const divListener = document.querySelector('[data-name="css"]');
// console.log(divListener.dataset);
// console.log(divListener.dataset.value);

// console.log(_.ceil(6040, -2));
// const result = _.add(2, 3);
// console.log(result);



const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const eventCounter = {
  vanilla: 0,
  throttled: 0
};

document.addEventListener("scroll", () => {
  eventCounter.vanilla += 1;
  vanillaOutput.textContent = eventCounter.vanilla;
});

document.addEventListener(
  "scroll",
  _.throttle(() => {
    eventCounter.throttled += 1;
    throttledOutput.textContent = eventCounter.throttled;
  }, 300)
);