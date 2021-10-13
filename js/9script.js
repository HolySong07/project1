"use strict"; // строгий режим
// shift alt a - комментировать

let incr = 20,
    decr = 25;

    incr++;
    decr--;

    console.log(incr);

// второй способ

let incr1 = 20,
    decr1 = 25;

    ++incr1;
    --decr1;

    console.log(incr1);
    // все равно что 
    console.log(--incr1); // сначало вычитаем, а потмо выводим переменную

    console.log(5%2); // % - разделит и вернет остаток
    console.log(4*2 == 8); // сравнили
    console.log(4*2 === 8); // true - сравнили еще и по типу данных
    console.log(4*2 === "8"); // false -  Не будет работать так как разные типы данных

    // && || ===
    
    let daa = true,
        nee = true,
        neeeeee = false;

    console.log(daa || nee);
    console.log(daa && nee);9
    console.log(daa === nee);


    //

 // - означает  нет, знаит наоборот

    console.log(daa !== nee);
    



