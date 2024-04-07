<script lang="ts">
    import '../styles.css';
    import NavBar from '$lib/ui/navbar.svelte'
    import * as config from "$lib/config";
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>


<NavBar></NavBar>
<slot />