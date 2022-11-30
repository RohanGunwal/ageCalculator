let date, month, year;
const inputs = document.querySelectorAll(".form-control");

inputs.forEach((ele) => {
  ele.addEventListener("blur", (e) => {
    if (e.target.id === "date") {
      date = e.target.value;
    } else if (e.target.id === "month") {
      month = e.target.value;
    } else {
      year = e.target.value;
    }
  });
});

document.querySelector(".btn").addEventListener("click", () => {
  let answer = document.getElementById("answer");
  let newDate = new Date();
  let currDate = newDate.getDate(),
    currMonth = newDate.getMonth(),
    currYear = newDate.getFullYear();
  console.log(date, month, year, currDate, currMonth, currYear);
  let validDate = false,
    validMonth = false,
    validYear = false;
  if (date > 0 && date <= 31 && Number(date)) {
    validDate = true;
  }
  if (month > 0 && month <= 12 && Number(month)) {
    validMonth = true;
  }
  if (year >= 1000 && year <= currYear && Number(year)) {
    validYear = true;
  }
  if (validDate && validMonth && validYear) {
    if (year === currYear && month === currMonth && date <= currDate) {
      answer.innerText = `Your Age is :  ${Math.abs(
        currYear - year
      )} Years ${Math.abs(currMonth - month)} Months ${Math.abs(
        currDate - date
      )} Days`;
    } else if (year <= currYear) {
      if (month <= currMonth) {
      }
      answer.innerText = `Your Age is :  ${Math.abs(
        currYear - year
      )} Years ${Math.abs(currMonth - month)} Months ${Math.abs(
        currDate - date
      )} Days`;
    } else {
      answer.innerText = `Please Enter Valid Date, Month and Year`;
    }
  } else {
    answer.innerText = `Please input valid data for${
      validDate ? "" : " Date Field,"
    }${validMonth ? "" : " Month Field,"}${validYear ? "" : " Year Field"}`;
  }
});
