function solve() {
   let clickCounter = 0;
   document.querySelector("button").addEventListener("click", () => {
      let p = document.querySelector("#exercise p");

      if (clickCounter % 3 === 0) {
         p.style.color = "blue";
      } else if (clickCounter % 3 === 1) {
         p.style.color = "green";
      } else if (clickCounter % 3 === 2) {
         p.style.color = "red";
      }
      clickCounter++;
      p.style.fontSize = `${clickCounter*2}px`;
   });
}
