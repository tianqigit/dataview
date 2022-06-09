<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button type="button" class="" @click="clicklogin">提交</button>

    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>


  </div>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>

<script lang="ts" >
import { defineComponent } from 'vue';
import { login } from "@/api/login";
export default defineComponent({
  name: 'HomeView',
  components: {
  },
  methods: {
    clicklogin() {
      login()
    },
  }
});
</script>