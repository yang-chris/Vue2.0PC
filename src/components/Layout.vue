<template>
  <div>
    <div class="header">
      <div class="header-inner">
        <img src="../images/logo.png" class="logo-img" alt="">
        <div class="header-nav">
          <li><a href="javascript:;">{{username}}</a></li>
          <li><a href="javascript:;" v-if="username===''" @click="logClick">登录</a></li>
          <li class="nav-pile">|</li>
          <li><a href="javascript:;" v-if="username!=''" @click="username=''">退出</a></li>
          <li><a href="javascript:;" v-if="username===''" @click="regClick">注册</a></li>
          <li class="nav-pile">|</li>
          <li><a href="javascript:;" @click="aboutClick">关于</a></li>
        </div>
      </div>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="footer">footer</div>
    <dialog-show :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </dialog-show>
    <dialog-show :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
      <p>reg</p>
    </dialog-show>
    <dialog-show :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。</p>
      <p>about</p>
    </dialog-show>
  </div>
</template>

<script type="text/ecmascript-6">
  import dialogShow from './dialog/dialog.vue'
  import logForm from './login/logForm.vue'
  import regForm from './regist/registForm.vue'
  export default {
    components: {
      dialogShow,
      logForm,
      regForm
    },
    data(){
      return {
        //isShowDialog:false,
        isShowLogDialog: false,
        isShowRegDialog: false,
        isShowAboutDialog: false,
        username:'',
      }
    },
    methods: {
      logClick(){
        this.isShowLogDialog = true
      },
      regClick(){
        this.isShowRegDialog = true
      },
      aboutClick(){
        this.isShowAboutDialog = true
      },
      closeDialog(attr){
        this[attr] = false
      },
      onSuccessLog(data){
          this.username=data;
        this.closeDialog('isShowLogDialog')
      }
    }
  }
</script>

<style type="text/css">
  @import "../static/css/reset.css";

  .header {
    width: 100%;
    height: 70px;
    background: #000;
  }
  .nav-pile{
    color: white;
    line-height: 70px;
  }
  .header-inner {
    margin: 0 auto;
    width: 1000px;
    overflow: hidden;
  }

  .header-inner .logo-img {
    width: 40px;
    height: 40px;
    padding-top: 15px;
  }

  .header-nav {
    float: right;
    overflow: hidden;
  }
  .header-nav li{
    float: left;
    margin-left: 20px;
  }
  .header-nav li a {
    color: white;
    line-height: 70px;
  }
</style>
