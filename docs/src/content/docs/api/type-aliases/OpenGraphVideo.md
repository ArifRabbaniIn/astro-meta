---
editUrl: false
next: false
prev: false
title: "OpenGraphVideo"
---

> **OpenGraphVideo**: `object`

Open Graph Video Metadata

## Type declaration

### height?

> `optional` **height**: `number`

The height of the video in pixels.

#### Example

```ts
<meta property="og:video:height" content="300">
```

### secureUrl?

> `optional` **secureUrl**: `string`

An alternate URL to use if the webpage requires HTTPS.

#### Example

```ts
<meta property="og:video:secure_url" content="https://secure.example.com/movie.mp4">
```

### type?

> `optional` **type**: `string`

The MIME type of the video file.

#### Example

```ts
<meta property="og:video:type" content="video/mp4">
```

### url

> **url**: `string`

A URL to a video file that complements this object.

#### Example

```ts
<meta property="og:video" content="https://example.com/movie.mp4">
```

### width?

> `optional` **width**: `number`

The width of the video in pixels.

#### Example

```ts
<meta property="og:video:width" content="400">
```
