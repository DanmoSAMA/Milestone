<template>
  <div class="app_wrapper-login">
    <input
      type="password"
      placeholder="请输入密码"
      class="app_wrapper-login-input"
      @keyup.enter="handleLogin(pswd)"
      v-model="pswd"
    />
    <button class="app_wrapper-login-btn" @click="handleLogin(pswd)">
      登陆
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { login } from '../../network/user/login';

import jump from '../../utils/jump';

const pswd = ref('');

function handleLogin(pswd: string) {
  login(pswd).then(check => {
    if (!check) alert('密码错误');
    else jump('/posts', { page: '0' });
  })
}
</script>

<style lang="scss">
.app_wrapper-login {
  width: 400px;
  height: 200px;
  margin-top: 150px;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba($color: #000000, $alpha: 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;

  &-input {
    width: 80%;
    padding: 0 10px;
    outline: none;
    height: 30px;
    line-height: 30px;
    margin-bottom: 30px;
    border: 1px solid #bbb;
    border-radius: 15px;
    background-color: #f8f9fa;
  }

  &-btn {
    outline: none;
    width: 80px;
    padding: 0;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #bbb;
    border-radius: 20px;
    background-color: #f8f9fa;
    cursor: pointer;
    transition: all 0.3s;
  }

  &-btn:hover {
    background-color: #016dff;
    color: #fff;
  }
}
</style>
