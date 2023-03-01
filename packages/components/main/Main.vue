<template>
    <main :class="[bem.b()]">
        <slot></slot>
    </main>
</template>

<script >

    export default{
        name:"GMain"
    }
</script>

<script setup>
    import {
        computed
    } from "vue";
    import { createNamespace } from "../../utils/create";
    const bem = createNamespace("main");
    const props = defineProps({
        type:{
            require:false,
            type:String,
            default:'default'
        },
        size:{
            require:false,
            type:String,
            default:'default'
        }
    })

    


</script>