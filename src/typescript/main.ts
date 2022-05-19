import Application from './application';
import DIManager from './di-manager';

export default class Main {
  static main() {
    const diManager = new DIManager();
    const application = new Application(diManager.currentNavLinkActivator);
    application.run();
  }
}
