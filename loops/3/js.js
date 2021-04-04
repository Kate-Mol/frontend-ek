btn.addEventListener("click",fnc);
function fnc() {
    n1 = Number(n.value);
    console.log(typeof n1);
    let total = 0;
    let total1 = 0;
    for (let i =1; i<= n1; i++){
        total +=Number(i);
        answer.innerHTML= "Cумма(1) = " +total;
        console.log(total);

    }

        for (let i =1; i<= n1; i++){
            if(i%2==0) {
                total1 +=i;
                answer2.innerHTML= "Cумма(2) = " +total1;
                console.log(total1);
            }
        }

}


