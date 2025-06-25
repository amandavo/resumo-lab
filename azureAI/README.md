# Análise de Fala e Linguagem Natural no Azure AI

Documentação da minha experiência com o Azure Speech Studio e o Azure Language Studio, aplicando conceitos de inteligência artificial voltados à fala e linguagem natural, explorando as ferramentas da Microsoft.

Veja o arquivo de aúdio enviado e a transcrição feita, realizada em JSON também, com as informações apenas de um breve corte do início.

### Recursos Úteis 
[Explore Speech Studio](https://microsoftlearning.github.io/mslearn-ai-fundamentals/Instructions/Labs/09-speech.html) - Laboratório no Microsoft Learning

[Analyze text with Language Studio](https://microsoftlearning.github.io/mslearn-ai-fundamentals/Instructions/Labs/06-text-analysis.html) - Laboratório no Microsoft Learning

### 🎙️ Speech Studio

[https://speech.microsoft.com/portal](https://speech.microsoft.com/portal)

- Criação de um recurso de Fala no Azure
- Conversão de texto em fala (Text-to-Speech) em tempo real
- Análise de gravações com Speech-to-Text

Insights:
- A qualidade da transcrição é impactada pela clareza do áudio e pelo sotaque.
- É possível integrar com bots ou aplicações.
- Antes de poder usar o recurso, precisei ativar o Microsoft.CognitiveServices.

<details>
<summary>Erro: MissingSubscriptionRegistration. The subscription is not registered to use namespace 'Microsoft.CognitiveServices'. </summary>
significa que sua assinatura do Azure ainda não está registrada para usar os serviços do namespace Microsoft.CognitiveServices, que inclui o Speech Studio (Serviços de Fala).

Como resolver o erro passo a passo:
1. Acesse o Portal do Azure
2. Selecione a sua assinatura
No menu à esquerda, clique em "Assinaturas" (pode digitar isso na barra de pesquisa do portal também).
Escolha a assinatura que você está usando.
3. Registrar o namespace 'Microsoft.CognitiveServices'
Com a assinatura selecionada, vá até a aba "Provedores de recursos".
Na lista de provedores, procure por: Microsoft.CognitiveServices.
Clique sobre ele e depois em "Registrar" (ou "Registrar agora").
Esse processo pode levar alguns segundos.
4. Tente novamente criar o recurso de Fala
Agora que a assinatura está registrada com o namespace, volte para o Speech Studio ou para o portal do Azure e tente criar novamente o recurso de Fala (Speech).
</details>
 
[Código de exemplo no GitHub](https://github.com/Azure-Samples/cognitive-services-speech-sdk) seguindo as etapas no início rápido depois de criar os recursos.

--- 

### 📚 Language Studio

[https://language.cognitive.azure.com/](https://language.cognitive.azure.com/)

- Classificação de sentimentos
- Detecção de linguagem
- Resposta a perguntas com base em texto

Insights:
- O modelo de análise de sentimentos é eficiente.
- A ferramenta consegue distinguir diferentes tipos de entidades (como pessoas, locais, organizações).
- A funcionalidade de resposta a perguntas é útil para construir sistemas de FAQ inteligentes.
