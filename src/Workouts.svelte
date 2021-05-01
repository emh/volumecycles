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
        let maxDensity = c.baseReps + (c.maxSets - c.minSets) / c.delta;
        let maxWeight = Math.max(...c.weights);

        for (let weight of c.weights) {
            let reps = c.proportionateReps ? Math.floor(baseWeight / weight * c.baseReps) : c.baseReps;

            for (let sets = c.minSets; sets <= c.maxSets; sets += c.delta) {
                workouts.push({
                    weight,
                    sets,
                    reps,
                    volume: weight * sets * reps,
                    density: reps / maxDensity,
                    intensity: weight / maxWeight
                });
            }

            if (c.includeDensity) {
                for (let sets = c.maxSets - c.delta, i = 1; sets >= c.minSets; sets -= c.delta, i++) {
                    workouts.push({
                        weight,
                        sets,
                        reps: reps + i,
                        volume: weight * sets * (reps + i),
                        density: (reps + i) / maxDensity,
                        intensity: weight / maxWeight
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

    .circle {
        height: 16px;
        width: 16px;
        border-radius: 8px;
        display: inline-block
    }

    .high {
        background-color: red;
    }

    .medium {
        background-color: yellow;
    }

    .low{
        background-color: blue;
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
            <th>Density</th>
            <th>Intensity</th>
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
                <td><span class="circle {hml(workout.density)}" title={workout.density}></span></td>
                <td><span class="circle {hml(workout.intensity)}" title={workout.intensity}></span></td>
            </tr>
        {/each}
    </tbody>
</table>
