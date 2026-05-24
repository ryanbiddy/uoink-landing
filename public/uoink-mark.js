// Uoink — magnet-U web component.
// Use <uoink-mark></uoink-mark> anywhere; size with CSS (em or px).
(function () {
  if (customElements.get('uoink-mark')) return;
  const PATH = 'M 0 0 L 32 0 L 32 60 L 68 60 L 68 0 L 100 0 L 100 80 Q 100 100 80 100 L 20 100 Q 0 100 0 80 Z';
  class UoinkMark extends HTMLElement {
    connectedCallback() {
      if (this.dataset.rendered) return;
      this.dataset.rendered = '1';
      this.innerHTML =
        '<svg viewBox="0 0 100 100" aria-label="Uoink" role="img">' +
          '<path class="u-body" d="' + PATH + '"></path>' +
          '<rect class="u-tip" x="0" y="0" width="32" height="14"></rect>' +
          '<rect class="u-tip" x="68" y="0" width="32" height="14"></rect>' +
        '</svg>';
    }
  }
  customElements.define('uoink-mark', UoinkMark);
})();
