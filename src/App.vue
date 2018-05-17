<template>
    <v-app>
      <app-order></app-order>
    </v-app>
</template>

<script>
import GridSystem from './components/GridSystem';
import Offset from './components/Offset';
import Order from './components/Order';
export default {
  components: {
    appGridSystem: GridSystem,
    appOffset: Offset,
    appOrder: Order
  }
};
</script>

<style>
</style>
