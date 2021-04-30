<script>
    import { onDestroy, onMount } from 'svelte';
	import { config } from './config.js';
	import Workouts from './Workouts.svelte';
	import Builder from './Builder.svelte';

	let parsed = false;

    function parseHash() {
        if (location.hash) {
			try {
				const c = JSON.parse(atob(location.hash.substring(1)));

				config.set(c);
			} catch {
				console.error('failed to parse', location.hash);
			}
        }

		parsed = true;
    }

	const unsubscribe = config.subscribe((c) => {
		if (parsed) {
			location.hash = btoa(JSON.stringify(c));
		}
	});

    onMount(parseHash);
	onDestroy(unsubscribe);
</script>

<style>
	#container {
		display: flex;
	}

	.builder, .workouts {
		flex: 1;
	}

	h1 {
		font-family: 'Arial Black';
	    font-size: 72px;
    	line-height: 0.68em;
    	text-transform: uppercase;
    	margin-top: 0;
	    text-align: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>Volume / Density Cycle Calculator</h1>

	<div id="container">
		<div class="builder"><Builder /></div>
		<div class="workouts"><Workouts /></div>
	</div>
</main>
