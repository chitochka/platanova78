<template>
	<v-app :theme="_theme">
		<!--<v-overlay-->
		<!--  :model-value="overlay"-->
		<!--  class="align-center justify-center"-->
		<!-->-->
		<p class="test">
			<v-btn color="error" @click="dialog = !dialog">
				Btn in v-app
			</v-btn>
		</p>

		<div class="text-center test">
			<v-dialog max-width="340"   v-model="dialog">
				<v-btn color="error" @click="overlay = !overlay">
					Show Btn
				</v-btn>
			</v-dialog>
			<v-overlay v-model="overlay"></v-overlay>
		</div>

		<v-app-bar>
			<v-app-bar-nav-icon
				@click.stop="_drawer = !_drawer"
			></v-app-bar-nav-icon>
			<v-app-bar-title> Registrace noveho uzivatele </v-app-bar-title>
			<v-spacer></v-spacer>

			<v-tooltip
				:text="`Zmenit na ${
					_theme === 'light' ? 'tmavou' : 'svetlou'
				} tematu`"
			>
				<template v-slot:activator="{ props }">
					<v-btn
						:prepend-icon="
							_theme === 'light'
								? 'mdi-weather-sunny'
								: 'mdi-weather-night'
						"
						@click="changeTheme"
						v-bind="props"
						elevation="1"
					></v-btn>
				</template>
			</v-tooltip>
			<div style="margin-top: 10px">
				<v-select
					variant="plain"
					:prepend-inner-icon="select ? select.icon : ''"
					:item-props="itemProps"
					:items="items"
					v-model="select"
				></v-select>
			</div>
		</v-app-bar>

		<v-navigation-drawer v-model="_drawer">
			<SideBar></SideBar>
		</v-navigation-drawer>

		<v-main d-flex align-center justify-center>
			<router-view></router-view>
			<!-- <Login></Login> -->
		</v-main>
		<AppFooter />
	</v-app>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<script>
import SideBar from "./components/Sidebar.vue";
export default {
	setup() {
		const { t } = useI18n();
		return { t };
	},
	data() {
		return {
			overlay: false,
			dialog:false,
			locale: useI18n(),
			select: { name: "Cestina", icon: "fi fi-cz" }, // nacist z Localstorage
			_theme: "light",
			_drawer: false,
			items: [
				{ lang: "cs", name: "Cestina", icon: "fi fi-cz" },
				{ lang: "ru", name: "Русский", icon: "fi fi-ru" },
				{ lang: "en", name: "English", icon: "fi fi-gb" },
				{ lang: "de", name: "Deutsch", icon: "fi fi-de" }
			]
		};
	},

	watch: {
		select(newValue) {
			this.locale.locale = newValue.lang;
		},
		overlay(val) {
			val &&
				setTimeout(() => {
					this.overlay = false;
				}, 2000);
		}
	},
	methods: {
		itemProps(item) {
			return {
				title: item.name,
				appendIcon: item.icon
			};
		},
		changeTheme() {
			this._theme = this._theme === "light" ? "dark" : "light";
		}
	},
	mounted() {}
};
</script>

<style scope>
.test {
	position: absolute;
	z-index: 9999;
}
</style>
