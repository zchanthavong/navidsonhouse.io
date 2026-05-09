let weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

window.addEventListener("load", showWeekDays);
function showWeekDays(){
    let i = 0;
    // finds header cells
    let headingCells = document.getElementsByTagName("th");
    while (i < 7) {
        // writes the week days into the header cells
        headingCells[i].innerHTML = weekDays[i];
        i++; // plus one to the counter
    }
}

function activateCalendar() {
  const cells = document.querySelectorAll("#calendar td");
  const messageBox = document.getElementById("messageBox");

  cells.forEach(function(cell) {
    cell.onclick = function() {

      if (this.textContent.trim() === "") {
        messageBox.innerHTML = "Click on a day.";
        return;
      }

      if (this.classList.contains("open")) {
        messageBox.innerHTML = "We are OPEN on this day.";
      }
      else if (this.classList.contains("closed")) {
        messageBox.innerHTML = "We are CLOSED on this day.";
      }
      else if (this.classList.contains("halloween")) {
        messageBox.innerHTML = "Halloween! Feel free to visit our haunted <span style=color:#0000FF>house</span>.";
      }
      else {
        messageBox.innerHTML = "No info available.";
      }
    };
  });
}