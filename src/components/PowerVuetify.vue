<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>

      <v-flex d-flex xs12 order-xs5>
        <v-layout column>

          <v-flex d-flex>
            <v-card color="green" dark tile flat>
              <v-card-text>{{ lorem }}</v-card-text>
            </v-card>
          </v-flex>

          <v-flex d-flex>
            <v-card color="brown" dark tile flat>
              <v-card-text>{{ lorem }}</v-card-text>
            </v-card>
          </v-flex>

        </v-layout>
      </v-flex>


      <v-flex d-flex xs12 sm7>
        <v-layout row wrap>

          <v-flex d-flex>
            <v-card color="indigo" dark tile flat>
              <v-card-text>{{ lorem.slice(0, 70) }}</v-card-text>
            </v-card>
          </v-flex>

          <v-flex d-flex>
            <v-layout row>
              <v-flex
                v-for="n in 2"
                :key="n"
                d-flex
              >
                <v-card
                  color="amber"
                  tile
                  flat
                >
                  <v-card-text>{{ lorem.slice(0, 40) }}</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>

        </v-layout>
      </v-flex>


      <v-flex d-flex xs12 sm2 child-flex>
        <v-card color="orange" tile flat>
          <v-card-text>{{ lorem.slice(0, 90) }}</v-card-text>
        </v-card>
      </v-flex>


      <v-flex d-flex xs12 sm3>
        <v-card color="red" dark tile flat>
          <v-card-text>{{ lorem.slice(0, 100) }}</v-card-text>
        </v-card>
      </v-flex>


    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`
    };
  }
};
</script>

<style>
</style>
