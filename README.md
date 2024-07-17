# Themify Icons icons for deno / Preact

**License** [MIT](https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE)

**Project** [https://github.com/lykmapipo/themify-icons](https://github.com/lykmapipo/themify-icons)

[See available icons here](https://react-icons.deno.dev/tfi)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.22.1",
    "preact/": "https://esm.sh/preact@10.22.1/",
    "react-icons/tfi":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-tfi@1.0.10/mod.ts",
    "react-icons/tfi/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-tfi@1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib tfi

```ts
import { TfiAgenda } from "https://deno.land/x/react_icons_tfi@1.0.10/mod.ts"
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

