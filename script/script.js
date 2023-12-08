// basket
const basketButton = document.querySelector("#basket-button");
const basket = document.querySelector("#basket");

basketButton.addEventListener("mouseenter", () => {
  basket.classList.add("basket_shown");
  basket.classList.remove("basket_hidden");
});

basketButton.addEventListener("mouseleave", () => {
  basket.classList.remove("basket_shown");
  basket.classList.add("basket_hidden");
});

basket.addEventListener("mouseenter", () => {
  basket.classList.add("basket_shown");
  basket.classList.remove("basket_hidden");
});

basket.addEventListener("mouseleave", () => {
  basket.classList.remove("basket_shown");
  basket.classList.add("basket_hidden");
});

// slider
const slider = document.querySelector(".section-slider");

// DOMContentLoaded чтобы изолировать код
document.addEventListener("DOMContentLoaded", () => {
  const shift = 50;
  let index = 0;
  slider.addEventListener("click", (e) => {
    const slideRight = slider.querySelector(".btn-slide-right");
    const slideLeft = slider.querySelector(".btn-slide-left");
    const content = slider.querySelector(".section-slider__body-content");
    const childCount = content.childElementCount;

    if (e.target === slideRight || e.target === slideLeft) {
      if (e.target === slideLeft) {
        if (index < 0) {
          index += 1;
        }
      }

      if (e.target === slideRight) {
        if (-index < childCount - 1) {
          index -= 1;
        }
      }

      if (index !== 0) {
        slideLeft.classList.add("btn-slide_shown");
        slideLeft.classList.remove("btn-slide_hidden");
      } else {
        slideLeft.classList.remove("btn-slide_shown");
        slideLeft.classList.add("btn-slide_hidden");
      }

      let translateValue = 0;

      if (index !== 0) {
        translateValue = `calc(${index * shift}% - 1.25rem)`;
      }

      content.style.transform = `translateX(${translateValue})`;
    }
  });
});
