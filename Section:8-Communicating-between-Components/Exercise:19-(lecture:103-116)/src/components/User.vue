<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button v-on:click="_changeName"> change Name </button>
    <p>Name is {{ name }}</p>
    <p>This age should not change: {{age}}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <!-- with 'v:bind' we can make mutations to properties inside our
        components, the syntax is v-bind:<<name of property of the component>>
        ="<<name of property>>" -->
        <!-- to notify a change to the parent of our element we use the
        following syntax v-on:<<name of the event>>="<<function to notify
        changes (the $event has the property that was updated)>>"-->
        <app-user-detail v-bind:myName="name" v-bind:userAge="age"
        v-on:nameWasReset="name=$event">
      </app-user-detail>
    </div>
    <div class="col-xs-12 col-sm-6">
      <app-user-edit v-bind:userAge="age" ></app-user-edit>
    </div>
  </div>
</div>
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
  data: function () {
    return {
      name: 'Carlos',
      age: 27
    };
  },
  methods: {
    _changeName() {
      this.name = 'Mario'
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
}
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
