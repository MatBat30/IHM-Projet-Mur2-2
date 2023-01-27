# Layouts

Vue components in this dir are used as layouts.

By default, `default.vue` will be used unless an alternative is specified in the route meta.

```html

<script setup lang="ts">
    const {definePageMeta} = require("nuxt/dist/pages/runtime");
    definePageMeta({
        layout: 'default',
    })
</script>
```

Learn more on https://nuxt.com/docs/guide/directory-structure/layouts
