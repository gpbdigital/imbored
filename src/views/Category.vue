<template>
  <div class="category">
    <div class="container top">
        <picture>
          <source media="(max-width: 599px)" srcset="../assets/img/category-hero--mobile.png">
          <source media="(min-width: 600px)" srcset="../assets/img/category-hero.png">
          <img src="../assets/img/category-hero.png" alt="What are tou looking for?">
        </picture>
    </div>

    <div class="container middle">
      <div class="items">
        <div class="item" v-for="(item, idx) in items" :key="idx"  v-on:click="toggle(item)">
          <div class="icon-wrapper" v-bind:class="{ active: item.isActive }">
            <img :src="getImgUrl(item.icon)" v-bind:alt="item.text" class="icon" v-bind:class="item.icon">
          </div>
          <span class="icon-label">{{ item.text }}</span>
        </div>
      </div>
    </div>
    <div class="container bottom">
      <div class="btn cta" v-if="selectedItems.length" v-on:click="setCategories()">
        <span>next</span>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Category',
  mounted(){
    document.getElementById('app').className = '';
    document.getElementById('app').className = 'category';
  },

  data: function () {
    return {
      selectedItems: [],
      items: [
        {
          text: 'fun',
          icon:"fun-icon",
          isActive: false
         },
         {
          text: 'educational',
          icon:"educational-icon",
          isActive: false
         },
         {
          text: 'challenging',
          icon:"challenging-icon",
          isActive: false
         }
      ]

    }
  },

  methods: {

    toggle: function(item) {
      item.isActive = !item.isActive

      if(item.isActive){
        this.selectedItems.push(item.text)
      }else{
        this.removeItem(this.selectedItems, item.text);
      }

      //console.log(this.selectedItems)

    },

    removeItem: function(array, elem) {
      var index = array.indexOf(elem);
      if (index > -1) {
          array.splice(index, 1);
      }
    },

    getImgUrl(icon) {
      var image = require('../assets/img/'+icon+'.svg')
      return image
    },

    setCategories() {
      //console.log(this.selectedItems);
      this.$store.commit('updateUserCategories', this.selectedItems);
      this.$router.push({ path: 'time' })
    },
  }

}
</script>


<style scoped>

.category .container{
  width:100%;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
}

.category .top{
  position:relative;
  width:100%;
  max-width:1080px;
  margin: 0 auto;
  padding-top:0px;
  padding-bottom:0px;
}

.category .top img{
  max-width:100%;
  position: relative;
  left: 4vw;
}

.category .middle{
  position:relative;
  width:100%;
  max-width:600px;
  margin: -60px auto 0 auto;
  padding-top:0px;
  padding-bottom:40px;
}

.category .middle .items{
  width:auto;
  display:flex;
  margin: 0 auto;
  justify-content: center;
  flex-direction:row;
}

.category .middle .icon-wrapper{
  width: 20vw;
  max-width:180px;
  height: 20vw;
  max-height:180px;
  border-radius: 50%;
  background: #9fe5e0;
  border: 3px solid rgba(255, 255, 255, 0);
  box-shadow: 5px 5px 10px #8ad8d2, -5px -5px 10px #b1eeea;
  margin:30px;
  cursor:pointer;
  transition: border 0.1s linear;
  transition: transform 0.15s linear;
  border: 3px solid transparent;
}

.category .middle .icon-wrapper::after{
  content: '';
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius:50%;
  top:0;
  left:0;
  box-shadow: inset 5px 5px 10px #7CCFC9, -5px -5px 10px #B4F6F1;
  opacity: 0;
  transition: opacity 0.15s linear;
}

.category .middle .icon-wrapper img.icon.fun-icon{
  position: relative;
  width: 60%;
  top: 50%;
  left: 50%;
  transform: translate(-87%, -55%) scale(1.0);
}

.category .middle .icon-wrapper img.icon.educational-icon{
  position: relative;
  width: 65%;
  top: 50%;
  left: 50%;
  transform: translate(-74%, -55%) scale(1.0);
}

.category .middle .icon-wrapper img.icon.challenging-icon{
  position: relative;
  width: 58%;
  top: 50%;
  left: 50%;
  transform: translate(-82%, -52%) scale(1.0);
}

.category .middle .icon-wrapper:hover{
 transform: scale(1.1);
}

.category .middle .icon-wrapper:hover::after {
  opacity: 1;
}

.category .middle .icon-wrapper.active{
  border: 3px solid #f7e8af;
  transform: scale(1.1);
}

.category .middle .icon-wrapper.active::after{
  opacity:0;
}

.category .middle .icon-label{
  position:relative;
  color:#fff;
  z-index:1;
  font-size:26px;
}

.category .bottom{
  position:relative;
  width:100%;
  max-width:696px;
  margin: 0 auto;
  padding-bottom:60px;
}


@media screen and (max-width: 600px) {

  .category .top{
    margin:0;
    right:0;
    padding-right: 0;
  }

  .category .top img{
    left: 0;
  }

  .category .middle{
    padding-top: 80px;
  }

  .category .middle .icon-wrapper{
    width: 25vw;
    height:25vw;
    margin: 12px;
  }

  .category .middle .icon-label{
    font-size:18px;
  }



}

</style>

