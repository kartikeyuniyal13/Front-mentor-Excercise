document.addEventListener('DOMContentLoaded', function() {
    var eb = document.getElementById('dbut');
    
    var em = document.getElementById('box');
    var co=document.getElementById('hero');
    var car=document.getElementById('card');
    

    function check(mail)
    {
     
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
              return true;
            }
        
            return false;
          }
          
 
    eb.addEventListener('click', function() {
        var al=document.getElementById('alert');
        var tt=document.getElementById('weltxt');
        var mail=em.value;

        if(check(mail))
        {

tt.innerText=`A confirmation email has been sent to ${mail}.`;
             em.classList.remove('red');
             al.classList.remove('disp');
             co.classList.add('wel');
             car.classList.remove('welcard');
        }
        else
        {
            em.classList.add('red');
            al.classList.add('disp');
        }
     
    });
    var cb=document.getElementById('cbutt');
    cb.addEventListener('click',function(){
        co.classList.remove('wel');
        car.classList.add('welcard');
        em.value="";
    });
});
