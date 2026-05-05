# Diretiva — Fase 2.4: Páginas de Serviços

## Objetivo
Criar página de listagem /servicos e 4 páginas individuais com conteúdo completo, foco em SEO e CTA WhatsApp com mensagem específica por serviço.

## Serviços e Agrupamentos

Os serviços da CoCriart foram agrupados em 4 páginas estratégicas:

### 1. Gestão de Redes — `/servicos/gestao-de-redes`
Serviços inclusos:
- Calendário editorial (feed) — R$650
- Planejamento de stories — R$300 a R$500
- Gestão de Instagram (postagem + acompanhamento) — R$400 a R$900/mês
- Criação de conteúdo (roteiro + legenda) — R$80 a R$150 por post
- Setup de perfil (bio, destaques, organização) — R$250 a R$550

Público: quem quer terceirizar a gestão do Instagram com estratégia.

### 2. Produção de Conteúdo — `/servicos/producao-de-conteudo`
Serviços inclusos:
- Captação de conteúdo (foto + vídeo) — R$380 (3h)
- Edição de vídeo ou design — R$50 por material
- Criação de conteúdo (roteiro + legenda) — R$80 a R$150 por post

Público: quem já tem gestor mas precisa de produção visual com intenção.

### 3. Identidade Visual — `/servicos/identidade-visual`
Serviços inclusos:
- Identidade visual completa — R$900 a R$1.200
- Mini identidade visual — R$480
- Setup WhatsApp Business

Público: negócios novos ou que querem reposicionar sua presença visual.

### 4. Consultoria — `/servicos/consultoria`
Serviços inclusos:
- Diagnóstico de perfil e estratégia
- Planejamento de marketing com consciência
- Orientação para quem quer executar internamente

Público: quem quer entender sua marca antes de contratar execução.

---

## Deliverables

1. `app/servicos/page.tsx` — listagem com 4 cards linkando para páginas individuais
2. `app/servicos/gestao-de-redes/page.tsx`
3. `app/servicos/producao-de-conteudo/page.tsx`
4. `app/servicos/identidade-visual/page.tsx`
5. `app/servicos/consultoria/page.tsx`

### Estrutura de cada página individual:
- **Hero:** título do serviço, subtítulo e imagem de fundo com overlay roxo
- **"O que é":** descrição completa do serviço com tom holístico da marca
- **"O que você recebe":** lista de entregas em cards (usar os serviços agrupados acima)
- **"Como funciona":** 3-4 etapas do processo em timeline horizontal
- **CTA final:** botão WhatsApp com mensagem pré-preenchida específica:
  - Gestão de Redes: `Olá! Vim pelo site e tenho interesse em Gestão de Redes Sociais.`
  - Produção de Conteúdo: `Olá! Vim pelo site e tenho interesse em Produção de Conteúdo.`
  - Identidade Visual: `Olá! Vim pelo site e tenho interesse em Identidade Visual.`
  - Consultoria: `Olá! Vim pelo site e tenho interesse em Consultoria de Marketing.`

### SEO por página:
- Meta title único por serviço
- Meta description única (150-160 chars)
- Open Graph completo
- JSON-LD Schema `Service` em cada página

## Constraints
- SEM tabela de preços visível — apenas descrição + CTA (protege a cliente de concorrência)
- Copy deve usar o tom holístico da marca: palavras como "consciência", "despertar", "cocriação", "intenção"
- JSON-LD deve ser válido
- Reutilizar componente `Button` com variante whatsapp para os CTAs
- `lib/mock-services.ts` deve conter os 4 slugs corretos para uso na Fase 1.3

## Critério de Sucesso
4 URLs de serviço carregam sem erro. Meta title único por página. CTA WhatsApp com mensagem pré-preenchida específica por serviço. JSON-LD visível no source. Listagem /servicos exibe os 4 cards com links corretos.

## Aprendizados
<!-- Preencher após execução -->