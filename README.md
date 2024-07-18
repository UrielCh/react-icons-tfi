# Themify Icons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/tfi)](https://jsr.io/@preact-icons/tfi)

**License** [MIT](https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE)

**Project** [https://github.com/lykmapipo/themify-icons](https://github.com/lykmapipo/themify-icons)

[See available icons here](https://react-icons.deno.dev/tfi)

## install the module

```bash
deno add @preact-icons/tfi
dnpx jsr add @preact-icons/tfi
pnpm dlx jsr add @preact-icons/tfi
bunx jsr add @preact-icons/tfi
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { TfiAgenda } from "@preact-icons/tfi"
```

## import a single icon, downloading just one icon

```ts
import { TfiAgenda } from "react-icons/tfi/TfiAgenda"
```

or using default export

```ts
import TfiAgenda from "react-icons/tfi/TfiAgenda.ts"
```
