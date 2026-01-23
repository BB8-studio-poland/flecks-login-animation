const data = require('./variants.json');

const elementNames = ['L1', 'L2', 'L2.1', 'L3', 'L3.1', 'L4', 'L5', '00', 'R4', 'R3', 'R2', 'R1', 'Vector'];
const variantIds = ['10298:31646', '10300:31677', '10300:31705', '10300:31721'];
const variantNames = ['Default', 'Variant2', 'Variant3', 'Variant4'];

const positions = {};

variantIds.forEach((variantId, vi) => {
  const variant = data.nodes[variantId];
  if (!variant) {
    console.log('Missing variant:', variantId);
    return;
  }

  const children = variant.document.children;
  children.forEach(child => {
    const name = child.name;
    if (!elementNames.includes(name)) return;

    if (!positions[name]) {
      positions[name] = {
        width: child.absoluteBoundingBox.width,
        height: child.absoluteBoundingBox.height,
        opacity: child.opacity,
        blur: child.effects?.[0]?.radius || 0,
        positions: []
      };
    }

    positions[name].positions[vi] = {
      x: child.absoluteBoundingBox.x,
      y: child.absoluteBoundingBox.y
    };
  });
});

// Get the component bounds for reference
const defaultVariant = data.nodes['10298:31646'].document;
const componentBounds = defaultVariant.absoluteBoundingBox;
console.log('Component bounds:', JSON.stringify(componentBounds));
console.log('');

// Also get transition info
console.log('Transition info from instance:');
// Check the instance for interactions

// Calculate positions relative to component origin
elementNames.forEach(name => {
  if (!positions[name]) return;
  const el = positions[name];
  console.log(`// ${name}: ${Math.round(el.width)}x${Math.round(el.height)}, opacity=${el.opacity.toFixed(2)}, blur=${el.blur}`);

  const relPositions = el.positions.map((p, i) => {
    if (!p) return null;
    // Get relative to first variant's component origin
    const baseX = data.nodes['10298:31646'].document.absoluteBoundingBox.x;
    const baseY = data.nodes['10298:31646'].document.absoluteBoundingBox.y;
    return {
      x: Math.round(p.x - baseX),
      y: Math.round(p.y - baseY)
    };
  });
  console.log('positions:', JSON.stringify(relPositions));
  console.log('');
});

// Output as JS config
console.log('\n\n// ============ FLECKS CONFIG ============\n');
console.log('const flecksConfig = [');
elementNames.forEach(name => {
  if (!positions[name]) return;
  const el = positions[name];

  const relPositions = el.positions.map((p, i) => {
    if (!p) return { x: 0, y: 0 };
    const baseX = data.nodes['10298:31646'].document.absoluteBoundingBox.x;
    const baseY = data.nodes['10298:31646'].document.absoluteBoundingBox.y;
    return {
      x: Math.round(p.x - baseX),
      y: Math.round(p.y - baseY)
    };
  });

  console.log(`  {`);
  console.log(`    id: '${name}',`);
  console.log(`    width: ${Math.round(el.width)},`);
  console.log(`    height: ${Math.round(el.height)},`);
  console.log(`    opacity: ${el.opacity.toFixed(2)},`);
  console.log(`    blur: ${el.blur},`);
  console.log(`    // positions: Default, Variant2, Variant3, Variant4`);
  console.log(`    positions: [`);
  relPositions.forEach((p, i) => {
    console.log(`      { x: ${p.x}, y: ${p.y} },  // ${variantNames[i]}`);
  });
  console.log(`    ],`);
  console.log(`  },`);
});
console.log('];');
