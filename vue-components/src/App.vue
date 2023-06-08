<template>
  <!--pass static data--->
  <Greet name="Sour" job="Web & Mobile Dev" />
  <!-- pass dynamic data--->
  <Greet :name="name" :job="job" />
  <PropType :name="name" :power="1100" :status="false"></PropType>
  <!--non prop attribute (example: id,class,style)-->
  <PropType id="name" :name="name" :power="1100" :status="false"></PropType>
  <!--provide & inject (deep level passing data)-->
  <ComponentA></ComponentA>
  <!--component event ($emit)-->
  <button @click="showPopup = true" v-show="!showPopup">show pop up</button>
  <p>data from popup :{{ dataFromPopup }}</p>
  <PopupVue v-show="showPopup" @closePopup="closePopupDailog"></PopupVue>
  <!--component wth v-model (custom component)-->
  <CustomInput v-model="nameForCustomInput"></CustomInput>
  <p>{{ nameForCustomInput }}</p>
  <!--multi slots -->
  <SlotCardComponent>
    <template v-slot:header>
      <h3>Header</h3>
    </template>
    <template v-slot:default> <p>this is a content.</p> </template>
    <template v-slot:footer>
      <h3>Footer</h3>
    </template>
  </SlotCardComponent>
  <!--slot props (pass data from child to parent)-->
  <NameList>
    <template v-slot:default="slotProps">
      {{ slotProps.firstName }} {{ slotProps.lastName }}
    </template>
  </NameList>
  <!--dynamic components && Keep alive-->
  <button @click="setActiveTab('TabA')">Tab A</button>
  <button @click="setActiveTab('TabB')">Tab B</button>
  <button @click="setActiveTab('TabC')">Tab C</button>
  <!-- <TabA v-if="activeTab === 'TabA'"></TabA>
  <TabB v-if="activeTab === 'TabB'"></TabB>
  <TabC v-if="activeTab === 'TabC'"></TabC> -->
  <keep-alive>
    <component :is="activeTab" />
  </keep-alive>
</template>

<script>
import ComponentA from "./components/ComponentA.vue";
import CustomInput from "./components/CustomInput.vue";
import Greet from "./components/Greet.vue";
import NameList from "./components/NameList.vue";
import PopupVue from "./components/Popup.vue";
import PropType from "./components/PropType.vue";
import SlotCardComponent from "./components/SlotCardComponent.vue";
import TabA from "./components/TabA.vue";
import TabB from "./components/TabB.vue";
import TabC from "./components/TabC.vue";

export default {
  name: "App",
  components: {
    Greet,
    PropType,
    ComponentA,
    PopupVue,
    CustomInput,
    SlotCardComponent,
    NameList,
    TabA,
    TabB,
    TabC,
  },
  data() {
    return {
      name: "Wick",
      job: "Assaisan",
      showPopup: false,
      dataFromPopup: null,
      nameForCustomInput: "",
      activeTab: "TabA",
    };
  },
  methods: {
    closePopupDailog(data) {
      this.dataFromPopup = data;
      this.showPopup = false;
    },
    setActiveTab(activeTab) {
      this.activeTab = activeTab;
    },
  },
  provide() {
    return {
      username: this.name,
    };
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
