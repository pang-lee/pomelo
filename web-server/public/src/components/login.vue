<template>
    <b-container fluid class="mt-3">
        <b-row>
            <b-col>
                <b-card border-variant="dark" title="Login | SignUp" class="my-3 text-center">
                    <b-tabs content-class="mt-3" justified active-nav-item-class="font-weight-bold text-uppercase text-danger">
                        <b-tab title="Login" active>
                            <b-form @submit.stop.prevent="Login">
                            <b-form-group label="Email address:">
                                <b-form-input :state="LoginEmailvalidation" v-model="formLogin.email" type="email" required placeholder="Enter email"></b-form-input>
                            </b-form-group>
                            <b-form-invalid-feedback :state="LoginEmailvalidation">
                                Invalid Email Format.
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback :state="LoginEmailvalidation">
                                Looks Good.
                            </b-form-valid-feedback>
                          
                            <br/>
                            <b-form-group label="Password:">
                                <b-form-input type="password" :state="LoginPasswordvalidation" v-model="formLogin.password" required placeholder="Enter Password"></b-form-input>
                            </b-form-group>
                            <b-form-invalid-feedback :state="LoginPasswordvalidation">
                                At least three characters and digits. | Example: abc123
                            </b-form-invalid-feedback>
                            <b-form-valid-feedback :state="LoginPasswordvalidation">
                                Looks Good.
                            </b-form-valid-feedback>

                            <hr/>
                            <b-button type="submit" variant="primary" @click.prevent="Login()">Login</b-button>

                            <hr/>
                            <b-card-footer>
                                <span>Login With:&nbsp;</span>
                                <b-button class="fa fa-facebook" variant="outline-primary"></b-button>&nbsp;
                                <b-button class="fa fa-google" variant="outline-danger"></b-button>
                            </b-card-footer>
                    </b-form>
                </b-tab>

                <b-tab title="SignUp">
                   <b-form @submit.stop.prevent="SignUp">
                        <b-form-group label="Email address:">
                          <b-form-input :state="SignUpEmailvalidation" v-model="formSignUp.email" type="email" required placeholder="Enter email"></b-form-input>
                        </b-form-group>
                        <b-form-invalid-feedback :state="SignUpEmailvalidation">
                          Invalid Email Format.
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="SignUpEmailvalidation">
                          Looks Good.
                        </b-form-valid-feedback>
                          
                        <br/>
                        <b-form-group label="Password:">
                          <b-form-input type="password" :state="SignUpPasswordvalidation" v-model="formSignUp.password" required placeholder="Enter Password"></b-form-input>
                        </b-form-group>
                        <b-form-invalid-feedback :state="SignUpPasswordvalidation">
                          At least three characters and digits. | Example: abc123
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="SignUpPasswordvalidation">
                          Looks Good.
                        </b-form-valid-feedback>
                          
                        <br/>
                        <b-form-group label="Confirm Password:">
                          <b-form-input type="password" :state="Confirmvalidation" v-model="formSignUp.confirm" required placeholder="Enter Password"></b-form-input>
                        </b-form-group>
                        <b-form-invalid-feedback :state="Confirmvalidation">
                          Two field are not same.
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="Confirmvalidation">
                          Looks Good.
                        </b-form-valid-feedback>

                        <br/>
                        <b-form-group label="User Name:">
                          <b-form-input :state="Uservalidation" v-model="formSignUp.uname" required placeholder="Enter UserName"></b-form-input>
                        </b-form-group>
                        <b-form-invalid-feedback :state="Uservalidation">
                          Choose any name you like.
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="Uservalidation">
                          Looks Good.
                        </b-form-valid-feedback>

                        <hr/>
                        <b-button type="submit" variant="primary">SignUp</b-button>
                    </b-form>
                </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
module.exports = {
  name: 'login',
  data() {
    return {
      emailRule:/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
      passwordRule:/.*[a-zA-Z]{3,}.*[0-9]{3,}.*/,
      userRule:/.+/,
      formLogin: {
        email: '',
        password: ''
      },
      formSignUp:{
        email: '',
        password: '',
        confirm:'',
        uname:'',
      }
    }
  },
  computed: {
    LoginEmailvalidation(){
      if(this.formLogin.email.search(this.emailRule)!= -1) return true
      else return false
    },
    LoginPasswordvalidation(){
      if(this.formLogin.password.search(this.passwordRule) != -1) return true
      else return false
    },
    SignUpEmailvalidation(){
      if(this.formSignUp.email.search(this.emailRule) != -1) return true
      else return false
    },
    SignUpPasswordvalidation(){
      if(this.formSignUp.password.search(this.passwordRule) != -1) return true
      else return false
    },
    Confirmvalidation(){
      if((this.formSignUp.password || this.formSignUp.confirm) == '')return false
      else if(this.formSignUp.password == this.formSignUp.confirm) return true
      else return false
    },
    Uservalidation() {
      if(this.formSignUp.uname.search(this.userRule) != -1) return true
      else return false
    }
  },
  methods: {
    async Login(){
      if((this.LoginEmailvalidation && this.LoginPasswordvalidation) == true){
        const credential = firebase.auth().signInWithEmailAndPassword(this.formLogin.email, this.formLogin.password)
        this.formLogin.email = ''
        this.formLogin.password = ''
      }
     },
    async SignUp(){
      if((this.SignUpEmailvalidation && this.SignUpPasswordvalidation && this.Confirmvalidation && this.Uservalidation)){
        const credential = await firebase.auth().createUserWithEmailAndPassword(this.formSignUp.email, this.formSignUp.password)
        this.formSignUp.email = ''
        this.formSignUp.password = ''
        this.formSignUp.confirm = ''
        this.formSignUp.uname = ''
      }
    }
  }
}
</script>

<style></style>