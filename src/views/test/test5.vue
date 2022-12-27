<template>
    <v-card>
        <v-card-title>
            Dialogs
        </v-card-title>
        <v-container>
          <div class="text-center">
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Click Me
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  Privacy Policy
                </v-card-title>

                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    text
                    @click="dialog = false"
                  >
                    I accept
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-container>
        <v-card-title>
            Dialogs 안에 Dialogs
        </v-card-title>
        <v-container>
          <div class="text-center">
            <v-btn
              color="primary"
              class="ma-2"
              dark
              @click="dialog2 = true"
            >
              Open Dialog 2
            </v-btn>
            <v-dialog
              v-model="dialog2"
              max-width="500px"
            >
              <v-card>
                <v-card-title>
                  Dialog 2
                </v-card-title>
                <v-card-text>
                  <v-btn
                    color="primary"
                    dark
                    @click="dialog3 = !dialog3"
                  >
                    Open Dialog 3
                  </v-btn>
                  <v-select
                    :items="select"
                    label="A Select List"
                    item-value="text"
                  ></v-select>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="primary"
                    text
                    @click="dialog2 = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog
              v-model="dialog3"
              max-width="500px"
            >
              <v-card>
                <v-card-title>
                  <span>Dialog 3</span>
                  <v-spacer></v-spacer>
                  <v-menu
                    bottom
                    left
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        icon
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon>mdi-dots-vertical</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                        @click="() => {}"
                      >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-card-title>
                <v-card-actions>
                  <v-btn
                    color="primary"
                    text
                    @click="dialog3 = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </div>
        </v-container>
    </v-card>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    dialog2: false,
    dialog3: false,
    select: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' },
        ],
    }),
}
</script>
<style scoped>
</style>