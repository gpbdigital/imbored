<template>
  <div class="home">
      <div class="container top">
        <picture>
          <source media="(max-width: 599px)" srcset="../assets/img/home-hero--mobile.png">
          <source media="(min-width: 600px)" srcset="../assets/img/home-hero.png">
          <img src="../assets/img/home-hero.png" alt="Bored? Great! You're saving lives!">
        </picture>
      </div>
      <div class="container middle">
        <p class="intro">This site will help you find something fun, educational, challenging or just plain silly.</p>
      </div>
      <div class="container bottom">
        <router-link class="cta" to="/category">
          <div class="btn cta">
            <span>entertain me</span>
          </div>
        </router-link>
      </div>
      
  </div>
</template>

<script>

export default {
  name: 'Home',
  mounted(){
    document.getElementById('app').className = '';
    document.getElementById('app').className = 'home';
  }
}
</script>

<style scoped>

.home .container{
  width:100%;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
}

.home .top{
  position:relative;
  width:100%;
  max-width:840px;
  margin: 0 auto;
  padding-top:40px;
}

.home .top img{
  max-width:100%;
}

.home .middle{
  position:relative;
  width:100%;
  max-width:600px;
  margin: 0 auto;
  padding-top:40px;
  padding-bottom:40px;
}

.home .middle p{
  font-weight: 500;
  font-size: 20px;
  color:#fff;
  text-align:center;
}

.home .bottom{
  position:relative;
  width:100%;
  max-width:696px;
  margin: 0 auto;
  padding-bottom:60px;
}


@media screen and (max-width: 600px) {

  .home .container{
    width:100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  .home .top{
    padding-top:0;
    padding-left: 50px;
    padding-right: 50px;
  }
}

</style>