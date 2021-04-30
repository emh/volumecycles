import { writable } from 'svelte/store';

export const config = writable({
    weights: [ 16, 24, 32 ],
    minSets: 6,
    maxSets: 20,
    delta: 2,
    baseReps: 6,
    proportionateReps: true,
    includeDensity: true
});
