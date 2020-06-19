<script>
    import frameworks from '../example.json'
</script>

<style type="text/scss">
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

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

<div class="container">
  <a href="https://svelte.dev/">
      <img src="/assets/svelte-icon.png" alt="svelte-icon" />
  </a>

  <div>
      {#each frameworks as { name, creator }}
        <div class="main">
          <span class="framework">{name}</span>
          was created by
          <span class="creator">{creator}</span>
        </div>
      {/each}
  </div>
</div>

