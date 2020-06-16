<template>
  <div id="app">
    <mdb-container class="mt-5">
      <mdb-navbar class="navbar fixed-top" color="mdb-color">
        <mdb-navbar-brand href="https://www12.senado.leg.br/hpsenado">
          <img src="https://www.senado.gov.br/inc/essencial/img/senado.svg" height="30" alt />
        </mdb-navbar-brand>
      </mdb-navbar>
      <router-view></router-view>
      <!-- <router-view /> -->
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbNavbar, mdbNavbarBrand } from "mdbvue";

export default {
  components: {
    mdbContainer,
    mdbNavbar,
    mdbNavbarBrand
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  margin-top: 150px;
  text-align: center;
  color: #2c3e50;
}
</style>
