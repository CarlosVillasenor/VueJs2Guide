<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button
        v-on:click="selectedComponent = 'appBlue', componentName = 'Blue'"
        class="btn btn-primary">
        Load Blue Template
      </button>
      <button
      v-on:click="selectedComponent = 'appGreen', componentName = 'Green'"
      class="btn btn-success">
      Load Green Template
    </button>
    <button
    v-on:click="selectedComponent = 'appRed', componentName = 'Red'"
    class="btn btn-danger">
    Load Red Template
  </button>
  <hr>
  <!-- 'component' is a Vue reserved word, that allows us to create an
  element to dynamically add components and change between them, by
  default it destroys them when they are not show, unless we keep our
  component element inside the keep-alive Vue element, in that case the
  componponents will only be deactivated-->
  <keep-alive>
    <component :is="selectedComponent">
      <!-- The slot Vue reserved word, as an element allows us to recive
      entire chunks of html from outside our elements and use them inside
      our element -->
      <!--  with the name property we can have many slots rendered in
      diferrent secctions of our components -->
      <h2 slot="title">
        {{ componentName }}
        {{ quoteTitle }}
      </h2>
      <p slot="subtitle">Overwritten Subtitle</p>
    </component>
  </keep-alive>
  <!-- <app-blue>
  <h2 slot="title">Blue {{ quoteTitle }}</h2>
</app-blue>
<app-green>
<h2 slot="title">Green {{ quoteTitle }}</h2>
</app-green>
<app-red>
<h2 slot="title">Red {{ quoteTitle }}</h2>
</app-red> -->
</div>
</div>
</div>
</template>

<script>
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
import Red from './components/Red.vue';

export default {
  data: function () {
    return {
      quoteTitle:"Vue Component",
      selectedComponent:'appBlue',
      componentName:'Blue'
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
}
</script>

<style>
</style>
