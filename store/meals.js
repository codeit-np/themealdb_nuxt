import { defineStore } from "pinia";
import axiosApi from "~/config/axios";
export const useMealsStore = defineStore("meals", {
  state: () => {
    return {
      categories: null,
      meals: null,
      meal: null,
      loading: false,
    };
  },

  actions: {
    // Get All Categories
    async getAllCategories() {
      try {
        this.loading = true;
        const response = await axiosApi.get("categories.php");
        if (response.status == 200) {
          this.categories = response.data.categories;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },

    // Get Meals By Categories
    async getMealsByCategory(category) {
      try {
        this.loading = true;
        const response = await axiosApi.get(`filter.php?c=${category}`);
        if (response.status == 200) {
          this.meals = response.data.meals;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },

    // Get Meal by Id
    async getMealById(id) {
      try {
        this.loading = true;
        const response = await axiosApi.get(`lookup.php?i=${id}`);
        if (response.status == 200) {
          this.meal = response.data.meals[0];
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  },
});
