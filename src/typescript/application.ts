import type CurrentNavLinkActivator from './current-nav-link-activator';

export default class Application {
  #currentNavLinkActivator: CurrentNavLinkActivator;

  constructor(currentNavLinkActivator: CurrentNavLinkActivator) {
    this.#currentNavLinkActivator = currentNavLinkActivator;
  }

  run() {
    this.#currentNavLinkActivator.run();
  }
}
