<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <!--with the v-model directive we can easily have a two
            way data binding with our data, the syntax is the
            following:
            v-model="<<name of property>>"-->
            <!-- To understand how the v-model works we just need to see this
            example of its manual equivalent -->
            <!-- v-model has to have a proper named value so that v-model is
            able to pass a value to the component and it has to emit an event
            called input to allow the model to react to that -->
            <input
            type="text"
            id="email"
            class="form-control"
            v-bind:value="userData.email"
            v-on:input="userData.email = $event.target.value"
            >
            <!-- v-model="userData.email" -->
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <!--the lazy modifer allows us to update our property
            only when the user deselects our input-->
            <!-- the trim modifer deletes white space at the
            beggining and end-->
            <input
            type="password"
            id="password"
            class="form-control"
            v-model.lazy.trim="userData.password">
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
            type="number"
            id="age"
            class="form-control"
            v-model="userData.age">
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <!-- Interpolation between <textarea>{{ test }}</textarea>
          doesn't work, so we use the v-model instead-->
          <textarea
          id="message"
          rows="5"
          class="form-control"
          v-model="message">
        </textarea>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="form-group">
          <label for="sendmail">
            <!-- We can use v-model to our checkbox type of
            input to get the value of its value property -->
            <input
            type="checkbox"
            id="sendmail"
            value="Send Mail"
            v-model="sendMail"> Send Mail
          </label>
          <label for="sendInfomail">
            <input
            type="checkbox"
            id="sendInfomail"
            value="Send Infomail"
            v-model="sendMail"
            > Send Infomail
          </label>
        </div>

      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
        <!-- If we put the v-model directive  with  the same
        property to two or more radio type inputs Vue recognizes
        they are bound to the same model -->
        <label for="male">
          <input
          type="radio"
          id="male"
          value="Male"
          v-model="gender"> Male
        </label>
        <label for="female">
          <input
          type="radio"
          id="female"
          value="Female"
          v-model="gender"> Female
        </label>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
        <label for="priority">Priority</label>
        <select
        id="priority"
        class="form-control"
        v-model="selectedPriority">
        <option
        v-for="priority in priorities">
        {{ priority }}
      </option>
    </select>
  </div>
</div>
<div class="row">
  <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    <app-switch v-model="dataSwitch"></app-switch>
  </div>
</div>
<hr>
<div class="row">
  <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    <button
    class="btn btn-primary"
    v-on:click.prevent="submitted">Submit!

  </button>
</div>
</div>
</form>
<hr>
<div class="row" v-if="isSubmitted">
  <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4>Your Data</h4>
      </div>
      <div class="panel-body">
        <p>Mail: {{ userData.email }}</p>
        <p>Password: {{ userData.password }}</p>
        <p>Age: {{ userData.age }}</p>
        <!-- with the basic css style 'white-space: pre' we can
        show the text with multiple lines-->
        <p style="white-space: pre">Message: {{ message }} </p>
        <p><strong>Send Mail?</strong></p>
        <ul>
          <li v-for="item in sendMail">{{ item }}</li>
        </ul>
        <p>Gender: {{ gender }}</p>
        <p>Priority: {{ selectedPriority }}</p>
        <p>Switched: {{ dataSwitch }}</p>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import Switch from './Switch.vue'

export default {
  data () {
    return {
      // We can use an object to contain all our user data properties and
      // manage them easily
      userData: {
        email: '',
        password: '',
        age: 27
      },
      message: 'A new text',
      sendMail: [],
      gender: 'Male',
      selectedPriority: 'High',
      priorities: ['High','Medium','Low'],
      dataSwitch:  true,
      isSubmitted: false
    }
  },
  methods: {
    submitted(){
      this.isSubmitted = true;
    }
  },
  components: {
    appSwitch: Switch
  }
}
</script>

<style>

</style>
