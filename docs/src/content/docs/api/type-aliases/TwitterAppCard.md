---
editUrl: false
next: false
prev: false
title: "TwitterAppCard"
---

> **TwitterAppCard**: `object`

Twitter App Card.

## Type declaration

### appCountry?

> `optional` **appCountry**: `string`

If your application is not available in the US App Store, you must set this value to the two-letter country code for the App Store that contains your application.

#### Example

```ts
<meta name="twitter:app:country" content="UK">
```

### googlePlayAppId

> **googlePlayAppId**: `string`

The App ID in the Google Play Store.

#### Example

```ts
<meta name="twitter:app:id:googleplay" content="com.example.app">
```

### googlePlayAppName?

> `optional` **googlePlayAppName**: `string`

The name of the Android app.

#### Example

```ts
<meta name="twitter:app:name:googleplay" content="Example App">
```

### googlePlayAppUrl?

> `optional` **googlePlayAppUrl**: `string`

The Android deep link URL.

#### Example

```ts
<meta name="twitter:app:url:googleplay" content="example://open">
```

### iPadAppId

> **iPadAppId**: `string`

The App ID of the iPad App in the App Store.

#### Example

```ts
<meta name="twitter:app:id:ipad" content="123456789">
```

### iPadAppName?

> `optional` **iPadAppName**: `string`

The name of the iPad optimized app.

#### Example

```ts
<meta name="twitter:app:name:ipad" content="Example App">
```

### iPadAppUrl?

> `optional` **iPadAppUrl**: `string`

Custom URL scheme of the iPad App (Must include ”://” after scheme name). Used for deep linking.

#### Example

```ts
<meta name="twitter:app:url:ipad" content="example://open">
```

### iPhoneAppId

> **iPhoneAppId**: `string`

The App ID in the App Store.

#### Example

```ts
<meta name="twitter:app:id:iphone" content="123456789">
```

### iPhoneAppName?

> `optional` **iPhoneAppName**: `string`

The name of the iPhone app.

#### Example

```ts
<meta name="twitter:app:name:iphone" content="Example App">
```

### iPhoneAppUrl?

> `optional` **iPhoneAppUrl**: `string`

Custom URL scheme of the App (Must include ”://” after scheme name). Used for deep linking.

#### Example

```ts
<meta name="twitter:app:url:iphone" content="example://open">
```

### site

> **site**: `string`

The Twitter username of the website.

#### Example

```ts
<meta name="twitter:site" content="@example_site">
```

### type

> **type**: `"app"`

The card type.

#### Example

```ts
<meta name="twitter:card" content="app">
```
