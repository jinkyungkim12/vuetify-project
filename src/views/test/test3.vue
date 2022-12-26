<template>
    <v-card>
        <v-card-title>
            Card
        </v-card-title>
        <v-container>
          <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>

            <v-card-title>Cafe Badilico</v-card-title>

            <v-card-text>
              <v-row
                align="center"
                class="mx-0"
              >
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="15"
                ></v-rating>

                <div class="grey--text ms-4">
                  4.5 (413)
                </div>
              </v-row>

              <div class="my-4 text-subtitle-1">
                $ • Italian, Cafe
              </div>

              <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Tonight's availability</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="deep-purple lighten-2"
                text
                @click="reserve"
              >
                Reserve
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
        <v-card-title>
          Card 2
        </v-card-title>
        <v-container>
          <v-card
            class="mx-auto"
            max-width="344"
          >
            <v-card-text>
              <div>Word of the Day</div>
              <p class="text-h4 text--primary">
                el·ee·mos·y·nar·y
              </p>
              <p>adjective</p>
              <div class="text--primary">
                relating to or dependent on charity; charitable.<br>
                "an eleemosynary educational institution."
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="teal accent-4"
                @click="reveal = true"
              >
                Learn More
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                v-if="reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%;"
              >
                <v-card-text class="pb-0">
                  <p class="text-h4 text--primary">
                    Origin
                  </p>
                  <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn
                    text
                    color="teal accent-4"
                    @click="reveal = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </v-container>
        <v-card-title>
          Card3
        </v-card-title>
        <v-container>
          <v-row justify="space-around">
            <v-card width="400">
              <v-img
                height="200px"
                src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
              >
                <v-app-bar
                  flat
                  color="rgba(0, 0, 0, 0)"
                >
                  <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

                  <v-toolbar-title class="text-h6 white--text pl-0">
                    Messages
                  </v-toolbar-title>

                  <v-spacer></v-spacer>

                  <v-btn
                    color="white"
                    icon
                  >
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-app-bar>

                <v-card-title class="white--text mt-8">
                  <v-avatar size="50">
                    <img
                      alt="user"
                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                    >
                  </v-avatar>
                  <p class="ml-3">
                    John Doe
                  </p>
                </v-card-title>
              </v-img>

              <v-card-text>
                <div class="font-weight-bold ml-8 mb-2">
                  Today
                </div>

                <v-timeline
                  align-top
                  dense
                >
                  <v-timeline-item
                    v-for="message in messages"
                    :key="message.time"
                    :color="message.color"
                    small
                  >
                    <div>
                      <div class="font-weight-normal">
                        <strong>{{ message.from }}</strong> @{{ message.time }}
                      </div>
                      <div>{{ message.message }}</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-row>
        </v-container>
    </v-card>
</template>
<script>
export default {
  data: () => ({
      loading: false,
      selection: 1,
      reveal: false,
      messages: [
        {
          from: 'You',
          message: `Sure, I'll see you later.`,
          time: '10:42am',
          color: 'deep-purple lighten-1',
        },
        {
          from: 'John Doe',
          message: 'Yeah, sure. Does 1:00pm work?',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'You',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'deep-purple lighten-1',
        },
      ],
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },

}
</script>
<style scoped>
    .v-card--reveal {
      bottom: 0;
      opacity: 1 !important;
      position: absolute;
      width: 100%;
    }
</style>