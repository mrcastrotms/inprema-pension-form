const STORAGE_PREFIX = "inprema_ops01f02_v2_";

document.addEventListener("DOMContentLoaded", () => {
  const editables = document.querySelectorAll("[data-key]");

  editables.forEach((el) => {
    const key = STORAGE_PREFIX + el.dataset.key;
    const saved = localStorage.getItem(key);
    if (saved !== null) {
      el.textContent = saved;
    }

    el.addEventListener("input", () => {
      localStorage.setItem(key, el.textContent);
    });
  });

  const resetBtn = document.getElementById("btn-reset-fields");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      Object.keys(localStorage)
        .filter((k) => k.startsWith(STORAGE_PREFIX))
        .forEach((k) => localStorage.removeItem(k));
      window.location.reload();
    });
  }
});
