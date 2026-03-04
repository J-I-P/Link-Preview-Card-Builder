(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const n=document.getElementById("loading");n&&(n.style.display="none");const l=document.getElementById("app");l&&(l.innerHTML=`
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div class="bg-white rounded-preview shadow-card max-w-2xl w-full p-8 text-center">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          🔗 Link Preview Card Builder
        </h1>
        <p class="text-gray-600 mb-6">
          Application framework successfully initialized!
        </p>
        <div class="bg-brand-50 border border-brand-200 rounded-card p-4">
          <p class="text-brand-700 font-semibold mb-2">✅ Configuration Validated</p>
          <ul class="text-sm text-brand-600 space-y-1">
            <li>• TypeScript compilation: Working</li>
            <li>• Vite build pipeline: Working</li>
            <li>• Tailwind CSS theme: Loaded</li>
            <li>• Path aliases: Configured</li>
          </ul>
        </div>
        <p class="text-xs text-gray-500 mt-6">
          Ready for Phase 2 foundational development
        </p>
      </div>
    </div>
  `);
//# sourceMappingURL=main-DQA3hiCu.js.map
