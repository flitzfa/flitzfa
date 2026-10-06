import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export function checkPublicBuild(root = resolve('dist')) {
  const forbidden = /FLITZFA_INTERNAL_ONLY|docs[\\/]business|(?:0[1-9]|1[0-4])_(?:POSITIONING|SERVICES_AND_PRICING|DISCOVERY_CALL|ESTIMATION|PROPOSAL_TEMPLATE|PAYMENT_AND_SCOPE|CLIENT_RED_FLAGS|PARTNER_PLAYBOOK|OUTREACH_TEMPLATES|CLIENT_ONBOARDING|PROJECT_DELIVERY|MONTHLY_MAINTENANCE|FIRST_CLIENT_SURVIVAL_GUIDE|TRACKING)\.md/i;
  let checked = 0;
  function visit(directory) {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isSymbolicLink()) throw new Error(`Unexpected build symlink: ${path}`);
      if (forbidden.test(relative(root, path))) throw new Error(`Private document path in build: ${path}`);
      if (entry.isDirectory()) visit(path);
      else {
        if (/\.(html|js|css|json|txt|xml|md|map)$/i.test(path) && forbidden.test(readFileSync(path, 'utf8'))) {
          throw new Error(`Private documentation content in build: ${path}`);
        }
        checked++;
      }
    }
  }
  visit(root);
  return checked;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(`Public build verified: ${checkPublicBuild()} files; no internal documentation detected.`);
}
