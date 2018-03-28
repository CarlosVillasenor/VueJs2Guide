<template lang="html">
  <div class="row">
    <!-- The native modifer tells Vue js 'react to a click on that componet if
    it happends on the native element of its component', basically it will
    threats clicks on the template as clicks on the componet  -->
    <!-- By adding the index in our v-for Vue property whe can access the index
    of the element -->
    <app-quote
    v-for="( quote , index ) in quotes"
    v-on:click.native="deleteQuote(index)">
    {{ quote }}
  </app-quote>
</div>
</template>

<script>
import Quote from './Quote.vue';

export default {
  props:['quotes'],
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit( 'quoteDeleted' , index );
    }
  }
}
</script>

<style lang="css">

</style>
