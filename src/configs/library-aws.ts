import { mergeConfigs } from '../configMerger.ts'

import { sonarJsAwsConfig } from './plugins/sonarjs/library-aws.ts'


export const libraryAwsConfig = mergeConfigs(
  sonarJsAwsConfig
)
