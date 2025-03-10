---
editUrl: false
next: false
prev: false
title: "OpenGraphAudio"
---

> **OpenGraphAudio**: `object`

Open Graph Audio Metadata

## Type declaration

### secureUrl?

> `optional` **secureUrl**: `string`

An alternate URL to use if the webpage requires HTTPS.

#### Example

```ts
<meta property="og:audio:secure_url" content="https://secure.example.com/sound.mp3">
```

### type?

> `optional` **type**: `string`

The MIME type of the audio file.

#### Example

```ts
<meta property="og:audio:type" content="audio/mpeg">
```

### url

> **url**: `string`

A URL to an audio file to accompany this object.

#### Example

```ts
<meta property="og:audio" content="https://example.com/sound.mp3">
```
