<template>
    <div class="card" v-on:click="selectCard(1)" v-bind:style="{backgroundColor:selectCard1 ? 'red' : 'blue'}">
        <div class="card-body">
         card title
        </div>
    </div>
    <div class="card" v-on:click="selectCard(2)" v-bind:style="{backgroundColor:selectCard2 ? 'green' : 'violet'}">
        <div class="card-body">
         card title
        </div>
    </div>
</template>

<script setup>
    import {ref} from "vue";
    let selectCard1 = ref(false);
    let selectCard2 = ref(false);

    function selectCard(uneCard){
        if (uneCard == 1 ){
            selectCard1.value = true ;
        }else if (uneCard == 2){
            selectCard2.value = true
        }
    }

</script>
<style scoped>
    .card{
        width: 500px;
        margin: 20px;
    }

</style>