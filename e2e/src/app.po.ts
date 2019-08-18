import { browser, by, element } from 'protractor';

export class AppPage {
  public static getTitleText(): Promise<string> {
    return element(by.css('atm-root h1')).getText() as Promise<string>;
  }

  public static navigateTo(): Promise<any> {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
}
