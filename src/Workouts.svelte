<script>
    import { onDestroy } from 'svelte';
    import { config } from './config.js';

    let workouts = [];

    const unsubscribe = config.subscribe((c) => {
        if (!(c.minSets >= 1 && c.maxSets >= 1 && c.maxSets >= c.minSets && c.delta >= 1)) {
            return;
        }

        workouts = [];

        let baseWeight = Math.min(...c.weights);

        for (let weight of c.weights) {
            let reps = c.proportionateReps ? Math.floor(baseWeight / weight * c.baseReps) : c.baseReps;

            for (let sets = c.minSets; sets <= c.maxSets; sets += c.delta) {
                workouts.push({
                    weight,
                    sets,
                    reps,
                    volume: weight * sets * reps
                });
            }

            if (c.includeDensity) {
                for (let sets = c.maxSets - c.delta, i = 1; sets >= c.minSets; sets -= c.delta, i++) {
                    workouts.push({
                        weight,
                        sets,
                        reps: reps + i,
                        volume: weight * sets * (reps + i)
                    });
                }
            }
        }

        workouts.sort((a, b) => a.volume !== b.volume ? a.volume - b.volume : a.weight - b.weight);
    });

    const hml = (v) => v > 0.67 ? 'high' : v > 0.33 ? 'medium' : 'low';

    onDestroy(unsubscribe);
</script>

<style>
    table {
        width: 100%;
        text-align: center;
    }
</style>

<table>
    <thead>
        <tr>
            <th>Workout</th>
            <th>Weight</th>
            <th>Reps</th>
            <th>Sets</th>
            <th>Volume</th>
        </tr>
    </thead>

    <tbody>
        {#each workouts as workout, index}
            <tr>
                <td>{index + 1}</td>
                <td>{workout.weight}</td>
                <td>{workout.reps}</td>
                <td>{workout.sets}</td>
                <td>{workout.volume}</td>
            </tr>
        {/each}
    </tbody>
</table>
