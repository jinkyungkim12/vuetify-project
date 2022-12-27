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
                        <v-alert
                            class="mb-3"
                            :value="isLoginError"
                            type="error"
                        >
                            아이디와 비밀번호를 입력해주세요.
                        </v-alert>
                        <v-alert
                            class="mb-3"
                            :value="isLogin"
                            type="success"
                        >
                            로그인이 완료되었습니다.
                        </v-alert>
                        <v-text-field
                            label="Id"
                            v-model="email"
                            :rules="rules"
                            hide-details="auto"
                        ></v-text-field>
                        <v-text-field 
                            v-model="password"
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
                        <v-btn 
                            class="text-center button"
                            color="pink"
                            @click="login({email, password})"
                            >Sign In</v-btn>
                        <!-- <v-btn class="primary" @click="test">테스트</v-btn>
                        <v-btn class="secondary" @click="test2">테스트2</v-btn> -->
                    </v-col>
                </v-row>
               
            </v-card>
        </v-row>
    </div>
</template>
<script>
// import axios from 'axios'
import {mapState, mapActions} from "vuex"

export default {
    data: () => ({
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
    ],
        email: null,
        password: null
    }),
    computed: {
        ...mapState(["isLogin", "isloginError"])
    },
    methods: {
        ...mapActions(["login"])
        // test(){

        //     // Make a request for a user with a given ID
        //     axios.get("https://reqres.in/api/users?page=2")
        //     .then(res => {
        //         // handle success
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         // handle error
        //         console.log(err);
        //     })
        //     .finally(() => {
        //         console.log("test")
        //         // always executed
        //     });
        // },
        // test2(){
        //     axios.post("https://reqres.in/api/register", {
        //         email: "eve.holt@reqres.in",
        //         password: "pistol"
        //     })
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        // }
    }
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