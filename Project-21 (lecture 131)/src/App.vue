<template>
  <div class="container">
    <app-header
    v-bind:quoteCount="quotes.length"
    v-bind:maxQuotes="maxQuotes"
    >
    </app-header>
    <!--This component will allow us to create new quotes-->
    <app-new-quote v-on:quoteAdded="newQuote($event)"></app-new-quote>
    <app-quote-grid
    v-bind:quotes="quotes"
    v-on:quoteDeleted="deleteQuote">
  </app-quote-grid>
  <div class="col-sm-12 text-center">
    <div class="alert alert-info">
      Info: Click on a Quote to delete it!
    </div>
  </div>
</div>
</template>

<script>

import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';
import Header from './components/Header.vue';

export default {
  data: function () {
    return {
      quotes: [
        'Just a simple Quote to see something'
      ],
      maxQuotes:10
    }
  },
  methods: {
    newQuote(quote){
      if (this.quotes.length > 10){
        return alert('Please delete Quotes firts!');
      }
      this.quotes.push(quote)
    },
    deleteQuote(index){
      this.quotes.splice( index , 1);
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  }

}
</script>

<style>
.alert {
  margin-top: 1em;
}
</style>
