<script>
import { store } from '../data/store.js'
import axios from 'axios'

export default {
    data() {
        return {
            store,
            elementiSelect: [],
            sceltaTipo: "",
        }
    },
    methods: {
        nuovoTipo() {
            let url = this.store.urlApi + "&archetype=" + this.sceltaTipo;
            axios.get(url).then(r => {
                this.store.personaggi = r.data;
            });
        },
        getArchetypes() {
            axios.get(this.store.nuovoApi).then(r => {
                this.elementiSelect = r.data.map(item => item.archetype_name);
            });
        }
    },
    mounted() {
        this.getArchetypes();
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="boxSelect">
                <select v-model="sceltaTipo" @change="nuovoTipo()">
                    <option v-for="elemento in elementiSelect">{{ elemento }}</option>
                </select>
            </div>
            <div class="boxCards">
                <div v-for="persona in store.personaggi.data.slice(0, 15)" class="cards">
                    <div v-for="image in persona.card_images" class="cardsImg">
                        <img :src="image.image_url" alt="">
                    </div>
                    <div class="cardsText">
                        <span>{{ persona.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: #d48f38;
}

.container {
    max-width: 1500px;
    margin: 0 auto;
    padding-top: 15px;
}

.boxSelect {
    margin-bottom: 15px;
}

.boxCards {
    background-color: white;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .cards {
        width: calc(100% / 5);
        padding: 20px;


        .cardsImg {
            height: 80%;

            img {
                width: 100%;
                height: 100%;
            }


        }

        .cardsText {
            height: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #d48f38;
            color: white;
        }
    }
}
</style>