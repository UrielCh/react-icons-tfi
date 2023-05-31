# Themify Icons icons for deno / Preact

**License** [MIT](https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE)

**Project** [https://github.com/lykmapipo/themify-icons](https://github.com/lykmapipo/themify-icons)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=tfi)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/tfi":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-tfi@1.0.4/mod.ts",
    "react-icons/tfi/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-tfi@1.0.4/ico/",
  }
}
```

## Direct import sample

```ts
import { TfiAgenda } from "https://deno.land/x/react_icons_tfi@1.0.4/mod.ts"
```

## import_map import sample

```ts
import { TfiAgenda } from "react-icons/tfi"
```

## minimal import

```ts
import { TfiAgenda } from "react-icons/tfi/TfiAgenda.ts"
```

## minimal import using default export

```ts
import TfiAgenda from "react-icons/tfi/TfiAgenda.ts"
```

