import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
// CHANGE THIS LINE: import schema instead of schemaTypes
import {schema} from './sanity/schema' 

export default defineConfig({
  name: 'business-hub',
  title: 'Business Hub CMS',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  plugins: [
    structureTool(),
    visionTool(),
  ],
  
  // CHANGE THIS LINE: just use 'schema'
  schema, 
})