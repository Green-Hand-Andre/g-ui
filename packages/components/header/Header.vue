<template>
    <div :class="[bem.b()]">
        <slot></slot>
    </div>
</template>

<script >

    export default{
        name:"GHeader"
    }
</script>

<script setup>
    import {
        computed
    } from "vue";
    import { createNamespace } from "../../utils/create";
    const bem = createNamespace("header");
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