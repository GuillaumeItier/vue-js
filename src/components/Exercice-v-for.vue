<template>
    <div >
        <form action="">
            <div id="divForm">
                <h2>WatchList : Films à voir</h2>
                <input type="text" v-model="newMovie">
                <button type="button" class="btn btn-primary" v-on:click="addMovie()">Ajouter à votre liste</button>
                <p v-if="movieArray.length == 0" >Pas encore de film à votre liste ! Veuillez en ajouter un .</p>
                <ul v-else>
                    <li  v-for="(film, index) in movieArray"
                                        v-bind:key="index"
                                        v-on:click="deleteMovie(index)">
                                        {{index}} - {{ film }}</li>
                </ul>
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
    //let displayMovie = computed(() => movieArray.value.join(" , "));

    let deleteMovie = (index) => {
        movieArray.value.splice(index,1) ;
    }
    console.log(movieArray)


</script>

<style scoped>
    #divForm{
        border: 1px solid grey;
        margin-left: 50px;
        height: 400px;
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        
    }
    input{
        width: 300px;
    }
    h2{
        margin-top: 20px;
        text-align: left;
    }
    ul{
        height: 200px;
        overflow: auto;
    }
    li:hover{
        cursor: pointer;
    }


</style>

