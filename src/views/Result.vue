  <template>
  <div class="result">
    <div class="container">
      <img class="nug" src="../assets/img/result-nug.png" />
      <div class="left">

        <div class="text" v-bind:class="{ fade: fade }">
          <h2 class="result-title">{{ displayTitle }}</h2>
          <p class="result-description">{{ displayDescription }}</p>
        </div>

        <div class="buttons">
          <div class="btn visit-site" v-on:click="visitSite(displayLink)">
              <span>visit site</span>
          </div>
          <div class="btn next-suggestion" v-on:click="fadeOutResult()">
            <span>next suggestion</span>
          </div>
          <div class="start-again" v-on:click="startAgain()">
            <span>start again</span>
            <img src="../assets/img/start-again-icon.svg" />
          </div>
        </div>
      </div>
      <div class="right">
        <picture>
          <source media="(max-width: 599px)" srcset="../assets/img/result-hero--mobile.png">
          <source media="(min-width: 600px)" srcset="../assets/img/result-hero.png">
          <img src="../assets/img/result-hero.png" alt="">
        </picture>

      </div>
    </div>
    
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'Result',
  mounted(){
    document.getElementById('app').className = '';
    document.getElementById('app').className = 'result';
  },

  data() {
    return {
      userCategory:null,
      userTime:null,
      userRecommendations:null,
      shuffledRecommendations:null,
      displayTitle:"",
      displayDescription:"",
      displayLink:"",
      currentSelect:0,
      fade:false
    }
  },

  created() {
    this.options = this.$store.state.options;
    this.user = this.$store.state.user;

    this.userCategory = this.user.categories;
    this.userTime = this.user.time;

    if(this.user.categories && this.user.time){
      this.init()
    }
    else{
      this.$router.push({ path: '/' })
    }

  },

  methods: {

    init() {
      this.timeFilter();
    },

    timeFilter() {

        let timeResult = _.filter(this.options, option => option.time.includes(this.user.time));
        this.categoryFilter(timeResult)
    },

    categoryFilter(timeResult) {

        let categoryResult = _.filter(timeResult, _.flow(_.property('categories'), _.partial(_.intersection, this.user.categories),_.size));
        this.userRecommendations = categoryResult;
        this.shuffleResults();
    },

    shuffleResults(){
      this.shuffledRecommendations =_.shuffle(this.userRecommendations);

      this.displayTitle = this.shuffledRecommendations[this.currentSelect].title;
      this.displayDescription = this.shuffledRecommendations[this.currentSelect].description;
      this.displayLink = this.shuffledRecommendations[this.currentSelect].link;
    },

    fadeOutResult(){
      this.fade = true;
      var self = this;
      setTimeout(function(){
        self.nextResult();
      }, 150);
    },

    nextResult(){

      if(this.currentSelect == (this.shuffledRecommendations.length-1)){
        this.currentSelect = 0;
      }
      else{
        this.currentSelect++;
      }

      this.displayTitle = this.shuffledRecommendations[this.currentSelect].title;
      this.displayDescription = this.shuffledRecommendations[this.currentSelect].description;
      this.displayLink = this.shuffledRecommendations[this.currentSelect].link;

      var self = this;
      setTimeout(function(){
        self.fade = false;
      }, 150);
    },

    visitSite(url){
      window.open(url, '_blank');
    },

    startAgain(){
      this.$router.push({ path: '/category' })
    }
    
  }


};
</script>

<style scoped>

img.nug{
  display:none;
}

.result .container{
  width:100%;
  max-width:1080px;
  margin:0 auto;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  display:flex;
  flex-direction: row;
  justify-content: center;
}

.result .container .left{
  width: 630px;
  max-width:630px;
  padding-top: 100px;
}

.result .container .left .text{
  min-height:255px;
  opacity:1;
  transition: opacity 0.15s linear
}

.result .container .left .text.fade{
  opacity:0;
}

.result .container .left h2.result-title{
  font-family: paralucent, sans-serif;
  font-weight: 500;
  font-style: normal;
  color:#fff;
  font-size:36px;
  text-align:left;
  line-height: 1;
}

.result .container .left p.result-description{
  color:#fff;
  font-size:20px;
  font-weight:300;
  margin: 15px 0;
  max-width: 350px;
  text-align:left;
}

.result .container .left .visit-site{
  margin:40px 0;
}

.result .container .left .next-suggestion{
  margin:40px 0;
}


.result .container .left .start-again{
  display: flex;
  position: relative;
  width: 170px;
  height: 69px;
  margin: 100px 0 0 0;
  cursor: pointer;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  font-size: 23px;
}

.result .container .left .start-again span{
  text-align:left;
  text-decoration: underline;
  color:#000;
}

.result .container .right{
  position: relative;
  width: 450px;
  max-width: 450px;
}

.result .container .right img{
  width:100%;
}

@media screen and (max-width: 600px) {

  img.nug{
    display:block;
    position: absolute;
    width: 100px;
    top: 0;
    right: 3%;
  }

  .result .container{
    flex-direction: column;
    padding-bottom: 40px;
    padding-left: 0;
    padding-right: 0;
  }

  .result .container .left{
    margin: 0 auto;
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
  }

  .result .container .left h2.result-title{
    font-size: 6vw;
  }

  .result .container .left p.result-description{
    font-size: 18px;
    max-width: 80%;
  }

  .result .container .left .next-suggestion, .result .container .left .visit-site, .result .container .left .start-again{
    margin: 40px auto;
  }

  .result .container .right{
    width: 100%;
    max-width: 100%;
    padding: 0 0 40px 0;
  }

}

</style>




