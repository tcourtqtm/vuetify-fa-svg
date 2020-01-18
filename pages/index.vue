<template>
  <v-container>
    <div>
      v-icon mdi-truck: <v-icon>mdi-truck</v-icon>
    </div>

    <div>
      font-awesome-icon truck: <font-awesome-icon icon="truck" />
    </div>

    <div>
      v-icon $truck: <v-icon small>$truck</v-icon>
      <span style="color: red"><-- This causes a console error in dev mode</span>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'home-page'
}
</script>
