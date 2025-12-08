<template>
    <p>{{ sayHello() }}</p>
    <!-- <div>{{ html }}</div> -->
    <p>login :  {{ login }}</p>
    <p>id :  {{ number }}</p>
    <p>{{isOk}}</p>
    <div>
        {{ array[0] + array[1] }}
    </div>
    <p>movie : {{ movie.title + movie.year }}</p>

    

</template>

<script setup>
    let login = "azerty";
    let number = 123456789;
    let array = ["colonne", 777 ];
    let movie = {
        "title" : "back to the future",
        "year" : "1985"};
    function sayHello (){
        return "bonjour" + login ;
    } 
    let isOk = number === 123456789 ? "id : ok" : "problem id" ;
    //let html = <h1> TITRE </h1> ;

    
    
</script>