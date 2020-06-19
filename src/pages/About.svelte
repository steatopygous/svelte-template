<script>
    import packageJson from '../../package.json';

    const version = packageJson.version;
</script>

<style type="text/scss">
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<div class="container">
  <h1>Svelte Template Version {version}</h1>
</div>
