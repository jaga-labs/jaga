// ===== Interactive Odisha Dialect Map =====
document.addEventListener('mapLoaded', () => {

  // --- Dialect Database ---
  const dialectData = {
    // Central / Coastal — Standard Odia
    'cuttack':        { name: 'Cuttack', region: 'central', dialect: 'Standard Odia (Mughalbandi)', family: 'Indo-Aryan', speakers: '~26 lakh', features: 'Administrative and literary standard; basis for formal Odia.' },
    'khordha':        { name: 'Khordha', region: 'central', dialect: 'Standard Odia (Mughalbandi)', family: 'Indo-Aryan', speakers: '~27 lakh', features: 'Capital region dialect; used in media and education.' },
    'puri':           { name: 'Puri', region: 'central', dialect: 'Standard Odia (Mughalbandi)', family: 'Indo-Aryan', speakers: '~17 lakh', features: 'Temple city; strong literary and devotional vocabulary.' },
    'jajpur':         { name: 'Jajpur', region: 'central', dialect: 'Standard Odia (Mughalbandi)', family: 'Indo-Aryan', speakers: '~18 lakh', features: 'Historical capital region; archaic Odia influences.' },
    'jagatsinghpur':  { name: 'Jagatsinghpur', region: 'central', dialect: 'Standard Odia (Mughalbandi)', family: 'Indo-Aryan', speakers: '~11 lakh', features: 'Coastal dialect with maritime vocabulary.' },
    'kendrapada':     { name: 'Kendrapada', region: 'central', dialect: 'Standard Odia (Mughalbandi)', family: 'Indo-Aryan', speakers: '~14 lakh', features: 'Delta region; distinct intonation patterns.' },
    'dhenkanal':      { name: 'Dhenkanal', region: 'central', dialect: 'Standard Odia (Mughalbandi)', family: 'Indo-Aryan', speakers: '~12 lakh', features: 'Transitional zone with some western influences.' },
    'angul':          { name: 'Angul', region: 'central', dialect: 'Standard Odia (Mughalbandi)', family: 'Indo-Aryan', speakers: '~13 lakh', features: 'Industrial belt; mixed urban-rural speech patterns.' },
    'nayagarh':       { name: 'Nayagarh', region: 'central', dialect: 'Standard Odia (Mughalbandi)', family: 'Indo-Aryan', speakers: '~9 lakh', features: 'Interior district; conservative Odia pronunciation.' },

    // Western — Sambalpuri / Kosali
    'sambalpur':      { name: 'Sambalpur', region: 'western', dialect: 'Sambalpuri (Kosali)', family: 'Indo-Aryan', speakers: '~10 lakh', features: 'Heart of Kosali identity; unique vowel harmony and verb forms.' },
    'bargarh':        { name: 'Bargarh', region: 'western', dialect: 'Sambalpuri (Kosali)', family: 'Indo-Aryan', speakers: '~15 lakh', features: 'Textile weaving region; rich folk vocabulary.' },
    'jharsuguda':     { name: 'Jharsuguda', region: 'western', dialect: 'Sambalpuri (Kosali)', family: 'Indo-Aryan', speakers: '~6 lakh', features: 'Industrial area; Chhattisgarhi contact influences.' },
    'subarnapur':     { name: 'Subarnapur', region: 'western', dialect: 'Sambalpuri (Kosali)', family: 'Indo-Aryan', speakers: '~7 lakh', features: 'Also known as Sonepur; traditional Kosali heartland.' },
    'balangir':       { name: 'Balangir', region: 'western', dialect: 'Sambalpuri (Kosali)', family: 'Indo-Aryan', speakers: '~17 lakh', features: 'Large district; varied Sambalpuri sub-dialects.' },
    'nuapada':        { name: 'Nuapada', region: 'western', dialect: 'Sambalpuri (Kosali)', family: 'Indo-Aryan', speakers: '~6 lakh', features: 'Border district; Chhattisgarhi influences present.' },
    'boudh':          { name: 'Boudh', region: 'western', dialect: 'Sambalpuri (Kosali)', family: 'Indo-Aryan', speakers: '~4 lakh', features: 'Transitional between Sambalpuri and Standard Odia.' },
    'deogarh':        { name: 'Deogarh', region: 'western', dialect: 'Sambalpuri (Kosali)', family: 'Indo-Aryan', speakers: '~3 lakh', features: 'Hilly terrain; distinct phonetic characteristics.' },

    // Northern — Baleswari
    'balasore':       { name: 'Balasore', region: 'northern', dialect: 'Baleswari', family: 'Indo-Aryan', speakers: '~24 lakh', features: 'Coastal northern dialect; some Bengali phonetic influence.' },
    'bhadrak':        { name: 'Bhadrak', region: 'northern', dialect: 'Baleswari', family: 'Indo-Aryan', speakers: '~15 lakh', features: 'Transitional zone; mix of standard and northern features.' },
    'mayurbhanj':     { name: 'Mayurbhanj', region: 'northern', dialect: 'Baleswari', family: 'Indo-Aryan', speakers: '~25 lakh', features: 'Tribal-majority district; Santali and Ho language enclaves.' },

    // Southern — Ganjami
    'ganjam':         { name: 'Ganjam', region: 'southern', dialect: 'Ganjami', family: 'Indo-Aryan', speakers: '~35 lakh', features: 'Distinct phonetics; Telugu contact zone; rich literary tradition.' },
    'gajapati':       { name: 'Gajapati', region: 'southern', dialect: 'Ganjami', family: 'Indo-Aryan', speakers: '~6 lakh', features: 'Hill district; Sora and Saora tribal languages alongside Ganjami.' },

    // Southwestern — Desia
    'koraput':        { name: 'Koraput', region: 'southwestern', dialect: 'Desia', family: 'Indo-Aryan', speakers: '~14 lakh', features: 'Major Desia-speaking zone; 50+ tribal communities.' },
    'nabarangpur':    { name: 'Nabarangpur', region: 'southwestern', dialect: 'Desia', family: 'Indo-Aryan', speakers: '~12 lakh', features: 'High tribal population; Bhatri and Kuvi languages also spoken.' },
    'malkangiri':     { name: 'Malkangiri', region: 'southwestern', dialect: 'Desia', family: 'Indo-Aryan', speakers: '~6 lakh', features: 'Remote border district; Bonda and Didayi tribal languages.' },
    'rayagada':       { name: 'Rayagada', region: 'southwestern', dialect: 'Desia', family: 'Indo-Aryan', speakers: '~10 lakh', features: 'Dongria Kondh homeland; Kui tribal language presence.' },

    // Transition zones
    'sundargarh':     { name: 'Sundargarh', region: 'transition', dialect: 'Transitional (Sambalpuri / Sadri / Mundari)', family: 'Indo-Aryan + Munda', speakers: '~21 lakh', features: 'Multi-lingual zone; Mundari, Ho, Kurukh tribal languages.' },
    'kalahandi':      { name: 'Kalahandi', region: 'transition', dialect: 'Transitional (Sambalpuri / Standard Odia)', family: 'Indo-Aryan', speakers: '~16 lakh', features: 'Western-central transition; some Desia influence in south.' },
    'kandhamal':      { name: 'Kandhamal', region: 'transition', dialect: 'Transitional (Standard Odia / Kui)', family: 'Indo-Aryan + Dravidian', speakers: '~7 lakh', features: 'Kui (Dravidian) widely spoken alongside Odia.' },
    'keonjhar':       { name: 'Keonjhar', region: 'transition', dialect: 'Transitional (Standard Odia / Baleswari / Ho)', family: 'Indo-Aryan + Munda', speakers: '~18 lakh', features: 'Mining belt; Ho and Santali tribal language pockets.' },
  };

  const regionColors = {
    central:      'var(--map-central)',
    western:      'var(--map-western)',
    northern:     'var(--map-northern)',
    southern:     'var(--map-southern)',
    southwestern: 'var(--map-southwestern)',
    transition:   'var(--map-transition)'
  };

  const regionLabels = {
    central: 'Standard Odia (Central/Coastal)',
    western: 'Sambalpuri / Kosali (Western)',
    northern: 'Baleswari (Northern)',
    southern: 'Ganjami (Southern)',
    southwestern: 'Desia (Southwestern)',
    transition: 'Transitional Varieties'
  };

  // --- Initialize map interactions ---
  const mapSvg = document.getElementById('odisha-map');
  const tooltip = document.getElementById('map-tooltip');
  const detailPanel = document.getElementById('map-detail');

  if (!mapSvg) return;

  const paths = mapSvg.querySelectorAll('.district-path');

  // Apply region colors
  paths.forEach(path => {
    const id = path.getAttribute('data-district');
    const data = dialectData[id];
    if (data) {
      path.style.fill = regionColors[data.region] || 'var(--map-transition)';
    }
  });

  // Hover — tooltip
  paths.forEach(path => {
    path.addEventListener('mouseenter', (e) => {
      const id = path.getAttribute('data-district');
      const data = dialectData[id];
      if (!data) return;

      tooltip.innerHTML = `
        <h4>${data.name}</h4>
        <div class="dialect-name">${data.dialect}</div>
        <div class="dialect-meta">${data.family} · ${data.speakers}</div>
      `;
      tooltip.classList.add('visible');
      positionTooltip(e);
    });

    path.addEventListener('mousemove', positionTooltip);

    path.addEventListener('mouseleave', () => {
      tooltip.classList.remove('visible');
    });

    // Click — detail panel
    path.addEventListener('click', () => {
      const id = path.getAttribute('data-district');
      const data = dialectData[id];
      if (!data) return;

      // Remove previous active
      paths.forEach(p => p.classList.remove('active'));
      path.classList.add('active');

      detailPanel.innerHTML = `
        <h3>${data.name} District</h3>
        <p><strong>Dialect:</strong> ${data.dialect}</p>
        <p><strong>Linguistic Family:</strong> ${data.family}</p>
        <p><strong>Approx. Speakers:</strong> ${data.speakers}</p>
        <p><strong>Notable Features:</strong> ${data.features}</p>
        <p style="margin-top:12px; font-size:0.82rem; color:var(--text-light);">
          Source: Census of India, Linguistic Survey of India, CIIL Mysore
        </p>
      `;
      detailPanel.classList.add('visible');
      detailPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  function positionTooltip(e) {
    const rect = mapSvg.closest('.map-container').getBoundingClientRect();
    let x = e.clientX - rect.left + 16;
    let y = e.clientY - rect.top - 10;
    // Keep tooltip in view
    if (x + 260 > rect.width) x = e.clientX - rect.left - 270;
    if (y < 0) y = 10;
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
  }

  // --- Build legend ---
  const legendEl = document.getElementById('map-legend');
  if (legendEl) {
    Object.entries(regionLabels).forEach(([key, label]) => {
      const item = document.createElement('div');
      item.className = 'legend-item';
      item.innerHTML = `<span class="legend-swatch" style="background:${regionColors[key]}"></span>${label}`;
      legendEl.appendChild(item);
    });
  }

});
