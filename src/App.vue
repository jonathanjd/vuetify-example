<template>
    <v-app>
      <app-direction-align></app-direction-align>
    </v-app>
</template>

<script>
import GridSystem from './components/GridSystem';
import Offset from './components/Offset';
import Order from './components/Order';
import DirectionAlign from './components/DirectionAlign';
export default {
  components: {
    appGridSystem: GridSystem,
    appOffset: Offset,
    appOrder: Order,
    appDirectionAlign: DirectionAlign
  }
};
</script>

<style>
</style>
