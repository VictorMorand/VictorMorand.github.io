---
title: "Building Better Encoder-only Cross-Encoders: A Controlled Study of Training Strategies for Neural Re-ranking"
collection: publications
category: manuscripts
paperurl: https://arxiv.org/abs/2603.03010
codeurl: https://github.com/xpmir/cross-encoders
date: 2026-03-03
permalink:
excerpt: 'We reproduce and compare different distillation strategies for cross-encoders across a wide range of architectures, identifying robust design choices for effective re-ranking.'
venue: CIKM 2026, Rome
slidesurl:
bibtexurl:
citation:
authors: Victor Morand, Mathias Vast, Basile Van Cooten, Laure Soulier, Josiane Mothe, Benjamin Piwowarski
---

**Abstract**: Cross-encoders fine-tuned from Transformer backbones remain the standard for second-stage re-ranking, and recent knowledge-distillation strategies have closed much of the gap with LLM re-rankers. However, these strategies have not been compared under controlled conditions. In particular, it remains unclear how distillation from LLM rankers compares to distillation from strong cross-encoder teachers, or to purely supervised objectives. It is also unclear how much newer backbones (RoBERTa, ELECTRA, DeBERTaV3, ModernBERT) contribute compared to the original BERT. We run 162 controlled training runs (9 backbones × 6 objectives × 3 seeds), spanning pointwise, pairwise, and listwise losses with both human labels and two distillation signals, and evaluate on TREC-DL, MS MARCO dev, BEIR, LoTTE, and Robust04. We find that objectives emphasizing relative comparisons—pairwise Margin-MSE and listwise InfoNCE—consistently outperform alternative objectives, including more complex listwise LLM distillation, across all backbones, and switching objective yields gains comparable to moving up one backbone size tier. A controlled disentanglement further shows that, once the negative-sampling pool is matched, even a simple pairwise Hinge loss with ColBERTv2 hard negatives matches—and on out of domain beats—listwise LLM distillation, indicating that the quality of the negatives is at least as important as the choice of loss. We release all 162 trained models on HuggingFace and a unified training codebase.

