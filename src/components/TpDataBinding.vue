<template>
    <div style="width: 50vw ; width: 50vh ; border: 1px solid black ;">
        <img v-bind:src="profilLink" alt="photo de profil" width="100" height="100" >
        <form action="">
            <h2></h2>
            <input type="text" v-bind:value="nom">
            <p>Âge : {{ age }} </p>
            <p>Âge + 10 : {{ age10 }} </p>
            <p>NB Fétiche : {{ nbFetiche }} </p>
        </form>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const profilLink = ref ('../../../../public/asset/img/ai-generated-8965892_1280.jpg');
    const nom = ref("Dr Mario");
    const age = ref(45) ;
    const age10 = ref(age.value + 10) ;
    const nbFetiche = ref(7777777);
</script>

<style scoped>

    div{
       
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
</style>

