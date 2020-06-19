<script>
    import { Router, Route, Link, navigate } from 'svelte-routing';

    import Index from './pages/Index.svelte';
    import About from './pages/About.svelte';

    let url = '/';
</script>

<style type="text/scss">
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<div class="container">
    <Router url="{url}">
        <nav class="page-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>

        <br/>

        <div>
            <Route path="/"><Index /></Route>
            <Route path="/about"><About /></Route>
        </div>
    </Router>
</div>

