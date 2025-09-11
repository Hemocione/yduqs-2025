<template>
    <div class="ja-doei-page">
      <div class="info-text">
        <p><strong>Parabéns, herói/heroína! 🎉</strong></p>
        <p>Sua atitude de doar sangue {{ preposition }} <strong>{{ campaignText }}</strong> foi um gesto gigante de solidariedade e já está fazendo a diferença. Muito obrigado por salvar <strong>4 vidas</strong>!!</p>
        <p>Agora, para o último passo: vamos registrar essa boa ação para que você possa ganhar suas horas complementares. Seu registro é essencial para que a gente possa contabilizar sua doação na campanha e para que você receba seu benefício.</p>
        <p>Para garantir suas <strong>horas de Atividade Acadêmica Complementar (AAC)</strong>, é só acessar o link abaixo e registrar sua doação na nossa plataforma.</p>
        <p><strong>➡️ Registre sua doação aqui:</strong> </p>
  
      <button class="card-button" @click="goToCopas">
        <div class="card-content">
          <div class="icon-circle">
            <NuxtImg src="/images/check.svg" alt="Check" class="drop-icon" />
          </div>
          <span class="card-text">Registrar minha doação</span>
        </div>
      </button>

      <p>É rápido e fácil! Agradecemos mais uma vez por seu ato heroico!!</p>
    </div>
    </div>
  </template>
  
  <script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const config = useRuntimeConfig()
const route = useRoute()
const marca = (route.params.marca as string)?.toLowerCase()

// Computed para determinar o texto da campanha baseado na faculdade
const campaignText = computed(() => {
  if (marca === 'idomed') {
    return 'Ação Solidária'
  } else {
    return 'Trote Solidário'
  }
})

const preposition = computed(() => {
  if (marca === 'idomed') {
    return 'no'
  } else {
    return 'na'
  }
})

const copasPaths = {
  ibmec: 'trote-solidario-ibmec-20252',
  wyden: 'wyden-ou-trote-solidario-252',
  idomed: 'trote-solidario-idomed-20252',
  estacio: 'wyden-ou-trote-solidario-20252'
}

function goToCopas() {
  const path = copasPaths[marca]

  if (path) {
    window.location.href = `${config.public.copaHemocioneBase}${path}`
  } else {
    console.error('Marca não encontrada no mapeamento:', marca)
  }
}
</script>

  
  <style scoped>
 .ja-doei-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 0px 24px 32px;
  min-height: 100dvh;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.info-text {
  max-width: 600px;
  color: #3c4043;
  text-align: left;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

.card-button {
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 16px 24px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 420px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
}

.card-button:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card-content {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
}

.icon-circle {
  background-color: #f6f6f6;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.drop-icon {
  width: 24px;
  height: 24px;
}

.card-text {
  font-size: 1.125rem;
  font-weight: 500;
  color: #3c4043;
  flex: 1;
  text-align: left;
  line-height: 1.4;
}

.arrow-icon {
  min-width: 24px;
  height: 24px;
}
  </style>