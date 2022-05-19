export default class CurrentNavLinkActivator {
  #currentPageId: string;

  constructor() {
    this.#currentPageId = CurrentNavLinkActivator.#getCurrentPageId();
  }

  run() {
    const currentPageNavLink = document.getElementById(
      `${this.#currentPageId}-nav-link`
    );

    if (currentPageNavLink === null) return;

    currentPageNavLink.classList.add('active');
    currentPageNavLink.setAttribute('aria-current', 'page');
  }

  static #getCurrentPageId() {
    const { pathname } = window.location;

    if (pathname === '/') return 'index';

    return pathname.replace('/', '').replaceAll('_', '-').replace('.html', '');
  }
}
