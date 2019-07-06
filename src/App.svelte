<script>
    import frameworks from './example.json'
	export let name;
</script>

<style type="text/scss">
    .main {
        font-size: 24px;
    }

	.framework {
	    color: dodgerblue;

		&:hover {
		  color: blue;
		}
	}

	.creator {
	    color: mediumpurple;

		&:hover {
		  color: purple;
		}
	}
</style>

{#each frameworks as { name, creator }}
  <div class="main">
    <span class="framework">{name}</span>
    was created by
    <span class="creator">{creator}</span>
  </div>
{/each}
