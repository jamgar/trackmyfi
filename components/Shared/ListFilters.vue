<template>
  <div id="list-filters">
    <input
      id="text-filter"
      v-model="textFilter"
      class="f4 pa2 input-reset ba mb3 w-100 b--moon-gray"
      type="text"
      placeholder="Search"
    />
  </div>
</template>

<script>
export default {
  computed: {
    textFilter: {
      get() {
        return this.$store.state.listFilters.text
      },
      set(textFilter) {
        this.$store.commit('listFilters/updateText', textFilter)
      }
    }
  },
  mounted() {
    this.$store.commit('listFilters/resetDefaults')
  }
}
</script>

<style lang="scss" scoped></style>
