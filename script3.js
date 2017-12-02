function scrollToTop() {
    if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
        window.scrollBy(0, -150);
        requestAnimationFrame(scrollToTop);
    }
}