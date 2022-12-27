<template>
    <div>
        <v-btn
            block
            class="primary"
            @click="test"
        >
        test
        </v-btn>
        <v-card>
            <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
            >
            </v-data-table>
        </v-card>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            headers: [
                {
                    text: 'id',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                },
                { text: 'email', value: 'email' },
                { text: 'first name', value: 'first_name' },
                { text: 'Last name', value: 'last_name' },
                { text: 'avatar', value: 'avatar' },
            ],
            desserts: [
                {
                    id: res.data.id,
                    email: 'Frozen Yogurt',
                    first_name: 'Frozen Yogurt',
                    last_name: 'Frozen Yogurt',
                    avatar: 'Frozen Yogurt',
                }
            ]
        }
    },
    methods: {
        test(){
            axios.get("https://reqres.in/api/users?page=2")
            .then(response => {
                // handle success
                console.log(response)
            })
            .catch(error => {
                // handle error
                console.log(error)
            })
        }
    }
}
</script>
<style scoped>
    
</style>