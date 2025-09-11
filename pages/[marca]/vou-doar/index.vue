<template>
    <div class="vou-doar-page">
      <div class="content-scroll">
        <div class="intro-text">
          <p><strong>E aí, futuro doador(a), tudo pronto para fazer a diferença {{ preposition }} {{ campaignText }}?</strong></p>
          <p>
            Sua decisão de doar sangue já é um golaço! Agora, só falta um detalhe pra gente organizar essa corrente do bem e te orientar aos próximos passos:
          </p>
          <p><strong>Qual será o formato da sua doação?</strong></p>
          <ul>
            <li>1.⁠ ⁠Você vai doar na sua própria <strong>FACULDADE</strong> com a vinda do banco de sangue? 🏫</li>
            <li>2.⁠ ⁠Você vai até um <strong>BANCO DE SANGUE</strong> parceiro com a sua galera? 🏥</li>
          </ul>
        </div>
      </div>

      <div class="fixed-buttons">
        <button class="card-button" @click="goToColetaExterna">
          <div class="card-content">
            <div class="icon-circle">
              <NuxtImg src="/images/drop.svg" alt="Gota" class="drop-icon" />
            </div>
            <span class="card-text">Vou doar na faculdade</span>
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="#3C4043" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </button>
    
        <button class="card-button" @click="goToMutirao">
          <div class="card-content">
            <div class="icon-circle">
              <NuxtImg src="/images/drop.svg" alt="Calendário" class="drop-icon" />
            </div>
            <span class="card-text">Vou doar em um banco</span>
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 6L15 12L9 18" stroke="#3C4043" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const router = useRouter()
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

  // Computed para determinar a preposição correta
  const preposition = computed(() => {
    if (marca === 'idomed') {
      return 'na'
    } else {
      return 'no'
    }
  })
  
  const goToColetaExterna = () => {
  router.push(`/${marca}/vou-doar/coletaExterna`)
  }

  const goToMutirao = () => {
  router.push(`/${marca}/vou-doar/mutirao`)
  }
  </script>
  
  <style scoped>
  .vou-doar-page {
  max-width: 800px;           
  margin: 0 auto;             
  padding: 0px;     
  min-height: 100dvh;         
  background-color: #f8f8f8;  
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Layout para telas pequenas (botões fixos) */
@media (max-height: 700px) {
  .vou-doar-page {
    height: 100%;
    overflow: visible;
  }
}

/* Layout para telas normais (scroll normal) */
@media (min-height: 701px) {
  .vou-doar-page {
    padding: 0px 24px 32px;
    align-items: center;
    gap: 16px;
  }
}

.content-scroll {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 24px 24px 200px 24px;
  min-height: 0;
}

/* Para telas pequenas, remove o scroll interno da página */
@media (max-height: 700px) {
  .content-scroll {
    flex: none;
    overflow: visible;
    padding: 24px 24px 200px 24px;
  }
  
  .card-button {
    padding: 18px 20px !important;
    min-height: 60px !important;
    height: 60px !important;
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
  background-color: #f8f8f8;
  padding: 16px 24px 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding-bottom: max(32px, env(safe-area-inset-bottom));
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
  padding: 16px 24px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 420px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
  margin: 0 auto;
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
  