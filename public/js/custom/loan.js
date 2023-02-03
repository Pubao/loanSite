// 복리계산기 JS
document.querySelector('#caculator').addEventListener('click', ()=>{
	let tableBody = document.querySelector('#tableBody');
	tableBody.innerHTML = '';

	let principal = document.querySelector('#principal').value;
	let period = document.querySelector('#period').value;
	let periodUnit = document.querySelector('#periodUnit').value;
	let rate = document.querySelector('#rate').value/100;

	if(principal == '') {
		alert('투자원금을 입력하세요');
		document.querySelector('#principal').focus();
		return;
	}else if(period == '') {
		alert('투자기간을 입력하세요');
		document.querySelector('#period').focus();
		return;
	}else if(rate == '') {
		alert('목표수익률을 입력하세요');
		document.querySelector('#period').focus();
		return;
	}

	let unitName = '';
	switch(periodUnit) {
		case 'day' :
			unitName = '일';
			break;
		case 'month' :
			unitName = '개월';
			break;
		case 'year' :
			unitName = '년';
			break;
	}

	for(i=1; i<=period; i++) {
		let totalMoney = Math.round(principal*Math.pow(1+rate,i));
		let revenue = totalMoney - principal;
		let yield = (revenue/principal*100).toFixed(2);
				
		let tr = document.createElement('tr');
		
		tr.appendChild(loanTemplates.setTd(i+unitName, 'center'));
		tr.appendChild(loanTemplates.setTd(loanTemplates.comma(revenue)+'원', 'right'));
		tr.appendChild(loanTemplates.setTd(loanTemplates.comma(totalMoney)+'원', 'right'));
		tr.appendChild(loanTemplates.setTd(loanTemplates.comma(yield)+'%', 'right'));

		tableBody.appendChild(tr);
	}

	document.querySelector('#resultDiv').style.display='block';

});

const loanTemplates = {
	comma : function(money) {
		return money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
	},
	setTd : function(value, align) {
		let td = document.createElement('td');
		td.textContent=value;
		td.style.textAlign=align;

		return td;
	}
}