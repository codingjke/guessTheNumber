const secretNum = Math.ceil(Math.random() * 10);
let tries = 0;

function guessNum(num) {
  if (tries >= 7) {
    alert(
      "ReferenceError: 'tries' exceeded its limit. Баг победил. Вернитесь позже!"
    );
    return;
  }

  if (num === secretNum) {
    alert(
      "TypeError: Cannot destructure property 'location' of 'Bug' as it is null. Поздравляем, вы нашли и устранили Баг!"
    );
    location.reload();
  } else {
    let direction = num < secretNum ? "правее" : "левее";

    switch (tries) {
      case 0:
        alert(
          `SyntaxError: Unexpected bug token in JSON at position 0. Баг где-то ${direction}, но не в JSON!`
        );
        break;
      case 1:
        alert(
          `EvalError: Caller not allowed to execute bug snippets. Баг усиливается и избегает eval(). Он ${direction}.`
        );
        break;
      case 2:
        alert(
          `RangeError: Maximum call stack size exceeded. Баг прячется глубоко в рекурсии. Найдите его ${direction}!`
        );
        break;
      case 3:
        alert(
          `URIError: URI malformed. Баг испортил ваш URL! Но дал подсказку, что он ${direction}.`
        );
        break;
      case 4:
        alert(
          `TypeError: Cannot convert bug to object. Похоже, Баг не хочет становиться объектом. Но он ${direction}!`
        );
        break;
      case 5:
        alert(
          `ReferenceError: 'bug' is not defined. Вы почти его нашли! Баг ускользает, но он ${direction}.`
        );
        break;
      case 6:
        alert(
          `Error: Too many recursive calls in bug search. Баг прячется где-то ${direction}! Будьте осторожны!`
        );
        break;
    }
    tries++;
  }
}
