<template>
    <div>
        <div class="row">
            <div class="col-4">
                <ul>
                    <li v-for="d in dimensions">{{ d}}</li>
                </ul>
            </div>
            <div class="col-4">
                <ul>
                    <li v-for="d in dimensions">{{ d}}</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                Sri
            </div>
            <div class="col-4">
                Sri
            </div>
            <div class="col-4">
                Sri
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
    ul {
        border: 1px solid;
        border-width: thin;
    }
</style>