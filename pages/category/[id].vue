<template>
  <div>
    <section>
      <div
        class="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-center"
      >
        <div class="border" v-for="meal in mealsStore.meals" :key="meal">
          <NuxtLink :to="`/meal/${meal.idMeal}`">
            <div>
              <img :src="meal.strMealThumb" alt="" />
              <h1>{{ meal.strMeal }}</h1>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
import { useMealsStore } from "~/store/meals";
const mealsStore = useMealsStore();
mealsStore.getMealsByCategory(route.params.id);
</script>

<style lang="scss" scoped>
</style>