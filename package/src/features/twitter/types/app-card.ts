/**
 * Twitter App Card.
 */
export type TwitterAppCard = {
  /**
   * The card type.
   *
   * @example <meta name="twitter:card" content="app">
   */
  type: 'app';

  /**
   * The Twitter username of the website.
   *
   * @example <meta name="twitter:site" content="@example_site">
   */
  site: string;

  /**
   * The name of the iPhone app.
   *
   * @example <meta name="twitter:app:name:iphone" content="Example App">
   */
  iPhoneAppName?: string;

  /**
   * The App ID in the App Store.
   *
   * @example <meta name="twitter:app:id:iphone" content="123456789">
   */
  iPhoneAppId: string;

  /**
   * Custom URL scheme of the App (Must include ”://” after scheme name). Used for deep linking.
   *
   * @example <meta name="twitter:app:url:iphone" content="example://open">
   */
  iPhoneAppUrl?: string;

  /**
   * The name of the iPad optimized app.
   *
   * @example <meta name="twitter:app:name:ipad" content="Example App">
   */
  iPadAppName?: string;

  /**
   * The App ID of the iPad App in the App Store.
   *
   * @example <meta name="twitter:app:id:ipad" content="123456789">
   */
  iPadAppId: string;

  /**
   * Custom URL scheme of the iPad App (Must include ”://” after scheme name). Used for deep linking.
   *
   * @example <meta name="twitter:app:url:ipad" content="example://open">
   */
  iPadAppUrl?: string;

  /**
   * If your application is not available in the US App Store, you must set this value to the two-letter country code for the App Store that contains your application.
   *
   * @example <meta name="twitter:app:country" content="UK">
   */
  appCountry?: string;

  /**
   * The name of the Android app.
   *
   * @example <meta name="twitter:app:name:googleplay" content="Example App">
   */
  googlePlayAppName?: string;

  /**
   * The App ID in the Google Play Store.
   *
   * @example <meta name="twitter:app:id:googleplay" content="com.example.app">
   */
  googlePlayAppId: string;

  /**
   * The Android deep link URL.
   *
   * @example <meta name="twitter:app:url:googleplay" content="example://open">
   */
  googlePlayAppUrl?: string;
};
