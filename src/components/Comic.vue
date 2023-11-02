<template>
    <div>
        <h1 style="color:blue">{{comic}}</h1>
        <h3 class="verde">{{comic.titulo}}</h3>
    </div>
</template>
<script>
export default{
    name:"ComicComponent",
    props:["comic"]
}
</script>