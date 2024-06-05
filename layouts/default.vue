<template>
  <NuxtLoadingIndicator />
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <slot></slot>
    </main>
    <footer></footer>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>