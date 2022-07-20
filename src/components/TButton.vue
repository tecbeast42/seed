<script lang="ts" setup>
import { defineProps, defineComponent } from "vue";

export interface Props {
  bold: boolean;
}

defineComponent({
  name: "TButton",
});

withDefaults(defineProps<Props>(), {
  bold: false,
});
</script>

<template>
  <button
    class="bg-red-500 px-3 py-1 active:bg-red-700 hover:bg-red-400"
    :class="{ 'font-extrabold': bold }"
  >
    <slot />
  </button>
</template>

<style scoped></style>
