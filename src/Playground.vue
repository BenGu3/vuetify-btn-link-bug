<script lang="ts" setup>
import { ref } from 'vue'

enum Option {
  One = 'one',
  Two = 'two',
  Three = 'three',
  Four = 'four',
}

const activeTab = ref<Option>()
</script>

<template>
  <div class="d-flex flex-row">
    <v-tabs v-model="activeTab" direction="vertical" color="primary">
      <v-tab :value="Option.One" to="/one">
        Anchor to /one route
      </v-tab>
      <v-tab :value="Option.Two" to="/two">
        Anchor to /two route
      </v-tab>
      <v-tab :value="Option.Three" target="_blank" href="https://google.com" append-icon="mdi-launch">
        Anchor to Google
      </v-tab>
      <v-tab :value="Option.Four">
        Button, so can't open in a new tab :(
      </v-tab>
    </v-tabs>

    <v-card-text v-if="activeTab === Option.One">Card One</v-card-text>
    <v-card-text v-if="activeTab === Option.Two">Card Two</v-card-text>
    <v-card-text v-if="activeTab === Option.Three">You should never see this</v-card-text>
    <v-card-text v-if="activeTab === Option.Four">Card Four</v-card-text>
  </div>
</template>
