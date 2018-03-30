<template lang="html">
  <div>
    <!-- The slot Vue reserved word, as an element allows us to recive
    entire chunks of html from outside our elements and use them inside
    our element -->
    <!--  with the name property we can have many slots rendered in
    diferrent secctions of our components -->
    <div class="title">
      <slot name="title"></slot>
      <span style="color:#ccc;">
        <!-- we can create default content to our slot element by simply adding
        it inside of the slot element-->
        <slot name="subtitle"> The subtitle </slot>
      </span>
    </div>
    <hr>
    <div class="text">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="css">
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px lightgray;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
h2 {
  color: darkred;
}
</style>
