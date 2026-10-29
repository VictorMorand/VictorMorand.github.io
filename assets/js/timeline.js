/**
 * Interactive Timeline component for publications
 * Handles mobile click-toggle and desktop click-pinning with full accessibility.
 */
(function () {
  'use strict';

  function initTimeline() {
    const timelineItems = document.querySelectorAll('.pub-timeline__item');
    if (!timelineItems.length) return;

    timelineItems.forEach(function (item) {
      const header = item.querySelector('.pub-timeline__header');
      const dot = item.querySelector('.pub-timeline__dot');

      function toggleItem(e) {
        // Avoid toggling if an anchor or button inside was explicitly clicked
        if (e.target.closest('a') || e.target.closest('button')) {
          return;
        }

        const isCurrentlyExpanded = item.classList.contains('is-expanded');
        if (isCurrentlyExpanded) {
          item.classList.remove('is-expanded');
          if (header) header.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('is-expanded');
          if (header) header.setAttribute('aria-expanded', 'true');
        }
      }

      if (header) {
        header.addEventListener('click', toggleItem);

        // Keyboard accessibility (Enter and Space keys)
        header.addEventListener('keydown', function (e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleItem(e);
          } else if (e.key === 'Escape') {
            if (item.classList.contains('is-expanded')) {
              item.classList.remove('is-expanded');
              header.setAttribute('aria-expanded', 'false');
            }
          }
        });
      }

      if (dot) {
        dot.addEventListener('click', toggleItem);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTimeline);
  } else {
    initTimeline();
  }
})();
