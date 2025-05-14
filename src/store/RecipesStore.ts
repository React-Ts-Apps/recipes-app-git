import { create } from 'zustand'
import { RecipesStoreState } from '../types'

export const useRecipesStore = create<RecipesStoreState>((set, get) => ({
    selectedCategory: 'Beef',
    currentPage: 1,
    selectedDishId: '',
    showRecipe: false,

    setSelectedCategory: (val) => {
        if (val === get().selectedCategory) return
        set({ selectedCategory: val, currentPage: 1 });

    },

    setCurrentPage: (val) => {
        if (get().currentPage === val) return
        set({ currentPage: val });
    },

    handleShowRecipe: (idMeal) => set((state) => ({
        showRecipe: !state.showRecipe,
        selectedDishId: idMeal
    }))
}))