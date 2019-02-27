function solve() {
  let input = document.getElementById("input");
  let output = document.getElementById("output")

  let sentencesArray = input.textContent.split(".");

  for (let index = 0; index < sentencesArray.length; index += 3) {
    let paragraph = document.createElement("p");

    paragraph.innerHTML = sentencesArray[index];

    if (sentencesArray.length > index + 1) {
      paragraph.textContent += ". " + sentencesArray[index + 1];
    }
    if (sentencesArray.length > index + 2) {
      paragraph.textContent += ". " + sentencesArray[index + 2];
    }
    output.appendChild(paragraph);
  }

}