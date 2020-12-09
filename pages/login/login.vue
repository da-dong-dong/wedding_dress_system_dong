<template>
	<view class="bigBox">
		<!-- 输入手机号 -->
		<view class="ip">
			<view class="left">
				<i-icon class="icon" type="mobilephone_fill" size="28" color="#61A3FF" />
				<view class="text">+86</view>
			</view>
			<input type="text" placeholder="请输入手机号" v-model="user.unumber"/>
			<view class="close" @click="close(1)">
				<i-icon type="delete" size="28" color="#80848f" />
			</view>
		</view>
		<!-- 输入密码 -->
		<view class="ip">
			<view class="left">
				<i-icon class="icon" type="lock_fill" size="28" color="#61A3FF"  />
				<input type="password" placeholder="请输入密码" v-model="user.password"/>
			</view>
			<view class="close" @click="close(2)">
				<i-icon type="delete" size="28" color="#80848f" />
			</view>
		</view>
		
		<!-- 登录按键 -->
		<view class="but" @click="login">登录</view>
		{{get_userID}}
	</view>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		computed:{
			...mapGetters('app',[
				'get_userID'
			]),
			
		},
		data() {
			return {
				user:{
					unumber:null,
					password:null,
				}
			};
		},
		methods:{
			//获取接口（存储本地）
			...mapActions('app',[
				'act_userID'
			]),
			//登录
			login(){
				let {unumber,password} = this.user
				//判断为空
				if(!unumber || !password){
					$Message({
						content: !unumber?'用户名不能为空！':'密码不能为空！',
						type: 'error'
					});
					return
				}
				this.act_userID(this.user)
			}
		}
	}
</script>

<style lang="scss">
.ip{
	display: flex;
	justify-content: space-between;
	width: 570rpx;
	padding: 15rpx;
	border-radius: 100rpx;
	border: 1rpx solid #dbdde1;
	margin-top: 50rpx;
	margin-left: 50%;
	transform: translateX(-50%);
	.left{
		display: flex;
		>view{
			margin-top: 6rpx;
			padding-right: 15rpx;
		}
	}
	input{
		margin-top: 6rpx;
	}
}
.ip:nth-child(1){
	margin-top: 200rpx;
	.left{
		border-right: 1rpx solid #dbdde1;
	}
}
.ip:nth-child(2){
	.icon{
		margin-right: 15rpx;
	}
}

.but{
	width: 600rpx;
	height: 80rpx;
	margin-top: 100rpx;
	line-height: 80rpx;
	border-radius: 40rpx;
	background-color: #61A3FF;
	color: #FFFFFF;
	text-align: center;
	margin-left: 50%;
	transform: translateX(-50%);
}
</style>
