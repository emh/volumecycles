<script>
    import { config } from './config.js';

    function handleAddWeight() {
        const n = $config.weights.length;
        const newWeight = n === 0 ? 16 : n === 1 ? $config.weights[0] + 4 : $config.weights[n-1] + ($config.weights[n-1] - $config.weights[n-2]);

        config.update((c) => ({ ...c, weights: [ ...c.weights, newWeight ]}));
    }

    function handleRemoveWeight(i) {
        config.update((c) => ({ ...c, weights: [ ...c.weights.slice(0, i), ...c.weights.slice(i + 1) ]}));
    }
</script>

<style>
    label, .label {
        text-transform: uppercase;
    }

    .left {
        flex: 1;
        text-align: right;
        padding-right: 4px;
    }

    .right {
        flex: 3;
    }

    input[type="number"] {
        width: 100px;
    }

    .formElement {
        display: flex;
    }

    .base {
        line-height: 32px;
    }
</style>

<div class="base">
    <div class="formElement">
        <span class="label left">Weights:</span>
        <div class="right">
            {#each $config.weights as weight, i}
                <div class="weight">
                    <input bind:value={weight} class="weightInput" type="number" min="0" />
                   {#if $config.weights.length > 1}<button on:click={() => handleRemoveWeight(i)}>-</button>{/if}
                </div>
            {/each}
            <button on:click={handleAddWeight}>+</button>
        </div>
    </div>

    <div class="formElement">
        <label for="minSets" class="left">Sets:</label>
        <div class="right">
            <input id="minSets" type="number" bind:value={$config.minSets} /> to
            <input id="maxSets" type="number" bind:value={$config.maxSets} /> by
            <input id="delta" type="number" bind:value={$config.delta} />
            <br/>
            <input type="checkbox" bind:checked={$config.includeDensity} id="includeDensity" /> <span class="label">Include density</span>
        </div>
    </div>

    <div class="formElement">
        <label for="baseReps" class="left">Reps:</label>
        <div class="right">
            <input id="baseReps" type="number" bind:value={$config.baseReps} />
            <br/>
            <input type="checkbox" bind:checked={$config.proportionateReps} id="propReps" /> <span class="label">Proportionate to weight</span>
        </div>
    </div>
</div>
