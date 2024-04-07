<script lang="ts">
    import { formatDate } from '$lib/utils'
    import * as config from '$lib/config'

    export let data
</script>

<svelte:head>
    <title>{config.title} - Blog</title>
</svelte:head>

<!-- Posts -->
<section class="mx-auto">
    <ul class="flex flex-col gap-4">
        {#each data.posts as post}
            <li class="bg-primary-500/20 p-2 rounded shadow shadow-primary-800/50">
                <a href={'posts/' + post.slug} class="font-semibold text-2xl">{post.title}</a>
                <p class="text-xs">{formatDate(post.date)}</p>
                <p class="text-md">{post.description}</p>
            </li>
        {/each}
    </ul>
</section>

