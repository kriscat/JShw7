while (1) {
    let a = +prompt("Выберите задание (1-4)");
    switch (a) {
        case 1:
            {
                alert("Задание 1: a или b? Что меньше?");
                let firstNum = +prompt("Введите a");
                let secondNum = +prompt("Введите b");

                function checkNum(firstNum, secondNum) {
                    if (firstNum < secondNum) {
                        return firstNum;
                    } else {
                        return secondNum;
                    };
                };
                let result = checkNum(firstNum, secondNum);
                alert(result);
                break;
            };

        case 2:
            {
                alert("Задание 2: Сколько будет x в степени n");
                let numX = +prompt("Введите число x");
                let numN = +prompt("Введите его степень n");

                function getNum(numX, numN) {
                    if (numN >= 1) {
                        return numX ** numN;
                    } else {
                        return ("ошибка!");
                    };
                }
                let result = getNum(numX, numN);
                alert(result);
                break;
            };
        case 3:
            {
                alert("Задание 3: Посмотрим на нечётные числа от m до g");
                let numM = +prompt("Введите число m");
                let numG = +prompt("Введите число g");

                function checkNumbers(numM, numG) {
                    for (let i = numM; i <= numG; i++) {
                        if (i % 2 !== 0) {
                            alert(i);
                        }
                    }
                }
                let resultMG = checkNumbers(numM, numG);
                break;
            };
        case 4:
            {
                alert("Задание 4: Посмотрим на числа от 1 до z, которые делятся на 1 или на само себя без остатка");
                let numZ = +prompt("Введите число z");

                function checkNumbers(numZ) {
                    primeNum: for (let i = 2; i <= numZ; i++) {
                        for (let j = 2; j < i; j++) {
                            if (i % j == 0) continue primeNum;
                        }
                        alert(i);
                    }
                }
                let resultZ = checkNumbers(numZ);
                break;
            };
        default:
            if (a == "" || a == null) {
                alert("Ошибка");
            } else {
                alert("Выберите еще раз задание");
            }
            break;
    }
}