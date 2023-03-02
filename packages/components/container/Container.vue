<template>
    <section :class="[
        bem.b(),
        bem.is('isVertical',isVertical)]">
        <slot></slot>
    </section>
</template>

<script >

    export default{
        name:"GContainer"
    }
</script>

<script setup>
    import {
        computed,
        useSlots
    } from "vue";
    import { createNamespace } from "../../utils/create";
    const bem = createNamespace("container");
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
    const slots = useSlots();
    
    const isVertical = computed(()=>{
        let isGMain = false
        if(slots && slots.default){
           for(let slot = 0;slot<slots.default().length;slot++){
                if(slots.default()[slot].type.name === 'GAside' || slots.default()[slot].type.name === 'GMain'){
                    isGMain = true     
                }
            }
        }
        return isGMain
        
    })



</script>