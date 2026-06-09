import { readFileSync, writeFileSync } from 'fs';

const files = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/service-areas/page.tsx',
  'src/app/services/air-conditioner/page.tsx',
  'src/app/services/washing-machine/page.tsx',
  'src/app/services/refrigerator/page.tsx',
  'src/app/services/television/page.tsx',
  'src/app/services/microwave/page.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
  'src/components/LeadForm.tsx',
];

const OLD = 'Hire Expert Service Center';
const NEW = 'Appliance Service Experts';

let total = 0;
for (const f of files) {
  const orig = readFileSync(f, 'utf8');
  const count = orig.split(OLD).length - 1;
  if (count > 0) {
    writeFileSync(f, orig.split(OLD).join(NEW), 'utf8');
    total += count;
    console.log(`✓ ${f.split('/').pop()} (${count})`);
  }
}
console.log(`\nTotal: ${total} replacements`);
