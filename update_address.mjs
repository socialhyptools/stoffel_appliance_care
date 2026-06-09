import { readFileSync, writeFileSync } from 'fs';

const files = [
  'src/app/layout.tsx',
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
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
  'src/components/FAQ.tsx',
  'src/components/Testimonials.tsx',
  'src/components/ServicePageTemplate.tsx',
];

const replacements = [
  // Schema / structured data city
  ['Tiruchirappalli', 'Madurai'],
  // Display text variants
  ["Trichy’s", "Madurai’s"],
  ['Trichy', 'Madurai'],
  // PIN / old address fragments
  ['620 006', '625018'],
  ['620006', '625018'],
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
