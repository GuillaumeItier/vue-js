<template>
    <div>
        <button v-on:click.left="moins(number1)" type="button" class="btn btn-danger">-</button>
        <p>le nombre : {{ number }}</p>
        <button v-on:click.right.prevent="plus(number2)" type="button" class="btn btn-success">+</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    let number = ref(0);
    let number1 = ref(11);
    let number2 = ref(22);
    function plus (nbr){
        number.value += nbr;
    }
    function moins (nbr){
        number.value -= nbr;
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