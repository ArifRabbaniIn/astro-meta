---
editUrl: false
next: false
prev: false
title: "Metadata"
---

> **Metadata**: `object`

Represents metadata for a webpage

## Type declaration

### author?

> `optional` **author**: `string`

Author of the webpage

#### Example

```ts
<meta name="author" content="John Doe" />
```

### authorWebsite?

> `optional` **authorWebsite**: `string`

URL of the author of the website

#### Example

```ts
<link rel="author" href="https://johndoe.com" />
```

### canonicalUrl?

> `optional` **canonicalUrl**: `string`

Canonical URL of the webpage

#### Default

```ts
The current url without the query params
```

#### Example

```ts
<link rel="canonical" href="https://example.com/your-page" />
```

### charset?

> `optional` **charset**: `string`

Character set of the webpage

#### Default

```ts
UTF-8
```

#### Example

```ts
<meta charset="UTF-8" />
```

### description?

> `optional` **description**: `string`

A short description of the webpage content

#### Example

```ts
<meta name="description" content="Your website description" />
```

### follow?

> `optional` **follow**: `boolean`

Whether the webpage should be followed by search engines

#### Default

```ts
true
```

#### Example

```ts
<meta name="robots" content="follow" />
```

### index?

> `optional` **index**: `boolean`

Whether the webpage should be indexed by search engines

#### Default

```ts
true
```

#### Example

```ts
<meta name="robots" content="index" />
```

### keywords?

> `optional` **keywords**: `string`[]

Keywords associated with the webpage

#### Example

```ts
<meta name="keywords" content="keyword1, keyword2, keyword3" />
```

### openGraph?

> `optional` **openGraph**: [`OpenGraphMeta`](/api/type-aliases/opengraphmeta/)

Open Graph metadata for the webpage

### sitemapUrl?

> `optional` **sitemapUrl**: `string`

URL to the sitemap

#### Default

```ts
/sitemap.xml
```

#### Example

```ts
<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
```

### title

> **title**: `string`

The title of the webpage

#### Example

```ts
<title>Your webpage title</title>
```

### twitter?

> `optional` **twitter**: [`TwitterCard`](/api/type-aliases/twittercard/)

Twitter card metadata for the webpage
