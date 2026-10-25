const display = document.getElementById('display');
    var currentInput = '0';
    var previousInput = '';
    var operator = null;
    var shouldResetDisplay = false;

    function updateDisplay() {
      display.innerText = currentInput;
    }

    function appendNumber(number) {
      if (currentInput === '0' || shouldResetDisplay) {
        currentInput = number;
        shouldResetDisplay = false;
      } else {
        currentInput += number;
      }
      updateDisplay();
    }

    function appendDot() {
      if (shouldResetDisplay) {
        currentInput = '0.';
        shouldResetDisplay = false;
      } else if (!currentInput.includes('.')) {
        currentInput += '.';
      }
      updateDisplay();
    }

    function appendOperator(op) {
      if (operator !== null && !shouldResetDisplay) {
        calculate();
      }
      previousInput = currentInput;
      operator = op;
      shouldResetDisplay = true;
    }

    function calculate() {
      if (operator === null || shouldResetDisplay) return;

      let result = 0;
      const prev = parseFloat(previousInput);
      const current = parseFloat(currentInput);

      switch (operator) {
        case '+':
          result = prev + current;
          break;
        case '-':
          result = prev - current;
          break;
        case '×':
          result = prev * current;
          break;
        case '÷':
          result = current !== 0 ? prev / current : 'Error';
          break;
      }

      currentInput = result.toString();
      operator = null;
      shouldResetDisplay = true;
      updateDisplay();
    }

    function clearDisplay() {
      currentInput = '0';
      previousInput = '';
      operator = null;
      shouldResetDisplay = false;
      updateDisplay();
    }

    function toggleSign() {
      if (currentInput !== '0') {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
      }
    }

    function percentage() {
      currentInput = (parseFloat(currentInput) / 100).toString();
      updateDisplay();
    }