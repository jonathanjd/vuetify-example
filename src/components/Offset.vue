<template>
  <v-container grid-list-xs text-xs-center>
    <v-layout row wrap>
      <v-flex v-for="i in 12" :key="`1${i}`" xs1>
        <v-card dark color="purple">
          <v-card-text>
            1
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs6 offset-xs3>
        <v-card dark color="secundary">
          <v-card-text>
            6
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs8 offset-xs1>
        <v-card dark color="green">
          <v-card-text>
            8
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs4 offset-xs8>
        <v-card dark color="red">
          <v-card-text>
            4
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>
