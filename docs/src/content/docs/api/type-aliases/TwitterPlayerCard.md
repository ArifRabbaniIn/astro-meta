---
editUrl: false
next: false
prev: false
title: "TwitterPlayerCard"
---

> **TwitterPlayerCard**: `object`

Twitter Player Card.

## Type declaration

### description?

> `optional` **description**: `string`

A brief description of the content. Maximum 200 characters.

#### Example

```ts
<meta name="twitter:description" content="Learn how to add Twitter Card metadata to your website.">
```

### image

> **image**: `string`

A fallback image for the player card.  You should make this image the same dimensions as your player. JPG, PNG, WEBP and GIF formats are supported.

#### Example

```ts
<meta name="twitter:image" content="https://example.com/player-thumbnail.jpg">
```

### imageAlt?

> `optional` **imageAlt**: `string`

Alt text describing the image. Maximum 420 characters.

#### Example

```ts
<meta name="twitter:image:alt" content="Thumbnail image of the video content">
```

### player

> **player**: `string`

The URL of the video player.

#### Example

```ts
<meta name="twitter:player" content="https://example.com/player.html">
```

### playerHeight

> **playerHeight**: `number`

The height of the video player (in pixels).

#### Example

```ts
<meta name="twitter:player:height" content="360">
```

### playerStream?

> `optional` **playerStream**: `string`

The stream URL for the video player.

#### Example

```ts
<meta name="twitter:player:stream" content="https://example.com/video.mp4">
```

### playerWidth

> **playerWidth**: `number`

The width of the video player (in pixels).

#### Example

```ts
<meta name="twitter:player:width" content="640">
```

### site

> **site**: `string`

The Twitter username of the website.

#### Example

```ts
<meta name="twitter:site" content="@example_site">
```

### siteId?

> `optional` **siteId**: `string`

The Twitter user ID of the website.

#### Example

```ts
<meta name="twitter:site:id" content="123456789">
```

### title

> **title**: `string`

The title of the content. Maximum 70 characters.

#### Example

```ts
<meta name="twitter:title" content="Watch This Video">
```

### type

> **type**: `"player"`

The card type.

#### Example

```ts
<meta name="twitter:card" content="player">
```
