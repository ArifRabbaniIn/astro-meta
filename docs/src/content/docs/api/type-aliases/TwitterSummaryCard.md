---
editUrl: false
next: false
prev: false
title: "TwitterSummaryCard"
---

> **TwitterSummaryCard**: `object`

Twitter Summary Card.

## Type declaration

### creator?

> `optional` **creator**: `string`

The Twitter username of the content creator.

#### Example

```ts
<meta name="twitter:creator" content="@content_creator">
```

### creatorId?

> `optional` **creatorId**: `string`

The Twitter user ID of the content creator.

#### Example

```ts
<meta name="twitter:creator:id" content="987654321">
```

### description?

> `optional` **description**: `string`

A brief description of the content. Maximum 200 characters.

#### Example

```ts
<meta name="twitter:description" content="Learn how to add Twitter Card metadata to your website.">
```

### image?

> `optional` **image**: `string`

The URL of the image (minimum 144x144px,  maximum 4096x4096px). JPG, PNG, WEBP and GIF formats are supported.

#### Example

```ts
<meta name="twitter:image" content="https://example.com/image.jpg">
```

### imageAlt?

> `optional` **imageAlt**: `string`

Alt text describing the image. Maximum 420 characters.

#### Example

```ts
<meta name="twitter:image:alt" content="A preview image of the content">
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
<meta name="twitter:title" content="How to Build a Twitter Card">
```

### type

> **type**: `"summary"`

The card type.

#### Example

```ts
<meta name="twitter:card" content="summary">
```
