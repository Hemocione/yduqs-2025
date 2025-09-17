<template>
  <div class="default-layout">
    <div class="eligibility-page">
      <header class="header">
        <div class="logo-and-badge">
          <NuxtImg
            src="/images/logo-horizontal.svg"
            alt="Logo Hemocione"
            class="logo"
          />

          <span class="logo-plus">+</span>

          <!-- <img
            v-if="marcaLogo"
            :src="marcaLogo"
            :alt="`Logo ${campusName}`"
            class="logo-marca"
          /> -->
          <img
            src="/images/logoYduqs.webp"
            alt="Logo Yduqs"
            class="logo-marca"
          />
        </div>
      </header>

      <main>
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, watchEffect } from "vue";

const route = useRoute();
const router = useRouter();

const marcaMap: Record<string, string> = {
  estacio: "Estácio",
  wyden: "Wyden",
  idomed: "Idomed",
  ibmec: "Ibmec",
};

const slug = computed(() => route.params.marca as string);

const campusName = computed(() => marcaMap[slug.value] || null);

// Se não houver campusName válido, redireciona para estacio
watchEffect(() => {
  if (!campusName.value) {
    router.replace(`/estacio${route.path.replace(/^\/[^/]+/, "")}`);
  }
});

useHead({
  title: campusName.value ? `Hemocione + ${campusName.value}` : "Hemocione",
});

const marcaLogo = computed(() => {
  return slug.value ? `/images/logo${capitalize(slug.value)}.png` : null;
});

function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<style scoped>
.default-layout {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  background-color: #f0f2f5;
  padding: 0;
  margin: 0;
}

/* Para telas pequenas, permite que o header faça scroll */
@media (max-height: 700px) {
  .default-layout {
    height: 100dvh;
    overflow: hidden;
  }
  
  .eligibility-page {
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .header {
    position: static;
    flex-shrink: 0;
  }
}

.header {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: var(--hemo-color-black-5);
  color: black;
}

.logo-and-badge {
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo {
  height: 40px;
  object-fit: contain;
}

.logo-marca {
  height: 40px;
  object-fit: contain;
}

.logo-plus {
  color: black;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
