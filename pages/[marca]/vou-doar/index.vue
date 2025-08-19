<template>
    <div class="vou-doar-page">
      <div class="intro-text">
        <p><strong>E aí, futuro doador(a), tudo pronto para fazer a diferença na Ação Solidária?</strong></p>
        <p>
          Sua decisão de doar sangue já é um golaço! Agora, só falta um detalhe pra gente organizar essa corrente do bem e te orientar aos próximos passos:
        </p>
        <p><strong>Qual será o formato da sua doação?</strong></p>
        <ul>
          <li>1.⁠ ⁠Você vai doar na sua própria <strong>FACULDADE</strong> com a vinda do banco de sangue? 🏫</li>
          <li>2.⁠ ⁠Você vai até um <strong>BANCO DE SANGUE</strong> parceiro com a sua galera? 🏥</li>
        </ul>
      </div>
  
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
  </template>
  
  <script setup lang="ts">
  const router = useRouter()
  const route = useRoute()
  const marca = route.params.marca as string

  
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
  padding: 0px 24px 32px;     
  min-height: 100dvh;         
  background-color: #f8f8f8;  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  }

  
  .intro-text {
    max-width: 600px;
    color: #3c4043;
    text-align: left;
    font-size: 1rem;
    line-height: 1.6;
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
  