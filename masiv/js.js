let question_arr = ["1. Рынок ценных бумаг – это:", "2. Организованный рынок ценных бумаг осуществляется …", '3. Ценной бумагой не является:',
'4. Инвесторами государственных ценных бумаг могут быть:', '5. Эмиссионная ЦБ, закрепляющая права её владельца на получение части прибыли в виде дивидендов...', '6. Контрольный пакет акций:' ]
let a1_arr = ["a. совокупность сделок, связанных с покупкой и продажей валюты;", 'a. государством;', 'a. ваучер;','a. физические и юридические лица;', "a. облигация;",'a. 50% + 1 акция;']
let a2_arr = ['b. совокупность сделок с ценными бумагами;', 'b.биржей;', 'b. чек;', 'b. резиденты и нерезиденты;', 'b. опцион эмитента;', 'b. опцион эмитента;', 'b. 100%;' ]
let a3_arr = ['c. сделки с недвижимостью.', 'c. акциями', 'c. платежное поручение;', 'c. физические и юридические лица, резиденты и нерезиденты.', 'c. акция.', 'c. 49% + 1 акция.']
let answer_arr = ['совокупность сделок с ценными бумагами', 'биржей', 'платежное поручение', 'физические и юридические лица', 'акция', '50% + 1 акция']

let n_right_answer_arr = [2,2,3,1,3,1];
let n_answer = 5;
let right_answers = 0;


question.innerHTML = question_arr[n_question.value];
a1.innerHTML = a1_arr[n_question.value];
a2.innerHTML = a2_arr[n_question.value];
a3.innerHTML = a3_arr[n_question.value];
answer.innerHTML = answer_arr[n_question.value];

n_right_answer = n_right_answer_arr[n_question.value];
console.log(n_question.value)
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);

function f_out() {
    console.log(y1.checked);
    console.log(y2.checked);
    console.log(y3.checked);
    if (y1.checked) {
        n_a = 1;
    }
    if (y2.checked) {
        n_a = 2;
    }
    if (y3.checked) {
        n_a = 3;
    }
    console.log(n_a);
    if (n_a == n_right_answer) {
        right_answers += 1;
        answer.classList.add("hidden");
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = " + n_question.value);
        console.log("n_answer = " + n_answer);
        console.log("right_answ = " + right_answers);
        if (n_question.value == n_answer) {
            btn.classList.add("hidden");
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b> Верных ответов: " + right_answers + "</b>";
            right_div.appendChild(el1);

        }
    } else {
        right_answers -= 1;
        right_div.classList.add("hidden");
        wrong_div.classList.remove("hidden");
    }


}

function f_out1() {
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
}

function f_out2() {
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k += 1;
    n_question.value = k;
    console.log(n_question);
    question.innerHTML = question_arr[n_question.value];
    a1.innerHTML = a1_arr[n_question.value];
    a2.innerHTML = a2_arr[n_question.value];
    a3.innerHTML = a3_arr[n_question.value];
    answer.innerHTML = answer_arr[n_question.value];
    n_right_answer = n_right_answer_arr[n_question.value];
}

