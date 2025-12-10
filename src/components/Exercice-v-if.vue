<template>
    <div >
        <form action="">
            <div id="divForm">
                <h2>WatchList : Films à voir</h2>
                <input type="text" v-model="newMovie">
                <button type="button" class="btn btn-primary" v-on:click="addMovie()">Ajouter à votre liste</button>
                <p v-if="movieArray.length == 0" >Pas encore de film à votre liste ! Veuillez en ajouter un .</p>
                <p v-else>{{displayMovie}}</p>
            </div>
        </form>
    </div>
</template>




<script setup>
    import {ref,computed} from 'vue';
    let movieArray = ref([]);
    let newMovie = ref("");
    let addMovie = () => {
        movieArray.value.push(newMovie.value);
    }
    let displayMovie = computed(() => movieArray.value.join(" , "));
    console.log(movieArray)


</script>

<style>
    #divForm{
        border: 1px solid grey;
        margin-left: 50px;
        height: 300px;
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    input{
        width: 300px;
    }
    h2{
        text-align: left;
    }


</style>

