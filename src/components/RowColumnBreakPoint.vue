<template>
  <v-container grid-list-xs>
    <v-layout v-bind="binding">
      <v-flex>
        <v-card dark color="primary">
          <v-card-text>
            #1
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card dark color="secundary">
          <v-card-text>
            #2
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card dark color="accent">
          <v-card-text>
            #3
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    binding() {
      const binding = {};

      if (this.$vuetify.breakpoint.mdAndUp) binding.column = true;

      return binding;
    }
  }
};
</script>

<style>
</style>
