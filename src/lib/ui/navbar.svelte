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
		<div class="w-full md:block md:w-auto" id="navbar-default">
			<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
				{#each navList as nav (nav)}
					<li>
						<a href={nav.path} class="block py-2 px-3 text-white rounded md:bg-transparent {$page.url.pathname.startsWith(nav.path) ? 'md:text-primary-700 font-semibold underline underline-offset-4 decoration-primary-600/30': 'md:text-primary-600'}  md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">{nav.name}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>

