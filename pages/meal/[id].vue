<template>
  <div>
    <section>
      <div class="container m-auto grid grid-cols-3 gap-4">
        <div class="col-span-1">
          <img :src="mealsStore.meal.strMealThumb" alt="" />
        </div>
        <div class="col-span-2">
          <h1 class="text-4xl font-bold">{{ mealsStore.meal.strMeal }}</h1>
          <h5 class="text-gray-500">{{ mealsStore.meal.strCategory }}</h5>
          <h5 class="text-gray-500">{{ mealsStore.meal.strArea }}</h5>

          <h1 class="text-4xl mt-4">Instruction</h1>
          <p class="text-gray-500">
            {{ mealsStore.meal.strInstructions }}
          </p>

          <a :href="mealsStore.meal.strYoutube" target="_blank"
            ><i class="fa-brands fa-youtube text-4xl text-red-500"></i
          ></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
import { useMealsStore } from "~/store/meals";
const mealsStore = useMealsStore();
mealsStore.getMealById(route.params.id);
</script>

<style lang="scss" scoped>
</style>