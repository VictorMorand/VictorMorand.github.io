---
title: "Deep learning of first-order nonlinear hyperbolic conservation law solvers"
collection: publications
category: manuscripts
paperurl: https://www.sciencedirect.com/science/article/pii/S0021999124003632
codeurl: https://github.com/VictorMorand/FVschemesOptim
date: 2024-10-10
permalink: 
excerpt: ''
venue: Journal of Computational Physics
slidesurl: 
bibtexurl: 
citation: 
authors: Victor Morand, Nils Müller, Ryan Weightman, Benedetto Piccoli, Alexander Keimer, Alexandre M. Bayen
---

**Abstract:** In this contribution, we study the numerical approximation of scalar conservation laws by
computational optimization of the numerical flux function in a first-order finite volume method.
The cell-averaging inherent to finite volume schemes presents a challenge in the design of
such numerical flux functions toward achieving high solution accuracy. Dense neural networks,
as well as (piecewise) polynomials, serve as function classes for the numerical flux. Using a
parametrization of such a function class, we optimize the numerical flux with respect to its
solution accuracy on a set of Riemann problems for which we have closed-form solutions. By
design, our resulting first-order finite volume schemes are conservative.
We show empirically that the proposed schemes can achieve higher accuracy than the Godunov
and Enquist-Osher method on a wide range of discretizations.
The proposed method can be applied to the inverse problem, i.e., the data-driven synthesis of
macroscopic physical laws for real-world flux phenomena.


