# Interactive Rating Component

Este projeto é uma solução para o desafio "Interactive rating component" do [Frontend Mentor](https://www.frontendmentor.io). O objetivo foi criar um componente de avaliação interativo utilizando tecnologias web fundamentais: **HTML, CSS/SCSS e JavaScript puro**.

A aplicação simula uma tela de avaliação, onde o usuário seleciona uma nota, a submete e recebe uma mensagem de agradecimento.

## 🚀 Live Demo

**Visualize o projeto em ação acessando o link do GitHub Pages:**

### **[https://edumoreiira.github.io/Interactive-rate/](https://edumoreiira.github.io/Interactive-rate/)**

## ✨ Funcionalidades

  - **Seleção de Nota:** Permite ao usuário escolher uma nota de 1 a 5.
  - **Submissão:** Um botão "Submit" que, ao ser clicado, processa a avaliação.
  - **Estado de Agradecimento:** Após a submissão, a tela muda para uma mensagem de agradecimento, exibindo a nota que foi selecionada.
  - **Estados Interativos:** Efeitos de `:hover` em todos os elementos clicáveis (notas e botão de submissão).
  - **Design Responsivo:** O componente se adapta bem a diferentes tamanhos de tela.

## 💻 Tecnologias Utilizadas

  - **HTML5**
  - **SCSS** para estilização
  - **JavaScript (Vanilla JS)**

## ⚙️ Como Utilizar

Sendo um projeto estático, a sua execução é simples:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/edumoreiira/Interactive-rate.git
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd Interactive-rate
    ```
3.  **Abra o arquivo `index.html` em seu navegador de preferência.**

## convention Destaques do Código e Boas Práticas

Este projeto, embora simples, aplica conceitos importantes de desenvolvimento front-end.

### JavaScript

  * **Manipulação do DOM:** O código utiliza `document.querySelector` para selecionar os elementos HTML necessários para a interatividade.
  * **Gerenciamento de Eventos:** A lógica principal é acionada por um `addEventListener` no evento de `click` do botão de submissão.
  * **Controle de Estado com `data-*` Atributos:** A troca entre a tela de avaliação e a de agradecimento é gerenciada pela manipulação do atributo `data-visible` no container principal (`.rate-wrapper`). Essa é uma forma limpa e declarativa de controlar o estado da UI, deixando para o CSS a responsabilidade de como exibir cada estado.
  * **Leitura de Formulário:** O valor da nota selecionada é obtido de forma eficiente através de um seletor CSS que busca pelo `input` do tipo `radio` que está com o atributo `:checked`.

### HTML & SCSS

  * **Inputs de Rádio Customizados:** Os `inputs` do tipo rádio são escondidos (`display: none`) e seus respectivos `<label>`s são estilizados para parecerem botões. A associação entre eles é feita pelo atributo `for`, o que é uma ótima prática de acessibilidade, pois permite clicar na `label` para selecionar a opção.
  * **Estilização Baseada em Estado:** O CSS utiliza seletores de atributo (`.rate-wrapper[data-visible="form"]` e `.rate-wrapper[data-visible="thanks"]`) para controlar qual tela é exibida. A transição entre os estados é suavizada com a propriedade `transition` do CSS.
  * **Pseudo-classes para Interatividade:** As pseudo-classes `:hover` e `:checked` são usadas para fornecer feedback visual ao usuário, alterando a cor de fundo dos botões e das notas quando o mouse passa por cima ou quando uma nota é selecionada.
  * **Variáveis SCSS:** O uso de variáveis no SCSS (`$primaryColor`, `$secondaryColor`, etc.) ajuda a manter a consistência do design e facilita futuras alterações na paleta de cores.
