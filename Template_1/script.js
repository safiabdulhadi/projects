const count = document.querySelector(".count"),
      add = document.querySelector(".add"),
      resetCount = document.querySelector(".reset"),
      sub = document.querySelector(".subtract");
    

      add.addEventListener("click", () => {
          count.innerHTML++;
      })

      sub.addEventListener("click", () => {
          count.innerHTML--;
      })

      resetCount.addEventListener("click", () => {
          count.innerHTML = 0;
      })