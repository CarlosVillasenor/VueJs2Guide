<template>
  <div>
    <!-- The slot Vue reserved word, as an element allows us to recive
    entire chunks of html from outside our elements and use them inside
    our element -->
    <!--  with the name property we can have many slots rendered in
    diferrent secctions of our components -->
    <slot name="title"></slot>
    <!-- we can create default content to our slot element by simply adding
    it inside of the slot element-->
    <slot name="subtitle">
      The default subtitle
    </slot>
  </div>
</template>

<script>

</script>

<style scoped>
div {
  border: 1px solid blue;
  background-color: lightblue;
  padding: 30px;
  margin: 20px auto;
  text-align: center
}
</style>
