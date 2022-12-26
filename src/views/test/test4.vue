<template>
    <v-card>
        <v-card-title>
            Carousels
        </v-card-title>
        <v-container>
          <v-card
            elevation="24"
            max-width="444"
            class="mx-auto"
          >
            <v-system-bar lights-out></v-system-bar>
            <v-carousel
              :continuous="false"
              :cycle="cycle"
              :show-arrows="false"
              hide-delimiter-background
              delimiter-icon="mdi-minus"
              height="300"
            >
              <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
              >
                <v-sheet
                  :color="colors[i]"
                  height="100%"
                  tile
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <div class="text-h2">
                      {{ slide }} Slide
                    </div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
            <v-list two-line>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>John Leider</v-list-item-title>
                  <v-list-item-subtitle>Author</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-switch
                    v-model="cycle"
                    label="Cycle Slides"
                    inset
                  ></v-switch>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-container>
        <v-card-title>
          Chip
        </v-card-title>
        <v-container>
          <div class="text-center">
            <v-btn
              v-if="!chip1 && !chip2 && !chip3 && !chip4"
              close
              color="primary"
              dark
              @click="chip1 = true, chip2 = true, chip3 = true, chip4= true"
            >
              Reset Chips
            </v-btn>

            <v-chip
              v-if="chip1"
              class="ma-2"
              close
              @click:close="chip1 = false"
            >
              Closable
            </v-chip>

            <v-chip
              v-if="chip2"
              class="ma-2"
              close
              color="red"
              text-color="white"
              @click:close="chip2 = false"
            >
              Remove
            </v-chip>

            <v-chip
              v-if="chip3"
              class="ma-2"
              close
              color="green"
              outlined
              @click:close="chip3 = false"
            >
              Success
            </v-chip>

            <v-chip
              v-if="chip4"
              class="ma-2"
              close
              color="orange"
              label
              outlined
              @click:close="chip4 = false"
            >
              Complete
            </v-chip>
          </div>
        </v-container>
        <v-card-title>
          Chips 2
        </v-card-title>
        <v-container>
          <v-card
            class="mx-auto"
            max-width="500"
          >
            <v-toolbar
              flat
              color="transparent"
            >
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
              <v-toolbar-title>Photo Info</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn
                icon
                @click="$refs.search.focus()"
              >
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-toolbar>

            <v-container class="py-0">
              <v-row
                align="center"
                justify="start"
              >
                <v-col
                  v-for="(selection, i) in selections"
                  :key="selection.text"
                  class="shrink"
                >
                  <v-chip
                    :disabled="loading"
                    close
                    @click:close="selected.splice(i, 1)"
                  >
                    <v-icon
                      left
                      v-text="selection.icon"
                    ></v-icon>
                    {{ selection.text }}
                  </v-chip>
                </v-col>

                <v-col
                  v-if="!allSelected"
                  cols="12"
                >
                  <v-text-field
                    ref="search"
                    v-model="search"
                    full-width
                    hide-details
                    label="Search"
                    single-line
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <v-divider v-if="!allSelected"></v-divider>

            <v-list>
              <template v-for="item in categories">
                <v-list-item
                  v-if="!selected.includes(item)"
                  :key="item.text"
                  :disabled="loading"
                  @click="selected.push(item)"
                >
                  <v-list-item-avatar>
                    <v-icon
                      :disabled="loading"
                      v-text="item.icon"
                    ></v-icon>
                  </v-list-item-avatar>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
              </template>
            </v-list>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!selected.length"
                :loading="loading"
                color="purple"
                text
                @click="next"
              >
                Next
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>  
    </v-card>
</template>
<script>
export default {
  data: () => ({
    colors: [
          'green',
          'secondary',
          'yellow darken-4',
          'red lighten-2',
          'orange darken-1',
        ],
        cycle: false,
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        chip1: true,
        chip2: true,
        chip3: true,
        chip4: true,
        items: [
        {
          text: 'Nature',
          icon: 'mdi-nature',
        },
        {
          text: 'Nightlife',
          icon: 'mdi-glass-wine',
        },
        {
          text: 'November',
          icon: 'mdi-calendar-range',
        },
        {
          text: 'Portland',
          icon: 'mdi-map-marker',
        },
        {
          text: 'Biking',
          icon: 'mdi-bike',
        },
      ],
      loading: false,
      search: '',
      selected: [],
    }),

    computed: {
      allSelected () {
        return this.selected.length === this.items.length
      },
      categories () {
        const search = this.search.toLowerCase()

        if (!search) return this.items

        return this.items.filter(item => {
          const text = item.text.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
      selections () {
        const selections = []

        for (const selection of this.selected) {
          selections.push(selection)
        }

        return selections
      },
    },

    watch: {
      selected () {
        this.search = ''
      },
    },

    methods: {
      next () {
        this.loading = true

        setTimeout(() => {
          this.search = ''
          this.selected = []
          this.loading = false
        }, 2000)
      },
    },

}
</script>
<style scoped>
</style>