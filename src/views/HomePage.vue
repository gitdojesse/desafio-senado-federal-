<template>
  <mdb-container class="pt-0">
    <mdb-row>
      <h2 class="mb-5">Senadores em Exercício</h2>
    </mdb-row>
    <!-- <hr class="mb-5" /> -->

    <section class="demo-section">
      <!-- <h4>Search example</h4> -->
      <section>
        <mdb-input class="mt-2 mb-5" v-model="search" label="Filtrar por Estado ou Partido" />
        <mdb-datatable-2
          v-model="datatable"
          :searching="search"
          fullPagination
          fixedHeader
          maxHeight="400px"
          scrollY
          bordered
          hover
          searchPlaceholder="Este é placeholder da busca"
          entriesTitle="Registros por página"
          showingText=" de "
          noFoundMessage="Nenhum registro correspondente encontrado"
        />
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbDatatable2, mdbInput, mdbContainer, mdbRow } from "mdbvue";
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  components: {
    mdbDatatable2,
    mdbContainer,
    mdbInput,
    mdbRow
  },
  data() {
    return {
      search: "",
      search3: "",
      selected: "",
      multiselected: "",
      datatable: {
        columns: [
          {
            label: "Nome",
            field: "nomeeid",
            sort: true,
            format: value => {              
                return `<a href="/parlamentar/${value.id}" class="nome">${value.nome}</a>`;
            }
          },
          {
            label: "Partido",
            field: "partido",
            sort: true
          },
          {
            label: "UF",
            field: "uf",
            sort: true
          },
          {
            label: "Telefone",
            field: "telefone",
            sort: true
          },
          {
            label: "Correio Eletrônico",
            field: "email",
            sort: true
          }
        ],
        rows: []
      }
    };
  },
  computed: {
    ...mapGetters(["parlamentares"])
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch("fetchData");
      // console.log(this.parlamentares)

      // const dados = [];
      this.parlamentares.forEach(e => {
                
        let telefone
        if((e.IdentificacaoParlamentar.Telefones.Telefone[0])){
          telefone = e.IdentificacaoParlamentar.Telefones.Telefone[0].NumeroTelefone;
        }
        const parlamentar = {
          nomeeid: {
            nome: e.IdentificacaoParlamentar.NomeParlamentar,
            id: e.IdentificacaoParlamentar.CodigoParlamentar
          },
          partido:  e.IdentificacaoParlamentar.SiglaPartidoParlamentar,
          uf:  e.IdentificacaoParlamentar.UfParlamentar,
          telefone:  telefone,
          email:  e.IdentificacaoParlamentar.EmailParlamentar
        }
         
          this.datatable.rows.push(parlamentar);

      });

      // this.datatable.rows = dados
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.mdb-datatable {
  .mdb-datatable-footer {
    justify-content: flex-start !important;
  }
}

.nome {
  text-decoration: underline;
  text-align: left;
}
/* h3 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 14px;
} */
</style>
