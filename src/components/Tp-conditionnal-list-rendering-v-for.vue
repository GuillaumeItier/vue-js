<template>
    <div >
        <form action="">
            <div id="divForm">
                <h2>La liste des courses</h2>
                <input type="text" v-model="newMovie">
                <button type="button" class="btn btn-success" v-on:click="addMovie()">Ajouter à votre liste</button>
                <p v-if="movieArray.length == 0" >Pas encore d'article ajouter à votre liste ! Veuillez en ajouter un .</p>
                <ul v-bind:class="displayOrNot" v-else>
                    <li  v-for="(film, index) in movieArray"
                                        v-bind:key="index"
                                        v-on:click="deleteMovie(index)">
                                        {{index}} - {{ film }}</li>
                </ul>
                <button type="button" class="btn btn-primary" v-on:click="changeButton" v-if="movieArray.length !== 0">{{ displayButton }}</button>
            </div>
        </form>
    </div>
</template>



<script setup>
    import {ref,computed} from 'vue';
    //variable qui contient la classe
    let displayOrNot =  ref("blockList");
    //variable qui contient la valeur du bouton pour afficher ou masquer la liste
    let displayButton = ref("Masquer la liste");
    //tableau de film
    let movieArray = ref([]);
    //variable qui va contenir le nouveau film
    let newMovie = ref("");
    
    
    //fonction qui va affecter le nouveau film au tableau
    let addMovie = () => {
        movieArray.value.push(newMovie.value);
    }
    //fonction qui permet de supprimer un film
    let deleteMovie = (index) => {
        movieArray.value.splice(index,1) ;
    }
    console.log(movieArray.value)

    //fonction pour afficher ou masquer la liste avec modif en temps reel du bouton
    let changeButton = computed( () => {
        if(displayButton.value == "Afficher la liste"){
            displayButton.value = "Masquer la liste";
            displayOrNot.value = "blockList";
        }else if (displayButton.value == "Masquer la liste"){
            displayButton.value = "Afficher la liste";
            displayOrNot.value = "noneList";
        }
    })


</script>

<style>
    #divForm{
        border: 1px solid grey;
        margin-left: 50px;
        height: 400px;
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
    li:hover{
        cursor: pointer;
    }

    /*classe pour afficher ou masque la liste*/
    .blockList{
        display: block;
    }
    .noneList{
        display: none;
    }


</style>

