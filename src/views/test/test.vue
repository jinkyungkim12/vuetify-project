<template>
    <v-card>
        <v-card-title>
            Alert
        </v-card-title>
        <v-container>
            <v-card
                class="pa-3"
                outlined
            >
                <v-alert
                    dense
                    type="info"
                >
                I'm a dense alert with a <strong>type</strong> of info
                </v-alert>
                <v-alert
                    dense
                    text
                    type="success"
                >
                I'm a dense alert with the <strong>text</strong> prop and a <strong>type</strong> of success
                </v-alert>
                <v-alert
                    dense
                    border="left"
                    type="warning"
                >
                I'm a dense alert with the <strong>border</strong> prop and a <strong>type</strong> of warning
                </v-alert>
                <v-alert
                    dense
                    outlined
                    type="error"
                >
                I'm a dense alert with the <strong>outlined</strong> prop and a <strong>type</strong> of error
                </v-alert>
            </v-card>
        </v-container>
        <v-card-title>
            Avatars
        </v-card-title>
        <v-container>
            <v-row justify="center mb-5">
                <v-menu
                    bottom
                    min-width="200px"
                    rounded
                    offset-y
                >
                    <template v-slot:activator="{ on }">
                    <v-btn
                        icon
                        x-large
                        v-on="on"
                    >
                        <v-avatar
                        color="pink"
                        size="50"
                        >
                        <span class="white--text text-h7">{{ user.initials }}</span>
                        </v-avatar>
                    </v-btn>
                    </template>
                    <v-card>
                    <v-list-item-content class="justify-center">
                        <div class="mx-auto text-center">
                        <v-avatar
                            color="pink"
                        >
                            <span class="white--text text-h5">{{ user.initials }}</span>
                        </v-avatar>
                        <h3 class="mt-3">{{ user.fullName }}</h3>
                        <p class="text-caption mt-1">
                            {{ user.email }}
                        </p>
                        <v-divider class="my-3"></v-divider>
                        <v-btn
                            depressed
                            rounded
                        >
                            My page
                        </v-btn>
                        <v-divider class="my-3"></v-divider>
                        <v-btn
                            depressed
                            rounded
                        >
                            Sign Out
                        </v-btn>
                        </div>
                    </v-list-item-content>
                    </v-card>
                </v-menu>
                </v-row>
        </v-container>
        <v-card-title>
            Badge
        </v-card-title>
        <v-container>
            <v-row justify="space-around">
            <div>
                <v-btn
                class="mx-1"
                color="secondary"
                @click="messages++"
                >
                Send Message
                </v-btn>

                <v-btn
                class="mx-1"
                color="error"
                @click="messages = 0"
                >
                Clear Notifications
                </v-btn>
            </div>

            <v-badge
                :content="messages"
                :value="messages"
                color="pink lighten-3"
                overlap
            >
                <v-icon large>
                mdi-vuetify
                </v-icon>
            </v-badge>
            </v-row>
        </v-container>
        <v-card-title>
            Buttons
        </v-card-title>
        <v-container>
            <v-row
                align="center"
                justify="space-around"
                class="pa-3"
            >
                <v-btn
                    elevation="5"
                >
                Normal
                </v-btn>
                <v-btn
                depressed
                color="primary"
                >
                Primary
                </v-btn>
                <v-btn
                depressed
                color="error"
                elevation="4"
                >
                Error
                </v-btn>
                <v-btn
                depressed
                disabled
                elevation="2"
                >
                Disabled
                </v-btn>
            </v-row>
            <v-row class="mt-5">
                <v-btn block>
                    Block Button
                </v-btn>
            </v-row>
        </v-container>
        <v-card-title>
            Button Action
        </v-card-title>
        <h2>action1</h2>
        <v-container fluid>
            <v-row>
            <v-col
                cols="12"
                sm="12"
                md="6"
                offset-md="3"
            >
                <v-card>
                <v-toolbar extended>
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    <template v-slot:extension>
                    <v-fab-transition>
                        <v-btn
                        v-show="!hidden"
                        color="success"
                        fab
                        dark
                        small
                        absolute
                        bottom
                        left
                        >
                        <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </v-fab-transition>
                    </template>
                </v-toolbar>
                <v-card-text
                    style="height: 300px;"
                    class="grey lighten-5 text-center"
                >
                    <v-btn
                    color="primary"
                    @click="hidden = !hidden"
                    >
                    {{ hidden ? 'Show' : 'Hide' }}
                    </v-btn>
                </v-card-text>
                <v-card-text style="height: 100px; position: relative">
                    <v-fab-transition>
                    <v-btn
                        v-show="!hidden"
                        color="pink"
                        dark
                        absolute
                        top
                        right
                        fab
                    >
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                    </v-fab-transition>
                </v-card-text>
                </v-card>
            </v-col>
            </v-row>
        </v-container>
        <h2>action2</h2>
        <v-container class="mb-10">
            <v-row>
                <v-col
                cols="12"
                sm="6"
                offset-sm="3"
                >
                <v-card>
                    <v-toolbar
                    color="light-blue"
                    light
                    extended
                    >
                    <v-app-bar-nav-icon></v-app-bar-nav-icon>
                    <v-toolbar-title class="white--text">
                        My files
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon>mdi-view-module</v-icon>
                    </v-btn>
                    <template v-slot:extension>
                        <v-btn
                        fab
                        color="cyan accent-2"
                        bottom
                        left
                        absolute
                        @click="dialog = !dialog"
                        >
                        <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    </v-toolbar>

                    <v-dialog
                    v-model="dialog"
                    max-width="500px"
                    >
                    <v-card>
                        <v-card-text>
                        <v-text-field label="File name"></v-text-field>

                        <small class="grey--text">* This doesn't actually save.</small>
                        </v-card-text>

                        <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            text
                            color="primary"
                            @click="dialog = false"
                        >
                            Submit
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-card-title>
        </v-card-title>
    </v-card>
</template>
<script>
export default {
    data: () => ({
      user: {
        initials: 'JK',
        fullName: 'Jinkyung',
        email: 'jinkyung@withnetworks.com',
      },
      messages: 0,
      hidden: false,
      dialog: false,
    }),
}
</script>
<style lang="">
    
</style>