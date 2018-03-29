<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button v-on:click="selectedComponent = 'appQuote'">Quote</button>
        <button v-on:click="selectedComponent = 'appAuthor'">Author</button>
        <button v-on:click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>
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
            <h2 slot="title">{{ quoteTitle }}</h2>
            <p slot="content">My wonderful quote!</p>
          </component>
        </keep-alive>
        <!--<app-quote>
        <h2 slot="title">{{ quoteTitle }}</h2>
        <p slot="content">My wonderful quote!</p>
      </app-quote>-->
    </div>
  </div>
</div>
</template>

<script>
import Quote from './components/Quote.vue';
import Author from './components/Author.vue';
import New from './components/New.vue';

export default {
  data: function() {
    return {
      quoteTitle: 'The Quote',
      selectedComponent: 'appQuote'
    }
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
}
</script>

<style>
</style>
