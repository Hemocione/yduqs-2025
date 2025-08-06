<template>
    <div class="default-layout">
      <header class="header">
        <div class="logo-and-badge">
          <NuxtImg
            src="/images/logo-horizontal-branca.svg"
            alt="Logo Hemocione"
            class="logo"
          />
          <!-- <div class="hemo-badge">POSSO DOAR</div> -->
        </div>
      </header>
  
      <main>
        <NuxtPage />
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
 
  const router = useRouter()
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
    gap: 10px;
  }
  
  .logo {
    width: 130px;
  }
  
  .hemo-badge {
    background-color: var(--hemo-color-primary);
    color: white;
    border-radius: 9999px;
    padding: 4px 12px;
    font-size: 0.75rem;
    font-weight: bold;
    letter-spacing: 0.05em;
  }
  </style>
  