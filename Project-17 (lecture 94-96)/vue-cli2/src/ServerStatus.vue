<!--creating a  Vue component for production -->
<template>
  <!--we can only have one root element in our component-->
  <div>
    <p> Server status {{ status }}</p>
    <br>
    <button @click="_changeStatus"> Change Status </button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: 'Critical'
    }
  },
  methods: {
    // methods are written es6 way
    _changeStatus(){
      this.status = "Normal"
    }
  }
}
</script>
