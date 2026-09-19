import { mergeConfigs } from '../configMerger.ts'

import { reactI18nextConfig } from './plugins/react-i18n/library-i18next.ts'


export const libraryI18nextConfig = mergeConfigs(
  reactI18nextConfig
)
