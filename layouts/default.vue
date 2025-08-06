<template>
    <div class="default-layout">
      <header class="header">
        <div class="logo-and-badge">
          <NuxtImg
            src="/images/logo-horizontal-branca.svg"
            alt="Logo Hemocione"
            class="logo"
          />
        </div>
      </header>
  
      <!-- Faixa Estácio -->
      <div class="campus-banner">
        Estácio
      </div>
  
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
  
  /* NOVO: Faixa do nome da instituição */
  .campus-banner {
    width: 100%;
    background-color: white;
    color: var(--hemo-color-black-100);
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
    padding: 12px 0;
    border-bottom: 1px solid var(--hemo-color-black-10);
    font-family: "Roboto", sans-serif;
  }
  </style>
  