<template>
    <aside :class="[bem.b()]">
        <slot></slot>
    </aside>
</template>

<script >

    export default{
        name:"GAside"
    }
</script>

<script setup>
    import {
        computed
    } from "vue";
    import { createNamespace } from "../../utils/create";
    const bem = createNamespace("aside");
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