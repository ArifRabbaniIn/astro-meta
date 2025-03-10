---
editUrl: false
next: false
prev: false
title: "OpenGraphImage"
---

> **OpenGraphImage**: `object`

Open Graph Image Metadata

## Type declaration

### alt?

> `optional` **alt**: `string`

A description of what is in the image.

#### Example

```ts
<meta property="og:image:alt" content="A beautiful sunset over the ocean.">
```

### height?

> `optional` **height**: `number`

The height of the image in pixels.

#### Example

```ts
<meta property="og:image:height" content="630">
```

### secureUrl?

> `optional` **secureUrl**: `string`

An alternate URL to use if the webpage requires HTTPS.

#### Example

```ts
<meta property="og:image:secure_url" content="https://secure.example.com/image.jpg">
```

### type?

> `optional` **type**: `string`

The MIME type of the image.

#### Example

```ts
<meta property="og:image:type" content="image/jpeg">
```

### url

> **url**: `string`

The URL of the image representing the object.

#### Example

```ts
<meta property="og:image" content="https://example.com/image.jpg">
```

### width?

> `optional` **width**: `number`

The width of the image in pixels.

#### Example

```ts
<meta property="og:image:width" content="1200">
```
