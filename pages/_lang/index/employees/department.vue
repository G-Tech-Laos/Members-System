<template>
  <v-layout>{{ title }}</v-layout>
</template>

<script>
export default {
  data() {
    return {
      title: 'Department'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style></style>
