import { reactive } from "vue";

export const store = reactive({
  urlApi: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  nuovoApi: "https://db.ygoprodeck.com/api/v7/archetypes.php",
  personaggi: [],
  loading: true,
});
