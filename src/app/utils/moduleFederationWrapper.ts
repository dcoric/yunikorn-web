import { loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';

/**
 * ModuleFederationWrapper is a utility class that wraps the loadRemoteModule function from the @angular-architects/module-federation package.
 * The use is to enable spying on the loadRemoteModule function in unit tests.
 */
export const ModuleFederationWrapper = {
  loadRemoteModule<T = any>(options: LoadRemoteModuleOptions): Promise<T> {
    return loadRemoteModule<T>(options);
  },
};
