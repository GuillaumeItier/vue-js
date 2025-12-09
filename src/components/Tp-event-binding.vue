<template>
    <form action="">
        <input class="form-control" type="text" v-on:keydown="keyDisplay($event)" v-bind:value="txt"  ></input>
        <p>{{ txt }}</p>
        <input class="form-control" type="text" v-on:keydown.esc="keyDisplay2($event)" ></input>
        <p>{{ txt1 }}</p>
        <button type="button" class="btn btn-primary" v-on:click="alertDisplay()">alert</button>
    </form>
</template>

<script setup>
import { Alert } from 'bootstrap';
import { ref } from 'vue';
    let txt = ref("");
    let txt1 = ref ("");
    function keyDisplay (event){
        txt.value = event.target.value;
    }
     function keyDisplay2 (event){
        txt1.value = event.target.value;
    }
    function alertDisplay(){
        alert("Ceci est une alerte !");
    }

</script>

<style>
    button{
        width: 100px;
    }
</style>