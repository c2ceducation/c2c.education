const amount=document.getElementById('amount');
const pay=document.getElementById('pay');
pay.addEventListener('click',function(e){
    const val=amount.innerHTML.replace("₹","");
    const c=`http://secure.c2c.education/pay?amount=${val}`;
    pay.setAttribute("href",c);
})
