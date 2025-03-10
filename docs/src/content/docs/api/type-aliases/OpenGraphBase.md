---
editUrl: false
next: false
prev: false
title: "OpenGraphBase"
---

> **OpenGraphBase**: `object`

Open Graph Basic Metadata

## Type declaration

### alternateLocales?

> `optional` **alternateLocales**: `string`[]

An array of other locales this page is available in.

#### Example

```ts
<meta property="og:locale:alternate" content="fr_FR">
```

### audio?

> `optional` **audio**: [`OpenGraphAudio`](/api/type-aliases/opengraphaudio/)

Audio to accompany this object. og:audio and related audio properties

### description?

> `optional` **description**: `string`

A brief description of the object (up to 300 characters).

#### Example

```ts
<meta property="og:description" content="A thrilling action movie starring The Rock.">
```

### determiner?

> `optional` **determiner**: `"a"` \| `"an"` \| `"the"` \| `""` \| `"auto"`

The word that appears before this object's title in a sentence.
Can be one of: `"a"`, `"an"`, `"the"`, `""` (blank), `"auto"`.
If `"auto"` is chosen, the consumer of the data should determine `"a"` or `"an"`.

#### Example

```ts
<meta property="og:determiner" content="the">
```

### image

> **image**: [`OpenGraphImage`](/api/type-aliases/opengraphimage/)

Image representing the object. og:image and related image properties

#### Example

```ts
<meta property="og:image" content="https://example.com/rock.jpg">
```

### locale?

> `optional` **locale**: `string`

The locale of the object.
Format: `language_TERRITORY`. Default is `en_US`.

#### Example

```ts
<meta property="og:locale" content="en_US">
```

### siteName?

> `optional` **siteName**: `string`

The name of the website that published the object.

#### Example

```ts
<meta property="og:site_name" content="IMDb">
```

### title

> **title**: `string`

The title of the object as it should appear in the graph.

#### Example

```ts
<meta property="og:title" content="The Rock">
```

### url

> **url**: `string`

The canonical URL of the object.

#### Example

```ts
<meta property="og:url" content="https://www.imdb.com/title/tt0117500/">
```

### video?

> `optional` **video**: [`OpenGraphVideo`](/api/type-aliases/opengraphvideo/)

Video that complements this object. og:video and related audio properties
