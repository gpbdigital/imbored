<template>
  <div id="app">

        <div class="bg-gradient bg-gradient1" v-bind:style="checkHeight"></div>
        <div class="bg-gradient bg-gradient2" v-bind:style="checkHeight"></div>
        <div class="bg-gradient bg-gradient3" v-bind:style="checkHeight"></div>
        <div class="bg-gradient bg-gradient4" v-bind:style="checkHeight"></div>
        <h1 class="title" v-on:click="goHome()">imBored.ie</h1>
        <div class="social">
          <div class="sharetxt">share</div>

          <social-sharing
                title="Bored? Great! You're saving lives!"
                url="https://imbored.ie/s/"  
                inline-template>
                <div>
                  <network network="facebook">
                    <div class="socialIcon facebook">
                      <img alt="facebook" src="./assets/img/facebook-icon.svg" />
                    </div>
                  </network>
                </div>
              </social-sharing>
              
              <social-sharing
                title="Bored? Great! You're saving lives!"
                url="https://imbored.ie/s/"  
                inline-template>
                <div>
                  <network network="twitter">
                    <div class="socialIcon twitter">
                      <img alt="twitter" src="./assets/img/twitter-icon.svg" />
                    </div>
                  </network>
                </div>
              </social-sharing>

              <!--<social-sharing
                title="imBored.ie"
                url="https://imbored.ie/"
                inline-template>
                <div>
                  <network network="linkedin">
                    <div class="socialIcon linkedin">
                      <img alt="linkedin" src="./assets/img/linkedin-icon.svg" />
                    </div>
                  </network>
                </div>
              </social-sharing>-->

              <social-sharing
                title="Bored? Great! You're saving lives!"
                url="https://imbored.ie/"  
                inline-template>
                <div>
                  <network network="whatsapp">
                    <div class="socialIcon whatsapp">
                      <img alt="whatsapp" src="./assets/img/whatsapp-icon.svg" />
                    </div>
                  </network>
                </div>
              </social-sharing>

          <!--<div class="socialIcon email">
            <img alt="email" src="./assets/img/email-icon.svg" />
          </div>-->
          <div class="copytxt" v-on:click="clipboard('http://imbored.ie')">copy</div>
          <div class="socialIcon copy" v-on:click="clipboard('http://imbored.ie')">
            <img alt="copy link" src="./assets/img/copy-icon.svg" />
          </div>
        </div>
        <main class="main">
          
          <router-view/>

          <footer class="footer">
            imBored.ie was created by a small team at <a href="https://www.instagram.com/publicisdublin/" target="_BLANK">@publicisdublin</a> to help you #stayathome.<br>
            <!--<a href="mailto:someone@yoursite.com" class="mailto">Make a suggestion</a>  -->
          </footer>
      
        </main>

  </div>
</template>

<script>

export default {

  data() {
    return {
      innerHeight:0
    }
  },
  mounted(){
    this.innerHeight = window.innerHeight;
    //console.log(this.innerHeight);
    if(this.$browserDetect.isIE){
      this.$router.push({ path: 'error' })
    }
  },
  computed: {
    checkHeight () {
      return "min-height:"+window.innerHeight+"px"
    }
  },
  methods: {
    clipboard: function(str) {
       var el = document.createElement('textarea');
       el.value = str;
       el.setAttribute('readonly', '');
       el.style = {position: 'absolute', left: '-9999px'};
       document.body.appendChild(el);
       el.select();
       document.execCommand('copy');
       document.body.removeChild(el);

       alert("imbored.ie is copied to your clipboard :-)")
    },
    goHome: function() {
      this.$router.push({ path: '/' })
    }
    
  }
}
</script>


