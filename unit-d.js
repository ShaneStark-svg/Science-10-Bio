// ← EDIT YOUR DATA HERE

const udStats = [
  { value: "424.6 ppm", label: "Atmospheric CO₂ in 2024 — highest in 800,000 years (NOAA)", icon: "📈" },
  { value: "1,361 W/m²", label: "Solar constant — energy arriving at Earth's atmosphere",    icon: "☀️" },
  { value: "+1.1°C",    label: "Global average temperature rise since 1850",                 icon: "🌡️" },
  { value: "5",         label: "Distinct layers in Earth's atmosphere",                      icon: "🌍" },
];

const atmosphereLayers = [
  {
    name: "Exosphere", range: "700–10,000 km", color: "#c4b5fd",
    temp: "Varies enormously — can exceed 2,000°C in direct sunlight",
    desc: "The outermost and most diffuse layer. Atoms and molecules here are so spread out they rarely collide — some can escape into space entirely. Satellites such as weather and GPS satellites orbit in the upper exosphere. This layer merges gradually with interplanetary space."
  },
  {
    name: "Thermosphere", range: "80–700 km", color: "#818cf8",
    temp: "Up to 2,000°C (but feels cold — air is too thin to transfer heat)",
    desc: "Despite extremely high temperatures (measured by particle kinetic energy), the thermosphere feels cold because air density is so low. This is where auroras (Northern Lights) occur — solar wind particles interact with atmospheric gases. The International Space Station (ISS) orbits at ~400 km within the thermosphere."
  },
  {
    name: "Mesosphere", range: "50–80 km", color: "#60a5fa",
    temp: "Down to −90°C at the mesopause (top of this layer)",
    desc: "The coldest layer of the atmosphere. Most meteors burn up here due to friction — creating 'shooting stars.' Also home to rare noctilucent clouds (ice clouds that glow at twilight). Very difficult to study — too high for aircraft, too low for most satellites."
  },
  {
    name: "Stratosphere", range: "12–50 km", color: "#38bdf8",
    temp: "−60°C at the bottom to 0°C at the top (temperature increases with altitude here)",
    desc: "Home to the ozone layer (O₃), which absorbs 97–99% of the sun's harmful UV radiation. Unlike the troposphere, temperature here increases with altitude because ozone absorbs UV energy. Very stable — almost no weather, no turbulence. Commercial aircraft cruise at the lower stratosphere (~10–12 km)."
  },
  {
    name: "Troposphere", range: "0–12 km", color: "#7dd3fc",
    temp: "~15°C at surface to −60°C at the tropopause",
    desc: "The layer we live in. Contains ~75% of the atmosphere's total mass and almost all water vapour. ALL weather — clouds, rain, snow, wind, storms — happens here. Temperature decreases with altitude (~6.5°C per km). Thicker at the equator (~16 km) and thinner at the poles (~8 km)."
  },
];

const greenhouseSteps = [
  { step: "01", name: "Solar Radiation Arrives",  desc: "Short-wave radiation (visible light and UV) from the sun passes through the atmosphere largely unimpeded. About 30% is reflected back to space immediately by clouds, ice, and bright surfaces (high albedo)." },
  { step: "02", name: "Surface Absorbs & Warms",  desc: "Earth's surface (land and ocean) absorbs ~47% of incoming solar energy. It warms up and re-emits this energy as long-wave infrared radiation (heat) back toward space." },
  { step: "03", name: "GHGs Intercept Heat",      desc: "Greenhouse gas molecules (CO₂, CH₄, H₂O, N₂O) absorb the outgoing infrared radiation. They then re-emit it in all directions — including back down toward Earth's surface." },
  { step: "04", name: "Natural Warming Baseline", desc: "Without any greenhouse effect, Earth's average temperature would be −18°C. The natural greenhouse effect keeps it at a habitable +15°C — a difference of 33°C that makes life possible." },
  { step: "05", name: "Enhanced Greenhouse Effect",desc: "Human activities (burning fossil fuels, deforestation, agriculture) add extra CO₂, CH₄, and N₂O to the atmosphere. More GHGs = more heat trapped = global temperatures rise above the natural baseline." },
];

const ghgData = [
  { icon: "🏭", gas: "Carbon Dioxide (CO₂)",    source: "Burning coal, oil, and natural gas; cement production; deforestation", warming: "High warming potential. Stays in the atmosphere 300–1,000 years. The primary driver of current climate change." },
  { icon: "🐄", gas: "Methane (CH₄)",           source: "Livestock digestion, landfills, natural gas leaks, rice paddies, permafrost thaw", warming: "80× more potent than CO₂ over 20 years. Shorter-lived (~12 years) but punches far above its weight." },
  { icon: "🌾", gas: "Nitrous Oxide (N₂O)",     source: "Nitrogen fertilizers, livestock waste, combustion, industrial processes", warming: "265× more potent than CO₂ over 100 years. Stays in the atmosphere ~120 years. Mainly from agriculture." },
  { icon: "💧", gas: "Water Vapour (H₂O)",      source: "Natural evaporation from oceans, lakes, rivers — not directly from human activity", warming: "The most abundant greenhouse gas, responsible for ~50% of the natural greenhouse effect. Acts as a feedback amplifier: as Earth warms, more water evaporates, trapping more heat." },
];

// ← EDIT: Real NOAA Mauna Loa CO₂ annual mean data (ppm)
const co2ChartData = {
  labels: ['1960','1965','1970','1975','1980','1985','1990','1995','2000','2005','2010','2015','2020','2024'],
  data:   [ 317.0, 320.0, 325.7, 331.1, 338.7, 346.0, 354.4, 360.8, 369.5, 379.7, 389.9, 400.8, 412.5, 424.6],
};

const biomes = [
  {
    name: "Tundra", img: "https://images.unsplash.com/photo-1515984977862-1c7201ef324d?auto=format&fit=crop&w=600&q=80",
    climate: "Extremely cold and dry; ground permanently frozen below surface (permafrost)", flora: "Mosses, lichens, sedges, dwarf shrubs — no trees can survive",
    fauna: "Caribou, musk ox, arctic fox, snowy owl, polar bear", location: "Northern Canada (including northern Alberta/NWT), Alaska, Siberia, Greenland"
  },
  {
    name: "Boreal Forest (Taiga)", img: "https://images.unsplash.com/photo-1695890384188-c12d6444ede0?auto=format&fit=crop&w=600&q=80",
    climate: "Cold winters (−40°C), cool short summers; moderate snowfall", flora: "Black spruce, white spruce, fir, pine, larch; forms largest terrestrial biome on Earth",
    fauna: "Moose, black bear, lynx, gray wolf, beaver, boreal chickadee", location: "Northern Alberta, BC, Saskatchewan, Manitoba; most of Canada's north"
  },
  {
    name: "Temperate Grassland", img: "https://images.unsplash.com/photo-1526797072-6f5b4aec8421?auto=format&fit=crop&w=600&q=80",
    climate: "Cold winters, hot dry summers; low rainfall (25–75 cm/year); periodic fires", flora: "Grasses (fescue, buffalo grass, bluestem), wildflowers; few or no trees",
    fauna: "Bison, pronghorn, prairie dogs, coyotes, ferruginous hawks, burrowing owls", location: "Southern Alberta prairies; Great Plains of North America"
  },
  {
    name: "Temperate Forest", img: "https://images.unsplash.com/photo-1695890385992-920f6917d256?auto=format&fit=crop&w=600&q=80",
    climate: "Four distinct seasons; moderate temperatures; regular precipitation year-round", flora: "Deciduous trees (oak, maple, beech, birch) or mixed deciduous-conifer",
    fauna: "White-tailed deer, black bear, red fox, wild turkey, migratory birds", location: "Eastern Canada and US, Pacific coast rainforests, Western Europe"
  },
  {
    name: "Desert", img: "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&w=600&q=80",
    climate: "Very low precipitation (<25 cm/year); extreme temperature swings between day and night", flora: "Cacti, succulents, drought-adapted shrubs; seeds can lie dormant for years",
    fauna: "Rattlesnakes, lizards, camels, scorpions, roadrunners, kangaroo rats", location: "Sahara (Africa), Arabian Desert, Atacama (South America), Sonoran (North America)"
  },
  {
    name: "Tropical Rainforest", img: "https://images.unsplash.com/photo-1560851691-ebb64b584d3d?auto=format&fit=crop&w=600&q=80",
    climate: "Hot (25–30°C) and very wet year-round; >200 cm of annual rainfall; high humidity", flora: "Extremely dense canopy (4 layers); epiphytes, ferns, orchids; highest plant diversity on Earth",
    fauna: "Jaguars, sloths, toucans, poison dart frogs, howler monkeys, army ants", location: "Amazon basin (Brazil), Congo (Africa), Southeast Asia (Borneo, Sumatra)"
  },
];

const albertaZones = [
  { emoji: "🌲", zone: "Boreal Forest",              desc: "Covers ~60% of Alberta — the largest natural region in the province. Home to the Athabasca oil sands, boreal caribou, wolves, moose, and extensive wetlands. Characterized by long, harsh winters and short summers." },
  { emoji: "⛰️", zone: "Rocky Mountain Foothills",  desc: "A transition zone between the prairies and the Rockies. Lodgepole pine, aspen, elk, and bighorn sheep. The foothills are where chinook winds descend and warm. Important for biodiversity and watershed protection." },
  { emoji: "🏔️", zone: "Rocky Mountains",            desc: "Banff and Jasper National Parks sit here. Multiple elevation zones (montane, subalpine, alpine tundra above treeline). Glaciers are retreating rapidly — the Columbia Icefield has lost ~25% of its ice since 1919." },
  { emoji: "🌾", zone: "Grassland & Parkland",        desc: "Southern and central Alberta. Driest part of the province. Short-grass and mixed-grass prairie. Prime farming and ranching land. Species at risk: swift fox, burrowing owl, greater sage-grouse. Chinook country." },
];

const udRealWorld = [
  { icon: "💨", title: "Chinook Winds",               desc: "Alberta's famous 'snow eater' winds are caused by Pacific air rising over the Rockies, losing moisture, then descending and warming rapidly on the eastern side. Temperatures can jump 20°C in a few hours — a direct demonstration of adiabatic heating (energy flow in the atmosphere)." },
  { icon: "🛢️", title: "Oil Sands & Greenhouse Gases", desc: "Alberta's oil sands are one of the world's largest and most carbon-intensive oil deposits. Extraction and upgrading release significant CO₂ and methane, directly contributing to the enhanced greenhouse effect studied in this unit. Alberta is Canada's largest provincial GHG emitter." },
  { icon: "🏔️", title: "Retreating Alberta Glaciers",  desc: "The Columbia Icefield in Jasper National Park has shrunk dramatically — the Athabasca Glacier alone has retreated over 1.5 km since 1900. Scientists project most Alberta glaciers will be largely gone by 2100 if current warming trends continue. This affects river flow, drinking water, and downstream ecosystems." },
];

const udMisconceptions = [
  {
    claim: "Weather and climate are the same thing.",
    fix: "'Climate is what you expect; weather is what you get.' A single cold day in July doesn't disprove climate change — you'd need to look at long-term temperature trends over decades, not individual weather events."
  },
  {
    claim: "The greenhouse effect is entirely man-made and bad.",
    fix: "The natural greenhouse effect is essential for life. Without any GHGs, Earth's average surface temperature would be −18°C instead of +15°C. The problem is the enhanced greenhouse effect from human-added emissions, which is warming Earth faster than natural systems can adapt."
  },
  {
    claim: "CO₂ is the only greenhouse gas that matters.",
    fix: "Methane (CH₄) is 80× more potent than CO₂ over 20 years; nitrous oxide is 265× more potent over 100 years. Water vapour is actually the most abundant GHG overall — but it acts as a feedback rather than a direct human-caused driver."
  },
  {
    claim: "The ozone hole and the greenhouse effect are the same problem.",
    fix: "These are two separate atmospheric issues. The ozone layer (in the stratosphere) blocks harmful UV radiation. Greenhouse gases trap heat (infrared) in the troposphere. They're both atmospheric problems caused by human emissions, but through completely different mechanisms."
  },
  {
    claim: "If it's cold this winter, global warming isn't real.",
    fix: "Global warming refers to the long-term average increase in global temperatures, measured across decades. Local or short-term cold events are weather — they occur within a climate that is still warming overall. In fact, climate change can make some cold events more extreme by disrupting the polar vortex."
  },
];

const udGlossary = [
  { term: "Climate",           def: "The long-term average pattern of weather in a region, measured over at least 30 years." },
  { term: "Weather",           def: "The short-term state of the atmosphere (temperature, precipitation, wind, humidity) at a specific place and time." },
  { term: "Biome",             def: "A large geographic region characterized by a specific climate and a distinct community of plants and animals adapted to it." },
  { term: "Greenhouse Gas",    def: "A gas that absorbs and re-emits infrared (heat) radiation, trapping warmth in the atmosphere. Key GHGs: CO₂, CH₄, H₂O, N₂O." },
  { term: "Albedo",            def: "The fraction of incoming solar radiation reflected by a surface. Fresh snow: ~0.9 (very high). Dark ocean: ~0.06 (very low)." },
  { term: "Solar constant",    def: "The average intensity of solar radiation arriving at Earth's outer atmosphere: 1,361 W/m²." },
  { term: "Ozone layer",       def: "A region of the stratosphere with high ozone (O₃) concentration that absorbs 97–99% of UV-B and UV-C radiation from the sun." },
  { term: "Permafrost",        def: "Ground that remains at or below 0°C for at least two consecutive years. Found in northern Alberta and Canada's Arctic. Contains vast stores of carbon." },
  { term: "Chinook",           def: "A warm, dry downslope wind that forms when Pacific air crosses the Rocky Mountains and descends on Alberta's eastern plains." },
  { term: "Tropopause",        def: "The boundary between the troposphere and stratosphere, where temperature stops decreasing with altitude and begins increasing." },
  { term: "Carbon sink",       def: "A natural reservoir that absorbs more carbon from the atmosphere than it releases. Examples: forests, oceans, peatlands." },
  { term: "Feedback loop",     def: "When a change triggers effects that either amplify it (positive feedback) or reduce it (negative feedback). Example: warming melts ice → less albedo → more warming (positive feedback)." },
  { term: "Albedo-ice feedback",def:"As Earth warms, white ice melts and exposes darker ocean or land, which absorbs more solar energy, causing more warming — a self-reinforcing (positive) feedback loop." },
  { term: "ppm",               def: "Parts per million. A unit used to measure gas concentrations in the atmosphere. 424 ppm CO₂ = 424 CO₂ molecules per million air molecules." },
];

// ─── Render: Stat Cards ───────────────────────────────────────────────────────
const statGrid = document.getElementById('ud-stats');
udStats.forEach(s => {
  statGrid.innerHTML += `
    <div class="stat-card">
      <span class="stat-icon">${s.icon}</span>
      <span class="stat-value">${s.value}</span>
      <span class="stat-label">${s.label}</span>
    </div>`;
});

// ─── Render: Atmosphere Layers ────────────────────────────────────────────────
const atmoEl  = document.getElementById('atmo-layers');
const atmoInfo = document.getElementById('atmo-info');

atmosphereLayers.forEach(layer => {
  const div = document.createElement('div');
  div.className = 'atmo-layer';
  div.style.background = layer.color;
  div.style.color = '#0f172a';
  div.innerHTML = `<span class="atmo-name">${layer.name}</span><span class="atmo-range">${layer.range}</span>`;
  div.addEventListener('click', () => {
    document.querySelectorAll('.atmo-layer').forEach(l => l.classList.remove('atmo-active'));
    div.classList.add('atmo-active');
    atmoInfo.innerHTML = `
      <h3 class="atmo-info-name" style="color:${layer.color}">${layer.name}</h3>
      <p class="atmo-info-range"><strong>Altitude:</strong> ${layer.range}</p>
      <p class="atmo-info-temp"><strong>Temperature:</strong> ${layer.temp}</p>
      <p class="atmo-info-desc">${layer.desc}</p>`;
  });
  atmoEl.appendChild(div);
});

// ─── Render: Energy Budget ────────────────────────────────────────────────────
document.getElementById('energy-budget').innerHTML = `
  <div class="budget-grid">
    <div class="budget-item budget-item--in">
      <div class="budget-bar" style="height:100%">100%</div>
      <p class="budget-label">Solar energy arriving at atmosphere</p>
    </div>
    <div class="budget-item budget-item--reflect">
      <div class="budget-bar" style="height:30%">30%</div>
      <p class="budget-label">Reflected by clouds, ice, and bright surfaces</p>
    </div>
    <div class="budget-item budget-item--atmo">
      <div class="budget-bar" style="height:23%">23%</div>
      <p class="budget-label">Absorbed by the atmosphere and clouds</p>
    </div>
    <div class="budget-item budget-item--surface">
      <div class="budget-bar" style="height:47%">47%</div>
      <p class="budget-label">Absorbed by Earth's surface (land and ocean)</p>
    </div>
  </div>
  <p class="budget-note">The 47% absorbed by the surface warms the land and oceans. This energy is then re-emitted as infrared (heat) radiation — which greenhouse gases intercept and partially redirect back toward Earth, creating the greenhouse effect.</p>`;

// ─── Render: Greenhouse Effect Flow ──────────────────────────────────────────
const ghFlow = document.getElementById('greenhouse-flow');
greenhouseSteps.forEach((s, i) => {
  ghFlow.innerHTML += `
    <div class="process-step">
      <div class="step-badge">${s.step}</div>
      <h3 class="step-name">${s.name}</h3>
      <p class="step-desc">${s.desc}</p>
    </div>
    ${i < greenhouseSteps.length - 1 ? '<div class="step-connector" aria-hidden="true">→</div>' : ''}`;
});

// ─── Render: GHG Cards ────────────────────────────────────────────────────────
const ghgGrid = document.getElementById('ghg-grid');
ghgData.forEach(g => {
  ghgGrid.innerHTML += `
    <div class="ghg-card">
      <span class="ghg-icon">${g.icon}</span>
      <h3 class="ghg-name">${g.gas}</h3>
      <p class="ghg-row"><strong>Sources:</strong> ${g.source}</p>
      <p class="ghg-row"><strong>Warming impact:</strong> ${g.warming}</p>
    </div>`;
});

// ─── Render: CO₂ Chart ────────────────────────────────────────────────────────
const ctx = document.getElementById('co2-chart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: co2ChartData.labels,
    datasets: [{
      label: 'Atmospheric CO₂ (ppm) — NOAA Mauna Loa',
      data: co2ChartData.data,
      borderColor: '#f97316',
      backgroundColor: 'rgba(249,115,22,0.08)',
      fill: true,
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
      pointBackgroundColor: '#f97316',
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { color: '#ffffff' }
      },
      tooltip: {
        callbacks: {
          label: ctx => `${ctx.parsed.y} ppm`
        }
      }
    },
    scales: {
      y: {
        min: 310,
        title: { display: true, text: 'CO₂ concentration (ppm)', color: '#ffffff' },
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255,255,255,0.1)' }
      },
      x: {
        title: { display: true, text: 'Year', color: '#ffffff' },
        ticks: { color: '#ffffff' },
        grid: { color: 'rgba(255,255,255,0.1)' }
      }
    }
  }
});

// ─── Render: Biome Cards ──────────────────────────────────────────────────────
const biomeGrid = document.getElementById('biome-grid');
biomes.forEach(b => {
  biomeGrid.innerHTML += `
    <article class="biome-card">
      <div class="biome-img-wrap">
        <img src="${b.img}" alt="${b.name} landscape" loading="lazy">
      </div>
      <div class="biome-body">
        <h3 class="biome-name">${b.name}</h3>
        <p class="biome-row"><strong>Climate:</strong> ${b.climate}</p>
        <p class="biome-row"><strong>Plants:</strong> ${b.flora}</p>
        <p class="biome-row"><strong>Animals:</strong> ${b.fauna}</p>
        <p class="biome-row"><strong>Found in:</strong> ${b.location}</p>
      </div>
    </article>`;
});

// ─── Render: Alberta Climate Zones ───────────────────────────────────────────
const albertaGrid = document.getElementById('alberta-grid');
albertaZones.forEach(z => {
  albertaGrid.innerHTML += `
    <div class="alberta-card">
      <span class="alberta-emoji">${z.emoji}</span>
      <h3 class="alberta-zone">${z.zone}</h3>
      <p class="alberta-desc">${z.desc}</p>
    </div>`;
});

// ─── Render: Real-World Cards ─────────────────────────────────────────────────
const rwGrid = document.getElementById('ud-rw');
udRealWorld.forEach(r => {
  rwGrid.innerHTML += `
    <article class="rw-card">
      <span class="rw-icon">${r.icon}</span>
      <h3 class="rw-title">${r.title}</h3>
      <p class="rw-desc">${r.desc}</p>
    </article>`;
});

// ─── Render: Misconceptions ───────────────────────────────────────────────────
const callouts = document.getElementById('ud-callouts');
udMisconceptions.forEach(m => {
  callouts.innerHTML += `
    <div class="callout">
      <p class="callout-claim"><span class="callout-x">✗</span> <em>"${m.claim}"</em></p>
      <p class="callout-fix"><span class="callout-check">✓</span> ${m.fix}</p>
    </div>`;
});

// ─── Render: Glossary ─────────────────────────────────────────────────────────
const glossaryGrid = document.getElementById('ud-glossary');
udGlossary.forEach(g => {
  glossaryGrid.innerHTML += `
    <div class="glossary-card">
      <dt class="glossary-term">${g.term}</dt>
      <dd class="glossary-def">${g.def}</dd>
    </div>`;
});
