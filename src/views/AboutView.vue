<template>
  <div class="about">
    <h1>뷰티파이 예제</h1>
    <v-container
      fluid
    >
      <h3 class="mt-2 mb-2">default</h3>
      <v-card
        class="pa-3"
        outlined
      >
        <v-row
          :style="{ height: '120px' }"
          outlined
        >
          <v-col
            cols="auto"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col default
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col cols="auto"적용 -> 글자 길이만큼의 크기로 됨
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <h3 class="mt-2 mb-2">dense 적용</h3>
      <v-card 
        class="pa-3 mt-5"
        outlined
      >
        <v-row
          :style="{ height: '120px' }"
          outlined
          dense
        >
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col dense: 24px -> 8px로 줄어듦
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <h3 class="mt-2 mb-2">no-gutter 사용</h3>
      <v-card 
        class="pa-3 mt-5"
        outlined
      >
        <v-row
          :style="{ height: '120px' }"
          outlined
          no-gutters
        >
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col no gutter 여백 x
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <h3 class="mt-2 mb-2">v-spacer 사용</h3>
      <v-card 
        class="pa-3 mt-5"
        outlined
      >
        <v-row
          :style="{ height: '120px' }"
          outlined
          no-gutters
        >
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col v-spacer 예시
            </v-card>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <h3 class="mt-2 mb-2">align 예시 </h3>
      <v-card 
        class="pa-3 mt-5"
        outlined
      >
        <v-row
          :style="{ height: '120px' }"
          outlined
          class="red"
          align="start"
        >
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col align start
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <v-card 
        class="pa-3 mt-5"
        outlined
      >
        <v-row
          :style="{ height: '120px' }"
          outlined
          class="green"
          align="center"
        >
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col align center
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <v-card 
        class="pa-3 mt-5"
        outlined
      >
        <v-row
          :style="{ height: '120px' }"
          outlined
          class="yellow"
          align="end"
        >
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col align end
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="pa-3"
              outlined
            >
              col
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <h3 class="mt-2 mb-2">align-self 속성(v-col에 적용)</h3>
      <v-card 
        class="pa-3 mt-5"
        outlined
      >
        <v-row
          :style="{ height: '120px' }"
          outlined
          class="blue"
        >
          <v-col
            align-self="start"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col align start
            </v-card>
          </v-col>
          <v-col
            align-self="center"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col center
            </v-card>
          </v-col>
          <v-col
            align-self="end"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col end
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <h3 class="mt-2 mb-2">justify 속성(row에 적용)</h3>
      <v-card 
        class="pa-3 mt-5"
        outlined
      >
        <v-row
          outlined
          justify="center"
        >
          <v-col
            cols="auto"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col justify center
            </v-card>
          </v-col>
          <v-col
            cols="auto"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col justify
            </v-card>
          </v-col>
          <v-col
            cols="auto"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col justify
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <v-card 
        class="pa-3 mt-5"
        outlined
      >
        <v-row
          outlined
          justify="start"
        >
          <v-col
            cols="auto"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col justify start
            </v-card>
          </v-col>
          <v-col
            cols="auto"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col justify
            </v-card>
          </v-col>
          <v-col
            cols="auto"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col justify
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <v-card 
        class="pa-3 mt-5"
        outlined
      >
        <v-row
          outlined
          justify="end"
        >
          <v-col
            cols="auto"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col justify end
            </v-card>
          </v-col>
          <v-col
            cols="auto"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col justify
            </v-card>
          </v-col>
          <v-col
            cols="auto"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col justify
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <v-card 
        class="pa-3 mt-5"
        outlined
      >
        <v-row
          outlined
          justify="space-around"
        >
          <v-col
            cols="auto"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col justify space-around
            </v-card>
          </v-col>
          <v-col
            cols="auto"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col justify
            </v-card>
          </v-col>
          <v-col
            cols="auto"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col justify
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <v-card 
        class="pa-3 mt-5"
        outlined
      >
        <v-row
          outlined
          justify="space-between"
        >
          <v-col
            cols="auto"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col justify space-between
            </v-card>
          </v-col>
          <v-col
            cols="auto"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col justify
            </v-card>
          </v-col>
          <v-col
            cols="auto"
          >
            <v-card
              class="pa-3"
              outlined
            >
              col justify
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
