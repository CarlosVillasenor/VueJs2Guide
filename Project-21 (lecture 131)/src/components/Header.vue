<template lang="html">
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes added</h3>
      <div class="progress">
        <div
        class="progress-bar"
        role="progressbar"
        aria-valuenow="60"
        aria-valuemin="0"
        aria-valuemax="100"
        v-bind:style="{ width: ( quoteCount / maxQuotes ) * 100 + '%' }"
        >
      </div>
      {{ quoteCount }} / {{ maxQuotes }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    quoteCount: Number,
    maxQuotes: Number
  }

}
</script>

<style lang="css">
</style>
