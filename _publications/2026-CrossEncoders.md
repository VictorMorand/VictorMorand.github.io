---
title: "Reproducing and Comparing Distillation Techniques for Cross-Encoders"
collection: publications
category: manuscripts
paperurl: https://arxiv.org/abs/2603.03010
codeurl: https://github.com/xpmir/cross-encoders
date: 2026-03-03
permalink:
excerpt: 'We reproduce and compare different distillation strategies for cross-encoders across a wide range of architectures, identifying robust design choices for effective re-ranking.'
venue: arXiv preprint
slidesurl:
bibtexurl:
citation:
authors: Victor Morand, Mathias Vast, Basile Van Cooten, Laure Soulier, Josiane Mothe, Benjamin Piwowarski
---

**Abstract**: Recent advances in Information Retrieval have established transformer-based cross-encoders as a keystone in IR. Recent studies have focused on knowledge distillation and showed that, with the right strategy, traditional cross-encoders could reach the level of effectiveness of LLM re-rankers. Yet, comparisons with previous training strategies, including distillation from strong cross-encoder teachers, remain unclear. In addition, few studies cover a similar range of backbone encoders, while substantial improvements have been made in this area since BERT. This lack of comprehensive studies in controlled environments makes it difficult to identify robust design choices. In this work, we reproduce Schlatt et al. (2025) LLM-based distillation strategy and compare it to Hofstätter et al. (2020) approach based on an ensemble of cross-encoder teachers, as well as other supervised objectives, to fine-tune a large range of cross-encoders. We evaluate all models on both in-domain (TREC-DL and MS MARCO dev) and out-of-domain datasets (BEIR, LoTTE, and Robust04). Our results show that objectives emphasizing relative comparisons -- pairwise MarginMSE and listwise InfoNCE -- consistently outperform pointwise baselines across all backbones and evaluation settings, and that objective choice can yield gains comparable to scaling the backbone architecture.