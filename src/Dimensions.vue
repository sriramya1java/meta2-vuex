<template>
    <div>
        <div class="row">
            <div class="col-4">
                <ul>
                    <li v-for="d in dimensions">{{ d }}</li>
                </ul>
            </div>
            <div class="col-8">
                Header Notes
            </div>
        </div>
    </div>
</template>
<script>
    import Vuex from 'vuex'
    export default {
        name: 'Dimensions',
        computed: {
            dimensions: {
                get() {
                    return this.$store.state.dimensions
                }
            }
        }
    }
</script>
<style scoped>
    .col-4 {
        border: 1px solid;
        width: 32%;
        height: 160px;
        float: left;
    }
    .col-8 {
        border: 1px solid;
        width: 32%;
        height: 160px;
        float: right;
    }
</style>