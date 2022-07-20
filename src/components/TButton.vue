<script lang="ts" setup>
import { defineProps, defineComponent } from "vue";

export interface Props {
  bold: boolean,
}

defineComponent({
  name: "TButton",
})

withDefaults(defineProps<Props>(), {
  bold: false,
})
</script>

<template>
  <button :class="{'bold': bold}">
    <slot></slot>
  </button>
</template>

<style scoped></style>
