<template>
  <div class="container">
    <!--This component will allow us to create new quotes-->
    <app-new-quote v-on:quoteAdded="newQuote($event)"></app-new-quote>
    <app-quote-grid v-bind:quotes="quotes"></app-quote-grid>
    <div class="col-sm-12 text-center">
        <div class="alert alert-info">
                Info: Click on a Quote to delete it! dsfd
        </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';


export default {
  data: function () {
    return {
      quotes: [
        'Just a simple Quote to see something','and another'
      ],
      maxQuotes:10
    }
  },
  methods: {
    newQuote(quote){
      this.quotes.push(quote)
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote
  }

}
</script>

<style>
</style>
