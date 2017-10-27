<template>
    <div>
    </div>
</template>

<script>
    import api from '../axios/api.js'
    export default {
        created() {
            let id = this.$route.params.id
            this.getTutor(id);
        },
        methods: {
            getTutor(id) {
                api.Get('/finance/' + id)
                    .then(res => {
                        console.log(res);
                    });
            }
        }
    }
</script>