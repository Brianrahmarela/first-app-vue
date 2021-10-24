<template>
	<div class="container mx-auto" style="width: 240px;">
		<h2 class="mb-4">Upload Image</h2>
		<input type="file" @change="upload" />
    <!-- <p>ssssttttttttttttttttttttttttttttttttttttttt</p> -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			form: {},
			foto: {
				gambar: "",
			},
			previewImg: "",
		};
	},
	created() {
		this.form = JSON.parse(localStorage.getItem("form")) || {};
	},
	methods: {
		upload(event) {
			console.log(event);
			this.text = event.target.files[0].name;
			this.foto.gambar = this.text;
			console.log(this.foto.gambar);
			this.previewImg = URL.createObjectURL(event.target.files[0]);
			console.log(this.previewImg);
			localStorage.setItem("foto", JSON.stringify(this.previewImg));
      this.$router.push('/summary'); 
		},
	},
};
</script>
