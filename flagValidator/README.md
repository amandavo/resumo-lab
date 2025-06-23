# Validador de Bandeiras de Cartão de Crédito

Este projeto tem como objetivo **desenvolver uma aplicação simples capaz de identificar a bandeira de um cartão de crédito (como Visa, MasterCard, etc.) com base no número do cartão**. Utilizando o **GitHub Copilot** como assistente de codificação, para explorar como a inteligência artificial pode acelerar o desenvolvimento, sugerir trechos de código e melhorar a produtividade.

Recurso Útil: [4devs](https://www.4devs.com.br/gerador_de_numero_cartao_credito) - Gerador de Número de Cartão de Crédito

### Objetivos
- Reproduzir e/ou melhorar um projeto com base em um código existente; 
- Aplicar os conceitos aprendidos em um cenário real; 
- Documentar seu raciocínio técnico e decisões de forma clara e organizada;

Tabela inicial para tomar como base para iniciar o projeto

| Bandeira          | Número inicial                                                                 |
|-------------------|--------------------------------------------------------------------------------|
| Visa              | Começa sempre com o número 4.                                                  |
| Mastercard        | Começa com dígitos entre 51 e 55, ou entre 2221 a 2720.                        |
| Elo               | Pode começar com vários intervalos, como 4011, 4312, 4389, entre outros.       |
| American Express  | Inicia com 34 ou 37.                                                           |
| Discover          | Começa com 6011, 65, ou com a faixa de 644 a 649.                              |
| Hipercard         | Geralmente começa com 6062.                                                    |

Aplicar também para o **Diners Club, EnRoute, JCB, Voyager e Aura**.

| Bandeira          | Número inicial                              |
|-------------------|---------------------------------------------|
| Diners Club       | Começa com 300-305, 36, ou 38.              |
| EnRoute           | Começa com 2014 ou 2149.                    |
| JCB               | Começa entre 3528 até 3589.                 |
| Voyager           | Inicia com 8699.                            |
| Aura              | Inicia com 50.                              |

### Raciocínio
**Separação dos arquivos:**
_index_: Valida apenas o número do cartão de crédito e determina seu tipo de bandeira sem validação adicional.
_index_regex_: É como o index, porém utilizando expressão regular (regex).
_index_luhn_: Valida se o número digitado do cartão de crédito pode ser válido usando o algoritmo de Luhn antes de verificar seu tipo de bandeira.
_index_final_: Código modular, com fácil manutenção, com adição das bandeiras: Diners Club, EnRoute, JCB, Voyager, Aura e validação de entrada numérica.

**Ordem de verificação ajustada:**
O Elo foi movido para o topo da lista de padrões, garantindo que ele seja verificado antes do Visa.
Isso ocorre porque o Elo tem intervalos mais específicos que podem começar com 4, enquanto o Visa é mais genérico.

**Algoritmo de Luhn:**
Também chamado de “módulo 10” ou “mod 10”, ele não serve para garantir que o número seja válido no sentido de "existe mesmo", mas ajuda a detectar erros comuns de digitação.

**Melhorias feitas:**
Para deixar o código mais modular, legível e fácil de manter, além de seguir boas práticas de programação.
O algoritmo de Luhn foi movido para uma função utilitária separada (isValidLuhn).
Os padrões de regex estão centralizados e foram armazenados em uma constante (CARD_PATTERNS), facilitando a atualização ou adição de novos padrões.
Adição da validação de entrada para garantir que o número do cartão contém apenas dígitos.