<template>
    <div>
        <span>Reverse User Name: {{ revertName }}
            Full Name: {{ userFullName }}:
        </span>
    </div>
</template>
<script>
    import Vuex from 'vuex'
    export default {
        name: 'UserName',
        computed: Vuex.mapState ({
            userFullName(state) {
                return `${state.userName} ${state.userLastName}`
            },
            ...Vuex.mapGetters ([
                'revertName'
            ])
        })
    }
</script>