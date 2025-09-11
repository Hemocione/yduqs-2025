<template>
    <div class="eligibility-page">
      <div class="content-scroll">
        <div class="intro-text">
          <p>
            <strong>Que tal começar a faculdade de um jeito épico, salvando vidas e ainda ganhando horas complementares?</strong>
          </p>
          <p>
            Essa é a sua chance! {{ article }} <strong>{{ campaignText }} 2025.2</strong> já começou, e sua participação é fundamental.
            Você sabia que no Brasil apenas <strong>1,6%</strong> da população doa sangue anualmente, mas para os estoques ficarem seguros, precisaríamos que <strong>3%</strong> doassem? Essa conta não fecha sem você!
          </p>
          <p><strong>Ao entrar nessa com a gente, você:</strong></p>
          <ul>
            <li>💉 Ajuda a alcançar nossa meta de <strong>4.000 bolsas de sangue</strong>, que podem salvar até <strong>16.000 vidas</strong>.</li>
            <li>🎓 Ganha <strong>40 HORAS COMPLEMENTARES</strong> para turbinar sua graduação.</li>
            <li>❤️ Faz parte de um movimento incrível de solidariedade em todo o país.</li>
          </ul>
          <p><strong>Agora, me conta! Você já fez a sua doação?</strong></p>
        </div>
      </div>

      <div class="fixed-buttons">
        <button class="card-button" @click="goToVouDoar">
          <div class="card-content">
            <div class="icon-circle">
              <NuxtImg src="/images/drop.svg" alt="Gota" class="drop-icon" />
            </div>
            <span class="card-text">Vou doar</span>
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="#3C4043" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </button>
    
        <button class="card-button" @click="goToJaDoei">
          <div class="card-content">
            <div class="icon-circle">
              <NuxtImg src="/images/check.svg" alt="Check" class="drop-icon" />
            </div>
            <span class="card-text">Já doei!</span>
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="#3C4043" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const route = useRoute()
const router = useRouter()

const marca = route.params.marca as string

// Computed para determinar o texto da campanha baseado na faculdade
const campaignText = computed(() => {
  if (marca.toLowerCase() === 'idomed') {
    return 'Ação Solidária'
  } else {
    return 'Trote Solidário'
  }
})

// Computed para determinar o artigo correto baseado no gênero da campanha
const article = computed(() => {
  if (marca.toLowerCase() === 'idomed') {
    return 'A' // feminino para "Ação Solidária"
  } else {
    return 'O' // masculino para "Trote Solidário"
  }
})

const goToVouDoar = () => {
  router.push(`/${marca}/vou-doar`)
}

const goToJaDoei = () => {
  router.push(`/${marca}/ja-doei`)
}
  </script>
  
  <style scoped>
  .eligibility-page {
  max-width: 800px;
  margin: 0 auto;
  min-height: 100dvh;
  background-color: var(--hemo-color-black-5);
  padding: 0;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Layout para telas pequenas (botões fixos) */
@media (max-height: 700px) {
  .eligibility-page {
    height: 100%;
    overflow: visible;
  }
}

/* Para telas pequenas - mantém tamanho padrão dos botões */

/* Para iPhones muito pequenos */
@media (max-height: 600px) {
  .content-scroll {
    padding: 20px 20px 200px 20px; /* Padding aumentado para mais scroll */
  }
  
  .fixed-buttons {
    padding: 10px 20px 16px 20px;
    gap: 8px;
  }
}

/* Layout para telas normais (scroll normal) */
@media (min-height: 701px) {
  .eligibility-page {
    padding: 0 24px 32px 24px;
    align-items: center;
    gap: 32px;
  }
}

.content-scroll {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* Scroll suave no iOS */
  padding: 24px 24px 240px 24px; /* padding inferior aumentado para mais scroll */
  min-height: 0; /* Permite que o flex funcione corretamente */
}

/* Para telas pequenas, remove o scroll interno da página */
@media (max-height: 700px) {
  .content-scroll {
    flex: none;
    overflow: visible;
    padding: 24px 24px 240px 24px;
  }
}

/* Para telas normais, remove o scroll interno */
@media (min-height: 701px) {
  .content-scroll {
    flex: none;
    overflow: visible;
    padding: 0;
  }
}

.fixed-buttons {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 800px;
  background-color: var(--hemo-color-black-5);
  padding: 16px 24px 24px 24px; /* Reduzido o padding inferior */
  display: flex;
  flex-direction: column;
  gap: 12px; /* Reduzido o gap entre botões */
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  /* Adiciona padding para safe area no iOS */
  padding-bottom: max(24px, env(safe-area-inset-bottom));
}

/* Para telas normais, remove os botões fixos */
@media (min-height: 701px) {
  .fixed-buttons {
    position: static;
    transform: none;
    box-shadow: none;
    background-color: transparent;
    padding: 0;
    gap: 16px;
  }
}

.intro-text {
  max-width: 600px;
  color: #3c4043;
  text-align: left;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 auto;
  /* Garante que o texto não seja cortado */
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.intro-text ul {
  list-style: none;
  padding-left: 0;
  margin: 1em 0;
}

.intro-text li {
  margin-bottom: 10px;
}

.card-button {
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 16px 24px; /* Padding padrão */
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 420px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  margin: 0 auto;
  min-height: 56px; /* Altura padrão para telas normais */
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
  