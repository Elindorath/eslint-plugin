import sonarJsPlugin from 'eslint-plugin-sonarjs'

import { ERROR } from '../../../constants.ts'

import type { Linter } from 'eslint'


export const sonarJsVanillaConfig = {
  plugins: {
    sonarjs: sonarJsPlugin,
  },

  rules: {
    'sonarjs/aws-apigateway-public-api': [ERROR],
    'sonarjs/aws-ec2-rds-dms-public': [ERROR],
    'sonarjs/aws-ec2-unencrypted-ebs-volume': [ERROR],
    'sonarjs/aws-efs-unencrypted': [ERROR],
    'sonarjs/aws-iam-all-privileges': [ERROR],
    'sonarjs/aws-iam-all-resources-accessible': [ERROR],
    'sonarjs/aws-iam-privilege-escalation': [ERROR],
    'sonarjs/aws-iam-public-access': [ERROR],
    'sonarjs/aws-opensearchservice-domain': [ERROR],
    'sonarjs/aws-rds-unencrypted-databases': [ERROR],
    'sonarjs/aws-restricted-ip-admin-access': [ERROR],
    'sonarjs/aws-s3-bucket-granted-access': [ERROR],
    'sonarjs/aws-s3-bucket-insecure-http': [ERROR],
    'sonarjs/aws-s3-bucket-public-access': [ERROR],
    'sonarjs/aws-s3-bucket-server-encryption': [ERROR],
    'sonarjs/aws-s3-bucket-versioning': [ERROR],
    'sonarjs/aws-sagemaker-unencrypted-notebook': [ERROR],
    'sonarjs/aws-sns-unencrypted-topics': [ERROR],
    'sonarjs/aws-sqs-unencrypted-queue': [ERROR],
  },
} as const satisfies Linter.Config
