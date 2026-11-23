# AGENTS.md — Diretrizes para objetos educacionais do site

> **Repositório:** `cristhianobv/site`  
> **Responsável pelos materiais:** Prof. Cristhiano Vasconcellos  
> **Idioma:** português do Brasil (`pt-BR`)  
> **Escopo:** desenvolvimento, revisão, manutenção e publicação de objetos educacionais interativos e sua integração ao site.

## 1. Missão e regra central

Este repositório reúne materiais educacionais interativos destinados a estudantes de programação e de cursos da área de informática. Priorize **correção conceitual, clareza pedagógica, acessibilidade, consistência visual e confiabilidade**.

**Regra central:** antes de desenvolver, leia o(s) objeto(s) aprovado(s) mais próximo(s) do conteúdo solicitado, além de `objetos.html` quando houver integração ao catálogo. **Não reinvente a identidade visual nem substitua mecanismos existentes sem solicitação.**

Estas diretrizes são um **padrão recomendado para novos trabalhos**, inferido a partir dos arquivos existentes e das decisões pedagógicas do responsável. Não significam que todos os objetos legados já atendam integralmente aos requisitos. Não realize uma refatoração retroativa do repositório por iniciativa própria.

### Prioridade de instruções

1. Pedido atual e explícito do professor, inclusive exceções a este documento.
2. Restrições e critérios de aceite combinados para a atividade.
3. Este `AGENTS.md`.
4. Padrões dos objetos de referência já aprovados.
5. Decisões de implementação conservadoras, justificadas tecnicamente.

Se houver conflito relevante, não faça uma mudança de comportamento silenciosa. Explique o conflito e, quando possível, entregue a solução mais fiel ao pedido sem modificar outras partes.

## 2. Arquivos de referência — consultar antes de editar

| Arquivo | Consultar para |
| --- | --- |
| `objetos.html` | Estrutura real do catálogo, grupos de disciplinas, classes de cards, links relativos, contadores e estilo do site. |
| `simulador_contadores_acumuladores.html` | Identidade visual clara/verde, cartões, botões, campos, apresentação em etapas e um exemplo de envio via Google Apps Script. |
| `missao_vetores_c.html` | Desafios progressivos em C, orientação durante atividades, feedback e compatibilidade com navegadores. |
| `missao_matrizes_c.html` | Simulações e exercícios para linguagem C, controle das etapas e apresentação de código. |
| `missao_procedimentos_c.html` | Explicações sobre chamadas de funções, fluxo de execução, persistência local e organização didática. |
| `recursividade_fatorial_c.html` | Simulação passo a passo da pilha de chamadas, retornos, destaque de código e avaliação final; verificar cuidadosamente coerência lógica e visual antes de reutilizar trechos. |

**Importante:** inspecione a **versão atual do repositório**, e não uma cópia antiga de outra conversa. Utilize apenas o que realmente está presente nos arquivos. Escolha a referência mais adequada à atividade específica; não copie o arquivo inteiro se apenas um padrão é pertinente.

## 3. Identidade visual e experiência do aluno

### 3.1 Padrão visual

- Base **clara**, com fundo suave e cartões predominantemente brancos.
- **Verde é a cor principal** de ações e realces positivos: `#22c55e`, `#16a34a` e `#15803d` são referências já presentes no site. Azul pode ser usado pontualmente como cor auxiliar para informação ou foco, **não como substituto automático da identidade principal**.
- Texto principal escuro, contraste adequado e cores de sucesso/erro distinguíveis também por texto ou ícones; nunca use só a cor para comunicar um estado.
- Botões arredondados, cartões com cantos suaves, espaçamento generoso e sombras discretas. Preferir tokens CSS e proporções do objeto de referência apropriado.
- Fontes já usadas no projeto incluem **Inter**, **Space Grotesk** e **JetBrains Mono**; sempre fornecer alternativas locais (`system-ui`, `monospace`) e evitar dependências externas desnecessárias.
- Preservar o estilo do catálogo: classes como `object-group`, `objects-grid`, `object-card`, `object-icon`, `object-title`, `object-desc` e `reveal` devem ser reaproveitadas quando já disponíveis.
- Interface responsiva e legível em computador e celular. Evitar rolagem horizontal de toda a página; blocos extensos de código podem ter rolagem própria.

### 3.2 Estrutura visível

- Manter o link **“← Voltar aos objetos”**, apontando para `objetos.html`, no topo quando o objeto fizer parte do catálogo principal. Este link não é um cabeçalho institucional e não deve ser removido numa simplificação visual.
- Exibir título claro e objetivo de aprendizagem. Não adicionar cabeçalho institucional grande ou rodapé técnico apenas por hábito.
- Não exibir ao aluno mensagens sobre `no-cors`, endpoint, Apps Script, CORS, logs, detalhes internos ou configuração de serviços.
- Mensagens de retorno devem ser breves e humanas: sucesso de envio, falha de tentativa, instrução para retentar ou salvar um resumo. **Nunca afirmar que uma linha foi gravada na planilha se não houver confirmação verificável.**
- Evitar ícones decorativos em excesso, textos longos e elementos que desviem a atenção do conceito central.

### 3.3 Acessibilidade e usabilidade

- HTML semântico, rótulos associados aos campos, navegação por teclado, foco visível, textos claros e áreas clicáveis adequadas.
- Não depender exclusivamente de arrastar e soltar: oferecer alternativa por clique ou seleção quando essa interação for exigida.
- Animações devem ter pausa, avanço manual e ritmo controlável quando representarem informação essencial. Respeitar `prefers-reduced-motion` quando aplicável.
- Exibir o estado atual mesmo sem animação; permitir reler ou repetir a execução.
- Preservar respostas ao navegar entre etapas sempre que possível, evitando perda acidental de trabalho.

## 4. Padrão pedagógico

1. Apresentar **o problema concreto** e o objetivo antes do código.
2. Explicar pré-requisitos apenas na medida necessária, com frases curtas e vocabulário acessível ao nível real da turma.
3. Progredir do **exemplo guiado** para a **simulação exploratória** e, depois, para os **desafios**.
4. Relacionar mudanças visuais às operações reais do algoritmo. Cada animação deve ter justificativa computacional.
5. Destacar **por que** uma resposta está correta ou incorreta; feedback não deve se limitar a “certo/errado”.
6. Evitar aumentar a dificuldade sem autorização. Não acrescentar conteúdos extras (por exemplo, Fibonacci a um objeto sobre fatorial) depois de uma decisão explícita de escopo.
7. Apresentar código válido da linguagem abordada, sem misturar sintaxe de Visualg, C, PHP e JavaScript.
8. Quando necessário, explicar limites e casos de borda: entrada zero, inicialização, índices, condição de parada, erros de acesso, laços infinitos e resultados intermediários.

### 4.1 Simulações de execução

Para objetos com depuração visual, pilhas, vetores, matrizes, ponteiros, recursividade ou fluxo de controle:

- Modelar **estados de execução** separadamente da renderização; evitar inventar estados por meio de alterações soltas no DOM.
- Cada passo deve especificar: operação, valores relevantes, alteração do estado, linha de código correspondente e texto explicativo.
- O destaque de linha deve refletir a **operação efetivamente representada naquele passo**. Não antecipar um retorno nem marcar uma chamada que ainda não ocorreu.
- Exibir com precisão a ordem dos eventos. Na recursividade, diferenciar **empilhamento de chamadas**, **caso-base** e **desempilhamento de valores retornados**.
- Testar manualmente sequências completas e passos de ida e volta; avanço/retrocesso não podem deixar valores e destaques desencontrados.
- Preferir valores iniciais pequenos e controles de limites para não gerar interfaces excessivamente grandes.

### 4.2 Avaliações e exercícios

- Variar as modalidades quando apropriado: múltipla escolha, associação, completar código, previsão de saída, ordenação e resposta curta.
- A **quantidade, os tipos e a dificuldade** das questões devem obedecer ao pedido atual. Não padronizar oito questões como regra universal.
- Alternativas devem ser mutuamente inteligíveis e revisadas para evitar duas respostas plausíveis por ambiguidade. Indicar claramente se a pergunta trata de argumentos, ordem das chamadas, ordem dos retornos ou valores calculados.
- Correção automática apenas quando houver gabarito objetivo. Respostas discursivas exigem análise humana ou regra de avaliação expressamente acordada.
- Pontuação deve usar denominador correto e diferenciar não respondido de incorreto. Não contar duas vezes a mesma questão ao revisitar a etapa.
- **Não bloquear “Continuar” por padrão.** Quando o professor pedir navegação livre, o aluno pode avançar sem responder; registrar questão não respondida sem inventar acerto.
- Permitir revisão de respostas, quando prevista, com política de pontuação explícita (primeira tentativa ou última resposta).

### 4.3 Atividades adaptadas / PEI

Quando o objeto for destinado a um estudante com necessidades educacionais específicas:

- Ler primeiro o objeto adaptado anterior aprovado e suas instruções próprias.
- Usar perguntas e respostas curtas, comandos diretos, poucas informações por tela e progressão gradual.
- Revisar conteúdos efetivamente ensinados; **não introduzir vetores, matrizes, funções ou outros assuntos sem confirmação de que fazem parte do percurso daquele estudante**.
- Garantir avanço livre quando assim solicitado, inclusive sem completar questões.
- Manter feedback respeitoso, sem linguagem infantilizante nem pressupor incapacidade.
- Não extrapolar percentuais de desempenho sem resultados registrados e verificados.
- Respeitar a **integração de envio específica do objeto adaptado**. Alguns objetos anteriores usam FormSubmit; isso não autoriza trocar automaticamente o Google Sheets/Apps Script dos objetos gerais, nem vice-versa.

## 5. Integração com Google Sheets e registro de resultados

O padrão observado em vários objetos do repositório é um **Google Apps Script publicado como aplicativo web**, acionado pelo JavaScript do objeto. O arquivo `simulador_contadores_acumuladores.html` contém um exemplo concreto.

### 5.1 Procedimento obrigatório

1. Inspecionar o objeto de referência e a configuração real do endpoint publicado.
2. Identificar o contrato de dados **efetivamente aceito** pelo Apps Script, antes de presumir que novos campos serão persistidos.
3. Preservar compatibilidade com campos já usados: `nome`, `atividade`, `acertos` e `total`, quando esse for o contrato aplicável.
4. Campos adicionais, como `turma`, `dataHora`, respostas individuais, percentual e página de origem, só devem ser introduzidos **após conferir a implementação receptora** ou documentar a necessidade de atualização do Apps Script.
5. Não substituir Google Sheets por FormSubmit, n8n, outro serviço ou backend sem autorização explícita.
6. Evitar colocar chaves secretas, tokens privados, credenciais ou dados sensíveis no HTML público. Uma URL pública de web app não é uma credencial de autenticação; não tratá-la como mecanismo de segurança.
7. Validar nome e demais dados essenciais antes do envio; oferecer alternativa de salvar/baixar resumo em caso de falha, quando apropriado.
8. Evitar disparos duplicados por cliques repetidos e tratar exceções de rede.

### 5.2 Honestidade sobre confirmação

Os exemplos do repositório incluem requisições `fetch` com `mode: "no-cors"`. Nesse modo, a resposta é opaca ao JavaScript: **não é possível confirmar por ela que a planilha recebeu uma linha**. Portanto:

- Nunca implementar uma checagem fictícia de gravação.
- Mostrar feedback amigável ao estudante, sem detalhes técnicos.
- Se houver apenas uma requisição `no-cors` concluída, usar texto cuidadosamente calibrado, por exemplo: **“Solicitação de envio realizada.”**; reservar **“Respostas registradas na planilha”** para confirmações verificáveis.
- Durante desenvolvimento e homologação, conferir a chegada dos dados diretamente na planilha, com um registro de teste identificável.
- Caso seja necessário comprovante real por requisição, planejar uma API que devolva confirmação verificável e discutir a mudança de arquitetura com o professor.

### 5.3 Dados e privacidade

- Coletar somente o necessário para a avaliação e o acompanhamento pedagógico.
- Não imprimir URLs de serviços, tokens ou payloads pessoais em mensagens ao estudante.
- Evitar enviar dados pessoais para serviços extras ou analytics sem necessidade e autorização.
- Não criar novos endpoints nem alterar permissões de compartilhamento da planilha sem confirmação específica.

## 6. Organização de arquivos e catálogo `objetos.html`

- Preferir um **HTML independente por objeto**, com CSS e JavaScript no mesmo arquivo quando essa for a estrutura dos exemplos existentes e não houver razão concreta para modularizar.
- Usar nomes descritivos, em minúsculas, com `_` entre palavras e extensão `.html`, como `recursividade_fatorial_c.html`.
- Evitar alterações em arquivos não relacionados, troca de frameworks e criação de dependências desnecessárias.
- Para incluir novo objeto no catálogo, localizar a seção correta **na versão atual** do `objetos.html`, manter classes e ordenação, acrescentar apenas o card necessário e atualizar o contador da seção.
- Para Linguagem C, a seção atual utiliza `id="programacao-i-c"` e título **“Programação em C”**. Não presumir que o número de cards permanecerá igual após futuras edições.
- Usar link relativo coerente com a localização real do arquivo e verificar se o destino existe no mesmo nível ou na pasta indicada.
- Conferir título, descrição breve, ícone, links clicáveis e consistência ortográfica. Ícones repetidos podem ser tolerados, mas preferir símbolos relevantes quando disponível no conjunto já utilizado.
- Não alterar outros cards, menu, CSS geral, ordenação de seções ou conteúdo do site sem pedido específico.

## 7. Fluxo de desenvolvimento e aprovação

### Etapa A — Inspeção

- Ler o pedido atual e identificar público, linguagem, objetivo, escopo, formato de avaliação, destino de dados e se a publicação está autorizada.
- Consultar as referências relevantes e checar se já existe solução equivalente.
- Anotar invariantes: o que **não pode mudar**.

### Etapa B — Planejamento curto

- Definir sequência pedagógica, interações, estados da simulação, critérios de correção e fluxo de envio.
- Verificar hipóteses críticas antes de programar; não inventar URLs, respostas de servidor ou dados de alunos.

### Etapa C — Implementação conservadora

- Criar ou editar o menor conjunto possível de arquivos.
- Em **revisão pontual**, tocar somente a área solicitada; não redesenhar, renomear controles ou alterar a dificuldade por conta própria.
- Se uma correção impactar outras áreas, comunicar essa dependência com clareza.

### Etapa D — Testes e revisão

- Executar os testes da Seção 8 antes da entrega.
- Entregar o HTML para teste local quando solicitado, explicando objetivamente o que foi verificado e o que depende de ambiente externo.
- Não confundir verificação de sintaxe com teste funcional completo.

### Etapa E — Publicação

- **Não criar commits, alterar arquivos do repositório ou publicar no GitHub Pages antes de autorização explícita do professor.**
- Após autorização, buscar novamente a versão atual dos arquivos para evitar sobrescrever alterações de terceiros.
- Publicar apenas os arquivos aprovados, com mensagens de commit descritivas.
- Verificar no GitHub o conteúdo atualizado e os links; quando possível, validar a página pública após a propagação do GitHub Pages.
- Comunicar caminhos publicados, alterações realizadas e quaisquer pendências de teste externo.

## 8. Checklist de qualidade — obrigatório antes de entregar

### Conteúdo e C

- [ ] O conceito está correto e adequado ao nível solicitado.
- [ ] Os exemplos e fragmentos de C estão sintaticamente corretos e os resultados esperados foram conferidos.
- [ ] Entradas de borda, paradas, índices, variáveis e operações foram revisados.
- [ ] Enunciados e alternativas não apresentam ambiguidade significativa.

### Interface e navegação

- [ ] Identidade visual clara e verde preservada; sem mudança estética não solicitada.
- [ ] Link “Voltar aos objetos” presente e correto quando aplicável.
- [ ] Layout responsivo, legível, com foco de teclado, sem textos ou botões invisíveis.
- [ ] Botões avançar, voltar, reiniciar, conferir, pausar e executar funcionam quando existentes.
- [ ] Questões podem ser puladas quando o percurso é livre.
- [ ] Não há texto técnico desnecessário na interface do aluno.

### Simulações e avaliação

- [ ] Cada passo foi conferido contra o algoritmo de referência.
- [ ] Valores, pilha/estrutura visual, explicação e destaque de código estão sincronizados.
- [ ] Avanço, retrocesso, pausa, reprodução automática e reinício foram testados quando disponíveis.
- [ ] Pontuação e número total de questões estão coerentes, inclusive após navegação e nova tentativa.
- [ ] Respostas registradas correspondem ao que o estudante escolheu ou digitou.

### Integração e publicação

- [ ] Endpoint e contrato de payload foram conferidos; sem URLs inventadas.
- [ ] Tratamento de falha não apresenta sucesso falso.
- [ ] Qualquer confirmação real de gravação foi verificada na planilha; se não, a limitação foi documentada para o professor.
- [ ] Não há credenciais privadas embutidas no frontend.
- [ ] Nome do HTML, local de destino, card e contador do catálogo conferidos.
- [ ] Nenhuma publicação foi feita sem aprovação.

## 9. Critérios de entrega ao professor

Ao concluir uma tarefa, relatar sucintamente:

1. **O que mudou** e o que foi preservado.
2. **Como testar**, com um exemplo concreto de uso.
3. **Quais verificações realmente foram feitas** (sintaxe, navegador, simulação completa, planilha, publicação etc.).
4. **Limitações ou pendências reais**, sem atribuir confirmação a serviços que não a forneceram.
5. **Onde está o arquivo ou link** — apenas se existir e tiver sido verificado.

Em pedidos de “não mude mais nada”, não aproveitar para reformular conteúdo, design ou arquitetura. Em pedidos de “primeiro me mostre”, entregar uma prévia e aguardar autorização para mexer no repositório.

## 10. Exemplos de cenários e decisões

| Solicitação | Conduta esperada |
| --- | --- |
| “Crie um objeto de recursividade em C” | Consultar referências, confirmar escopo, desenhar estados da pilha e testar a sincronização antes de entregar. |
| “Deixe Fibonacci de fora” | Excluir Fibonacci do conteúdo, das questões, dos títulos e dos cálculos; não reintroduzi-lo como extra. |
| “Mantenha o padrão dos objetos” | Inspecionar CSS real de referência e preservar tema claro/verde, cartões, botões e navegação. |
| “Tire só esta mensagem” | Localizar a mensagem específica e removê-la, mantendo o resto idêntico. |
| “Use a planilha do Google” | Examinar a integração real com Apps Script, manter contrato existente e validar persistência separadamente. |
| “Crie um card para eu olhar” | Preparar prévia e **não** publicar nem alterar `objetos.html` remoto. |
| “Pode subir os dois arquivos” | Reobter versões atuais, publicar somente arquivos aprovados, verificar conteúdo e links. |

---

**Manutenção deste guia:** atualizar estas regras quando o professor aprovar um novo padrão recorrente. Alterações ao `AGENTS.md` também devem ser revisadas antes de publicar. O objetivo é reduzir retrabalho, não impedir melhorias pedagógicas ou técnicas conscientemente solicitadas.