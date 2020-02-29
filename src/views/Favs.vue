<template>
  <v-list>
    <v-subheader v-if="!favs.length">Your favorites list is empty></v-subheader>
    <div v-else>
      <v-subheader>Your favorites</v-subheader>
      <v-list-item v-for="(dog, index) in favs" :key="index" @click="{}">
        <v-list-item-avatar>
          <img :src="dog.img">
        </v-list-item-avatar>
        <v-list-item-content>{{dog.name}}</v-list-item-content>
        <v-list-item-action>
          <v-icon @click="removeFromFavs(dog)">delete</v-icon>
        </v-list-item-action>
      </v-list-item>
    </div>
  </v-list>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    favs() {
      return this.$store.state.favs;
    }
  },
  methods: {
    ...mapActions(["removeFromFavs"])
  }
};
</script>