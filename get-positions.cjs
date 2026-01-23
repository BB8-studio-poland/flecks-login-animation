const data = require('./variants.json');

const variantIds = ['10298:31646', '10300:31677', '10300:31705', '10300:31721'];
const variantNames = ['Default', 'Variant2', 'Variant3', 'Variant4'];

// Get base position from Default variant
const defaultDoc = data.nodes['10298:31646'].document;
const baseX = defaultDoc.absoluteBoundingBox.x;
const baseY = defaultDoc.absoluteBoundingBox.y;

console.log('// Component size:', Math.round(defaultDoc.absoluteBoundingBox.width), 'x', Math.round(defaultDoc.absoluteBoundingBox.height));
console.log('');

// Get all elements
const elementNames = ['L1', 'L2', 'L2.1', 'L3', 'L3.1', 'L4', 'L5', '00', 'R4', 'R3', 'R2', 'R1', 'Vector'];

elementNames.forEach(name => {
  // Find element in default variant
  const defaultEl = defaultDoc.children.find(c => c.name === name);
  if (!defaultEl) return;

  const width = Math.round(defaultEl.absoluteBoundingBox.width);
  const height = Math.round(defaultEl.absoluteBoundingBox.height);
  const opacity = defaultEl.opacity.toFixed(1);
  const blur = defaultEl.effects?.[0]?.radius || 0;

  console.log('{');
  console.log('  id: "' + name + '",');
  console.log('  width: ' + width + ',');
  console.log('  height: ' + height + ',');
  console.log('  opacity: ' + opacity + ',');
  console.log('  blur: ' + blur + ',');
  console.log('  positions: [');

  // Get position from each variant
  variantIds.forEach((vid, i) => {
    const variant = data.nodes[vid].document;
    const el = variant.children.find(c => c.name === name);
    if (el) {
      const x = Math.round(el.absoluteBoundingBox.x - baseX);
      const y = Math.round(el.absoluteBoundingBox.y - baseY);
      console.log('    { x: ' + x + ', y: ' + y + ' },  // ' + variantNames[i]);
    }
  });

  console.log('  ],');
  console.log('},');
});
