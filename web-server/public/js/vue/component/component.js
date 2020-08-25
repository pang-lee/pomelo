Vue.component('navbar', {
  template: `<div>
              <b-navbar toggleable="lg" type="dark" variant="dark">
                <b-navbar-brand><router-link tag="div" to="/">PangTube</router-link></b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            
                <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav>
                    <b-nav-item>
                      <router-link tag="div" to="/live">Live</router-link>
                    </b-nav-item>
                  </b-navbar-nav>
                  <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Lang" right>
                      <b-dropdown-item href="#">EN</b-dropdown-item>
                      <b-dropdown-item href="#">ES</b-dropdown-item>
                      <b-dropdown-item href="#">RU</b-dropdown-item>
                      <b-dropdown-item href="#">FA</b-dropdown-item>
                      <b-dropdown-item href="#">{{test}}</b-dropdown-item>
                    </b-nav-item-dropdown>
                    
                    <b-nav-item-dropdown right v-if="auth">
                      <template v-slot:button-content>
                        <em>User</em>
                      </template>
                      <b-dropdown-item href="#">Profile</b-dropdown-item>
                      <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-navbar-nav v-else>
                      <b-nav-item>
                        <router-link tag="div" to="/login">Login</router-link>
                      </b-nav-item>
                    </b-navbar-nav>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </div>`,
            data(){
              return{
                auth:false,
                test:store.state.count
              }
            }
})


const Live = { template: `<div>foo</div>` }
const GameCard = {
  template: `<div>
              <b-container fluid class="mt-3">
                <b-row>
                  <b-col>
                    <b-card border-variant="dark" title="Card title" sub-title="Card subtitle" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                      <b-card-text>
                        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
                        content.
                      </b-card-text>

                      <b-card-text>A second paragraph of text in the card.</b-card-text>

                      <a href="#" class="card-link">Card link</a>
                      <b-link href="#" class="card-link">Another link</b-link>
                      <input id="test" type="button" value="Test Game Server" onclick="show()"/>
                    </b-card>
                  </b-col>

                  <b-col>
                    <b-card border-variant="dark" title="Card title" sub-title="Card subtitle" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                      <b-card-text>
                        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
                        content.
                      </b-card-text>

                      <b-card-text>A second paragraph of text in the card.</b-card-text>

                      <a href="#" class="card-link">Card link</a>
                      <b-link href="#" class="card-link">Another link</b-link>
                      <input id="test" type="button" value="Test Game Server" onclick="show()"/>
                    </b-card>
                  </b-col>

                  <b-col>
                    <b-card border-variant="dark" title="Card title" sub-title="Card subtitle" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">
                      <b-card-text>
                        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
                        content.
                      </b-card-text>

                      <b-card-text>A second paragraph of text in the card.</b-card-text>

                      <a href="#" class="card-link">Card link</a>
                      <b-link href="#" class="card-link">Another link</b-link>
                      <input id="test" type="button" value="Test Game Server" onclick="show()"/>
                    </b-card>
                  </b-col>
                </b-row>
              </b-container>
            </div>`
}

const Login = {
  template: `<b-container fluid class="mt-3">
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
                          
                          <br></br>
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
                          <b-button type="submit" variant="primary">Login</b-button>

                          <hr/>
                          <b-card-footer>
                            <span>Login With:&nbsp;</span>
                            <b-button variant="outline-primary">Facebook</b-button>&nbsp;
                            <b-button variant="outline-danger">Google</b-button>
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
                          
                          <br></br>
                          <b-form-group label="Password:">
                            <b-form-input type="password" :state="SignUpPasswordvalidation" v-model="formSignUp.password" required placeholder="Enter Password"></b-form-input>
                          </b-form-group>
                          <b-form-invalid-feedback :state="SignUpPasswordvalidation">
                            At least three characters and digits. | Example: abc123
                          </b-form-invalid-feedback>
                          <b-form-valid-feedback :state="SignUpPasswordvalidation">
                            Looks Good.
                          </b-form-valid-feedback>
                          
                          <br></br>
                          <b-form-group label="Confirm Password:">
                            <b-form-input type="password" :state="Confirmvalidation" v-model="formSignUp.confirm" required placeholder="Enter Password"></b-form-input>
                          </b-form-group>
                          <b-form-invalid-feedback :state="Confirmvalidation">
                            Two field are not same.
                          </b-form-invalid-feedback>
                          <b-form-valid-feedback :state="Confirmvalidation">
                            Looks Good.
                          </b-form-valid-feedback>

                          <br></br>
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
            </b-container>`,
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
              Login(){
                if((this.LoginEmailvalidation && this.LoginPasswordvalidation) == true){
                  alert(JSON.stringify(this.formLogin))
                }
              },
              SignUp(){
                if((this.SignUpEmailvalidation && this.SignUpPasswordvalidation && this.Confirmvalidation && this.Uservalidation)){
                  alert(JSON.stringify(this.formSignUp))
                }
              }
            }
}