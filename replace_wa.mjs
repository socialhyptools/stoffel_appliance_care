import { readFileSync, writeFileSync } from 'fs';

const files = [
  'src/app/contact/page.tsx',
  'src/app/page.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/services/page.tsx',
  'src/components/Footer.tsx',
  'src/components/Header.tsx',
  'src/components/ServicePageTemplate.tsx',
  'src/components/WhatsAppFloat.tsx',
];

const OLD = 'https://wa.me/919344809038';
const NEW = 'https://web.whatsapp.com/send?phone=918778783255&text=';

let total = 0;
for (const f of files) {
  const orig = readFileSync(f, 'utf8');
  const count = orig.split(OLD).length - 1;
  if (count > 0) {
    writeFileSync(f, orig.split(OLD).join(NEW), 'utf8');
    total += count;
    console.log(`${f.split('/').pop()}: ${count} replaced`);
  }
}
console.log(`Total: ${total} links updated`);
