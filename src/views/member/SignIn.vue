<template>
    <div class="pa-6 back">
        <v-row justify="center">
            <v-card class="card">
                <v-row>
                    <v-col class="col-5 text-center">
                        <img src="https://images.pexels.com/photos/14332931/pexels-photo-14332931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="rounded rounded-xl pa-3 img">
                    </v-col>
                    <v-col class="col-7 pt-16 pa-15 text-center">
                        <h1 class="text-center mb-15">Sign In</h1>
                        <v-text-field
                            label="Id"
                            :rules="rules"
                            hide-details="auto"
                        ></v-text-field>
                        <v-text-field 
                            label="Password"
                            type="password"
                        ></v-text-field>
                        <br>
                        <br>
                        <router-link to="/">
                            <v-btn 
                            class="text-center button"
                            color="success darken-4"
                            >Sign In</v-btn>
                        </router-link>
                    </v-col>
                </v-row>
               
            </v-card>
        </v-row>
    </div>
</template>
<script>
export default {
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),
}
</script>
<style scoped>
    .card{
        width: 50%;
        margin-top: 170px;
    }
    .img{
        height: 500px;
        width: 400px;
    }
    .button{
        width: 70%;
    }
    .back{
        background-color: rgb(2, 24, 2);
        height: 930px;
        font-family: 'PuradakGentleGothicR';
    }
    @font-face {
        font-family: 'PuradakGentleGothicR';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.1/PuradakGentleGothicR.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    a{
        text-decoration: none;
    }
</style>