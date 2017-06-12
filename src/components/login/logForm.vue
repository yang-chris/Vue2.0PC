<template>
  <div class="login-form">
    <div class="logo-box">
      <div class="username">
        <label for="username">用户名：</label>
        <input type="text" id="username" placeholder="请输入用户名" v-model="usernameModel">
      </div>
      <span class="error">{{userError.msg}}</span>
      <div class="password">
        <label for="password">密码：</label>
        <input type="text" id="password" placeholder="请输入密码" v-model="passwordModel">
      </div>
      <span class="error">{{pswError.msg}}</span>
      <div class="login-btn">
        <button type="button" @click="onLogin()">登录</button>
        <span class="error">{{errorText}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        usernameModel: '',
        passwordModel: '',
        errorText: ''
      }
    },
    computed: {
      userError(){
        let msg, code;
        let telReg = /^1[2|3|5|6|7|8|9][0-9]\d{8}$/;
        if (!telReg.test(this.usernameModel)) {
          code = false;
          msg = '不是正确的11位手机号';
        } else {
          code = true;
          msg = ''
        }
        if(!this.userFlag){
            msg='';
            this.userFlag=true
        }
        return {
          code,
          msg
        }
      },
      pswError(){
        let msg, code;
        let pswReg = /^[a-z0-9_-]{6,18}$/;
        if (!pswReg.test(this.passwordModel)) {
          code = false;
          msg = '请输入6-18位密码';
        } else {
          code = true;
          msg = ''
        }
        if(!this.pswFlag){
          msg='';
          this.pswFlag=true
        }
        return {
          code,
          msg
        }
      }
    },
    methods: {
      onLogin(){
        if (!this.userError.code || !this.pswError.code) {
          this.errorText='请重新填写部分选项'
        } else {
            this.$emit('has-log',this.usernameModel)
          console.log(this.usernameModel, '---', this.passwordModel)
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .logo-box
    margin 20px auto
    width 400px

  .username, .password
    margin 10px 0
    input
      width 250px
      height 25px
      line-height 25px
    label
      display inline-block
      width 65px
      text-align right

  .error
    display block
    padding-left 75px
    color red
    font-size 12px

  .login-btn
    text-align center

  button
    width 80px
    height 30px
    background green
    font-size 18px
    border-radius 5px
    border none
    outline none
    cursor pointer
    color white
</style>
