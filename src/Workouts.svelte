<script>
    import { onDestroy } from 'svelte';
    import { config } from './config.js';

    let volumeWorkouts = [];
    let densityWorkouts = [];

    const unsubscribe = config.subscribe((c) => {
        if (!(c.minSets >= 1 && c.maxSets >= 1 && c.maxSets >= c.minSets && c.delta >= 1)) {
            return;
        }

        let baseWeight = Math.min(...c.weights);

        volumeWorkouts = [];
        densityWorkouts = [];

        for (let weight of c.weights) {
            let reps = c.proportionateReps ? Math.floor(baseWeight / weight * c.baseReps) : c.baseReps;

            for (let sets = c.minSets; sets <= c.maxSets; sets += c.delta) {
                volumeWorkouts.push({
                    weight,
                    sets,
                    reps,
                    volume: weight * sets * reps
                });
            }

            if (c.includeDensity) {
                for (let sets = c.maxSets - c.delta, i = 1; sets >= c.minSets; sets -= c.delta, i++) {
                    const densityReps = Math.round((c.maxSets * reps) / sets);

                    densityWorkouts.push({
                        weight,
                        sets,
                        reps: densityReps,
                        volume: weight * sets * densityReps
                    });
                }
            }
        }

        volumeWorkouts.sort((a, b) => a.volume !== b.volume ? a.volume - b.volume : a.weight - b.weight);
        densityWorkouts.sort((a, b) => a.sets !== b.sets ? b.sets - a.sets : a.weight - b.weight);
    });

    onDestroy(unsubscribe);
</script>

<style>
    h2 {
        text-transform: uppercase;
    }

    .workouts {
        display: flex;
        flex-flow: row wrap;
    }

    .workout {
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-template-rows: 25% 25% 25% 25%;

        border: solid 4px transparent;
        border-radius: 2px;
        width: 100px;
        height: 100px;
        margin: 4px;
    }

    .workout div {
        display: grid;
        justify-items: center;
        align-items: center;
    }

    .value {
        font-weight: 600;
        font-size: 1.5em;
    }

    .total {
        font-size: 0.75em;
    }

    .w8kg, .w10kg {
        background-color: pink;
    }

    .w12kg, .w14kg {
        background-color: blue;
        color: white;
    }

    .w16kg, .w18kg {
        background-color: yellow;
    }

    .w20kg, .w22kg {
        background-color: purple;
        color: white;
    }

    .w24kg, .w26kg {
        background-color: green;
    }

    .w28kg, .w30kg {
        background-color: orange;
    }

    .w32kg, .w34kg {
        background-color: red;
        color: white;
    }

    .w36kg, .w38kg {
        background-color: black;
        color: white;
    }

    .w40kg, .w42kg {
        background-color: white;
    }

    .w44kg, .w46kg {
        background-color: silver;
    }

    .w48kg, .w50kg {
        background-color: gold;
    }

    .w10kg, .w14kg, .w18kg, .w22kg, .w26kg, .w30kg, .w34kg, .w38kg, .w42kg, .w46kg, .w50kg {
        border: solid 4px black;
    }

    .w38kg {
        border: solid 4px white;
    }
</style>

<h2>Volume Cycle</h2>
<div class="workouts">
    {#each volumeWorkouts as workout, index}
        <div class="workout w{workout.weight}kg">
            <div></div><div class="value">{workout.sets}</div><div>sets</div>
            <div>of</div><div class="value">{workout.reps}</div><div>reps</div>
            <div>at</div><div class="value">{workout.weight}</div><div>kg</div>
            <div></div><div class="total value">{workout.volume}</div><div></div>
        </div>
    {/each}
</div>

{#if $config.includeDensity}
    <h2>Density Cycle</h2>
    <div class="workouts">
        {#each densityWorkouts as workout, index}
            <div class="workout w{workout.weight}kg">
                <div></div><div class="value">{workout.sets}</div><div>sets</div>
                <div>of</div><div class="value">{workout.reps}</div><div>reps</div>
                <div>at</div><div class="value">{workout.weight}</div><div>kg</div>
                <div></div><div class="total value">{workout.volume}</div><div></div>
            </div>
        {/each}
    </div>
{/if}
