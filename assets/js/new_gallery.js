(function () {
const root = document.getElementById('homeGallery');
const manifestPath = root.getAttribute('data-manifest');

const imgEl = root.querySelector('.gallery-image');
const capEl = root.querySelector('.gallery-caption');
const btnPrev = root.querySelector('.gallery-btn.prev');
const btnNext = root.querySelector('.gallery-btn.next');
const dotsWrap = root.querySelector('.gallery-dots');

let slides = [];
let i = 0;
let touchStartX = null;

// Helper: preload the next/prev images for snappy transitions
function preload(index) {
    [index - 1, index + 1].forEach(idx => {
    const s = slides[(idx + slides.length) % slides.length];
    if (!s || s._preloaded) return;
    const p = new Image();
    p.src = s.url;
    s._preloaded = true;
    });
}

function render(index) {
    if (!slides.length) return;
    i = (index + slides.length) % slides.length;
    const s = slides[i];
    imgEl.src = s.url;
    imgEl.alt = s.caption || '';
    capEl.textContent = s.caption || '';
    updateDots();
    preload(i);
    // Persist last index so returning visitors see where they left off
    try { sessionStorage.setItem('homeGalleryIndex', String(i)); } catch {}
}

function updateDots() {
    dotsWrap.querySelectorAll('button').forEach((b, idx) => {
    b.setAttribute('aria-current', String(idx === i));
    });
}

function buildDots() {
    dotsWrap.innerHTML = '';
    slides.forEach((_, idx) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', 'Go to slide ' + (idx + 1));
    b.addEventListener('click', () => render(idx));
    dotsWrap.appendChild(b);
    });
}

function next() { render(i + 1); }
function prev() { render(i - 1); }

// Keyboard support
root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { next(); }
    else if (e.key === 'ArrowLeft') { prev(); }
});
root.tabIndex = 0; // make focusable for keyboard arrows

// Touch swipe support
root.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].clientX;
}, { passive: true });

root.addEventListener('touchend', (e) => {
    if (touchStartX == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const threshold = 40; // px
    if (dx > threshold) prev();
    else if (dx < -threshold) next();
    touchStartX = null;
});

btnPrev.addEventListener('click', prev);
btnNext.addEventListener('click', next);

// Load manifest and initialize
fetch(manifestPath, { cache: 'no-store' })
    .then(r => {
    if (!r.ok) throw new Error('Manifest not found: ' + manifestPath);
    return r.json();
    })
    .then(list => {
    // Normalize to absolute URLs rooted at /images/home/gallery/
    const base = '/images/home/gallery/';
    slides = list
        .filter(item => item && item.src)
        .map(item => ({
        url: item.src.startsWith('http') ? item.src : base + item.src,
        caption: item.caption || (item.src.split('/').pop().replace(/\.[a-z]+$/i, '').replace(/[-_]/g, ' '))
        }));

    if (!slides.length) throw new Error('No slides in manifest');

    buildDots();

    let startIdx = 0;
    try {
        const saved = parseInt(sessionStorage.getItem('homeGalleryIndex') || '0', 10);
        if (!Number.isNaN(saved)) startIdx = Math.min(Math.max(saved, 0), slides.length - 1);
    } catch {}

    render(startIdx);
    })
    .catch(err => {
    console.error(err);
    // Minimal graceful fallback: show a friendly message in the caption area
    capEl.textContent = 'Gallery unavailable. Check that gallery.json exists and is valid.';
    });
})();