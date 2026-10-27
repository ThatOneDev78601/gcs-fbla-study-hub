import {spawnSync} from 'node:child_process';
process.env.ASTRO_TELEMETRY_DISABLED='1';
for(const args of [['scripts/prepare-content.mjs'],['scripts/check-content.mjs'],['scripts/astro.mjs','check'],['scripts/astro.mjs','build'],['node_modules/pagefind/lib/runner/bin.cjs','--site','dist']]){
 const result=spawnSync(process.execPath,args,{stdio:'inherit',env:process.env});
 if(result.status!==0)process.exit(result.status??1);
}

