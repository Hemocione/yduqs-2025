<template>
    <div class="default-layout">
      <header class="header">
        <div class="logo-and-badge">
          <!-- Logo Hemocione -->
          <NuxtImg
            src="/images/logo-horizontal-branca.svg"
            alt="Logo Hemocione"
            class="logo"
          />

          <span class="logo-plus">+</span>
  
          <!-- Logo da marca dinâmica -->
          <img
            v-if="marcaLogo"
            :src="marcaLogo"
            :alt="`Logo ${campusName}`"
            class="logo-marca"
            />
        </div>
      </header>
  
      <main>
        <NuxtPage />
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { computed } from 'vue'
  
  const route = useRoute()
  
  // Slugs para nomes legíveis
  const marcaMap: Record<string, string> = {
    estacio: 'Estacio',
    wyden: 'Wyden',
    idomed: 'Idomed',
    ibmec: 'Ibmec',
  }
  
  const slug = computed(() => route.params.marca as string)
  
  // Nome legível
  const campusName = computed(() => marcaMap[slug.value] || null)
  
  // Caminho da imagem PNG da marca (ex: /images/logoEstacio.png)
  const marcaLogo = computed(() => {
    return slug.value ? `/images/logo${capitalize(slug.value)}.png` : null
  })
  
  // Capitaliza a primeira letra (ex: estacio → Estacio)
  function capitalize(str: string): string {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  </script>
  
  <style scoped>
  .default-layout {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    background-color: var(--hemo-color-black-5);
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--hemo-color-black-90);
    color: white;
  }
  
  .logo-and-badge {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  .logo {
    width: 130px;
  }
  
  .logo-marca {
    width: 100px;
    object-fit: contain;
  }

  .logo-plus {
  color: white;
  font-size: 24px;
  margin: 0 12px;
  font-weight: bold;
  display: inline-block;
  vertical-align: middle;
}
  </style>
  