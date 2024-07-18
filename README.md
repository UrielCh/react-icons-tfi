# Themify Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/tfi)](https://jsr.io/@preact-icons/tfi)

**License** [MIT](https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE)

**Project** [https://github.com/lykmapipo/themify-icons](https://github.com/lykmapipo/themify-icons)

[See available icons here](https://react-icons.deno.dev/tfi)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/tfi": "jsr:@preact-icons/tfi@^1.0.11/mod.ts",
    "react-icons/tfi/": "jsr:@preact-icons/tfi@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib tfi

```ts
import { TfiAgenda } from "jsr:preact-icons/tfi@1.0.11/mod.ts"
```

## import_map import an icon from all icons

```ts
import { TfiAgenda } from "react-icons/tfi"
```

## import a single icon, downloading just one icon

```ts
import { TfiAgenda } from "react-icons/tfi/TfiAgenda.ts"
```

or using default export

```ts
import TfiAgenda from "react-icons/tfi/TfiAgenda.ts"
```

