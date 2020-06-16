<template>
  <mdb-container class="pt-0">
    <mdb-row>
      <h2 class="mb-5">Senadores {{codigoParlamentar}}</h2>
    </mdb-row>
    <!-- <hr class="mb-5" /> -->

    <section class="demo-section">
      <!-- <h4>Search example</h4> -->
      <section></section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow } from "mdbvue";

export default {
  name: "DetailPage",
  components: {
    mdbContainer,
    mdbRow
  },
  data() {
    return {
      codigoParlamentar: ""
    };
  },
  created() {
    this.codigoParlamentar = this.$route.params.id;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
