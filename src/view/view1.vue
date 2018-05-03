<template>
	<div>
		<h1>我是view1</h1>
		<a href="">我是view1</a>
		<section>
		<div class="login">
			<label>
				<span>用户名：</span>
				<input v-model="username" @change="setUser">
			</label>
		</div>
	</section>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'view1',
		data () {
			return {
				username: ''
			}
		},
		methods: {
			setUser: function () {
				this.$emit('transferuser', this.username)
			}
		}
	}



</script>

















