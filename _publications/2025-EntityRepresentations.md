---
title: "On the Representations of Entities in Auto-regressive Large Language Models"
collection: publications
category: manuscripts
paperurl: https://arxiv.org/abs/2510.09421
codeurl: https://github.com/VictorMorand/EntityRepresentations
date: 2025-10-10
permalink: 
excerpt: ''
venue: 'BlackBoxNLP@EMNLP'
slidesurl: 
bibtexurl: 
citation: 
authors: Victor Morand, Josiane Mothe, Benjamin Piwowarski
---
**Abstract:** Named entities are fundamental building blocks of knowledge in text, grounding factual information and structuring relationships within language. Despite their importance, it remains unclear how Large Language Models (LLMs) internally represent entities. Prior research has primarily examined explicit relationships, but little is known about entity representations themselves. We introduce entity mention reconstruction as a novel framework for studying how LLMs encode and manipulate entities. We investigate whether entity mentions can be generated from internal representations, how multi-token entities are encoded beyond last-token embeddings, and whether these representations capture relational knowledge. Our proposed method, leveraging _task vectors_, allows to consistently generate multi-token mentions from various entity representations derived from the LLMs hidden states. We thus introduce the _Entity Lens_, extending the _logit-lens_ to predict multi-token mentions. Our results bring new evidence that LLMs develop entity-specific mechanisms to represent and manipulate any multi-token entities, including those unseen during training.


