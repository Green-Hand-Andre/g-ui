<template>
    <button disabled :class="[
        bem.b(),
        buttonSize,
        bem.m(type),
        bem.m(disabled?'disabled':'')]">
        <slot></slot>
    </button>
</template>

<script >
    export default{
        name:"GButton"
    }
</script>

<script setup>
    import {computed} from "vue";
    import { createNamespace } from "../../utils/create";
    const bem = createNamespace("button");
    /*
    type:default success waring failed 
    */ 
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
        },
        disabled:{
            require:false,
            type:Boolean,
            default:false
        }
    })
    




</script>