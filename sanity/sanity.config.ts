// sanity.config.ts
import { defineConfig } from 'sanity'
import { deskTool }     from 'sanity/desk'
import { visionTool }   from '@sanity/vision'
// sanity/sanity.config.ts
import schemas from './schemaTypes'


export default defineConfig({
  name:       'default',
  title:      'GiggleMart Studio',
  projectId:  process.env.SANITY_PROJECT_ID || 'dwpyn7pa',
  dataset:    process.env.SANITY_DATASET    || 'production',
  apiVersion: '2023-10-01',
  plugins:    [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
})
