let userInput = document.getElementById("date-box");

userInput.max = new Date().toISOString().split("T")[0];
const results = document.getElementById("result");

const btn = document.getElementById("btn").addEventListener("click", calculateAge);

function calculateAge() {
     let birthDate = new Date(userInput.value);

     let bDate = birthDate.getDate();
     let bMonth = birthDate.getMonth() + 1;

     let bYear = birthDate.getYear();

     let today = new Date();

     let tDate = today.getDate();
     let tMonth = today.getMonth() + 1;
     let tYear = today.getYear();

     let allDate, allMonth, allYear;

     allYear = tYear - bYear;

     if (tMonth >= bMonth) {
          allMonth = tMonth - bMonth;
     } else {
          allYear--;
          allMonth = 12 + tMonth - bMonth;
     }

     if (tDate >= bDate) {
          allDate = tDate - bDate;
     } else {
          allMonth--;
          allDate = getDaysInMonth(bYear, bMonth) + tDate - bDate;
     }
     if (allMonth < 0) {
          allMonth = 11;
          allYear--;
     }

     results.innerHTML = `You are <span>${allYear}</span>years, <span>${allMonth}</span> month, and <span>${allDate}</span> days old `;
}

function getDaysInMonth(year, month) {
     return new Date(year, month, 0).getDate();
}
