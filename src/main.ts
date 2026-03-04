// Link Preview Card Builder - Main Application Entry Point
// This is a temporary bootstrap file to validate the build pipeline
// Will be properly implemented in T015 (Create main application entry point)

console.log('Link Preview Card Builder - Application Loading...');

// Hide loading indicator once app is initialized
const loadingElement = document.getElementById('loading');
if (loadingElement) {
  loadingElement.style.display = 'none';
}

// Basic app initialization
const appElement = document.getElementById('app');
if (appElement) {
  appElement.innerHTML = `
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
  `;
}

export {};