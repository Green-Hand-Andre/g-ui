<template>
    <section :class="[bem.b()]">
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
    console.log(slots)
    const isVertical = computed(()=>{
        
    })

    


</script>