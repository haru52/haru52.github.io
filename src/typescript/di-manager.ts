import CurrentNavLinkActivator from './current-nav-link-activator';

export default class DIManager {
  readonly currentNavLinkActivator: CurrentNavLinkActivator;

  constructor() {
    this.currentNavLinkActivator = new CurrentNavLinkActivator();
  }
}
