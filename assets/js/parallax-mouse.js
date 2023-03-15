// добавить разные value = "2"

function parallax(event) {
  this.querySelectorAll(".main-page__item").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

document.addEventListener("mousemove", parallax);