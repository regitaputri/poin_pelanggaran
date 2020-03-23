<template>
   <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="main-panel">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="navbar-brand brand-logo">
                  <img src="assets/img/logo.svg">
                </div>
                <h4>Selamat datang!</h4>
                <h6 class="font-weight-light">Login untuk mengelola poin pelanggaran siswa.</h6>
                <form class="pt-3" method="post" v-on:submit.prevent="Login">
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="mdi mdi-account-outline text-primary"></i>
                      </span>
                    </div>
                    <input type="email" class="form-control form-control-lg border-left-0" id="email" name="email" placeholder="E-Mail" required v-model="email">
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <span class="input-group-text bg-transparent border-right-0">
                        <i class="mdi mdi-lock-outline text-primary"></i>
                      </span>
                    </div>
                    <input type="password" class="form-control form-control-lg border-left-0" name="password" id="password" placeholder="Kata Sandi" required v-model="password">                        
                  </div>
                </div>
                <div class="my-3">
                  <b-button type="submit" variant="primary" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">Login</b-button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script src="assets/js/off-canvas.js"></script>
  <script src="assets/js/hoverable-collapse.js"></script>
  <script src="assets/js/template.js"></script>
  <script src="assets/js/settings.js"></script>
  <script src="assets/js/todolist.js"></script>
  <script src="assets/js/vendor.bundle.base.js"></script>
  <script src="assets/js/vendor.bundle.addons.js"></script>


<script>
export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
        Login: function(){
            let email = this.email 
            let password = this.password
            this.$store.dispatch('login', { email, password })
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
        }
    }
}
</script>