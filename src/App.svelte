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
		display: grid;
		grid-template-columns: 50% 50%;
		grid-template-areas:
			'builder workouts';
	}

	.builder {
		grid-area: builder;
	}

	.workouts {
		grid-area: workouts;
	}

	h1 {
		font-family: 'Arial Black', Arial-BoldMT;
	    font-size: 72px;
    	line-height: 0.68em;
    	text-transform: uppercase;
    	margin-top: 0;
	    text-align: center;
	}

	@media (max-width: 700px) {
		h1 {
			font-size: 36px;
		}

		#container {
			grid-template-columns: 100%;
    		grid-template-areas:
				'builder'
      			'workouts';
		}
	}
</style>

<main>
	<h1>Volume / Density Cycle<br/>Program Generator</h1>

	<div id="container">
		<div class="builder"><Builder /></div>
		<div class="workouts"><Workouts /></div>
	</div>
</main>
