# magic-backstage for vite


## ็น็น ๐ณ

1. Vite 
2. Vue3 
3. ๆไปถ่ทฏ็ฑ
4. ๅธๅฑ็ณป็ป
5.  Mock ๆฏๆ
6. Api ่ชๅจๅผๅฅ
7. ็ปไปถ่ชๅจๅผๅฅ
8. ๅพๆ ่ชๅจๅผๅฅ
9.  VueUse ๆฏๆ
10. TypeScript 
11. Windi CSS 
12. ๆ้ปๆจกๅผๆฏๆ
13. SWR ่ฏทๆฑๆฏๆ
14. pinia ็ถๆ็ฎก็
15. pnpm ๅ็ฎก็ๅจ
16. ่ทณ่ฝฌ่ฟๅบฆๆกๆฏๆ
17. Inspect ่ฐ่ฏๆฏๆ
18. ๆไปถ่ชๅจๅ ่ฝฝๆฏๆ
19. Vitest ๅๅๆต่ฏๆฏๆ
20. ๆฏๆ Markdown ๆธฒๆ
21. ่ทฏๅพๅซๅ `~` ๆฏๆ
22. ๅฝไปค่ก่ชๅจๅๅปบไธๅ ้ค
23. i18n ๅฝ้ๅๆฏๆ
24. ๆผไบฎ็ 404้กต ๆฏๆ
25. tsx ๆฏๆ
26. gzip ่ตๆบๅ็ผฉๆฏๆ
27. ็ฏๅขๅ้้็ฝฎๆฏๆ

<br />
<br />

## `node` ็ๆฌๆจ่ ๐

 ๅคงไบ `v16.13.1` ๅณๅฏใ


## ไฝฟ็จ ๐


1. ๅฎ่ฃไพ่ต
```shell
pnpm install

# ๆ่ npm install
# ๆ่ yarn
```

2. ๅผๅ
```shell
pnpm dev 

# ๆ่ npm run dev
# ๆ่ yarn dev

# ๅผๅฏ host
pnpm dev:host  

# ๆ่ npm run dev:host 
# ๆ่ yarn dev:host

# ่ชๅจๆๅผๆต่งๅจ
pnpm dev:open

# ๆ่ npm run dev:open
# ๆ่ yarn dev:open
```

3. ้ข่ง
```shell
pnpm preview

# ๆ่ npm run preview
# ๆ่ yarn preview

# ๅผๅฏ host
pnpm preview:host

# ๆ่ npm run preview:host
# ๆ่ yarn preview:host

# ่ชๅจๆๅผๆต่งๅจ
pnpm preview:open

# ๆ่ npm run preview:open
# ๆ่ yarn preview:open
```

4. ๆๅ

```shell
pnpm build

# ๆ่ npm run build
# ๆ่ yarn build
```

5. ๅๅๆต่ฏ
```shell
pnpm test

# ๆ่ npm run test
# ๆ่ yarn test
```

6. ๅๅๆต่ฏๆฅๅ็ๆ
```shell
pnpm coverage

# ๆ่ npm run coverage
# ๆ่ yarn coverage
```

7. ๆ ทๅผๆฅๅ้ข่ง
```shell
pnpm analysis

# ๆ่ npm run analysis
# ๆ่ yarn analysis
```

8. ๆ ทๅผๆฅๅๆๅ
```shell
pnpm analysis:build

# ๆ่ npm run analysis:build
# ๆ่ yarn analysis:build
```

9. ็ฑปๅๆฃๆฅ
```shell
pnpm typecheck

# ๆ่ npm run typecheck
# ๆ่ yarn typecheck
```

10. ่ชๅจๅๅปบ
```shell
pnpm auto:create

# ๆ่ npm run auto:create
# ๆ่ yarn auto:create
```

11. ่ชๅจ็งป้ค

```shell
pnpm auto:remove

# ๆ่ npm run auto:remove
# ๆ่ yarn auto:remove
```

12. ไพ่ตๆดๆฐ

```shell
# ๅฎๅจ็ๆฌๆดๆฐ
pnpm deps:fresh

# ๆ่ npm run deps:fresh
# ๆ่ yarn deps:fresh

# ไธป็ๆฌๆดๆฐ๏ผๅฏ่ฝๆฏ็ ดๅๆงๆดๆฐ๏ผ่ฐจๆไฝฟ็จ๏ผๅๅฅฝๆต่ฏ
pnpm deps:fresh:major

# ๆ่ npm run deps:fresh:major
# ๆ่ yarn deps:fresh:major

# ๆฌก็ๆฌๆดๆฐ๏ผๅฏ่ฝๆฏ็ ดๅๆงๆดๆฐ๏ผ่ฐจๆไฝฟ็จ๏ผๅๅฅฝๆต่ฏ
pnpm deps:fresh:minor

# ๆ่ npm run deps:fresh:minor
# ๆ่ yarn deps:fresh:minor

# ่กฅไธ็ๆฌๆดๆฐ
pnpm deps:fresh:patch

# ๆ่ npm run deps:fresh:patch
# ๆ่ yarn deps:fresh:patch
```
```shell
# ไปฅไธๅฝไปคไปๅฏนๅไฟกๆฏ package.json ่ฟ่กๅๅฅ๏ผ้่ฆ้ๆฐๆง่กๅๅฎ่ฃๅฝไปค
pnpm i

# ๆ่ npm i
# ๆ่ yarn
```

<br />
<br />



## ่ฏฆๆ ๐ณ

### [1. Vite ็](https://cn.vitejs.dev/)

่ฏฅๆจกๆฟ้็จ **[vite](https://cn.vitejs.dev/)** ไฝไธบๆๅปบๅทฅๅท๏ผไฝ ๅฏไปฅๅจๆ น็ฎๅฝไธ็ `vite.config.ts` ๅฏน้กน็ฎ็ๆๅปบ่ฟ่ก้็ฝฎใ  

ๅฏนไบไผๅคไธปๆตๆไปถ็ๅผๅฅๅ็นๆ้็ฝฎๅทฒ็ปๆดๅๅฐๆ น็ฎๅฝไธ็้ข่ฎพ `presets` ไธญ๏ผๅคงๅคๆฐๆๅตไธไฝ ๆฏไธ้่ฆ้ๆฐๅฏนๅฎไปฌ่ฟ่ก้็ฝฎ็ใ

<br />

### [2. Vue3 ็](https://v3.cn.vuejs.org/)

<br />

### [3. ๆไปถ่ทฏ็ฑ](https://github.com/hannoeru/vite-plugin-pages)

็ฎๅฝ็ปๆๅณ่ทฏ็ฑใ

eg: 
- `src/pages/index.vue` => `/`
- `src/pages/about.vue` => `/about`
- `src/pages/users/index.vue` => `/users`
- `src/pages/users/profile.vue` => `/users/profile`
- `src/pages/users/[id].vue` => `/users/:id`
- `src/pages/[user]/settings.vue` => `/:user/settings`
-  `src/pages/[...notFound].vue` => 404 ่ทฏ็ฑ

ๅทไฝๅฏ่ง ๐ [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages#file-system-routing)

<br />

### [4. ๅธๅฑ็ณป็ป](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)

#### ้ป่ฎคๅธๅฑ


`src/layouts/default.vue` ๅฐไฝไธบ้ป่ฎคๅธๅฑใ
```html
<!-- src/layouts/default.vue -->
<template>
    ๆๆฏ้ป่ฎคๅธๅฑ
    <router-view /> <!-- ้กต้ข่งๅพๅบๅฃ -->
</template>
```

ๆญคๆถ `src/pages/index.vue` 
```html
<!-- src/pages/index.vue -->
<template>
    <div>ๆๆฏ้ฆ้กต</div> 
</template>
``` 
่ทฏ็ฑๅฐ `/`ๆถ๏ผ้กต้ขๅฐๆธฒๆ
```html
ๆๆฏ้ป่ฎคๅธๅฑ
ๆๆฏ้ฆ้กต
```
ๆญคๆถ `src/pages/about.vue`
```html
<!-- src/pages/about.vue -->
<template>
    <div>ๆๆฏๅณไบ้กต</div> 
</template>
```
่ทฏ็ฑๅฐ `/about` ๆถ๏ผ้กต้ขๅฐๆธฒๆ
```html
ๆๆฏ้ป่ฎคๅธๅฑ
ๆๆฏๅณไบ้กต
```

<br />

#### ้้ป่ฎคๅธๅฑ
้ไพฟๅๅปบไธไธช `src/layouts/custom.vue`
```html
<!-- src/layouts/custom.vue -->
<template>
    ๆๆฏ้้ป่ฎคๅธๅฑcustom
    <router-view /> <!-- ้กต้ข่งๅพๅบๅฃ -->
</template>
```

ๆญคๆถ `src/pages/index.vue` ๅ

```html
<!-- src/pages/index.vue -->
<template>
    <div>ๆๆฏ้ฆ้กต</div> 
</template>

<!-- ๆทปๅ ่ชๅฎไนๅ ๐ -->
<route lang="yaml">
meta:
  layout: custom
</route>
```
ๆญคๆถ่ทฏ็ฑๅฐ `/`, ้กต้ขๅฐๆธฒๆ

```html
ๆๆฏ้้ป่ฎคๅธๅฑcustom
ๆๆฏ้ฆ้กต
```

ๅทไฝๅฏ่ง ๐ [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts#overview) 

<br />

### [5. Mock ๆฏๆ](https://github.com/vbenjs/vite-plugin-mock)

ๅจๆ น็ฎๅฝไธ็ `mock` ็ฎๅฝไธ๏ผๅฏไปฅๅจๆจกๅไธญๅฏผๅบ้ป่ฎค็ `api` ่ตๆบใ

ไพๅฆ `mock/test.ts` ๅๅฏผๅบ
```ts
import { MockMethod } from 'vite-plugin-mock'
export default [
    {
        url: '/api/get',
        method: 'get',
        response: () => {
            return {
                code: 0,
                data: {
                    name: 'vben'
                }
            }
        }
    }
] as MockMethod[]
```
ๅจ `src` ไธญๅฐฑๅฏไปฅ่ฟ่กๆจกๆ่ฏทๆฑใ

```html
<script setup lang="ts">
    import { useRequest } from "vue-request"
    // ่ฏทๆฑๆฅๅฃ /api/get
    const { data, loading, error } = useRequest('/api/get') 
</script>

<template>
    <div>data: {{data}}</div>
    <div>loading: {{loading}}</div>
    <div>error: {{error}}</div>
</template>
```

่ฟ้็จๅฐ [vue-request](https://cn.attojs.org/) ๅปๅ่ฏทๆฑ๏ผไธ่ฟๅ ไธบ่ฏฅ `mock` ๆฆๆช็ๆฏไธๆดไธชๆฅๅฃ๏ผๆไปฅๆขๆ `axios` ็ญ่ฏทๆฑๅบไนๆฏๅฏไปฅ็ใ  

ๆดๅค `mock` ่ฎพ็ฝฎๅฏ่ง ๐ [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock)

<br />

### [6. Api ่ชๅจๅผๅฅ](https://github.com/antfu/unplugin-auto-import)

ๅๆฌ `vue` ็ `api` ้่ฆ่ช่ก `import`ใ
```ts
import { ref, computed } from 'vue'
const count = ref(0)
const doubled = computed(() => count.value * 2)
```
็ฐๅจๅฏไปฅ็ดๆฅไฝฟ็จใ
```ts
const count = ref(0)
const doubled = computed(() => count.value * 2)
```
่ไธไธ่พน็ `api` ๆฏๆ้่ชๅจๅผๅฅ็ใ

็ฎๅๆจกๆฟๆฏๆ่ชๅจๅผๅฅ `api` ็ๅบๅ่กจๅๆฌ:
1. vue
2. pinia
3. vueuse
4. vue-i18n
5. vue-router

ๅฝ็ถ่ฟๆ้กน็ฎไธญ็่ชๅจๅผๅฅ๏ผๅช้่ฆๆปก่ถณไปฅไธ่ง่ๅณๅฏใ

1. `src/composables` ไธๅกๆฏ `use` ๅผๅคด็ๆจกๅ๏ผๅๆถ้่พนๆ `default` ๅฏผๅบ๏ผ่ฏฅๅฏผๅบๅฐฑๅฏไปฅ่ขซๆ้่ชๅจๅผๅฅใ

ไพๅฆๆไธช `src/composables/foo.ts`

```ts
// default ๅฏผๅบ
export default 1000
```

ๆญคๆถๅฐฑไธๅ้่ฆ `import`ไบ

```html
<script setup lang="ts">
    console.log(foo) // ่พๅบ 1000
</script>

<template>
    <div @click="store.inc()">{{store.counter}}</div>
</template>
```

2. `src/stores` ไธๅกๆฏ `Store` ็ปๅฐพ็ๆจกๅ๏ผๅๆถ้่พนๆ `default` ๅฏผๅบ๏ผ่ฏฅๅฏผๅบๅฐฑๅฏไปฅๆ้่ชๅจๅผๅฅใ

ไพๅฆๆไธช `src/stores/counterStore.ts`

```ts
// default ๅฏผๅบ
export default defineStore('counter', {
    state() {
        return {
            counter: 1
        }
    },
    actions: {
        inc() {
            this.counter++
        }
    }
})
```
ๆญคๆถๅฐฑไธๅ้่ฆ `import`ไบ

```html
<script setup lang="ts">
    const store = counterStore()
</script>

<template>
    <div @click="store.inc()">{{store.counter}}</div>
</template>
```

ๅทไฝๅฏ่ง ๐ [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) ไธ [vite-auto-import-resolvers](https://github.com/dishait/vite-auto-import-resolvers)

<br />

### [7. ็ปไปถ่ชๅจๅผๅฅ](https://github.com/antfu/unplugin-auto-import)

ๅๆฅ้่ฆ `import`
```html
<!-- src/pages/index.vue -->
<script setup lang="ts">
    import Hello from "../components/Hello.vue"
</script>

<template>
    <Hello />
</template>
```

็ฐๅจๅช่ฆๅจ `src/components` ไธๅฎไน็็ปไปถ้ฝๅฐไผๆ้ๅผๅฅ๏ผๅณ `import` ๆฏไธ้่ฆ็ใ

```html
<!-- src/pages/index.vue -->
<template>
    <Hello />
</template>
```

ๅๆถๆต่ก็ปไปถๅบ่ชๅจๅผๅฅไนๆฏๆฏๆ็๏ผไพๅฆ `Naive ui`ใ

ๅช้ๅฎ่ฃไพ่ตใ

```shell
pnpm add naive-ui

# ๆ่ npm i naive-ui
# ๆ่ yarn add naive-ui
```
ๅณๅฏๅจๆจกๆฟไธญไฝฟ็จใ

```html
<!-- src/pages/index.vue -->
<template>
    <n-button type="success">Success</n-button>
</template>
```
็ฎๅๆฏๆ็็ปไปถๅบๆ:

- [naive ui](https://www.naiveui.com/zh-CN/os-theme)
- [arco.design](https://arco.design/)
- [element-plus](https://element-plus.gitee.io/zh-CN/)
- [ant design of vue](https://next.antdv.com/docs/vue/introduce-cn/)
- [@vueuse/components](https://vueuse.org/guide/components.html)

ๅทไฝๅฏ่ง ๐ [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

<br />

### [8. ๅพๆ ่ชๅจๅผๅฅ](https://github.com/antfu/unplugin-auto-import)

ๅฏๅๅพ ๐ [icones](https://icones.netlify.app/)๏ผ้ๆ้ๆฉ็นๅป่ฟๅฅๅถไธญไธไธชๅพๆ ๅบ

![icons-first-step](public/docs/icons-first-step.png)

ๅ็นๅป้ๆฉๅถไธญไธไธชๅๆฌข็ๅพๆ 

![icons-second-step](public/docs/icons-second-step.png)

ๅคๅถๅถๅ็งฐ

![icons-second-step](public/docs/icons-third-step.png)

ๅจๆจกๆฟไธญๅณๅฏ็ดๆฅ็จ็ปไปถ็ๅฝขๅผ็ดๆฅไฝฟ็จ๏ผๆณจๆๅ ไธๅ็ผ `i-`ใ

```html
<template>
    <i-mdi:account-box-multiple />
</template>
```

ไฟๅญๅ็ญๅพ่ชๅจไธ่ฝฝ่ฏฅๅพๆ ๅบๅ๏ผๅฐฑๅฏไปฅๅจ้กต้ขไธญ็ๅฐๅฏนๅบๅพๆ ใ  

ๆณจๆ่ชๅจไธ่ฝฝๅพๆ ้่ฆ `pnpm` ๅ็ฎก็ๅจๆฏๆ๏ผๅฆๆไฝ ๆฏๅถไปๅ็ฎก็ๅจ้่ฆๆๅจๅฎ่ฃๅพๆ ้ ๐๐๐

ๅพๆ ้ๅ็งฐไธบ `@iconify/` ๅ  `:` ๅ็ผ๏ผไพๅฆไธ่พน็ๅพๆ ๆฏ `mdi:account-box-multiple`๏ผๅพๆ ้ๅ็งฐๅฐฑไธบ `@iconify/mdi`ใ

```shell
npm i @iconify/mdi -D

# ๆ่ yarn add @iconify/mdi -D
```


ๅๆถๆจ่ไฝ ไฝฟ็จ `vscode` ๆไปถ [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)ใ  

่ฏฅๆไปถไผๅจๆจกๆฟไธญๆพ็คบๅพๆ ็้ข่งใๅฐฑๅ่ฟๆ ท ๐

```html
<!-- ๆจกๆฟไธญไปฃ็  -->
<template>
    <i-mdi:account-box-multiple />
</template>
```
ๅฐๅจ `vscode` ไธญๅพๅฐๅพๆ ้ข่ง

![icons-preview](public/docs/icons-preview.png)

ๅทไฝๅฏ่ง ๐ [unplugin-icons](https://github.com/antfu/unplugin-icons)


<br />

### [9. VueUse ๆฏๆ](https://vueuse.org/)

`VueUse` ๆฏไธไธช่ถ็บงๅผบ็ `hooks` ๅบ๏ผไพๅฆไฝ ่ฆ่ทๅ้ผ ๆ ไฝ็ฝฎ๏ผๅช้่ฆ่ฟๆ ท ๐

```html
<script setup lang="ts">
    // useMouse ่ขซ่ชๅจๆ้ๅผๅฅไบ๏ผไธ้่ฆimport
    const { x, y } = useMouse()
</script>

<template>
    <div>xๅๆ  {{x}}</div>
    <div>yๅๆ  {{y}}</div>
</template>
```

ๅทไฝๅฏ่ง ๐ [VueUse](https://vueuse.org/)


<br />

### [10. TypeScript ็](https://www.tslang.cn/)

ไธ้่ฆ้ๆฐ้็ฝฎ๏ผ็ดๆฅ็จ `ts` ไนฆๅๅฐฑ่กไบใ


<br />

### [11. Windi CSS ็](https://cn.windicss.org/)

`Windi CSS` ๆฏไธไธชๅผๅไธญ้ๅบฆๆดๅฟซ็ `ๅๅญcss` ๅบใ

็ดๆฅๅจๆจกๆฟไธญ็จๅฐฑ่กไบ๏ผไธ้่ฆ้็ฝฎใ

```html
<template>
    <div class="bg-red-500 text-white">
        ๆๆฏ็บข่ฒ่ๆฏ็็ฝ่ฒๆๆฌ
    </div>
<template>
```
ไธ่ฟฐๆจกๆฟๅฐๆธฒๆ็บข่ฒ่ๆฏ็ฝ่ฒ็ๅญใ

ๅๆถๆฏๆ [ๅฑๆงๅๆจกๅผ](https://cn.windicss.org/features/attributify.html#attributify-mode)๏ผๅณๅฏไปฅ็จ็ฎๅใ่ฏฅๅ่ฝ้ป่ฎคๅณ้ญ๏ผๅฏๅจ `windi.config.ts` ไธญ ่ฎพ็ฝฎ `attributify` ไธบ `true` ๅผๅฏใ 

```html
<template>
    <div text="white" bg="red-500">
        ๆๆฏ็บข่ฒ่ๆฏ็็ฝ่ฒๆๆฌ
    </div>
<template>
```
่ฟๅจ่ฐๆด่พน่ทๅฐบๅฏธไปฅๅ็ญๆน้ขๅฏไปฅๅๅฐไปฃ็ ้ใ

ๅๆถ้ข่ฎพ [ๆ็](https://cn.windicss.org/plugins/official/typography.html) ๆไปถ๏ผ่งฃๅณ็ฎๅ็ๅธๅฑๅฐ้พ้ฎ้ขใ

ๅฝ็ถไนๆฏๆ [ๅฏ่งๅๅๆๅจ](https://cn.windicss.org/features/analyzer.html) ็ๆ `ๅๅญcss` ๆฅๅ.

ๅจ็ป็ซฏไธญ่พๅฅๅฝไปค๏ผๅณๅฏ็ๅฐๆฅๅ
```shell
pnpm analysis

# ๆ่ npm run analysis
# ๆ่ yarn analysis
```
ๆ่ๆๅ่พๅบ่ฏฅๆฅๅ
```shell
pnpm analysis:build

# ๆ่ npm run analysis:build
# ๆ่ yarn analysis:build
```

ๅทไฝๅฏ่ง ๐ [Windi CSS](https://cn.windicss.org/)


<br />

### [12. ๆ้ปๆจกๅผๆฏๆ](https://cn.windicss.org/features/dark-mode.html#dark-mode)

ๆ้ปๆจกๅผ็ฑ `Windi CSS` ็ `ๆ้ปๆจกๅผ` ๅ `VueUse` ๅฎ็ฐใ  

`src/composables` ็ฎๅฝ็จๆฅๅญๅจ `composition-api` ๆจกๅใ

่ฏฅ็ฎๅฝไธ้ข่ฎพไบ`useDarks` ๆจกๅ๏ผ่ฏฅๆจกๅๅฏผๅบ `isDark` ๅ `toggleDark` ็จๆฅๆพ็คบๅๅๆขๆ้ปๆจกๅผใ

```ts
// src/composables/useDarks.ts

// vueuse็ api ไผ่ชๅจๆ้ๅผๅฅ๏ผๆ ้import
export const isDark = useDark()
export const toggleDark = useToggle(isDark)

export const useDarks = () => ({ isDark, toggleDark })
```

ๆจกๆฟไธญๅณๅฏ็ดๆฅ็จ

```html
<script setup lang="ts">
import { useDarks } from "../composables/useDarks";

const { isDark, toggleDark } = useDarks()
</script>

<template>
    <div m="6">
        Hello๏ผThis is the tov template๏ผ๏ผ
    </div>
    <div m="6" cursor="pointer" @click="toggleDark()">
        light: {{ isDark }} click me!!
    </div>
</template>
```

ๅทไฝๅฏ่ง ๐ [ๆ้ปๆจกๅผ](https://cn.windicss.org/features/dark-mode.html#dark-mode)


<br />

### [13. SWR ่ฏทๆฑๆฏๆ](https://cn.attojs.org/)

SWR ๆฏๆด็ฐไปฃ็่ฏทๆฑๆนๅผ๏ผๅทไฝๅฏ่งๆ็ซ  ๐ [SWR](https://zhuanlan.zhihu.com/p/89570321)ใ 

่ [vue-request](https://cn.attojs.org/) ๆฏไธไธช `SWR` ็ `Vue` ็ๆฌ่ฏทๆฑๅบใ

ไฝ ๅฏไปฅ่ฟๆ ท็จ๏ผไพๅฆ่ฏทๆฑ `/api/test`

```html
<script setup lang="ts">
    import { useRequest } from "vue-request"
    const { data, loading, error } = useRequest('/api/test')
</script>

<template>
    <div>data: {{data}}</div>
    <div>error: {{error}}</div>
    <div>loading: {{loading}}</div>
</template>
```
ๆๆๅบๆฌ็ๆฐๆฎ๏ผ็ถๆๅ็ผๅญ้ฝๅธฎไฝ ๆๅฎไบ๏ผไธ้่ฆ้ๆฐๅฐ่ฃใ

ๅทไฝๅฏ่ง ๐ [vue-request](https://cn.attojs.org/)

<br />

### [14. pinia ็ถๆ็ฎก็](https://pinia.vuejs.org/)

`pinia` ๆฏไธไธไปฃ็็ถๆ็ฎก็ๅบ๏ผๆฏ `vuex` ๆด็ฎๅ๏ผ`ts` ๆฏๆๆดๅฅฝใ

ไฝ ๅฏไปฅๅจ `src/stores` ไธญ่ฟ่ก็ถๆ็ๅฎไนใ  

ไพๅฆๅๅปบ `src/stores/counter.ts` ๐

```ts
// src/stores/counter.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  actions: {
    inc() {
      this.count++
    },
  },
})
```
ๅฎไนๅฎๅๅจ `setup` ไธญ็ดๆฅไฝฟ็จๅณๅฏ
```html
<!-- src/pages/index.vue -->
<script setup lang="ts">
    import { useCounterStore } from "../stores/counter"
    const Counter = useCounterStore()
<script>

<template>
    <div @click="Counter.inc">{{Counter.count}}</div>
</template>
```
ๆดๅคๅทไฝไฝฟ็จๅฏ่ง ๐ [pinia](https://pinia.vuejs.org/)

<br />

### [15. pnpm ๅ็ฎก็ๅจ](https://pnpm.io/zh/)

`pnpm` ๆฏ้ๅธธไผ็ง็ๅ็ฎก็ๅจ๏ผๆดๅฟซใๆด่็็ฉบ้ดใๆดๅ็ใ

ๅทไฝๅฏ่ง ๐ [pnpm](https://pnpm.io/zh/)

<br />

### [16. ่ทณ่ฝฌ่ฟๅบฆๆกๆฏๆ](https://github.com/rstacruz/nprogress)

่ทณ่ฝฌ่ฟๅบฆๆก็ฑ `nprogress` ๅฎ็ฐ๏ผๅฏๅจ`src/styles/main.css` ไธญ่ฐๆด้่ฒใ
```css
/** src/styles/main.css **/

/** ็็ฅๅถไปๆ ทๅผ **/
#nprogress .bar {
    @apply bg-purple-700 bg-opacity-75; /** ้่ฒ **/

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
}
```
ๅณไบ `@apply` ็ฑ [Windi Css apply ๆไปค](https://cn.windicss.org/features/directives.html#apply) ๅฎ็ฐใ

ๅทไฝๅฏ่ง ๐ [nprogress](https://github.com/rstacruz/nprogress)

<br />

### [17. Inspect ่ฐ่ฏๆฏๆ](https://github.com/antfu/vite-plugin-inspect)

ๅฏๅจ้กน็ฎ
```shell
pnpm dev

# ๆ่ npm run dev
# ๆ่ yarn dev
```
ๅฏไปฅ็ๅฐไธไธช `url`

![inspect](public/docs/inspect.png)

ๅ่ฟๅฅ `http://localhost:3000`๏ผๅ่ฟๅฅ `http://localhost:3000/__inspect/` ๅณๅฏ่ทๅพไพ่ตๅพ่ฐฑใ

![inspect-atlas](public/docs/inspect-atlas.png)

้่ฟ้กถ้จ็ไธไบๆ้ฎ่ฟๅฏไปฅ่ฐๆดไพ่ตๅ็ฐใ

ๅทไฝๅฏ่ง ๐ [vite-plugin-inspect](https://github.com/antfu/vite-plugin-inspect)

<br />

### 18. ๆไปถ่ชๅจๅ ่ฝฝๆฏๆ

่ฏฅๅ่ฝ็ฑ `vite` ็ [Global ๅฏผๅฅ](https://cn.vitejs.dev/guide/features.html#glob-import) ๅฎ็ฐใ  

ๅช้่ฆๅจ `src/modules` ไธญ็ๆจกๅ้ๅฏผๅบ้ป่ฎคๅฝๆฐๅณๅฏใ  

ไพๅฆ `pinia`๏ผๅช้่ฆ่ฟๆ ทๅใ
```ts
// src/modules/pinia.ts

import { App } from 'vue'

// ๅฏผๅบ default ๆฅๅฃ
export default (app: App) => app.use(createPinia())
```

ๆ่ `vue-router`

```ts
// src/modules/router.ts

import { App } from 'vue'

// ็็ฅๅ็ง้็ฝฎ

// ๅฏผๅบ default ๆฅๅฃ
export default (app: App) => app.use(router)
```
ๅฝ็ถ `pinia` ๅ `vue-router` ๅทฒ็ป้ข่ฎพๅฅฝไบ๏ผไฝ ไธ้่ฆ้ๆฐๅณๆณจไปไปฌใ

ๅทไฝๅฏ่งๅฎ็ฐ ๐ [ๆไปถ่ชๅจๅ ่ฝฝๅฎ็ฐ](/src/main.ts)

<br />

### [19. Vitest ๅๅๆต่ฏๆฏๆ](https://vitest.dev/guide/#configuring-vitest)

ๅจ `src/test` ็ฎๅฝไธญๅฏไปฅไนฆๅๅๅๆต่ฏใ

```ts
import { it, describe, expect, assert } from 'vitest'

describe('suite name', () => {
    it('foo', () => {
        expect(1 + 1).toEqual(2)
        expect(true).to.be.true
    })

    it('bar', () => {
        assert.equal(Math.sqrt(4), 2)
    })

    it('snapshot', () => {
        expect({ foo: 'bar' }).toMatchSnapshot()
    })
})
```

็ถๅๅจ็ป็ซฏไธญ่พๅฅๅฝไปคๅณๅฏๆต่ฏ

```shell
pnpm test

# ๆ่ npm run test
# ๆ่ yarn test
```

ๆ่็ๆๆฅๅ

```shell
pnpm coverage

# ๆ่ npm run coverage
# ๆ่ yarn coverage
```

ๅทไฝๅฏ่ง ๐ [Vitest](https://vitest.dev/guide/#configuring-vitest)

<br />

### [20. ๆฏๆ Markdown ๆธฒๆ](https://github.com/antfu/vite-plugin-md)

`markdown` ๆธฒๆๅฏไปฅ็จๆฅไนฆๅไธไบ็ฎๅ็่ฏดๆใ  

ๅช้่ฆๆ `src/pages` ็ฎๅฝไธ็้กต้ขๅ็ผ็ฑ `.vue` ๆนไธบ `.md`๏ผ็ถๅๅๆนไธบ `markdown` ่ฏญๆณๅณๅฏใ

ไพๅฆ `src/pages/about.md`

```md
## About Page

> The page is markdown file
```

ๅฝไฝ ่ทฏ็ฑๅฐ `/about` ๅๅณๅฏ็ๅฐๅฏนๅบ็ `markdown` ๆธฒๆใ

ๅทไฝๅฏ่ง ๐ [vite-plugin-md](https://github.com/antfu/vite-plugin-md)

<br />
<br />



### 21. ่ทฏๅพๅซๅ `~` ๆฏๆ

`~` ่ทฏๅพๅฐ่ขซๅฏผๅ้กน็ฎ็ `src` ็ฎๅฝใ

```html
<!-- src/pages/index.vue -->
<script lang="ts" setup>
    import { useDarks } from "~/composables/dark"

// ็ญไปทไบ
// import { useDarks } from "../composables/dark"
</script>
```

<br />
<br />

### 22. ๅฝไปค่ก่ชๅจๅๅปบไธๅ ้ค

ๅช่ฆ่พๅฅ ๐๏ผๅณๅฏๅๅปบไธไธชๆ ๅ็้กต้ขๆ็ปไปถ
```shell
pnpm auto:create

# ๆ่ npm run auto:create
# ๆ่ yarn auto:create
```
ๅฝ็ถไนๅฏไปฅ่ฟ่กๅ ้ค ๐
```shell
pnpm auto:remove

# ๆ่ npm run auto:remove
# ๆ่ yarn auto:remove
```

<br />
<br />

### [23. i18n ๅฝ้ๅๆฏๆ](https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n)

ๅจๆฅๅธธ็ไธๅกๅฝไธญ๏ผๅฏ่ฝไผๅญๅจไธไบ้่ฆๅฝ้ๅ็ๅบๆฏใ้ฃไนๅช้่ฆๅจๆ น็ฎๅฝไธ็ `locales` ไธญๅฎไนไธๅ่ฏญ่จ็ `yml` ๅณๅฏๅจ้กน็ฎไธญๅๅฐๅผ็ฎฑๅณ็จ็ๅฝ้ๅๆฏๆใ

ๆฏๅฆ `locales/en.yml` ไธญ็จๆฅๅฎไน้่ฆๅฝ้ๅๆฏๆ็่ฑๆๅๅฎนใ
```yml
# locales/en.yml
# English

index: index
about: about
not-found: Notfound
```
ๅๅฆ `locales/zh-CN.yml` ไธญ็จๆฅๅฎไน้่ฆๅฝ้ๅๆฏๆ็ไธญๆๅๅฎนใ

```yml
# locales/zh-CN.yml
# ไธญๆ

index: ไธป้กต
about: ๅณไบ
not-found: ๆชๆพๅฐ้กต้ข
```

ๆญคๆถๅจ็ปไปถไธญๅณๅฏ่ฟๆ ท็จ ๐
```html
<script setup>
// ่ฏฅapiๆฏๅจๅฑๆ้ๅผๅฅ็๏ผๆไปฅๅฏไปฅ็ดๆฅ็จ
// t ็จๆฅ็ปๅฎ็นๅฎ็่ฏญๅ
const { t, locale } = useI18n()

const toggleLocale = () => {
     // locale.value ็จๆฅ่กจ็คบๅฝๅๆๅฑ่ฏญ่จ๏ผๅฏไฟฎๆน่ฟ่ก่ฏญ่จๅๆข
     locale.value = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
}
</script>

<template>
    <div m="6" cursor="pointer" @click="toggleLocale()">language: {{ t('index') }} click me!!</div>
</template>
```

ๆด่ฏฆ็ป็่ฏดๆๅฏ่ง็จๅฐ็ `vite ๆไปถ` ๐ [@intlify/vite-plugin-vue-i18n](https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n) ไธ `vueๆไปถ` [vue-i18n](https://github.com/intlify/vue-i18n-next)ใ

ๅฆๅค `yml` ๆฏ็ฎๅๅ็ซฏไธญๆต่ก็้็ฝฎๆไปถๆ ผๅผ๏ผ่ฏญๆณๅฏ่ง้ฎไธๅณฐๅ็็ ๐ [YAML ่ฏญ่จๆ็จ](http://www.ruanyifeng.com/blog/2016/07/yaml.html)ใ

`vscode` ๆไปถๆจ่: 

- ๅคๅไธ็ `i18n` ๆฏๆ [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)  

<br />
<br />

### 24. ๆผไบฎ็ `404` ้กตๆฏๆ
ๅจๆฅๅธธไธๅกไธญ๏ผๅฝ็จๆท่ฎฟ้ฎไธๅญๅจ็้กต้ขๆถ๏ผๅบ่ฏฅ็ปๅฐๆไปฌ็็จๆทไธไธชไธๅญๅจ็ไฟกๆฏๆ็คบ๏ผ่่ฟไธชๆ็คบ็้กต้ขๅฐฑๆฏ `404` ้กตใ

ไฝ ๅฏไปฅ้ไพฟ่ฎฟ้ฎไธไธชไธๅญๅจ็้กต้ข๏ผไพๅฆ `/bucunzai`

![notFound](public/docs/notFound.png)

ๅฝ็ถ่ฟๆๆ้ปๆจกๅผ้ๅบใ

![notFound-dark](public/docs/notFound-dark.png)

ไนๆฏๆ็ฎๅ็ๅๅบๅผ้ๅบใไพๅฆ็งปๅจ็ซฏๆต่งๅจไธไผๆๆญฃ็กฎ็ๆพ็คบใ

ๅฝ็ถๅฆๆ่ฟไธช `404` ็ๅฐ้ขไธ็ฌฆๅไฝ ็ๅฃๅณ๏ผ้ฃไนๅฏไปฅๅจ `pages/[...notFound].vue` ไธญไฟฎๆน `img` ๆ ็ญพ็ `src`ใ้ป่ฎคๆฏ `32.svg`๏ผๆฏๆ `1 ~ 33` ็ `svg`ใ

ไพๅฆ๏ผ้ป่ฎค ๐
```html
<!-- ็็ฅๅ็งไปฃ็  -->
<template>
    <img src="/notFound/32.svg" class="cover" alt="page not found" />
</template>
```

ไฟฎๆน `/notFound/32.svg` ไธบ `/notFound/33.svg`

```html
<!-- ็็ฅๅ็งไปฃ็  -->
<template>
    <img src="/notFound/33.svg" class="cover" alt="page not found" />
</template>
```
ๅณๅฏๅๆขๅฐ้ขไธบ ๐

![notFound-other](public/docs/notFound-other.png)

<br />
<br />


### 25. [`tsx` ๆฏๆ](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx)

ๅช้่ฆ `tsx` ๆไปถๆพๅจ `src/components` ไธ๏ผๅณๅฏ็ดๆฅๅจๆจกๆฟไธญไฝฟ็จใ

ไพๅฆไฝ ๆไธไธช `src/components/foo.tsx` ๆไปถ๏ผ้ฃไนๅณๅฏ็ดๆฅๅจๆจกๆฟไธญไฝฟ็จใ

```tsx
// src/components/foo.tsx
export default defineComponent({
    render() {
        return <div>Test</div>
    }
})
```

```html
<template>
    <foo />
</template>
```

ๅทไฝๅฏ่ง ๐ [@vitejs/plugin-vue-jsx](https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx)

<br />
<br />

### 26. [`gzip` ่ตๆบๅ็ผฉๆฏๆ](https://github.com/vbenjs/vite-plugin-compression)

็ไบง็ฏๅขไธๅผ็ฎฑๅณ็จ็ `gzip` ่ตๆบๅ็ผฉ๏ผๆ ้้็ฝฎใ

ๅทไฝๅฏ่ง ๐ [vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression)

<br />
<br />
<br />

### 27. [็ฏๅขๅ้้็ฝฎๆฏๆ](https://cn.vitejs.dev/guide/env-and-mode.html)

ๆ น็ฎๅฝไธๆไธไธช็ฏๅขๅ้้็ฝฎๆไปถ `.env`๏ผ`.env.development` ๅ `.env.production` ็จๆฅๅฏน้กน็ฎ่ฟ่ก้็ฝฎใ
