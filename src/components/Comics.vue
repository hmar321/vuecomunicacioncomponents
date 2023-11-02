<template>
    <div>
        <h1 style="color:red">Comics</h1>
        <ComicComponent/>
    </div>
</template>
<script>
import ComicComponent from "./Comic.vue";
export default{
    name:"ComicsComponent",
    components:{
        ComicComponent
    }
}
</script>