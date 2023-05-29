let monthvalue;
let yearvalue;
function addcal() {
  document.querySelector(".container").innerHTML = `<div>SUN</div>
      <div>MON</div>
      <div>TUE</div>
      <div>WED</div>
      <div>THU</div>
      <div>FRI</div>
      <div>SAT</div>`;
  var dt = new Date(yearvalue, monthvalue);
  console.log(dt)
  var month = dt.getMonth(); // read the current month
  var year = dt.getFullYear(); // read the current year

  dt = new Date(year, month, 01); // date object with first day of current month

  var first_day = dt.getDay(); //, first day of present month ( from 0 to 6 )
  //sunday=0,monday=1,tue=2,wed=3,thur=4,fri=5;sat=6;

  dt.setMonth(month + 1, 0);
  let lastdate = dt.getDate();
  for (let i = 0; i < first_day; i++) {
    let div = document.createElement("div");
    document.querySelector(".container").append(div);
  }
  for (let i = 1; i <= lastdate; i++) {
    let divvalue = document.createElement("div");
    divvalue.innerText = i;
    let doc2 = document.querySelector(".container");
    doc2.append(divvalue);
  }
}

function getmonthvalue(e) {
  monthvalue = e.target.value;
  addcal();
}
function getyearvalue(e) {
  yearvalue = e.target.value;
  addcal();
}
function handlecolor() {
  let valueholder = document.querySelector(".inputbox").value;
  let containerData = document.querySelectorAll(".container div");
  for (let i = 0; i < containerData.length; i++) {
    if (containerData[i].innerText == valueholder) {
        console.log(containerData[i].style.backgrounColor)
      if (containerData[i].style.backgroundColor == "green") {
        
        containerData[i].style.backgroundColor = "white";
        containerData[i].style.color = "black";
      } else {
        containerData[i].style.backgroundColor = "green";
        containerData[i].style.color = "white";
      }
    }
  }
}
