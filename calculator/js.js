btn.addEventListener("click",f_out);

   function f_out (){
       q = 1 / Number(m.value);
       console.log(q);
       z = Number(p.value) / q;
       res.innerHTML = z;
       console.log(z);
   }