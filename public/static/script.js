
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

document.addEventListener('mousemove', function (event) {
    var cursor = document.querySelector('.custom-cursor');
    cursor.style.top = event.clientY + 'px';
    cursor.style.left = event.clientX + 'px';
    document.querySelector('.blob').style.transform = `translate3d(calc(${event.clientX}px - 50%), calc(${event.clientY}px - 50%), 0)`;
});

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
    let normalizedPosition = e.pageX / (width / 2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;
    spansSlow.forEach((span) => {
        span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span) => {
        span.style.transform = `translate(${speedFast}px)`
    });
}
function handleWindowResize() {
    width = window.innerWidth;
}

window.addEventListener('scroll', (event) => {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
        document.getElementById('scrollmessage').style.opacity = 0;

    } else {
        document.getElementById('scrollmessage').style.opacity = 1;
    }
});
