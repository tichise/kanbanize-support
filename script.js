// 付箋アニメーション
function createStickyNote() {
    const container = document.querySelector('.sticky-notes-container');
    if (!container) return;

    // 現在の付箋の数をチェック
    if (container.children.length >= 25) {
        const oldestNote = container.firstChild;
        if (oldestNote) {
            oldestNote.remove();
        }
    }

    const note = document.createElement('div');
    note.className = 'sticky-note';

    // ランダムな開始位置と終了位置を設定
    const startX = Math.random() * window.innerWidth;
    const startY = -100;
    const endX = Math.random() * window.innerWidth;
    const endY = window.innerHeight + 100;

    note.style.setProperty('--startX', startX);
    note.style.setProperty('--startY', startY);
    note.style.setProperty('--endX', endX);
    note.style.setProperty('--endY', endY);

    // ランダムな回転角度を設定
    const rotation = Math.random() * 360;
    note.style.transform = `rotate(${rotation}deg)`;

    container.appendChild(note);

    // アニメーション終了時に要素を削除
    note.addEventListener('animationend', () => {
        note.remove();
    });
}

// 付箋生成の間隔を設定
setInterval(createStickyNote, 800);

// スクロールアニメーション
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});

// マウスインタラクション
document.addEventListener('mousemove', (e) => {
    const features = document.getElementById('features');
    if (!features) return;

    const rect = features.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    features.style.setProperty('--mouse-x', `${x}px`);
    features.style.setProperty('--mouse-y', `${y}px`);
});

document.addEventListener('mouseleave', () => {
    const features = document.getElementById('features');
    if (!features) return;

    features.style.setProperty('--mouse-x', '50%');
    features.style.setProperty('--mouse-y', '50%');
}); 