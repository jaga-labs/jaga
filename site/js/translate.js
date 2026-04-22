// ===== Google Translate Widget (EN ↔ Odia) =====
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,or',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, 'google_translate_element');
}

// Hide the Google Translate top bar frame
(function hideTranslateBar() {
  const style = document.createElement('style');
  style.textContent = `
    .goog-te-banner-frame { display: none !important; }
    body { top: 0 !important; }
    .skiptranslate { display: none !important; }
    #google_translate_element .goog-te-gadget { font-size: 0; }
    #google_translate_element .goog-te-gadget > span { display: none; }
    #google_translate_element select.goog-te-combo {
      font-family: 'Inter', sans-serif;
      font-size: 0.82rem;
      padding: 5px 10px;
      border: 1px solid #E6D9C9;
      border-radius: 6px;
      background: #F5EDE0;
      color: #2D2D2D;
      cursor: pointer;
      outline: none;
    }
  `;
  document.head.appendChild(style);

  // Observe for the banner iframe and hide it
  const observer = new MutationObserver(() => {
    const frame = document.querySelector('.goog-te-banner-frame');
    if (frame) frame.style.display = 'none';
    document.body.style.top = '0';
  });
  observer.observe(document.body, { attributes: true, childList: true, subtree: true });
})();
