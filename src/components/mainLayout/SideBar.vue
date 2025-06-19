<template>
  <div class="sidebar">
    <div class="sidebar-logo">
      <div class="sidebar-logo-content">
        <img src="../../assets/atLogo.png" alt="logo" />
        <h1>아트토커 관리자</h1>
      </div>
      <nav class="menu">
        <div
          v-for="tab in tabs"
          :key="tab.key"
          :class="['menu-item', activeTab === tab.key ? 'active' : '']"
        >
          <div class="icon-label" @click="handleTabClick(tab.key)">
            <i :class="tab.icon"></i>
            <span>{{ tab.label }}</span>
          </div>
        </div>
      </nav>
    </div>
  </div>

  <!-- <input type="text" v-model="inputValue" /> -->
</template>
<script setup lang="ts">
import {
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
  toRefs,
  watch,
  watchEffect,
} from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const activeTab = ref("dashboard");
const tabs = [
  { key: "dashboard", label: "대시보드", icon: "fas fa-chart-line" },
  { key: "content", label: "콘텐츠 관리", icon: "fas fa-palette" },
  { key: "members", label: "회원 관리", icon: "fas fa-users" },
  { key: "tips", label: "학습 팁 관리", icon: "fas fa-lightbulb" },
  { key: "settings", label: "시스템 설정", icon: "fas fa-cog" },
  { key: "reports", label: "분석 및 리포트", icon: "fas fa-file-alt" },
];

const handleTabClick = (key: string) => {
  activeTab.value = key;
  router.push("/" + (key === "dashboard" ? "" : key));
};

// const props = defineProps({
//   title: {
//     type: [String, Number],
//     default: "임소희",
//   },
// });

// const emit = defineEmits(["search-input"]);

// const { title } = toRefs(props);

// const isOpen = ref(false);
// const inputValue = ref("");

// const handleInput = (e: Event) => {
//   emit("search-input", (e.target as HTMLInputElement).value);
// };

// watch(isOpen, (newVal, oldVal) => {
//   console.log(newVal);
//   console.log(isOpen.value);
//   console.log(title.value);

//   isOpen.value = !isOpen.value;
// });

// watchEffect(() => {
//   console.log(isOpen.value);
// });

// onMounted(() => {
//   console.log("mounted");
// });
// onUnmounted(() => {
//   console.log("unmounted");
// });
// onUpdated(() => {
//   console.log("updated");
// });
</script>
<style scoped lang="scss">
.sidebar {
  width: 16rem;
  height: 100vh;
  background: #312e81;
  color: #fff;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}
.sidebar-logo {
  padding: 2rem 0;
  text-align: center;
}
.sidebar-logo-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.sidebar-logo img {
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
}
.sidebar-logo h1 {
  font-size: 1.5rem;
  font-weight: bold;
}
.menu {
  margin-top: 2rem;
}
.menu-item {
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
}
.menu-item:hover,
.menu-item.active {
  background: #4338ca;
}
.icon-label {
  display: flex;
  align-items: center;
}
.icon-label i {
  margin-right: 0.75rem;
}
// .sidebar {
//   transition: all 0.3s ease-in-out;
// }

// .sidebar-open {
//   transform: translateX(0);
// }
</style>
