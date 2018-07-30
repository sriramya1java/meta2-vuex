<template>
    <div>
        <input type="text" v-model="userName"/>
        <button @click="add">Add to counter</button>
        count: {{ count }}
    </div>
</template>
<script>
    import Vuex from 'vuex'
    export default {
        name: 'AddingUser',
        computed: {
            userName: {
                get () {
                    return this.$store.state.userName
                },
                set (value) {
                    this.$store.commit('changeName', {userName: value})
                }
            },
            count: {
                get () {
                    return this.$store.state.count
                }
            }
        },
        methods: {
            ...Vuex.mapActions ({
                add: function () {
                    this.$store.dispatch('increment').then(function (count) {
                        console.log(count)
                    })
                }
            })
        }
    }
</script>