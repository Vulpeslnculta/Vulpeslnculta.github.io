const btn = document.getElementById('btn');

function toggleText() {
    const text = document.getElementById('text');
    if (text.style.display === "none") {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
}

btn.addEventListener('click', function handleClick() {
  btn.textContent = 'Yey!';
  toggleText();
});