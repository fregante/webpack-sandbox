# webpack multiple style imports

Findings below.

## import('module')

A new bundle is generated for 'module'

## import 'module' + import('module')

'module' is always inlined as if both used `import 'module'`
