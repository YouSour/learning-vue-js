<template>
  <!-- mustache syntax -->
  <p>{{ welcomeWord }} {{ name }}</p>
  <!-- blinding text -->
  <p v-text="name"></p>
  <!-- blinding html -->
  <p v-html="blindingHtml"></p>
  <!-- blinding attr -->
  <h1 v-bind:id="blindingAttr">Header 1</h1>
  <button v-bind:disabled="isDisabled">hi</button>
  <!-- list rendering -->
  <p v-for="(hero, index) in heroes" :key="hero">
    index: {{ index }} hero: {{ hero.name }}
    <template v-for="role in hero.roles" :key="role">
      <p>role: {{ role }}</p>
    </template>
  </p>
  <!-- condition list rendering -->
  <template v-for="hero in heroes" :key="hero">
    <h1 v-if="hero.name === 'chou'">{{ hero.name }}</h1>
  </template>
  <!-- methods -->
  add method: {{ add(2, 5) }} , mutiply method: {{ multiply(5) }}
  <!-- handle event-->
  <p>{{ nameWithEventHandle }}</p>
  <button v-on:click="changeName('Bibi', $event)">Change Name</button>
  <!-- handle event with short hand-->
  <p>{{ count }}</p>
  <button @click="increment(1)">Increment</button>
  <button @click="decrement(1)">Decrement</button>
  <!--form handling-->
  <form @submit.prevent="submitForm">
    <div>
      <pre>
        {{ JSON.stringify(form, null, 2) }}
      </pre>
    </div>
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="form.name" />
    </div>
    <div>
      <label for="age">Age</label>
      <input type="text" id="age" v-model.number="form.age" />
    </div>
    <div>
      <label for="profile">Profile Summary</label>
      <textarea id="profile" v-model="form.profile"></textarea>
    </div>
    <div>
      <label for="country">Country</label>
      <select id="country" v-model="form.country">
        <option value="">Select a country</option>
        <option value="cambodia">Cambodia</option>
        <option value="australia">Australia</option>
        <option value="japan">Japan</option>
      </select>
    </div>
    <div>
      <label for="job-location">Job Location</label>
      <select id="job-location" multiple v-model="form.jobLocation">
        <option value="">Select a country</option>
        <option value="cambodia">Cambodia</option>
        <option value="australia">Australia</option>
        <option value="japan">Japan</option>
      </select>
    </div>
    <div>
      <label for="remote-work">open to remote work ?</label>
      <input
        type="checkbox"
        id="remote-work"
        v-model="form.remoteWork"
        true-value="yes"
        false-value="no"
      />
    </div>
    <div>
      <label for="">Skill Set</label>
      <label for="html">HTML</label>
      <input type="checkbox" id="html" value="html" v-model="form.skillSet" />
      <label for="css">CSS</label>
      <input type="checkbox" id="css" value="css" v-model="form.skillSet" />
      <label for="javascript">Javascript</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        v-model="form.skillSet"
      />
    </div>
    <div>
      <label for="">Year Of Experinces</label>
      <label for="0-2">0-2</label>
      <input type="radio" id="0-2" value="0-2" v-model="form.yearOfExp" />
      <label for="3-5">3-5</label>
      <input type="radio" id="3-5" value="3-5" v-model="form.yearOfExp" />
    </div>
    <div>
      <button type="submit" @keyup.enter="submitForm">Submit</button>
    </div>
  </form>
  <!--modifiers-->
  <input type="text" v-model.trim.lazy="form.name" />
  <!--computed properties-->
  <p>{{ greeting }}</p>
  <button
    @click="
      heroes.push({
        name: 'karina',
        gender: 'female',
        roles: ['assasin'],
        power: 250,
      })
    "
  >
    Add
  </button>
  <p>total power heros - {{ totalPowerHeroes }}</p>
  <!--computed properties with v-for & condition-->
  <!--bad way-->
  <template v-for="(hero, index) in heroes" :key="hero.name">
    <p v-if="hero.power > 250">
      {{ index }} : {{ hero.name }} - power : {{ hero.power }}
    </p>
  </template>
  <!--good way-->
  <p v-for="(topPowerHero, index) in topPowerHeroes" :key="topPowerHero.name">
    {{ index }} : {{ topPowerHero.name }} - power : {{ topPowerHero.power }}
  </p>
  <!--computed setter-->
  <p>{{ fullName }}</p>
  <button @click="setComputedPropFullName()">
    set computed prop full name
  </button>
  <!--watch-->
  <p>curent volume : {{ volume }}</p>
  <button @click="incVolume()">+</button>
  <button @click="decVolume()">-</button>
  <!--eatch immediate & deep-->
  <input type="text" v-model="movie" />
  <input type="text" v-model="movieInfo.title" />
  <input type="text" v-model="movieInfo.actor" />
  <button @click="movieList.push('Wonder Woman')">Add Movie</button>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      firstName: "jhon",
      lastName: "wick",
      welcomeWord: "Hi,",
      name: "jhon wick",
      blindingHtml: "<b>hi, this is bold.</b>",
      blindingAttr: "headerId-1",
      isDisabled: true,
      heroes: [
        {
          name: "miya",
          gender: "female",
          roles: ["maskman", "range"],
          power: 250,
        },
        {
          name: "chou",
          gender: "male",
          roles: ["fighter"],
          power: 300,
        },
      ],
      baseMultiplier: 2,
      nameWithEventHandle: "Bob",
      count: 0,
      form: {
        name: "",
        age: null,
        profile: "",
        country: "",
        jobLocation: [],
        remoteWork: "no",
        skillSet: [],
        yearOfExp: "",
      },
      volume: 0,
      movie: "Batman",
      movieInfo: {
        title: "",
        actor: "",
      },
      movieList: ["Batman", "Superman"],
    };
  },
  methods: {
    add(n1, n2) {
      return n1 + n2;
    },
    multiply(n1) {
      return n1 * this.baseMultiplier;
    },
    changeName(name, e) {
      this.nameWithEventHandle = name;
      console.log(e);
    },
    increment(n) {
      this.count += n;
    },
    decrement(n) {
      this.count -= n;
    },
    submitForm() {
      console.log(this.form);
    },
    setComputedPropFullName() {
      this.fullName = "jhon wick2";
    },
    incVolume() {
      this.volume++;
    },
    decVolume() {
      this.volume--;
    },
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + this.lastName;
      },
      set(value) {
        const names = value.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      },
    },
    greeting() {
      return this.welcomeWord + this.name;
    },
    totalPowerHeroes() {
      return this.heroes.reduce((total, o) => (total += o.power), 0);
    },
    topPowerHeroes() {
      return this.heroes.filter((o) => o.power > 250);
    },
  },
  watch: {
    volume(newValue, oldValue) {
      if (newValue > oldValue && newValue == 16) {
        alert("hey, becareful to loud !");
      }
    },
    movie: {
      handler(newValue) {
        console.log("🚀 ~ file: App.vue:252 ~ handler ~ newValue:", newValue);
      },
      // immediate: true,
    },
    movieInfo: {
      handler(newValue) {
        console.log("🚀 ~ file: App.vue:259 ~ handler ~ newValue:", newValue);
      },
      deep: true,
    },
    movieList: {
      handler(newValue) {
        console.log("🚀 ~ file: App.vue:265 ~ handler ~ newValue:", newValue);
      },
      deep: true,
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
