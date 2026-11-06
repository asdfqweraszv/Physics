import {describe,it,expect} from 'vitest';
import {formulaDetails} from '../src/content/formulaDetails';
import {topics} from '../src/content/course';

const guide=formulaDetails['Frictional melting'];
describe('staged frictional melting content',()=>{
 it('replaces the single mass shortcut with four stages on the shared guide',()=>{
  const formula=topics.find(t=>t.id==='energy')!.formulas.find(f=>f[0]==='Frictional melting')!;
  expect(formula[1]).not.toContain('m_{\\mathrm{melt}}=');
  expect(guide.stages).toHaveLength(4);
  expect(guide.stages![1].formula).toContain('Mc_{\\mathrm{ice}}');
  expect(guide.stages![2].formula).toContain('Q_{\\mathrm{avail}}-Q_{\\mathrm{warm}}');
  expect(guide.stages![3].explanation).toContain('boiling');
 });
 it('corrects the original example: 100 J cannot warm a 2 kg block to zero',()=>{
  const available=0.5*2*10**2;
  const warm=2*2100*10;
  expect(available).toBe(100);
  expect(warm).toBe(42000);
  expect(available).toBeLessThan(warm);
  const finalTemperature=-10+available/(2*2100);
  expect(guide.example.steps.join(' ')).toContain(finalTemperature.toFixed(2));
  expect(guide.example.steps.join(' ')).toContain('m_{\\mathrm{melt}}=0');
 });
 it('subtracts warming energy before melting in the second example',()=>{
  const mass=0.1,latent=334000;
  const available=0.5*mass*300**2;
  const remainder=available-mass*2100*10;
  expect(remainder).toBe(2400);
  expect(remainder).toBeLessThan(mass*latent);
  const example=guide.additionalExamples![0];
  expect(example.steps.join(' ')).toContain((remainder/latent).toPrecision(3));
  expect(example.steps.join(' ')).toContain('4500-2100=2400');
  expect(example.steps.join(' ')).toContain('Stage 4 is not reached');
 });
});
