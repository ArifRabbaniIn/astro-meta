---
editUrl: false
next: false
prev: false
title: "OpenGraphArticle"
---

> **OpenGraphArticle**: [`OpenGraphBase`](/api/type-aliases/opengraphbase/) & `object`

Open Graph Metadata for Articles

## Type declaration

### author?

> `optional` **author**: `string`

The url of the author of the article.

#### Example

```ts
<meta property="article:author" content="https://example.com/authors/john-doe">
```

### expirationTime?

> `optional` **expirationTime**: `string`

The date when the article will expire.

#### Example

```ts
<meta property="article:expiration_time" content="2025-01-01T00:00:00Z">
```

### modifiedTime?

> `optional` **modifiedTime**: `string`

The date when the article was last modified.

#### Example

```ts
<meta property="article:modified_time" content="2024-03-28">
```

### publishedTime?

> `optional` **publishedTime**: `string`

The date when the article was published.

#### Example

```ts
<meta property="article:published_time" content="2024-03-01T12:00:00Z">
```

### section?

> `optional` **section**: `string`

A high-level section name.

#### Example

```ts
<meta property="article:section" content="Technology">
```

### tags?

> `optional` **tags**: `string`[]

The tags associated with the article.

#### Example

```ts
<meta property="article:tag" content="AI, Machine Learning">
```

### type

> **type**: `"article"`

The type of object.

#### Example

```ts
<meta property="og:type" content="article">
```
