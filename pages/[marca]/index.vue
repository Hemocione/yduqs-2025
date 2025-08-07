<template>
    <div class="eligibility-page">
      <div class="intro-text">
        <p>
          <strong>Que tal começar a faculdade de um jeito épico, salvando vidas e ainda ganhando horas complementares?</strong>
        </p>
        <p>
          Essa é a sua chance! O <strong>Trote Solidário 2025.2</strong> já começou, e sua participação é fundamental.
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
  </template>
  
  <script setup lang="ts">
  const route = useRoute()
const router = useRouter()

const marca = route.params.marca as string

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
  padding: 0 24px 32px 24px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
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
    /* filter: brightness(0) saturate(100%) invert(14%) sepia(91%) saturate(6957%) hue-rotate(356deg) brightness(88%) contrast(117%); */
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
  