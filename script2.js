// Start of navbar

scrollTo = (element) => {
  window.scroll(
      {
        behavior: 'smooth',
        left: 0,
        top: element.getBoundingClientRect().top + window.scrollY
      }
  );
  console
}

document.getElementById("1").addEventListener('click', () => {
  scrollTo(document.getElementById("profile"));
});

document.getElementById("2").addEventListener('click', () => {
  scrollTo(document.getElementById("searching"));
});

document.getElementById("3").addEventListener('click', () => {
  scrollTo(document.getElementById("chatting"));
});

document.getElementById("4").addEventListener('click', () => {
  scrollTo(document.getElementById("communities"));
});

document.getElementById("5").addEventListener('click', () => {
  scrollTo(document.getElementById("showcase"));
});


// End of navbar