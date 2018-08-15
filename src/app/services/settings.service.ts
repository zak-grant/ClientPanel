import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: Settings = {
    allowRegistration: true,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: true
  }

  constructor() {
    if (localStorage.getItem('settings') != null) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings() {
    let settingsCopy: Settings = {
      allowRegistration: this.settings.allowRegistration,
      disableBalanceOnAdd: this.settings.disableBalanceOnAdd,
      disableBalanceOnEdit: this.settings.disableBalanceOnEdit
    }
    return settingsCopy;
  }

  changeSettings(settings: Settings) {
    let settingsCopy: Settings = {
      allowRegistration: settings.allowRegistration,
      disableBalanceOnAdd: settings.disableBalanceOnAdd,
      disableBalanceOnEdit: settings.disableBalanceOnEdit
    }

    localStorage.setItem('settings', JSON.stringify(settingsCopy));
    this.settings = settingsCopy;
  }
}
