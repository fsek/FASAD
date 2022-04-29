<template>
  <NuxtLayout name="outer-wrapper">
    <slot />
  </NuxtLayout>
</template>
<style>
  header {
    height: 300px !important;
  }
  .partner-wrapper {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  .partner {
    height: 100px;
    background-color: white;
    padding: 5px;
    border-radius: 10px;
  }
</style>
