const inputs = document.querySelectorAll('.code');

// Focus the first input by default
window.addEventListener('load', () => {
  inputs[0].focus();
});

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;

    // Allow only digits
    if (!/^[0-9]$/.test(value)) {
      e.target.value = '';
      return;
    }

    // Move to next input if exists
    if (value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      // Clear the value
      e.target.value = '';

      // Move to previous input
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});
