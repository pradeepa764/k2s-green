function changeGreeting() {
  const greetingElement = document.getElementById('greeting');
  greetingElement.textContent = 'Hello, ' + prompt('Enter your name:') + '!';
}

                        