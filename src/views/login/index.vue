<script setup>
const form = {
  username: '',
  password: ''
}
</script>

<template>
  <el-form
    :model="form"
    ref="form"
    :rules="rules"
    label-width="80px"
    :inline="false"
    size="normal"
  >
    <el-form-item label="">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss"></style>
