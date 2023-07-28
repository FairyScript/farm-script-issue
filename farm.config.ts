import type { UserConfig } from '@farmfe/core'

function defineConfig(config: UserConfig) {
  return config
}

export default defineConfig({
  plugins: ['@farmfe/plugin-react'],
  compilation: {
    script: {
      plugins: [
        {
          name: '@swc/plugin-emotion',
          options: {},
          filters: {
            moduleTypes: ['tsx'],
          },
        },
      ],
    },
  },
})
