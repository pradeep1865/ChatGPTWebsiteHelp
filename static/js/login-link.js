// Attach login navigation to any user icon buttons rendered by the app
// Observes the DOM so the handler persists across page changes.
document.addEventListener('DOMContentLoaded', () => {
  const attach = () => {
    document.querySelectorAll('svg.lucide-user').forEach(icon => {
      const btn = icon.closest('button');
      if (btn && !btn.dataset.loginAttached) {
        btn.dataset.loginAttached = 'true';
        btn.addEventListener('click', () => {
          window.location.href = 'login.html';
        });
      }
    });
  };

  // initial attempt
  attach();

  // observe DOM for dynamically added icons
  const observer = new MutationObserver(attach);
  observer.observe(document.body, { childList: true, subtree: true });
});
