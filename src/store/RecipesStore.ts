import { create } from 'zustand'
import { RecipesStoreState } from '../types'
import { persist } from 'zustand/middleware';

export const useRecipesStore = create<RecipesStoreState>()(persist((set, get) => ({
    mealHubItem: 'categories',

    selectedCategory: 'Beef',
    selectedArea: 'American',
    selectedIngredient: '',
    selectedDish: undefined,
    currentPage: 1,
    selectedDishId: '',
    showRecipe: false,

    setMealHubItem: (item) => set({ mealHubItem: item }),

    setSelectedDish: (meal) => set({ selectedDish: meal }),

    setSelectedCategory: (val) => {
        if (val === get().selectedCategory) return
        set({ selectedCategory: val, currentPage: 1 });

    },

    setSelectedArea: (val) => {
        if (val === get().selectedArea) return
        set({ selectedArea: val, currentPage: 1 })
    },

    setSelectedIngredient: (val) => {
        if (val === get().selectedIngredient) return
        set({ selectedIngredient: val, currentPage: 1 })
    },

    setCurrentPage: (val) => {
        if (val === get().currentPage) return
        set({ currentPage: val });
    },

    handleShowRecipe: (idMeal) => set((state) => ({
        showRecipe: !state.showRecipe,
        selectedDishId: idMeal
    }
    )),
}), {
    name: 'recipe-hub', partialize: (state) => ({
        mealHubItem: state.mealHubItem,
        selectedArea: state.selectedArea,
        selectedCategory: state.selectedCategory
    })
}))