import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const files = [
  'src/app/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/service-areas/page.tsx',
  'src/app/services/page.tsx',
  'src/app/services/air-conditioner/page.tsx',
  'src/app/services/washing-machine/page.tsx',
  'src/app/services/refrigerator/page.tsx',
  'src/app/services/television/page.tsx',
  'src/app/services/microwave/page.tsx',
  'src/app/layout.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
  'src/components/FAQ.tsx',
  'src/components/LeadForm.tsx',
  'src/components/ServicePageTemplate.tsx',
];

const replacements = [
  ['tel:+919344809038', 'tel:+918838893560'],
  ['+919344809038',     '+918838893560'],
  ['9344809038',        '8838893560'],
  ['93448 09038',       '88388 93560'],
];

let total = 0;
for (const f of files) {
  let content = readFileSync(f, 'utf8');
  let changed = false;
  for (const [from, to] of replacements) {
    const count = content.split(from).length - 1;
    if (count > 0) {
      content = content.split(from).join(to);
      total += count;
      changed = true;
    }
  }
  if (changed) {
    writeFileSync(f, content, 'utf8');
    console.log(`✓ ${f.split('/').pop()}`);
  }
}
console.log(`\nTotal replacements: ${total}`);
