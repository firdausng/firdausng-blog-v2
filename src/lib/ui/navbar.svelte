<script>
	import { page } from '$app/stores';
	import Logo from '$lib/assets/images/logo.png'
	let navList = [
		{name: 'Posts', path:'/posts'},
		{name: 'About', path:'/about'}
	]
</script>

<nav class="border-gray-200 container flex">
	<a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
		<img src={Logo} class="h-8" alt="Flowbite Logo" />
		<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Firdausng</span>
	</a>
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<div class="lock w-auto" id="navbar-default">
			<ul class="font-medium flex flex-row p-0 mt-0 border-0 border-gray-100 rounded-lg space-x-8 rtl:space-x-reverse">
				{#each navList as nav (nav)}
					<li>
						<a href={nav.path} class="block py-2 px-3 rounded bg-transparent {$page.url.pathname.startsWith(nav.path) ? 'text-primary-700 font-semibold underline underline-offset-4 decoration-primary-600/30': 'text-primary-600'}  p-0" aria-current="page">{nav.name}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>

