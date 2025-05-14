import { create } from 'zustand'
import { RecipesStoreState } from '../types'

export const useRecipesStore = create<RecipesStoreState>((set) => ({
    selectedCategory: 'beef',
    currentPage: 1,
    selectedDishId: '',
    showRecipe: false,
    setSelectedCategory: (val) =>
        set((state) => val === state.selectedCategory ?
            state : { selectedCategory: val, currentPage: 1 }),
    setCurrentPage: (val) =>
        set((state) => val === state.currentPage ?
            state : { currentPage: val }),
    handleShowRecipe: (idMeal) => set((state) => ({
        showRecipe: !state.showRecipe,
        selectedDishId: idMeal
    }))
}))