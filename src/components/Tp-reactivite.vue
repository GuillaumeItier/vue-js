<template>
    <div>
        <button v-on:click="plus5(number1)" type="button" class="btn btn-success">+5</button>
        
        <button v-on:click="plus1(number2)" type="button" class="btn btn-danger">+1</button>

        <p>{{ info }}</p>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

    let mysteryNumber = ref(0);
    let info = ref("essaie encore !");
    let number1 = ref(5);
    let number2 = ref(1);
    function plus5 (nbr){
        mysteryNumber.value += nbr;
    }
    function plus1 (nbr){
        mysteryNumber.value += nbr;
    }

    watch(mysteryNumber,(value) => {
        if (value === 7 ){
            info.value = mysteryNumber.value ;
        }else if (value > 30) {
            info.value = "remise à zero , essaie encore !";
            setTimeout(() => {
                mysteryNumber.value = 0;
            }, 3000);

        }else if (value > 7 ){
            info.value = "tu a dépassé le nombre mystère !";
     
        }else {
            info.value = "essaie encore !"
        }

    })
</script>