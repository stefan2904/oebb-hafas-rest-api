const docs = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>oebb.transport.rest | Documentation</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Merriweather:wght@700&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg: #f5f6f8;
            --paper: #ffffff;
            --ink: #1c2933;
            --ink-soft: #4d5f6c;
            --line: #dce3e8;
            --line-strong: #c8d2da;
            --accent: #e2001a;
            --accent-soft: rgba(226, 0, 26, 0.08);
            --code-bg: #10161b;
            --code-fg: #dce8f3;
            --radius: 14px;
            --shadow: 0 10px 30px rgba(15, 28, 40, 0.08);
        }

        * {
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            margin: 0;
            background: var(--bg);
            color: var(--ink);
            font-family: 'Source Sans 3', sans-serif;
            font-size: 19px;
            line-height: 1.66;
        }

        .top {
            border-bottom: 1px solid var(--line-strong);
            background: #fff;
            position: sticky;
            top: 0;
            z-index: 20;
        }

        .top-inner {
            width: min(1240px, calc(100% - 2rem));
            margin: 0 auto;
            min-height: 64px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 0.7rem;
            text-decoration: none;
            color: var(--ink);
            font-weight: 700;
        }

        .brand-mark {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: linear-gradient(145deg, var(--accent) 0%, #ff4b61 100%);
            position: relative;
            box-shadow: 0 6px 14px rgba(226, 0, 26, 0.24);
        }

        .brand-mark::before,
        .brand-mark::after {
            content: '';
            position: absolute;
            left: 6px;
            right: 6px;
            height: 2px;
            background: rgba(255, 255, 255, 0.95);
            border-radius: 999px;
        }

        .brand-mark::before { top: 11px; }
        .brand-mark::after { top: 18px; }

        .top-links {
            display: flex;
            gap: 0.6rem;
            flex-wrap: wrap;
        }

        .top-links a {
            text-decoration: none;
            color: var(--ink-soft);
            padding: 0.35rem 0.65rem;
            border-radius: 8px;
            border: 1px solid transparent;
            font-weight: 600;
            font-size: 0.88rem;
        }

        .top-links a:hover {
            border-color: var(--line-strong);
            color: var(--ink);
            background: #fafcfd;
        }

        .shell {
            width: min(1240px, calc(100% - 2rem));
            margin: 1.2rem auto 2rem;
            display: grid;
            grid-template-columns: 320px minmax(0, 1fr);
            gap: 1rem;
        }

        .toc {
            position: sticky;
            top: 84px;
            align-self: start;
            background: var(--paper);
            border: 1px solid var(--line);
            border-radius: var(--radius);
            padding: 1rem;
            box-shadow: var(--shadow);
        }

        .toc h2 {
            margin: 0 0 0.6rem;
            font-size: 0.95rem;
            color: var(--ink-soft);
            text-transform: uppercase;
            letter-spacing: 0.08em;
        }

        .toc a {
            display: block;
            text-decoration: none;
            color: var(--ink);
            padding: 0.42rem 0.5rem;
            border-radius: 8px;
            font-size: 0.97rem;
            line-height: 1.35;
        }

        .toc a:hover {
            background: var(--accent-soft);
        }

        .content {
            display: flex;
            flex-direction: column;
            gap: 0.95rem;
        }

        .hero {
            background: var(--paper);
            border: 1px solid var(--line);
            border-radius: var(--radius);
            padding: 1.35rem 1.3rem;
            box-shadow: var(--shadow);
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 7px;
            background: linear-gradient(var(--accent), #ff4b61);
        }

        .eyebrow {
            margin: 0;
            color: var(--ink-soft);
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-size: 0.74rem;
            font-weight: 700;
        }

        h1,
        h2,
        h3,
        h4 {
            line-height: 1.24;
            color: #101b24;
        }

        h1,
        h2 {
            font-family: 'Merriweather', serif;
        }

        h1 {
            margin: 0.4rem 0 0.6rem;
            font-size: clamp(1.9rem, 4vw, 2.7rem);
        }

        h2 {
            margin: 0;
            font-size: clamp(1.36rem, 2.5vw, 1.74rem);
        }

        h3 {
            margin: 0;
            font-size: 1.22rem;
        }

        h4 {
            margin: 0;
            font-size: 1.03rem;
        }

        p {
            margin: 0.4rem 0 0;
            color: var(--ink-soft);
            max-width: 78ch;
        }

        .hero-actions {
            margin-top: 0.85rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
        }

        .btn {
            text-decoration: none;
            border-radius: 8px;
            padding: 0.52rem 0.8rem;
            font-weight: 700;
            font-size: 0.9rem;
            border: 1px solid transparent;
        }

        .btn.primary {
            background: var(--accent);
            color: #fff;
        }

        .btn.secondary {
            background: #fff;
            border-color: var(--line-strong);
            color: var(--ink);
        }

        .section {
            background: var(--paper);
            border: 1px solid var(--line);
            border-radius: var(--radius);
            padding: 1.15rem;
            box-shadow: var(--shadow);
        }

        .meta {
            margin-top: 0.75rem;
            display: flex;
            flex-wrap: wrap;
            gap: 0.45rem;
        }

        .chip {
            font-size: 0.82rem;
            font-weight: 700;
            background: #f7fafc;
            border: 1px solid var(--line-strong);
            color: #263746;
            border-radius: 999px;
            padding: 0.2rem 0.6rem;
        }

        .analysis-grid {
            margin-top: 0.8rem;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.7rem;
        }

        .analysis-item {
            border: 1px solid var(--line);
            border-radius: 10px;
            padding: 0.7rem;
            background: #fbfcfd;
        }

        .flow {
            margin-top: 0.75rem;
            border: 1px dashed var(--line-strong);
            border-radius: 10px;
            padding: 0.7rem;
            background: #fafbfc;
            font-size: 0.95rem;
            color: var(--ink-soft);
        }

        .endpoint {
            margin-top: 0.9rem;
            border: 1px solid var(--line);
            border-radius: 10px;
            overflow: hidden;
        }

        .endpoint-top {
            background: #f8fbfd;
            border-bottom: 1px solid var(--line);
            padding: 0.55rem 0.7rem;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            flex-wrap: wrap;
        }

        .method {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.77rem;
            font-weight: 700;
            color: #00536a;
            background: #def2f8;
            border-radius: 6px;
            padding: 0.16rem 0.4rem;
        }

        .path {
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.82rem;
            color: #213648;
            overflow-wrap: anywhere;
        }

        .endpoint-body {
            padding: 0.72rem;
        }

        table {
            margin-top: 0.5rem;
            width: 100%;
            border-collapse: collapse;
            font-size: 0.94rem;
        }

        th,
        td {
            text-align: left;
            padding: 0.45rem;
            border-bottom: 1px solid var(--line);
            vertical-align: top;
        }

        th {
            background: #f7f9fb;
            color: #273745;
        }

        .code {
            margin-top: 0.55rem;
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid #1e2c36;
        }

        pre {
            margin: 0;
            padding: 0.8rem;
            background: var(--code-bg);
            color: var(--code-fg);
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.78rem;
            line-height: 1.65;
            overflow-x: auto;
        }

        .footer {
            color: var(--ink-soft);
            font-size: 0.9rem;
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .footer a {
            color: #2d4658;
        }

        @media (max-width: 1060px) {
            .shell {
                grid-template-columns: 1fr;
            }

            .toc {
                position: static;
            }

            .toc .links {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 0.25rem;
            }
        }

        @media (max-width: 760px) {
            body {
                font-size: 18px;
            }

            .shell,
            .top-inner {
                width: min(1240px, calc(100% - 1rem));
            }

            .analysis-grid,
            .toc .links {
                grid-template-columns: 1fr;
            }

            .section,
            .hero,
            .toc {
                padding: 0.9rem;
            }
        }
    </style>
</head>
<body>
    <header class="top">
        <div class="top-inner">
            <a class="brand" href="/">
                <span class="brand-mark" aria-hidden="true"></span>
                <span>oebb.transport.rest docs</span>
            </a>
            <nav class="top-links">
                <a href="/">Home</a>
                <a href="/api">API Base</a>
                <a href="https://github.com/nocontent06/oebb.transport.rest" target="_blank" rel="noreferrer">GitHub</a>
            </nav>
        </div>
    </header>

    <div class="shell">
        <aside class="toc">
            <h2>On this page</h2>
            <div class="links">
                <a href="#overview">Overview</a>
                <a href="#analysis">API Function Analysis</a>
                <a href="#quickstart">Quick Start</a>
                <a href="#endpoints">Endpoint Reference</a>
                <a href="#examples">Examples</a>
            </div>
        </aside>

        <main class="content">
            <section class="hero" id="overview">
                <p class="eyebrow">Readable reference</p>
                <h1>OEBB Transport API Documentation</h1>
                <p>This API wraps HAFAS OEBB data behind predictable REST endpoints. Use it for station search, departures, arrivals, journeys, trip details, and radar. The documentation below focuses on clarity and practical integration patterns.</p>
                <div class="hero-actions">
                    <a class="btn primary" href="#endpoints">Jump to endpoints</a>
                    <a class="btn secondary" href="/api">Open raw API</a>
                </div>
            </section>

            <section class="section" id="analysis">
                <h2>API Function Analysis</h2>
                <p>The server flow is compact: create profile-aware HAFAS client, generate REST handlers, mount handlers under <strong>/api</strong>. This architecture keeps behavior consistent while exposing many transport functions.</p>

                <div class="analysis-grid">
                    <article class="analysis-item">
                        <h4>1) HAFAS Client Initialization</h4>
                        <p><strong>createHafas(dbProfile, userAgent)</strong> configures a client for OEBB semantics such as station identifiers, line products, and request conventions.</p>
                    </article>
                    <article class="analysis-item">
                        <h4>2) REST Factory Mapping</h4>
                        <p><strong>createApi(hafas, config)</strong> maps HAFAS capabilities like journeys, departures, and radar to HTTP routes with normalized JSON output.</p>
                    </article>
                    <article class="analysis-item">
                        <h4>3) Route Mounting</h4>
                        <p><strong>expApp.use('/api', api)</strong> groups all transport endpoints under one base path, simplifying reverse proxies and integration setup.</p>
                    </article>
                    <article class="analysis-item">
                        <h4>4) Static + API Separation</h4>
                        <p>Routes <strong>/</strong> and <strong>/docs</strong> serve human-readable pages while <strong>/api</strong> remains machine-oriented JSON.</p>
                    </article>
                </div>

                <div class="flow">Request flow: client -> Express route on /api -> hafas-rest-api handler -> HAFAS OEBB profile request -> normalized JSON response.</div>
            </section>

            <section class="section" id="quickstart">
                <h2>Quick Start</h2>
                <div class="meta">
                    <span class="chip">Host: http://localhost:3000</span>
                    <span class="chip">Base path: /api</span>
                    <span class="chip">Format: JSON</span>
                </div>
                <div class="code">
                    <pre>curl "http://localhost:3000/api/locations?query=Wien"

curl "http://localhost:3000/api/stops/8103000/departures?duration=90&results=8"

curl "http://localhost:3000/api/journeys?from=Wien%20Hbf&to=Salzburg%20Hbf&results=3"</pre>
                </div>
            </section>

            <section class="section" id="endpoints">
                <h2>Endpoint Reference</h2>

                <article class="endpoint">
                    <div class="endpoint-top">
                        <span class="method">GET</span>
                        <span class="path">/api/locations?query=STRING</span>
                    </div>
                    <div class="endpoint-body">
                        <p>Search stations, addresses, and points of interest from user text.</p>
                        <table>
                            <thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead>
                            <tbody>
                                <tr><td>query</td><td>string</td><td>Search term such as Wien Hbf or Graz.</td></tr>
                                <tr><td>results</td><td>number</td><td>Optional maximum number of entries.</td></tr>
                            </tbody>
                        </table>
                        <div class="code"><pre>curl "http://localhost:3000/api/locations?query=Innsbruck&results=5"</pre></div>
                    </div>
                </article>

                <article class="endpoint">
                    <div class="endpoint-top">
                        <span class="method">GET</span>
                        <span class="path">/api/locations/nearby?latitude=...&longitude=...</span>
                    </div>
                    <div class="endpoint-body">
                        <p>Find stops and places around a coordinate, useful for map pickers and station suggestions.</p>
                        <table>
                            <thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead>
                            <tbody>
                                <tr><td>latitude</td><td>number</td><td>Center latitude.</td></tr>
                                <tr><td>longitude</td><td>number</td><td>Center longitude.</td></tr>
                                <tr><td>distance</td><td>number</td><td>Optional radius in meters.</td></tr>
                            </tbody>
                        </table>
                        <div class="code"><pre>curl "http://localhost:3000/api/locations/nearby?latitude=48.2082&longitude=16.3738&distance=600"</pre></div>
                    </div>
                </article>

                <article class="endpoint">
                    <div class="endpoint-top">
                        <span class="method">GET</span>
                        <span class="path">/api/stops/:id/departures</span>
                    </div>
                    <div class="endpoint-body">
                        <p>Read upcoming departures for a stop, including line and direction details.</p>
                        <table>
                            <thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead>
                            <tbody>
                                <tr><td>id</td><td>string</td><td>Stop ID, for example 8103000.</td></tr>
                                <tr><td>duration</td><td>number</td><td>Optional time window in minutes.</td></tr>
                                <tr><td>results</td><td>number</td><td>Optional number of departures.</td></tr>
                            </tbody>
                        </table>
                        <div class="code"><pre>curl "http://localhost:3000/api/stops/8103000/departures?duration=120&results=10"</pre></div>
                    </div>
                </article>

                <article class="endpoint">
                    <div class="endpoint-top">
                        <span class="method">GET</span>
                        <span class="path">/api/journeys?from=...&to=...</span>
                    </div>
                    <div class="endpoint-body">
                        <p>Plan connections between two locations with transfer and timing information.</p>
                        <table>
                            <thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead>
                            <tbody>
                                <tr><td>from</td><td>string</td><td>Origin stop name or ID.</td></tr>
                                <tr><td>to</td><td>string</td><td>Destination stop name or ID.</td></tr>
                                <tr><td>departure</td><td>ISO datetime</td><td>Optional desired departure time.</td></tr>
                                <tr><td>results</td><td>number</td><td>Optional number of journey options.</td></tr>
                            </tbody>
                        </table>
                        <div class="code"><pre>curl "http://localhost:3000/api/journeys?from=Wien%20Hbf&to=Salzburg%20Hbf&results=4"</pre></div>
                    </div>
                </article>

                <article class="endpoint">
                    <div class="endpoint-top">
                        <span class="method">GET</span>
                        <span class="path">/api/trips/:id and /api/radar</span>
                    </div>
                    <div class="endpoint-body">
                        <p>Trip details provide stopovers for one service. Radar provides moving vehicles in a bounding box.</p>
                        <div class="code"><pre>curl "http://localhost:3000/api/trips/TRIP_ID_HERE"

curl "http://localhost:3000/api/radar?north=48.35&west=16.15&south=48.10&east=16.55&results=25"</pre></div>
                    </div>
                </article>
            </section>

            <section class="section" id="examples">
                <h2>Examples</h2>

                <h3>1) Live departure board</h3>
                <p>Call one stop endpoint, then render when, line, direction, platform, and delay. Refresh on a short interval for active stations.</p>
                <div class="code"><pre>const res = await fetch('http://localhost:3000/api/stops/8103000/departures?results=6');
const data = await res.json();

for (const dep of data.departures) {
  console.log(dep.when, dep.line?.name, dep.direction, dep.platform, dep.delay);
}</pre></div>

                <h3 style="margin-top: 1rem;">2) Search and route</h3>
                <p>Resolve user input with location search first, then call journeys with stable IDs where available.</p>
                <div class="code"><pre>const fromCandidates = await fetch('http://localhost:3000/api/locations?query=Linz').then(r => r.json());
const toCandidates = await fetch('http://localhost:3000/api/locations?query=Graz').then(r => r.json());

const from = fromCandidates[0]?.id || 'Linz Hbf';
const to = toCandidates[0]?.id || 'Graz Hbf';

const journeyUrl = 'http://localhost:3000/api/journeys?from=' + encodeURIComponent(from) + '&to=' + encodeURIComponent(to) + '&results=3';
const journeyData = await fetch(journeyUrl).then(r => r.json());
console.log(journeyData.journeys?.length || 0);</pre></div>

                <h3 style="margin-top: 1rem;">3) Response shape sample</h3>
                <p>Most responses provide timing fields, line metadata, and identifiers suitable for caching and follow-up calls.</p>
                <div class="code"><pre>{
  "departures": [
    {
      "tripId": "...",
      "when": "2026-05-11T09:42:00+02:00",
      "plannedWhen": "2026-05-11T09:40:00+02:00",
      "delay": 120,
      "platform": "7",
      "direction": "Salzburg Hbf",
      "line": {
        "name": "RJX 168",
        "product": "nationalExpress"
      }
    }
  ]
}</pre></div>
            </section>

            <footer class="section footer">
                <div>API version: 1.1.0 | Node + Express + hafas-rest-api</div>
                <div><a href="/">Back to homepage</a></div>
            </footer>
        </main>
    </div>
</body>
</html>
`

export default docs
