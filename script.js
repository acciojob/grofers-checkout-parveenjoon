
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices=document.getElementsByClassName("price");
	let n=prices.length;
	let ans=0;
	for(let i=0;i<n;i++)
		{
			let price=(Number)(prices.item(i).innerText);
			ans+=price;
        }
	
	let table=document.getElementsByTagName("table").item(0);
	
	 let row=document.createElement("tr");
	let d1=document.createElement("td");
	let d2=document.createElement("td");
	d1.innerText="total price";
	row.appendChild(d1);
	d2.id="ans";
	d2.innerText=ans;
	row.appendChild(d2);
	table.appendChild(row);
	
  
};

getSumBtn.addEventListener("click", getSum,{once:true});
