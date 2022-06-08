<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button type="button" class=""  @click="clicklogin">提交</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import  {login}  from "@/api/login";
export default defineComponent({
  name: 'HomeView',
  components: {
  },
  methods:{
    clicklogin() {
      login()
    },
  }
});
</script>