<script>
import {join} from "path";

export default {
    props: {
        importModelMenuDialog: {
            type: Object,
            required: true
        },
        ysmJson: {
            type: Object,
            required: true
        },
        packDirectory: {
            type: Object,
            required: true
        }
    },
    data() {
        return {};
    },
    methods: {
        join,
        tl
    },
    computed: {}
};
</script>

<template>
    <div>
        <p>Properties</p>
    </div>
</template>

<style scoped>

</style>