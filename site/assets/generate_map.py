"""Generate accurate Odisha district SVG from GeoJSON data."""
import json
import math

INPUT = '/home/anshuman/Documents/JAGA/jaga/site/assets/odisha-districts.geojson'
OUTPUT = '/home/anshuman/Documents/JAGA/jaga/site/assets/odisha-map.svg'

# Load full India GeoJSON
with open(INPUT) as f:
    data = json.load(f)

# Filter Odisha districts (NAME_1 == 'Orissa' or 'Odisha')
odisha_features = []
for feat in data['features']:
    state = feat['properties'].get('NAME_1', '')
    if state.lower() in ('orissa', 'odisha'):
        odisha_features.append(feat)

print(f"Found {len(odisha_features)} Odisha districts:")
for feat in odisha_features:
    print(f"  - {feat['properties']['NAME_2']}")

# Collect all coordinates to compute bounding box
all_coords = []
for feat in odisha_features:
    geom = feat['geometry']
    def extract_coords(geom):
        coords = []
        if geom['type'] == 'Polygon':
            for ring in geom['coordinates']:
                coords.extend(ring)
        elif geom['type'] == 'MultiPolygon':
            for polygon in geom['coordinates']:
                for ring in polygon:
                    coords.extend(ring)
        return coords
    all_coords.extend(extract_coords(geom))

lons = [c[0] for c in all_coords]
lats = [c[1] for c in all_coords]
min_lon, max_lon = min(lons), max(lons)
min_lat, max_lat = min(lats), max(lats)

print(f"Bounding box: lon [{min_lon:.2f}, {max_lon:.2f}], lat [{min_lat:.2f}, {max_lat:.2f}]")

# SVG dimensions
SVG_W = 800
SVG_H = 750
PADDING = 30

# Projection: simple Mercator-like (lon/lat to SVG)
def project(lon, lat):
    x = PADDING + (lon - min_lon) / (max_lon - min_lon) * (SVG_W - 2*PADDING)
    y = PADDING + (max_lat - lat) / (max_lat - min_lat) * (SVG_H - 2*PADDING)  # flip Y
    return round(x, 1), round(y, 1)

# Simplify a polygon ring using Douglas-Peucker-like approach
def simplify_ring(coords, tolerance=0.015):
    """Simple point reduction: keep every Nth point + always keep first/last."""
    if len(coords) <= 4:
        return coords
    # Radial distance simplification
    simplified = [coords[0]]
    for i in range(1, len(coords)):
        dx = coords[i][0] - simplified[-1][0]
        dy = coords[i][1] - simplified[-1][1]
        if math.sqrt(dx*dx + dy*dy) >= tolerance:
            simplified.append(coords[i])
    # Ensure closed
    if simplified[-1] != simplified[0]:
        simplified.append(simplified[0])
    return simplified

# Name normalization for data-district attribute
def normalize_name(name):
    replacements = {
        'Anugul': 'angul',
        'Baleshwar': 'balasore',
        'Balangir': 'balangir',
        'Bargarh': 'bargarh',
        'Baudh': 'boudh',
        'Bhadrak': 'bhadrak',
        'Cuttack': 'cuttack',
        'Debagarh': 'deogarh',
        'Deogarh': 'deogarh',
        'Dhenkanal': 'dhenkanal',
        'Gajapati': 'gajapati',
        'Ganjam': 'ganjam',
        'Jagatsinghapur': 'jagatsinghpur',
        'Jagatsinghpur': 'jagatsinghpur',
        'Jajpur': 'jajpur',
        'Jharsuguda': 'jharsuguda',
        'Kalahandi': 'kalahandi',
        'Kandhamal': 'kandhamal',
        'Kendrapara': 'kendrapada',
        'Kendrapada': 'kendrapada',
        'Keonjhar': 'keonjhar',
        'Kendujhar': 'keonjhar',
        'Khordha': 'khordha',
        'Khurda': 'khordha',
        'Koraput': 'koraput',
        'Malkangiri': 'malkangiri',
        'Mayurbhanj': 'mayurbhanj',
        'Nabarangapur': 'nabarangpur',
        'Nabarangpur': 'nabarangpur',
        'Nayagarh': 'nayagarh',
        'Nuapada': 'nuapada',
        'Puri': 'puri',
        'Rayagada': 'rayagada',
        'Sambalpur': 'sambalpur',
        'Sonapur': 'subarnapur',
        'Subarnapur': 'subarnapur',
        'Sonepur': 'subarnapur',
        'Sundargarh': 'sundargarh',
        'Sundergarh': 'sundargarh',
    }
    return replacements.get(name, name.lower().replace(' ', ''))

# Compute centroids for labels
def compute_centroid(coords_list):
    all_pts = []
    for ring in coords_list:
        all_pts.extend(ring[:-1])  # exclude closing point
    if not all_pts:
        return (0, 0)
    cx = sum(p[0] for p in all_pts) / len(all_pts)
    cy = sum(p[1] for p in all_pts) / len(all_pts)
    return (cx, cy)

# Build SVG paths
svg_paths = []
svg_labels = []

for feat in odisha_features:
    name = feat['properties']['NAME_2']
    district_id = normalize_name(name)
    geom = feat['geometry']

    path_data = []
    all_rings = []

    if geom['type'] == 'Polygon':
        polygons = [geom['coordinates']]
    else:  # MultiPolygon
        polygons = geom['coordinates']

    for polygon in polygons:
        for ring in polygon:
            simplified = simplify_ring(ring)
            all_rings.append(simplified)
            if len(simplified) < 3:
                continue
            pts = [project(lon, lat) for lon, lat in simplified]
            d = f"M{pts[0][0]},{pts[0][1]}"
            for px, py in pts[1:]:
                d += f"L{px},{py}"
            d += "Z"
            path_data.append(d)

    if path_data:
        full_d = " ".join(path_data)
        svg_paths.append(f'  <path class="district-path" data-district="{district_id}" d="{full_d}"/>')

        # Centroid for label
        cent_lon, cent_lat = compute_centroid([r for r in all_rings])
        cx, cy = project(cent_lon, cent_lat)
        svg_labels.append(f'    <text x="{cx}" y="{cy}">{name}</text>')

# Build SVG
svg = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {SVG_W} {SVG_H}" id="odisha-map" role="img" aria-label="Interactive map of Odisha districts">
  <title>Odisha District Map — Dialect Regions</title>
  <defs>
    <filter id="glow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <!-- District boundaries -->
{chr(10).join(svg_paths)}
  <!-- District name labels -->
  <g font-family="Inter, sans-serif" font-size="9" fill="#9A8E82" text-anchor="middle" pointer-events="none">
{chr(10).join(svg_labels)}
  </g>
</svg>'''

with open(OUTPUT, 'w') as f:
    f.write(svg)

print(f"\nSVG written to {OUTPUT}")
print(f"File size: {len(svg)} bytes")
print(f"Districts rendered: {len(svg_paths)}")
