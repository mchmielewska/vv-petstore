<template>
  <div class="form-wrapper">
    <v-form>
      <v-text-field label="Name" v-model="name"></v-text-field>
      <v-text-field label="Email" v-model="email"></v-text-field>
      <v-text-field label="Phone" v-model="phone"></v-text-field>
      <v-btn @click="submit">Submit</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: ""
    };
  },
  methods: {
    submit() {
      console.log(
        "Name:",
        this.name,
        "Email:",
        this.email,
        "Phone:",
        this.phone
      );
    }
  }
};
</script>

<style scoped>
.form-wrapper {
  padding: 40px;
  text-align: center;
}
</style>