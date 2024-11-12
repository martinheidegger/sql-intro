import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: [
      'dayjs',
      'debug',
      '@braintree/sanitize-url',
    ]
  }
})
