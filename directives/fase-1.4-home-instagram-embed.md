# Diretiva — Fase 1.4: Instagram Embed + Home Contact CTA

## Objetivo
Adicionar seção de Instagram com embed simples e encerrar a Home com uma seção CTA de contato impactante.

## Deliverables
1. `components/sections/InstagramFeed.tsx`
   - Embed via SnapWidget (iframe simples, sem API) ou grid de imagens estáticas com link
   - Título "No Instagram" com handle `@_cocriart_` clicável
   - Fallback: se embed falhar, exibir 6 imagens placeholder com link para o perfil
2. `components/sections/HomeContactCTA.tsx`
   - Fundo gradiente: #6d1f8d → #2d0e44
   - Frase: "Pronta para despertar a sua marca?"
   - Subtítulo: "Vamos cocriart juntos. Entre em contato e peça seu orçamento."
   - Botão WhatsApp (variante whatsapp do Button) com mensagem pré-preenchida
   - Botão secundário ghost: "Ver Serviços" → `/servicos`

## Constraints
- InstagramFeed: embed via iframe simples (SnapWidget free) ou imagens estáticas — sem API OAuth
- NEXT_PUBLIC_INSTAGRAM_URL e NEXT_PUBLIC_WHATSAPP_NUMBER devem vir do .env
- WhatsApp URL: `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Vim%20pelo%20site%20e%20quero%20saber%20mais.`
- Botão WhatsApp: abrir em `target="_blank"` com `rel="noopener noreferrer"`

## Critério de Sucesso
Seção Instagram exibe embed ou fallback com link funcional para o perfil. Seção CTA renderiza com gradiente. Botão WhatsApp abre em nova aba com mensagem pré-preenchida. Botão "Ver Serviços" navega para /servicos.

## Aprendizados
<!-- Preencher após execução -->
