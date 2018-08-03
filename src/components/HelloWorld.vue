<template>
  <div class="hello">
    <transition
      name="welcome"
      leave-active-class="animated bounceOutUp">
      <div v-if="welcome">
        <h1>{{ mobile.is }}</h1>
        <h1 v-if="title">{{ title }}</h1>
        <h2 v-if="subtitle">{{ subtitle }}</h2>
        <h2 v-if="subtitle1">{{ subtitle1 }}</h2>
        <h2 v-if="nameUser">{{ nameUser }}</h2>
      </div>
    </transition>
    <transition
      name="welcome-with-name"
      enter-active-class="animated bounceInDown">
      <h1 v-if="home">Hi {{ nameUser }}, welcome! 😄</h1>
    </transition>
    <transition
      name="description"
      enter-active-class="animated bounceInDown">
      <h2 v-if="description">These are all project that I worked</h2>
    </transition>
    <transition
      name="home"
      enter-active-class="animated bounceInUp">
      <div class="container" v-if="items">
        <div class="row">
          <!-- RingVoz -->
          <div class="col-6 item-portfolio">
            <div class="card">
              <img class="card-img-top mx-auto img-little" src="../assets/RingVoz.png" alt="RingVoz">
              <div class="card-body">
                <h5 class="card-title">RingVoz App Mobile</h5>
                <p class="card-text">App developed in Ionic 3 and Angular 5</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <img src="../assets/ionic.png" class="img-fluid skills" alt="Ionic">
                  <img src="../assets/cordova.png" class="img-fluid skills" alt="Cordova">
                  <img src="../assets/angular.png" class="img-fluid skills" alt="Angular">
                  <img src="../assets/typescript.png" class="img-fluid skills" alt="TypeScript">
                  <img src="../assets/nodejs.png" class="img-fluid skills" alt="NodeJS">
                  <img src="../assets/zend.png" class="img-fluid skills" alt="NodeJS">
                  <img src="../assets/firebase.png" class="img-fluid skills" alt="FireBase">
                </li>
              </ul>
              <div class="card-body">
                <!--<a target="_blank" href="#" class="card-link">More info</a> -->
                <p class="text-danger">This app will be available soon in iOS and Android</p>
              </div>
            </div>
          </div>
          <!-- Kuish App -->
          <div class="col-6 item-portfolio">
            <div class="card">
              <img class="card-img-top mx-auto img-little" src="../assets/kuish.png" alt="Kiush">
              <div class="card-body">
                <h5 class="card-title">Kuish App</h5>
                <p class="card-text">Adapt CSS in this app.</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <img src="../assets/ionic.png" class="img-fluid skills" alt="Ionic">
                  <img src="../assets/cordova.png" class="img-fluid skills" alt="Cordova">
                  <img src="../assets/css3.png" class="img-fluid skills" alt="CSS3">
                  <img src="../assets/nodejs.png" class="img-fluid skills" alt="NodeJS">
                </li>
              </ul>
              <div class="card-body">
                <h5>Web Link:</h5>
                <a target="_blank" href="http://kuishapp.com" class="card-link">http://kuishapp.com</a>
              </div>
            </div>
          </div>
          <!-- MyBus -->
          <div class="col-6 item-portfolio">
            <div class="card">
              <img class="card-img-top mx-auto img-little" src="../assets/mybus.png" alt="MyBus">
              <div class="card-body">
                <h5 class="card-title">MyBus <span class="text-info">(Prototype)</span></h5>
                <p class="card-text">Mobile application that sends the location to Firebase and obtains it from a PWA built in Angular.</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <img src="../assets/ionic.png" class="img-fluid skills" alt="Ionic">
                  <img src="../assets/cordova.png" class="img-fluid skills" alt="Cordova">
                  <img src="../assets/nodejs.png" class="img-fluid skills" alt="NodeJS">
                  <img src="../assets/angular.png" class="img-fluid skills" alt="Angular">
                  <img src="../assets/google_maps.png" class="img-fluid skills" alt="Google Maps">
                  <img src="../assets/firebase.png" class="img-fluid skills" alt="Firebase">
                </li>
                <li class="list-group-item">
                  <h5>Web Link: <span class="text-danger"></span></h5>
                  <a target="_blank" href="https://mybusapp.herokuapp.com">https://mybusapp.herokuapp.com</a>
                </li>
                <li class="list-group-item">
                  <h5>App Link: <span class="text-danger"></span></h5>
                  <a target="_blank" href="https://play.google.com/store/apps/details?id=co.starklab.mybus">https://play.google.com/store/apps/details?id=co.starklab.mybus</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- BookMe -->
          <div class="col-6 item-portfolio">
            <div class="card">
              <img class="card-img-top mx-auto img-little" src="../assets/bookme.png" alt="BookMe">
              <div class="card-body">
                <h5 class="card-title">BookMe</h5>
                <p class="card-text">Social Network.</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <img src="../assets/ionic.png" class="img-fluid skills" alt="Ionic">
                  <img src="../assets/cordova.png" class="img-fluid skills" alt="Cordova">
                  <img src="../assets/nodejs.png" class="img-fluid skills" alt="NodeJS">
                  <img src="../assets/vue.png" class="img-fluid skills" alt="VueJS">
                  <img src="../assets/graphql.png" class="img-fluid skills" alt="GraphQL">
                </li>
              </ul>
              <div class="card-body">
                <p class="text-danger">This app will be available soon</p>
              </div>
            </div>
          </div>
          <!-- Museo -->
          <div class="col-6 item-portfolio">
            <div class="card">
              <img class="card-img-top mx-auto img-little" src="../assets/MuseoDigital.png" alt="Museo">
              <div class="card-body">
                <h5 class="card-title">Web for 'Museo Paleontológico de Villa de Leyva'</h5>
                <p class="card-text">Web Site developed in Angular 4, Express.js and Node.js</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <img src="../assets/ionic.png" class="img-fluid skills" alt="Ionic">
                  <img src="../assets/cordova.png" class="img-fluid skills" alt="Cordova">
                  <img src="../assets/angular.png" class="img-fluid skills" alt="Angular">
                  <img src="../assets/typescript.png" class="img-fluid skills" alt="TypeScript">
                  <img src="../assets/nodejs.png" class="img-fluid skills" alt="NodeJS">
                  <img src="../assets/mongodb.png" class="img-fluid skills" alt="MongoDB">
                  <img src="../assets/google_maps.png" class="img-fluid skills" alt="Google Maps">
                </li>
                <li class="list-group-item">
                  <h5>Web Link:</h5>
                  <p class="text-danger">This PWA was remove by the customer</p>
                </li>
                <li class="list-group-item">
                  <h5>App Link: <span class="text-danger">(Deprecated)</span></h5>
                  <a target="_blank" href="https://play.google.com/store/apps/details?id=org.museodigital.paleo">https://play.google.com/store/apps/details?id=org.museodigital.paleo</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- IES -->
          <div class="col-6 item-portfolio">
            <div class="card">
              <img class="card-img-top mx-auto img-little" src="../assets/ies.png" alt="IES">
              <div class="card-body">
                <h5 class="card-title">IES UNISANGIL</h5>
                <p class="card-text">App developed in Android Native and Laravel</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <img src="../assets/android.png" class="img-fluid skills" alt="Android">
                  <img src="../assets/laravel.png" class="img-fluid skills" alt="Laravel">
                  <img src="../assets/qr.png" class="img-fluid skills" alt="QR Code">
                </li>
                <li class="list-group-item">
                  <h5>Web Link: <span class="text-danger">(Deprecated)</span></h5>
                  <a target="_blank" href="http://ies.grupohydraunisangil.com">http://ies.grupohydraunisangil.com</a>
                </li>
                <li class="list-group-item">
                  <h5>App Link: <span class="text-danger">(In progress to Update)</span></h5>
                  <a target="_blank" href="https://play.google.com/store/apps/details?id=com.unisangil.ies">https://play.google.com/store/apps/details?id=com.unisangil.ies</a>
                </li>
              </ul>
            </div>
          </div>
          <!-- Advandz -->
          <div class="col-6 item-portfolio">
            <div class="card">
              <img class="card-img-top mx-auto img-little" src="../assets/advandz.png" alt="Advandz">
              <div class="card-body">
                <h5 class="card-title">The Advandz Framework</h5>
                <p class="card-text">The High-Performance Framework in PHP.</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <img src="../assets/php.png" class="img-fluid skills" alt="PHP">
                  <img src="../assets/advandz.png" class="img-fluid skills" alt="Advandz">
                </li>
              </ul>
              <div class="card-body">
                <h5>Web Link:</h5>
                <a target="_blank" href="https://advandz.com">https://advandz.com</a>
              </div>
            </div>
          </div>
          <!-- FonPaz -->
          <div class="col-6 item-portfolio">
            <div class="card">
              <img class="card-img-top mx-auto" src="../assets/fonpaz.png" alt="FonPaz">
              <div class="card-body">
                <h5 class="card-title">FonPaz</h5>
                <p class="card-text">A template web developed for WordPress</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <img src="../assets/php.png" class="img-fluid skills" alt="PHP">
                  <img src="../assets/wordpress.png" class="img-fluid skills" alt="WordPress">
                  <img src="../assets/bootstrap.png" class="img-fluid skills" alt="Bootstrap">
                </li>
              </ul>
              <div class="card-body">
                <h5>Web Link:</h5>
                <a target="_blank" href="http://fonpaz.org">http://fonpaz.org</a>
              </div>
            </div>
          </div>
        </div>
        <h2>If you want to see more project visit my <a target="_blank" href="https://github.com/TxusBlack"><img src="../assets/github.png" class="skills" alt="GitHub"></a></h2>
        <p>Or write me: <a href="mailto:iam@diegomoreno.co">iam@diegomoreno.co</a></p>
        <span class="text-muted">This site was made with ❤️ and powered by<img src="https://cdn-images-1.medium.com/max/1600/1*wqYF-8Dmh7LhtLkKfERc3Q.png" class="skills" alt="Vue JS"></span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: '',
      subtitle: '',
      subtitle1: '',
      nameUser: '',
      enter: false,
      welcome: true,
      home: false,
      description: false,
      items: false,
      mobile: {
        is: false
      }
    }
  },
  methods: {
    showText(message, index, interval, element) {
      if (element === 0) {
        if (index < message.length) {
          if (!this.title) {
            this.title = message[index++];
          } else {
            this.title += message[index++];
          }
          setTimeout( () => {
            this.showText(message, index, interval, element);
          }, interval);
        }
      } else if (element === 1) {
        if (index < message.length) {
          if (!this.subtitle) {
            this.subtitle = message[index++];
          } else {
            this.subtitle += message[index++];
          }
          setTimeout( () => {
            this.showText(message, index, interval, element);
          }, interval);
        }
      } else if (element === 2) {
        if (index < message.length) {
          if (!this.subtitle1) {
            this.subtitle1 = message[index++];
          } else {
            this.subtitle1 += message[index++];
          }
          setTimeout( () => {
            this.showText(message, index, interval, element);
          }, interval);
        }
      }
    },
    inputName() {
      window.addEventListener("keypress", function(e) {
        if (!this.enter) {
          if (e.which === 13) {
            console.log('Enter');
            this.enter = true;
            this.welcome = false;
            setTimeout(() => {
              this.home = true;
              setTimeout(() => {
                this.description = true;
                setTimeout(() => {
                  this.items = true;
                },1000);
              }, 500);
            },1000);
          } else if (e.which === 8) {
            console.log('Delete');
            if (this.nameUser) {
              this.nameUser = this.nameUser.slice(0, -1);
            }
          } else {
            this.nameUser += String.fromCharCode(e.keyCode);
            console.log(this.nameUser);
          }
        }
      }.bind(this));
    }
  },
  mounted() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      // is mobile..

    }
    this.showText("Hi everyone!", -1, 50, 0);
    setTimeout(() => {
      this.showText("I'm Diego, I'm a developer and I hope that you like my portfolio!", -1, 50, 1);
      setTimeout(() => {
        this.showText("Please type your name and press enter...", 0, 50, 2);
        setTimeout(() => {
          this.inputName();
        }, 2000);
      }, 4250);
    }, 1850);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 2em;
  margin: 21px 0 21px 0;
}
h2 {
  font-size: 24px;
  margin: 0 0 10px 0;
}
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.container {
  margin-top: 30px;
}
.item-portfolio {
  height: auto;
  margin-bottom: 30px;
}
.skills {
  height: 50px;
  width: auto;
}
img {
  padding: 10px;
}
@media (min-width: 992px) {
  img {
    height: auto;
    width: 400px;
  }
  .img-little {
    width: 300px;
  }
}
</style>
