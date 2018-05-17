<template>
    <v-app>
      <app-text-alignment></app-text-alignment>
    </v-app>
</template>

<script>
import GridSystem from './components/GridSystem';
import Offset from './components/Offset';
import Order from './components/Order';
import DirectionAlign from './components/DirectionAlign';
import RowColumnBreakPoint from './components/RowColumnBreakPoint';
import PowerVuetify from './components/PowerVuetify';
import TextAlignment from './components/TextAlignment';
export default {
  components: {
    appGridSystem: GridSystem,
    appOffset: Offset,
    appOrder: Order,
    appDirectionAlign: DirectionAlign,
    appRowColumnBreakPoint: RowColumnBreakPoint,
    appPowerVuetify: PowerVuetify,
    appTextAlignment: TextAlignment
  }
};
</script>

<style>
</style>
