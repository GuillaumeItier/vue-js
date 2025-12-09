<template>
    <div>
        <button v-on:click.left="moins(number1)" type="button" class="btn btn-danger">-</button>
        <p>le nombre : {{ number }}</p>
        <button v-on:click.right.prevent="plus(number2)" type="button" class="btn btn-success">+</button>
        <p>{{ test() }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    let userName = "" ;

    let number = ref(0);
    let number1 = ref(11);
    let number2 = ref(22);
    function plus (nbr){
        number.value += nbr;
    }
    function moins (nbr){
        number.value -= nbr;
    }

    function test (){
        console.log("le fonction TEST est executée");
        if (userName.value == ""){
            return "test";
        }else{
            return "un autre test";
        }
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