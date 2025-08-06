<template>
    <div class="ja-doei-page">
      <div class="info-text">
        <p><strong>Parabéns, herói/heroína! 🎉</strong></p>
        <p>Sua atitude de doar sangue no <strong>Trote Solidário</strong> foi um gesto gigante de solidariedade e já está fazendo a diferença. Muito obrigado por salvar <strong>4 vidas</strong>!!</p>
        <p>Agora, para o último passo: vamos registrar essa boa ação para que você possa ganhar suas horas complementares. Seu registro é essencial para que a gente possa contabilizar sua doação na campanha e para que você receba seu benefício.</p>
        <p>Para garantir suas <strong>horas de Atividade Acadêmica Complementar (AAC)</strong>, é só acessar o link abaixo e registrar sua doação na nossa plataforma.</p>
        <p><strong>➡️ Registre sua doação aqui:</strong> [LINK PARA REGISTRO DA DOAÇÃO]</p>
        <p>É rápido e fácil! Agradecemos mais uma vez por seu ato heroico!!</p>
      </div>
  
      <button class="card-button">
        <div class="card-content">
          <div class="icon-circle">
            <NuxtImg src="/images/check.svg" alt="Check" class="drop-icon" />
          </div>
          <span class="card-text">Registrar minha doação</span>
        </div>
      </button>
    </div>
  </template>
  
  <script setup>
  // lógica se necessário
  </script>
  
  <style scoped>
  .ja-doei-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 24px 16px;
    min-height: calc(100dvh - var(--navbar-height));
    background-color: var(--hemo-color-black-5);
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