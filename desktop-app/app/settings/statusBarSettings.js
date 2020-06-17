import settings from 'electron-settings';
import {STATUS_BAR_VISIBILITY} from '../constants/settingKeys';

class StatusBarSettings {
  getVisibility() {
    return settings.get(STATUS_BAR_VISIBILITY) || true;
  }

  setVisibility(visible) {
    settings.set(STATUS_BAR_VISIBILITY, visible);
  }
}

const statusBarSettingsInstance = new StatusBarSettings();

export {statusBarSettingsInstance as statusBarSettings};
