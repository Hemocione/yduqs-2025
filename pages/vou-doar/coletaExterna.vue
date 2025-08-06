<template>
    <div class="coleta-page">
      <div class="content">
        <p><strong>Ótima notícia, futuro(a) doador(a)!</strong></p>
        <p>
          Se você prefere a praticidade de doar aqui mesmo, no conforto da sua faculdade,
          a hora é essa! O banco de sangue vem até nós para uma coleta especial do Trote Solidário.
        </p>
        <p>
          Para que a gente possa organizar tudo da melhor forma e garantir seu lugar nesse dia incrível,
          é muito importante que você faça sua inscrição. Assim, podemos agendar seu horário e evitar filas.
        </p>
        <p><strong>⭢️ Inscreva-se aqui:</strong> <a href="#" class="link">[LINK DE INSCRIÇÃO DA FACULDADE]</a></p>
        <p>
          Contamos com você para fazer desta a maior campanha de doação que nossa faculdade já viu!
          E não esqueça de voltar aqui para registrar sua doação para ganhar as horas complementares!
        </p>
      </div>
  
      <button class="card-button">
        <div class="card-content">
          <div class="icon-circle">
            <NuxtImg src="/images/arrow-left.svg" alt="Inscrição" class="drop-icon" />
          </div>
          <span class="card-text">Inscrição</span>
        </div>
      </button>
    </div>
  </template>
  
  <script setup>
  const router = useRouter()
  const goBack = () => router.back()
  </script>
  
  <style scoped>
  .coleta-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 24px 16px;
    min-height: calc(100dvh - var(--navbar-height));
    background-color: var(--hemo-color-black-5);
    overflow-y: auto;
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