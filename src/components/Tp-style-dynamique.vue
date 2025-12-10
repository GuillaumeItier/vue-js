<template>
    <form action="">
            <div v-bind:class="class1" ></div>
            <input class="form-control"   type="text"   v-on:keyup="chooseClass($event)"></input>
            <p v-bind:class="noneOrNot" >classe :  {{ class1 }}  activée !</p>
            <p v-bind:class="maClasse">{{ txt }}</p>
            <input class="form-control" type="text"  v-on:keyup="chooseStyle($event)"></input>
            <p v-bind:style="colorStyle">{{ txt1 }}</p>
            <button type="button" class="btn btn-primary" v-on:click="changeClass()" >Afficher le 1er Titre</button>
        </form>
        
</template>

<script setup>
    import {ref, computed} from 'vue';

    //initialisation des variable pour les paragraphes + boutton
    let txt = ref("hello world class dynamique");
    let txt1 = ref("hello world style dynamique");
    let maClasse = ref("classNone") ;

    //fonction qui change la classe pour afficher le titre
    let changeClass = () => {
        if (maClasse.value == "classNone"){
            maClasse.value = "classBlock";
        }else if (maClasse.value == "classBlock"){
            maClasse.value = "classNone";
    }};

    //variable pour le premier input
    let end = ref("");
    let class1 = computed(() => "maClasse" + end.value);  
    
    //fonction pour changer la classe du premier input
    let chooseClass = (event) => {
        console.log(class1.value);
        end.value = event.target.value;
        console.log(class1.value);
    }
    //fonction pour tester les classe "maClasseHello " et "maClasseWorld"
    let noneOrNot = () => {
        if (class1.value == "maClasseHello" || class1.value == "maClasseWorld" || class1.value == "maClasseMagic" ){
            return class1.value;
        }else{
            return "classNone";
        }
    }

    console.log(class1.value);

    //variables pour le changement de couleur du second titre
    let color = ref("");
    let colorStyle = computed(() => ({color:color.value}));

    //fonction qui permet le changement de couleur
   let chooseStyle = (event) => {
        color.value = event.target.value;
        console.log(colorStyle.value);
    }

</script>

<style>
    .classNone{
        display : none;
    }
    .classBlock{
        display : block;
    }

    button{
        width: 200px;
    }
    .classNone{
        display: none;
    }
    .maClasseHello{
        display: block;
        height: 50vh;
        width: 50vw;
        background-image: url("https://comic-con-staging-uploads.s3.amazonaws.com/uploads/2023/09/queue-notice.gif");
        
    }

    .maClasseWorld{
        display: block;
        height: 50vh;
        width: 50vw;
        background-image: url("https://comic-con-staging-uploads.s3.amazonaws.com/uploads/2023/09/queue-notice.gif");
    }

    .maClasseMagic{
        height: 50vh;
        width: 50vw;
        background-image: url("https://comic-con-staging-uploads.s3.amazonaws.com/uploads/2023/09/queue-notice.gif");
    }




</style>