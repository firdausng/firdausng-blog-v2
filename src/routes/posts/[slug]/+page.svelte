<script lang="ts">
    import { formatDate } from '$lib/utils'
    import * as config from "$lib/config";

    export let data
</script>

<!-- SEO -->
<svelte:head>
    <title>{config.title} - {data.meta.title}</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="">
    <!-- Title -->
    <hgroup class=" text-center">
        <h1 class="text-3xl">{data.meta.title}</h1>
        <p>Published at {formatDate(data.meta.date)}</p>
    </hgroup>

    <!-- Tags -->
    <div class="text-center p-2">
        {#each data.meta.categories as category}
            <span class="bg-primary-900 text-primary-300 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-primary-300 dark:text-primary-900">&num;{category}</span>
        {/each}
    </div>

    <!-- Post -->
    <div class="prose mx-auto p-4 pb-8 mb-4 bg-primary-200 rounded shadow shadow-primary-400">
        <svelte:component this={data.content} />
    </div>
</article>

