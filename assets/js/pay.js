const amount=document.getElementById('amount');
const pay=document.getElementById('pay');
if(pay!=null){
pay.addEventListener('click',function(e){
    const val=amount.innerHTML.replace("₹","");
    const c=`https://secure.c2c.education/pay/pplab?amount=${val}`;
    pay.setAttribute("href",c);
});
}
const paytwo=document.getElementById('paytwo');
if(paytwo!=null){
paytwo.addEventListener('click',function(e){
    const val=amount.innerHTML.replace("₹","");
    const c=`https://secure.c2c.education/pay/dplab?amount=${val}`;
    paytwo.setAttribute("href",c);
});
}
