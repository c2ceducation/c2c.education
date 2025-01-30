const amount=document.getElementById('amount');
var pay=document.getElementById('pay');
if(pay!=null && pay.innerText.includes("PhonePe")){//remove the phonepe button	
	pay.parentNode.remove();
	pay=document.getElementById('pay')
}
if(pay!=null){
pay.addEventListener('click',function(e){
    const val = amount.innerHTML.replace("₹", "");
    const noteVal = location.pathname.replace(".html", "").replace("/", "") + " Course";
    const c = `https://secure.c2c.education/pay/pplab?amount=${val}&note=${noteVal}`;
    pay.setAttribute("href",c);
});
}
const paytwo=document.getElementById('paytwo');
if(paytwo!=null){
paytwo.addEventListener('click',function(e){
    const val = amount.innerHTML.replace("₹", "");
    const noteVal = location.pathname.replace(".html", "").replace("/", "") + " Course";
    const c = `https://secure.c2c.education/pay/dplab?amount=${val}&note=${noteVal}`;
    paytwo.setAttribute("href",c);
});
}
