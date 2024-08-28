# Simulador de Batalhas RPG

Este projeto é um simulador de batalhas RPG implementado em TypeScript, utilizando padrões de design como Factory Method e Abstract Factory.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `src/`: Diretório principal do código fonte
  - `characters/`: Classes de personagens
  - `enums/`: Enumerações
  - `factories/`: Fábricas de personagens
  - `client.ts`: Ponto de entrada da aplicação

### Personagens

Temos três tipos de personagens:

1. Guerreiro (Warrior)
2. Mago (Mage)
3. Arqueiro (Archer)

Cada personagem tem atributos únicos e habilidades especiais.

### Níveis

Os personagens podem ser criados em três níveis diferentes:

1. Novato (Novice)
2. Intermediário (Intermediate)
3. Experiente (Expert)

### Fábricas

Utilizamos o padrão Factory Method para criar personagens de diferentes tipos e níveis. Cada tipo de personagem tem sua própria fábrica:

- `WarriorFactory`
- `MageFactory`
- `ArcherFactory`

O `CharacterFactoryManager` gerencia todas as fábricas e fornece uma interface unificada para criar personagens.

## Como Funciona

1. O `client.ts` inicia o simulador.
2. Personagens são criados usando o `CharacterFactoryManager`.
3. Batalhas são simuladas entre diferentes personagens.
4. Cada personagem pode atacar, defender e usar habilidades especiais.

## Executando o Simulador

Para executar o simulador:

1. Certifique-se de ter o Node.js e o TypeScript instalados.
2. Compile o projeto com `tsc`.
3. Execute `node dist/client.js`.

## Exemplo de Saída

O simulador mostrará batalhas entre diferentes personagens, exibindo ataques, defesas e o estado de saúde dos personagens após cada rodada.

## Expandindo o Projeto

Você pode expandir este projeto adicionando:

- Mais tipos de personagens
- Novos níveis de experiência
- Habilidades adicionais
- Um sistema de pontuação
- Interface gráfica

Divirta-se explorando e expandindo este simulador de batalhas RPG!
