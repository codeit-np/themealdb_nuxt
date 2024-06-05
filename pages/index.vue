<template>
  <div>
    <section>
      <div
        class="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-center"
      >
        <div
          class="border hover:shadow-md"
          v-for="category in mealsStore.categories"
          :key="category"
        >
          <NuxtLink :to="`/category/${category.strCategory}`">
            <div>
              <img :src="category.strCategoryThumb" alt="" />
              <h1>{{ category.strCategory }}</h1>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useMealsStore } from "~/store/meals";
const mealsStore = useMealsStore();
await mealsStore.getAllCategories();
</script>

<style lang="scss" scoped>
</style>