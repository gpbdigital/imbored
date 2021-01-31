<template>
  <div class="error">
      <div class="container middle">
        <p class="intro">This website does not work on Internet Explorer, please try Edge, Chrome, Firefeox or Safari</p>
      </div>   
  </div>
</template>

<script>

export default {
  name: 'Error',
  mounted(){
    document.getElementById('app').className = '';
    document.getElementById('app').className = 'error';
  }
}
</script>

<style scoped>

.error .container{
  width:100%;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
}

.error .middle{
  position:relative;
  width:100%;
  max-width:600px;
  margin: 0 auto;
  padding-top:40px;
  padding-bottom:40px;
}

.error .middle p{
  font-weight: 500;
  font-size: 20px;
  color:#fff;
  text-align:center;
}


</style>