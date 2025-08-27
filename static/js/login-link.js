// Attach login navigation to any user icon buttons rendered by the app
// Observes the DOM so the handler persists across page changes.
document.addEventListener('DOMContentLoaded', () => {
  const showLogin = () => {
    if (document.getElementById('login-modal')) return;

    const overlay = document.createElement('div');
    overlay.id = 'login-modal';
    overlay.style.cssText = '
      position:fixed;top:0;left:0;width:100%;height:100%;
      background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;
      z-index:10000;';

    const iframe = document.createElement('iframe');
    iframe.src = 'login.html';
    iframe.style.cssText = 'width:90%;height:80%;border:0;border-radius:8px;background:#fff;';

    const close = document.createElement('button');
    close.textContent = '\u00d7';
    close.setAttribute('aria-label', 'Close');
    close.style.cssText = '
      position:absolute;top:20px;right:20px;font-size:24px;
      background:none;border:none;color:#fff;cursor:pointer;';
    close.addEventListener('click', () => overlay.remove());

    overlay.appendChild(close);
    overlay.appendChild(iframe);
    document.body.appendChild(overlay);
  };

  const attach = () => {
    document.querySelectorAll('svg.lucide-user').forEach(icon => {
      const btn = icon.closest('button');
      if (btn && !btn.dataset.loginAttached) {
        btn.dataset.loginAttached = 'true';
        btn.addEventListener('click', showLogin);
      }
    });
  };

  attach();

  const observer = new MutationObserver(attach);
  observer.observe(document.body, { childList: true, subtree: true });
});
