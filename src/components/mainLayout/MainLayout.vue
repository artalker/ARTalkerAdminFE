<template>
  <SideBar title="title" @search-input="SideBarInput" />
</template>

<script setup lang="ts">
import SideBar from "./SideBar.vue";

const title = "임소희";

const SideBarInput = (value: string) => {
  console.log(value);
};
</script>
