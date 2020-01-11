<template>
  <div class="app">
    <el-form :rules="rules"  :model="form" status-icon label-width="80px">
      <img class="logimg" src="../assets/logo.png" alt />
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      rules: {
        // required: true 为必填项
        // message 提示消息
        // trigger: blur 失去焦点触发校验   change 修改时就触发
        // min: 最小长度,  max: 最大长度
        username: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 3, max: 12, message: '密码长度必须是3-12位', trigger: ['change', 'blur'],
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 3, max: 12, message: '密码长度必须是3-12位', trigger: ['change', 'blur'],
          },
        ],
      },
    };
  },
};
</script>

<style lang="less">
.app {
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  overflow: hidden;

  .el-form {
    width: 400px;
    position: relative;
    margin: 0 auto;
    margin-top: 200px;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    padding-top: 60px;
    .logimg {
      position: absolute;
      transform: translate(-50%);
      width: 80px;
      border: 5px solid rgb(223, 223, 223);
      border-radius: 50%;
      background-color: #fff;
      top: -50px;
      left: 50%;
      transform: translate(-50%);
    }
  }
}
</style>
