# Diretiva — Fase 3.1: Página de Contato / Link-in-Bio

## Objetivo
Criar a página /contato otimizada para conversão, funcionando também como "Link in Bio" para o Instagram da CoCriart.

## Deliverables
1. `app/contato/page.tsx` com metadata única
2. Hero compacto: título "Vamos Cocriart?" em Joly Text + subtítulo em Quicksand
3. Cards de contato (grid 1-3 colunas):
   - **WhatsApp:** ícone, número formatado, botão "Iniciar Conversa" com mensagem: `Olá! Vim pelo site e quero saber mais sobre os serviços da CoCriart.`
   - **Instagram:** ícone, handle `@_cocriart_`, botão "Ver Perfil" → NEXT_PUBLIC_INSTAGRAM_URL
   - **E-mail:** ícone, endereço (placeholder `contato@cocriart.com.br`), botão "Enviar E-mail" (mailto:)
4. Seção "Links Rápidos" (funciona como Link-in-Bio):
   - "Ver Portfólio" → /portfolio
   - "Conhecer Serviços" → /servicos
   - "Ler o Blog" → /blog
   - "Pedir Orçamento" → WhatsApp (CTA principal, botão maior em laranja)
5. Frase final com assinatura em Kimberly: "Desperte & Cocrie."

## Constraints
- NEXT_PUBLIC_WHATSAPP_NUMBER e NEXT_PUBLIC_INSTAGRAM_URL do .env
- Todos os links externos: target="_blank" rel="noopener noreferrer"
- WhatsAppButton flutuante DEVE estar oculto nesta página (já implementado na 2.1)
- Página deve funcionar como standalone "link in bio" — informações completas sem depender de outras páginas

## Critério de Sucesso
Todos os links funcionam. WhatsApp abre com mensagem pré-preenchida. Botão flutuante ausente nesta página. Página funcional como link-in-bio standalone.

## Aprendizados
<!-- Preencher após execução -->
