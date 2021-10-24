<template>
	<div id="app">
		<!-- <b-button v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button>
		<b-sidebar
			id="sidebar-no-header"
			aria-labelledby="sidebar-no-header-title"
			no-header
			shadow
		>
			<template #default="{ hide }">
				<div class="p-3">
					<h4 id="sidebar-no-header-title text-mute">Menu sidebar</h4>
			
					<nav class="mb-3">
						<b-nav vertical>
						
							<router-link to="/" class="nav-item mt-2">Dashboard</router-link>
							<router-link to="/profile" class="nav-item mt-2">Profile</router-link>
						</b-nav>
					</nav>
					<b-button variant="primary" block @click="hide"
						>Close Sidebar</b-button
					>
				</div>
			</template>
		</b-sidebar> -->

		<router-view></router-view>
	</div>
</template>
