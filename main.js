const header = document.querySelector(".nav");

function onScroll() {
  header.classList.toggle("is-stuck", window.scrollY > 8);
}

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

document.querySelectorAll(".ep-video").forEach((btn) => {
  btn.addEventListener("click", () => {
    const frame = btn.closest(".ep-frame");
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${btn.dataset.id}?autoplay=1&rel=0`;
    iframe.title = btn.getAttribute("aria-label") || "Episode";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    frame.replaceChildren(iframe);
  });
});
