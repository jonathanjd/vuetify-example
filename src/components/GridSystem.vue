<template>
  <v-container grid-list-xs text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="secundary">
          <v-card-text>
            Grid System
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text>
            12
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card dark color="secundary">
          <v-card-text>
            6
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card dark color="secundary">
          <v-card-text>
            6
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card dark color="primary">
          <v-card-text>
            4
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card dark color="primary">
          <v-card-text>
            4
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card dark color="primary">
          <v-card-text>
            4
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 4" :key="`3${i}`" xs3>
        <v-card dark color="secundary">
          <v-card-text>
            3
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 6" :key="`2${i}`" xs2>
        <v-card dark color="primary">
          <v-card-text>
            2
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex v-for="i in 12" :key="`1${i}`" xs1>
        <v-card dark color="secundary">
          <v-card-text>
            1
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
