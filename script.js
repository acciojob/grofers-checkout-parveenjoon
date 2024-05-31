const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let totalSum = 0;
  const prices = document.querySelectorAll(".price");
  prices.forEach((e) => {
    totalSum += Number(e.innerText);
  });

  const table = document.querySelector("table");
  const row = document.createElement("tr");
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");
  cell1.innerText = "Total Price";
  cell2.innerText = totalSum;
  cell2.id = "ans";
  row.appendChild(cell1);
  row.appendChild(cell2);
  table.appendChild(row);
  
};

getSumBtn.addEventListener("click", getSum);