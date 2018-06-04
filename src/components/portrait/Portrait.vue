<template>
  <div class="portrait"></div>
</template>
<script>

</script>
<style scoped>
.portrait {
  height: 100vh;
  color: white;
  margin: 0;
  background-image: url('./../../assets/images/topcrop.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-color: white;
}
@media (max-width: 1255px) {
.portrait {
  background-image: url('./../../assets/images/bigcropleft.png');
  }
}
@media (max-width: 750px) {
  .portrait {
    background-image: url('./../../assets/images/leftsmallcrop.png');
  }
}
@media (max-width: 600px) {
  .portrait {
    background-image: url('./../../assets/images/leftsmallcrop2.png');
  }
}
</style>
