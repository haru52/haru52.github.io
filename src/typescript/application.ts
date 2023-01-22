import { injectable } from 'tsyringe';
import CurrentNavLinkActivator from './current-nav-link-activator';

@injectable()
export default class Application {
  #currentNavLinkActivator;

  constructor(currentNavLinkActivator: CurrentNavLinkActivator) {
    this.#currentNavLinkActivator = currentNavLinkActivator;
  }

  run() {
    this.#currentNavLinkActivator.run();
  }
}
