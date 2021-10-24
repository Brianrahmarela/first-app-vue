<template>
	<div class="container">
		<h2 class="mb-4">Summary</h2>
		<b-list-group class="mb-5">
			<b-list-group-item>Name : {{ form.name }}</b-list-group-item>
			<b-list-group-item>NIK : {{ form.nik }}</b-list-group-item>
			<b-list-group-item>Alamat : {{ form.alamat }}</b-list-group-item>
			<b-list-group-item
				>Tanggal Lahir : {{ form.tanggalLahir }}</b-list-group-item
			>
		</b-list-group>
      <b-img :src="previewImg" fluid alt="Responsive image"></b-img>

		<!-- <img :src="previewImg" width="500"/> -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {
			},
			previewImg: "",
		};
	},
		created() {
			this.form = JSON.parse(localStorage.getItem("form")) || {};
      console.log(this.form )
			this.previewImg = JSON.parse(localStorage.getItem("foto")) || {};
      console.log(this.previewImg )
		},
	methods: {
	},
};
</script>
