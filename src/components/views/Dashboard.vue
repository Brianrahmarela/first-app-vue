<template>
	<div class="container">
		<h2 class="mb-4">Dashboard App</h2>
		<b-form @submit="onSubmit" @reset="onReset" v-if="show" >
			<b-form-group id="input-group-2" label="Nama" label-for="input-2" class="mb-4">
				<b-form-input
					id="input-2"
					v-model="form.name"
					placeholder="Enter your name"
					class="mt-1"
					required
				></b-form-input>
			</b-form-group>

			<b-form-group id="input-group-3" label="NIK" label-for="input-3" class="mb-4">
				<b-form-input
					id="input-3"
					v-model="form.nik"
					placeholder="Enter NIK"
					class="mt-1"
					required
				></b-form-input>
			</b-form-group>

			<b-form-group id="input-group-4" label="Alamat" label-for="input-4" class="mb-4">
				<b-form-input
					id="input-4"
					v-model="form.alamat"
					placeholder="Enter your alamat"
					class="mt-1"
				></b-form-input>
			</b-form-group>

			<b-form-group id="input-group-5" label="Tanggal Lahir" label-for="input-5" class="mb-4">
				<b-form-datepicker
					id="input-5"
					v-model="form.tanggalLahir"
					class="mt-1"
          placeholder="Your Birth Date"
				></b-form-datepicker>
			</b-form-group>

			<!-- <b-button type="reset" variant="danger">Reset</b-button> -->
			<b-button type="submit" variant="primary">Submit</b-button>
		</b-form>

	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
				name: "",
				nik: "",
				alamat: "",
				tanggalLahir: "",
			},
			show: true,
		};
	},
	methods: {
		onSubmit(event) {
			event.preventDefault();
			// console.log(event.target);
			alert(JSON.stringify(this.form));
			localStorage.setItem("form", JSON.stringify(this.form));
			this.$router.push('/upload'); 
		},
		onReset(event) {
			event.preventDefault();
			// Reset our form values
			this.form.name = "";
			this.form.nik = "";
			this.form.alamat = "";
			this.form.tanggalLahir = "";
			// Trick to reset/clear native browser form validation state
			this.show = false;
			this.$nextTick(() => {
				this.show = true;
			});
		},
	},
};
</script>
