<template>
  <div class="time">

    <div class="container top">
        <picture>
          <source media="(max-width: 599px)" srcset="../assets/img/time-hero--mobile.png">
          <source media="(min-width: 600px)" srcset="../assets/img/time-hero.png">
          <img src="../assets/img/time-hero.png" alt="How much time do you have?">
        </picture>
    </div>

    <div class="container middle">
      <div class="items">
        <div class="item" v-for="(item, idx) in items" :key="idx" v-on:click="toggle(item)">
          <div class="icon-wrapper" v-bind:class="{ active: item.isActive }">
            <img :src="getImgUrl(item.icon)" v-bind:alt="item.text" class="icon" v-bind:class="item.icon">
          </div>
          <span class="icon-label">{{ item.text }}</span>
        </div>
      </div>
    </div>

    <div class="container bottom">
      <div class="btn cta" v-if="selectedItem" v-on:click="setTime()">
        <span>results</span>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Time',
  mounted(){
    document.getElementById('app').className = '';
    document.getElementById('app').className = 'time';
  },
  data: function () {
    return {
      selectedItem: null,
      items: [
        {
          text: '5 minutes',
          val: '5min',
          icon:"minute-icon",
          isActive: false
         },
         {
          text: '1 hour',
          val: '1hr',
          icon:"hour-icon",
          isActive: false
         },
         {
          text: 'all day',
          val: 'all',
          icon:"all-icon",
          isActive: false
         }
      ]

    }
  },

  methods: {
    toggle: function(item) {

      this.items.forEach(function(item){
        item.isActive = false;
      });

      if(this.selectedItem != item){
        item.isActive = true;
        this.selectedItem = item
      }else{
        item.isActive = false;
        this.selectedItem = ''
      }
      //console.log(this.selectedItem.text);
    },

    getImgUrl(icon) {
      var image = require('../assets/img/'+icon+'.svg')
      return image
    },

    setTime() {
      //console.log(this.selectedItem);
      this.$store.commit('updateUserTime', this.selectedItem.val);
      this.$router.push({ path: 'result' })
    },
  }

}
</script>


<style scoped>

.time .container{
  width:100%;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
}

.time .top{
  position:relative;
  width:100%;
  max-width:1080px;
  margin: 0 auto;
  padding-top:0px;
  padding-bottom:0px;
}

.time .top img{
  max-width:100%;
}

.time .middle{
  position:relative;
  width:100%;
  max-width:600px;
  margin: -60px auto 0 auto;
  padding-top:0px;
  padding-bottom:40px;
}

.time .middle .items{
  width:auto;
  display:flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction:row;
}

.time .middle .icon-wrapper{
  width: 20vw;
  max-width:180px;
  height: 20vw;
  max-height:180px;
  border-radius: 50%;
  background: #F8BC9A;
  border: 3px solid rgba(255, 255, 255, 0);
  box-shadow:  5px 5px 10px #e6aa84, -5px -5px 10px #FBCBB2;
  margin:30px;
  cursor:pointer;
  transition: border 0.1s linear;
  transition: transform 0.15s linear;
  border: 3px solid transparent;
}

.time .middle .icon-wrapper::after{
  content: '';
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius:50%;
  top:0;
  left:0;
  background: #F8BC9A;
  box-shadow: inset 5px 5px 10px #edb189, inset -5px -5px 10px #FBCBB2;
  opacity: 0;
  transition: opacity 0.15s linear;
}

.time .middle .icon-wrapper img.icon.minute-icon{
  position: relative;
  width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-82%, -47%) scale(1.0);
}

.time .middle .icon-wrapper img.icon.hour-icon{
  position: relative;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-64%, -47%) scale(1.0);
}

.time .middle .icon-wrapper img.icon.all-icon{
  position: relative;
  width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-82%, -47%) scale(1.0);
}

.time .middle .icon-wrapper:hover{
 transform: scale(1.1);
}

.time .middle .icon-wrapper:hover::after {
  opacity: 1;
}

.time .middle .icon-wrapper.active{
  border: 3px solid #658fe3;
  transform: scale(1.1);
}

.time .middle .icon-wrapper.active::after{
  opacity:0;
}

.time .middle .icon-label{
  position:relative;
  color:#fff;
  font-size:26px;
  z-index:1;
}

.time .bottom{
  position:relative;
  width:100%;
  max-width:696px;
  margin: 0 auto;
  padding-bottom:60px;
}


@media screen and (max-width: 600px) {
  .time .top{
    margin:0;
    right:0;
    padding-right: 0;
  }

  .time .middle{
    padding-top: 80px;
  }

  .time .middle .icon-wrapper{
    width: 25vw;
    height:25vw;
    margin: 12px;
  }

  .time .middle .icon-label{
    font-size:18px;
  }
}

</style>

