# Diretiva — Fase 3.2: Animações Avançadas & Polish

## Objetivo
Aplicar a camada final de animações e micro-interações que elevam a experiência para o nível estético da CoCriart: mística, elaborada, memorável.

## Deliverables

### 1. Transições de Página
- `components/layout/PageTransition.tsx` com Framer Motion `AnimatePresence`
- Transição: fade + leve slide-up ao entrar, fade ao sair
- Integrar no `app/layout.tsx` envolvendo o `{children}`

### 2. Cursor Customizado (desktop only)
- `components/layout/CustomCursor.tsx`
- Cursor principal: ponto pequeno branco
- Cursor follower: círculo maior com glow lilás (#d29ee1), segue com lag suave
- Hover em links/botões: cursor expande + muda cor para laranja (#c56428)
- Ocultar em dispositivos touch (matchMedia: pointer coarse)

### 3. Efeito Aurora Refinado no Hero
- Revisar Hero.tsx para aurora mais elaborada
- 3 camadas de gradiente radial animadas com keyframes diferentes (velocidades distintas)
- Cores: #6d1f8d, #4187af, #2d0e44 — blend mode screen/overlay

### 4. Scroll Progress Indicator
- `components/layout/ScrollProgress.tsx`
- Barra fina no topo da página (height: 2px)
- Cor: gradiente #c56428 → #d29ee1
- Framer Motion `useScroll` + `useSpring` para movimento suave

### 5. Hover nos Cards (revisão global)
- Garantir em TODOS os cards (Portfolio, Serviços): glow neon + scale(1.03) + border lilás
- Usar CSS transition para escala, Framer Motion para glow (box-shadow animado)

### 6. Noise Overlay Global
- Confirmar que noise overlay está aplicado e visível (granulado sutil) em todas as páginas
- Ajustar opacidade se muito forte (target: 0.03–0.05)

### 7. Revisão de Responsividade
- Testar e corrigir todas as páginas em: 375px (iPhone SE), 768px (iPad), 1280px (desktop)
- Cursor customizado: desabilitar em mobile/tablet
- Partículas do Hero: reduzir quantidade em mobile (< 768px)

## Constraints
- Cursor customizado: NUNCA quebrar acessibilidade — preservar cursor padrão para usuários de teclado
- Transições de página: máximo 300ms para não frustrar navegação rápida
- Testar performance após polish: nenhuma animação deve causar jank (< 16ms por frame)
- LazyMotion obrigatório em todos os usos do Framer Motion

## Critério de Sucesso
Transições suaves entre páginas visíveis. Cursor customizado aparece no desktop, ausente no mobile. Aurora com 3 camadas animadas no Hero. Barra de progresso de scroll visível. Zero jank nas animações (DevTools Performance → sem frames > 16ms).

## Aprendizados
<!-- Preencher após execução -->
