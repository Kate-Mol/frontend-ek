btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
function f_out (){
    console.log(f1.checked);
    console.log(f2.checked);
    console.log(f3.checked);
    console.log(f4.checked);

    if (f2.checked){
        right.classList.remove("hdn");
        wrong.classList.add("hdn");
        answer.classList.add("hdn");
    }else{
        right.classList.add("hdn");
        wrong.classList.remove("hdn");
    }


}
function f_out1 (){
    answer.classList.toggle("hdn");
    btn1.classList.toggle("opend");
}
