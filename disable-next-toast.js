// Script to remove Next.js toast and dev tools
(function() {
  function removeElements() {
    // Remove toast elements
    const toastElements = document.querySelectorAll('[data-nextjs-toast], [data-next-badge-root], [data-nextjs-toast-wrapper]');
    toastElements.forEach(el => {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });
    
    // Remove SVG defs with Next.js logo paint references
    const svgDefs = document.querySelectorAll('defs');
    svgDefs.forEach(def => {
      const content = def.innerHTML || '';
      if (content.includes('next_logo_paint')) {
        if (def.parentNode) {
          def.parentNode.removeChild(def);
        }
      }
    });
  }
  
  // Run immediately
  removeElements();
  
  // Also run after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeElements);
  }
  
  // Run periodically to catch any dynamically added elements
  setInterval(removeElements, 1000);
})();