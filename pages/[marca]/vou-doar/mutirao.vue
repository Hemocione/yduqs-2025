<template>
    <div class="mutirao-page">
      <div class="content">
        <p>
          <strong>Que incrível sua atitude de ir até um hemocentro parceiro para fazer sua doação {{ preposition }} {{ campaignText }}!</strong>
          Você é parte fundamental desta campanha. 👊
        </p>
        <p>
          Para que sua doação seja um sucesso, é muito importante conferir se você atende aos pré-requisitos básicos.
          Dúvidas como "preciso estar em jejum?" ou "quem fez tatuagem pode doar?" são super comuns.
        </p>
        <p>
          Pensando nisso, criamos um checklist rápido para te ajudar a se preparar. <strong>Acesse o link e confira!</strong>
        </p>
        <p>
          Contamos com você para fazer desta a maior campanha de doação que nossa faculdade já viu!
          E não esqueça de voltar aqui para registrar sua doação para ganhar as horas complementares!
        </p>
    
  
      <button class="card-button" @click="goToPossoDoar">
        <div class="card-content">
          <div class="icon-circle">
            <NuxtImg src="/images/drop.svg" alt="Posso doar" class="drop-icon" />
          </div>
          <span class="card-text">Pré-triagem</span>
        </div>
      </button>

      <p>
          <strong>Atenção:</strong> Este link é um guia para te ajudar, mas ele não substitui a triagem oficial e a entrevista
          que serão realizadas pelo profissional de saúde no banco de sangue, combinado?
        </p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  
  const router = useRouter()
  const route = useRoute()
  const goBack = () => router.back()

  const config = useRuntimeConfig();
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
      return 'à'
    } else {
      return 'no'
    }
  })

    function goToPossoDoar() {
        window.location.href = config.public.possoDoar;
    }
  </script>
  
  <style scoped>
  .mutirao-page {
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
    font-weight: 550;
    color: #3c4043;
    flex: 1;
    text-align: left;
    line-height: 1.4;
  }
  </style>
  