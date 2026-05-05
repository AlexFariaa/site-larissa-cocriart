# Diretiva — Fase 2.1: Navbar & Footer Globais

## Objetivo
Criar Navbar responsiva com efeito de scroll, Footer global com links e redes sociais, e botão flutuante de WhatsApp presente em todas as páginas.

## Deliverables
1. `components/layout/Navbar.tsx`
   - Logo placeholder tipográfico "CoCRIart" (Joly Text + Kimberly)
   - Links: Início, Sobre, Portfólio, Serviços, Blog, Contato
   - Efeito scroll: transparente → glassmorphism (backdrop-blur + border lilás sutil) após 80px
   - Menu hambúrguer mobile com animação de abertura (Framer Motion)
   - Link ativo destacado em laranja (#c56428)
2. `components/layout/Footer.tsx`
   - Logo + tagline "Marketing Holístico"
   - Links rápidos em 2 colunas: Páginas | Serviços
   - Ícones de redes: Instagram, WhatsApp (SVG inline)
   - Copyright: "© 2025 CoCriart. Todos os direitos reservados."
   - Linha decorativa superior em gradiente roxo → laranja
3. `components/layout/WhatsAppButton.tsx`
   - Botão circular fixo, bottom-right, z-50
   - Ícone WhatsApp SVG + tooltip "Fale Conosco" no hover
   - Animação: pulse suave em verde (#25D366)
   - Oculto em /contato (não duplicar CTA)
4. Integrar os 3 no `app/layout.tsx`

## Constraints
- Navbar: usar `usePathname()` do next/navigation para link ativo
- WhatsAppButton: usar `usePathname()` para ocultar em /contato
- Ambos são Client Components ('use client') — layout.tsx permanece Server Component
- Links de navegação em array/config para fácil manutenção: `lib/navigation.ts`

## Critério de Sucesso
Navbar aparece em todas as páginas. Efeito glassmorphism visível após scroll. Menu hambúrguer abre/fecha no mobile. Footer aparece em todas as páginas. Botão WhatsApp flutuante visível em todas as páginas exceto /contato.

## Aprendizados
<!-- Preencher após execução -->
