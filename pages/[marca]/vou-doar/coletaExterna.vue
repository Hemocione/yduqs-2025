<template>
    <div class="coleta-page">
      <div class="content">
        <p><strong>Ótima notícia, futuro(a) doador(a)!</strong></p>
        <p>
          Se você prefere a praticidade de doar aqui mesmo, no conforto da sua faculdade,
          a hora é essa! O banco de sangue vem até nós para uma coleta especial da Ação Solidária.
        </p>
        <p>
          Para que a gente possa organizar tudo da melhor forma e garantir seu lugar nesse dia incrível,
          é muito importante que você faça sua inscrição. Assim, podemos agendar seu horário e evitar filas.
        </p>
        <p><strong>⭢️ Inscreva-se aqui:</strong> </p>
        
  
      <button class="card-button" @click="goToSubscription">
        <div class="card-content">
          <div class="icon-circle">
            <NuxtImg src="/images/drop.svg" alt="Inscrição" class="drop-icon" />
          </div>
          <span class="card-text">Inscrição</span>
        </div>
      </button>

      <p>
          Contamos com você para fazer desta a maior campanha de doação que nossa faculdade já viu!
          E não esqueça de voltar aqui para registrar sua doação para ganhar as horas complementares!
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const route  = useRoute()
  const config = useRuntimeConfig()
  
  const marca = (route.params.marca as string)?.toLowerCase()
  
  const subscriptionUrl = computed(() => {
    const base = config.public.subscriptionBase
    const qs   = new URLSearchParams({ search: marca })
    return `${base}/?${qs.toString()}`
  })
  
  function goToSubscription() {
    window.location.href = subscriptionUrl.value
  }
  </script>  
  
  <style scoped>
  .coleta-page {
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

  
  .content {
    max-width: 600px;
    color: #3c4043;
    text-align: left;
    font-size: 1rem;
    line-height: 1.6;
  }
  
  .link {
    color: #d32f2f;
    font-weight: bold;
    text-decoration: underline;
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
  </style>