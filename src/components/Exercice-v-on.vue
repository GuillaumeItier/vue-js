<template>
    <div>
        <button v-on:click="moins" type="button" class="btn btn-danger">-</button>
        <p>le nombre : {{ number }}</p>
        <button v-on:contextmenu.prevent="plus" type="button" class="btn btn-success">+</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    let number = ref(0);
    function plus (){
        number.value += 10;
    }
    function moins (){
        number.value -= 10;
    }

</script>

<style>
    div{
        display: flex;
        gap: 20px;
    }
    button{
        width: 50px;
    }
    
</style>