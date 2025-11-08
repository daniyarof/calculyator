    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultDiv = document.getElementById('result');

    function calculate(op) {
      const n1 = parseFloat(num1Input.value);
      const n2 = parseFloat(num2Input.value);

      if (isNaN(n1) || isNaN(n2)) {
        showError('❗ Please enter valid numbers in both fields.');
        return;
      }

      let res;
      switch (op) {
        case '+': res = n1 + n2; break;
        case '-': res = n1 - n2; break;
        case '*': res = n1 * n2; break;
        case '/':
          if (n2 === 0) {
            showError("❗ Can't divide by zero!");
            return;
          }
          res = n1 / n2;
          break;
      }
      showResult(res);
    }

    function calculateRoot() {
      const n1 = parseFloat(num1Input.value);
      if (isNaN(n1)) {
        showError('❗ Please enter a valid number in the first field for root.');
        return;
      }
      if (n1 < 0) {
        showError('❗ Cannot calculate square root of negative number.');
        return;
      }
      const res = Math.sqrt(n1);
      showResult(`√${n1} = ${res}`);
    }

    function findMin() {
      const n1 = parseFloat(num1Input.value);
      const n2 = parseFloat(num2Input.value);
      if (isNaN(n1) || isNaN(n2)) {
        showError('❗ Please enter valid numbers in both fields.');
        return;
      }
      const res = Math.min(n1, n2);
      showResult(`Min: ${res}`);
    }

    function findMax() {
      const n1 = parseFloat(num1Input.value);
      const n2 = parseFloat(num2Input.value);
      if (isNaN(n1) || isNaN(n2)) {
        showError('❗ Please enter valid numbers in both fields.');
        return;
      }
      const res = Math.max(n1, n2);
      showResult(`Max: ${res}`);
    }

    // Foiz hisoblash: num1 ning num2 % ni hisoblash
    function calculatePercent() {
      const n1 = parseFloat(num1Input.value);
      const n2 = parseFloat(num2Input.value);
      if (isNaN(n1) || isNaN(n2)) {
        showError('❗ Please enter valid numbers in both fields.');
        return;
      }
      const res = (n1 * n2) / 100;
      showResult(`${n2}% of ${n1} = ${res}`);
    }

    // Daraja hisoblash: num1 ^ num2
    function calculatePower() {
      const n1 = parseFloat(num1Input.value);
      const n2 = parseFloat(num2Input.value);
      if (isNaN(n1) || isNaN(n2)) {
        showError('❗ Please enter valid numbers in both fields.');
        return;
      }
      const res = Math.pow(n1, n2);
      showResult(`${n1} ^ ${n2} = ${res}`);
    }

    function showResult(res) {
      resultDiv.style.color = '#28a745'; // green
      resultDiv.textContent = `Result: ${res}`;
    }

    function showError(msg) {
      resultDiv.style.color = '#dc3545'; // red
      resultDiv.textContent = msg;
    }

    function clearAll() {
      num1Input.value = '';
      num2Input.value = '';
      resultDiv.textContent = '';
    }

    // Enter tugmasi bosilganda qo'shish amali bajarilsin:
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        calculate('+');
      }
    });