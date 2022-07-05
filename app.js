const keys = ['*', '/', '+', '-', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'];
const operators = ['*', '/', '+', '-'];

window.addEventListener('DOMContentLoaded', init);

function init() {
    let dec = false;
    let evalu = false;
    document.title = 'Vanilla JavaScript Calculator Project';
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.maxWidth = '600px';
    container.style.minHeight = '50vh';
    container.style.margin = 'auto';
    document.body.appendChild(container);
    const main = document.createElement('main');
    main.style.width = '600px';
    main.style.height = '50vh';
    container.appendChild(main);
    const output = document.createElement('input');
    output.style.width = '100%';
    output.style.lineHeight = '50px';
    output.style.fontSize = '2em';
    main.appendChild(output);

    keys.forEach(function (key) {
        makeBtn(key, addOutput);
    });

    makeBtn('=', evalOutput);
    makeBtn('C', clearOutput);

    function colorOutput(col){
        output.style.border = '1px solid' + col;
    }

    function evalOutput() {
        if (output.value === '') {
            colorOutput('red');
        }else if(evalu) {
            colorOutput('red');
        }else {
            colorOutput('black');
            output.value = eval(output.value);
        }
    }

    function clearOutput() {
        colorOutput('black');
        output.value = '';
    }

    function makeBtn(txt, myFunction) {
        let btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.style.width = '23%';
        btn.style.margin = '1%';
        btn.val = txt;
        btn.textContent = txt;
        btn.addEventListener('click', myFunction);
        main.appendChild(btn);
    };

    function addOutput(e) {
        colorOutput('black');
        let char = e.target.val;
        if (char == '.') {
            if (dec) {
                char = '';
                colorOutput('red');
            } else {
                dec = true;
            }
        }
        evalu = operators.includes(char);
        if (evalu) {
            dec = false;
        }
        output.value += char;
    }
}


