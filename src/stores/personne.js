import { defineStore } from "pinia";

export const usePersonneStore = defineStore("personne", {
    state: () => ({
        personne: {}
    }),
    getters: {
        /**
         * Permet de recuperer la personne.
         * @returns {Object}
         */
        getPersonne() {
            return this.personne;
        },
    },
    actions: {
        /**
         * Permet de confirmer ou non une action du modal.
         * @param {Object} personne 
         */
        setPersonne(personne) {
            this.personne = personne;
        }
    },
})