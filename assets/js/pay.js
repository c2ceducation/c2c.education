const amount=document.getElementById('amount');
const pay=document.getElementById('pay');
pay.addEventListener('click',function(e){
    const c=`http://secure.c2c.education/pay?amount=${amount.innerHTML}`;
    pay.setAttribute("href",c);
})
