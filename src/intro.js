const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>oebb.transport.rest | Home</title>
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
            min-height: 100vh;
        }

        .top {
            border-bottom: 1px solid var(--line-strong);
            background: #fff;
            position: sticky;
            top: 0;
            z-index: 20;
        }

        .top-inner {
            width: min(1180px, calc(100% - 2rem));
            margin: 0 auto;
            min-height: 64px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }

        .brand {
            text-decoration: none;
            color: var(--ink);
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 0.7rem;
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

        .nav {
            display: flex;
            gap: 0.6rem;
            flex-wrap: wrap;
        }

        .nav a {
            text-decoration: none;
            color: var(--ink-soft);
            padding: 0.35rem 0.65rem;
            border-radius: 8px;
            border: 1px solid transparent;
            font-size: 0.88rem;
            font-weight: 600;
        }

        .nav a:hover {
            border-color: var(--line-strong);
            color: var(--ink);
            background: #fafcfd;
        }

        .nav a.active {
            border-color: var(--line-strong);
            color: var(--ink);
            background: #f8fafc;
        }

        .page {
            width: min(1180px, calc(100% - 2rem));
            margin: 1.2rem auto 2rem;
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
        h3 {
            line-height: 1.24;
            color: #101b24;
        }

        h1,
        h2 {
            font-family: 'Merriweather', serif;
        }

        .hero h1 {
            margin: 0.4rem 0 0.6rem;
            font-size: clamp(1.9rem, 4vw, 2.7rem);
        }

        .hero p {
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

        .panel {
            background: var(--paper);
            border: 1px solid var(--line);
            border-radius: var(--radius);
            padding: 1.15rem;
            box-shadow: var(--shadow);
        }

        .panel h2 {
            margin: 0;
            font-size: clamp(1.36rem, 2.5vw, 1.74rem);
        }

        .panel h3 {
            margin: 0;
            font-size: 1.22rem;
            color: #101b24;
        }

        .panel p {
            margin: 0.4rem 0 0;
            color: var(--ink-soft);
            max-width: 74ch;
        }

        .stats {
            display: grid;
            gap: 0.75rem;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            margin-top: 0.8rem;
        }

        .stat-card {
            border: 1px solid var(--line);
            border-radius: 10px;
            background: #fbfcfd;
            padding: 0.78rem;
        }

        .stat-title {
            margin: 0;
            font-size: 0.74rem;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--ink-soft);
            font-weight: 700;
        }

        .stat-value {
            margin: 0.25rem 0 0;
            font-size: 1.16rem;
            font-weight: 700;
            color: #182833;
            line-height: 1.35;
        }

        .grid {
            margin-top: 0.8rem;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 0.75rem;
        }

        .feature {
            border: 1px solid var(--line);
            border-radius: 10px;
            padding: 0.78rem;
            background: #fff;
        }

        .endpoint-grid {
            margin-top: 0.8rem;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 0.75rem;
        }

        .api-card {
            border: 1px solid var(--line);
            border-radius: 12px;
            background: #fbfcfd;
            padding: 0.9rem;
            box-shadow: 0 4px 14px rgba(16, 27, 36, 0.04);
        }

        .api-card h3 {
            margin: 0;
            font-size: 1.1rem;
        }

        .api-card p {
            margin-top: 0.35rem;
            font-size: 0.98rem;
            line-height: 1.55;
        }

        .path {
            display: inline-block;
            margin-top: 0.45rem;
            background: rgba(226, 0, 26, 0.08);
            color: #8f1120;
            border: 1px solid rgba(226, 0, 26, 0.2);
            border-radius: 999px;
            padding: 0.16rem 0.56rem;
            font-family: 'IBM Plex Mono', monospace;
            font-size: 0.76rem;
            font-weight: 500;
        }

        .examples {
            margin-top: 0.8rem;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.75rem;
        }

        .example-card {
            border: 1px solid var(--line);
            border-radius: 10px;
            background: #fff;
            overflow: hidden;
        }

        .example-head {
            background: #f6f9fb;
            border-bottom: 1px solid var(--line);
            padding: 0.45rem 0.65rem;
            font-size: 0.86rem;
            font-weight: 700;
            color: #273947;
        }

        .quick {
            margin-top: 0.8rem;
            border-radius: 10px;
            overflow: hidden;
            border: 1px solid #1e2c36;
        }

        .quick-header {
            background: #121a20;
            color: #d4e3ee;
            border-bottom: 1px solid #243544;
            padding: 0.5rem 0.7rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 0.6rem;
            font-size: 0.84rem;
            font-weight: 700;
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
            background: var(--paper);
            border: 1px solid var(--line);
            border-radius: var(--radius);
            padding: 0.85rem 1rem;
            box-shadow: var(--shadow);
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

        @media (max-width: 980px) {
            .stats,
            .grid,
            .endpoint-grid,
            .examples {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }

        @media (max-width: 760px) {
            body {
                font-size: 18px;
            }

            .page,
            .top-inner {
                width: min(1180px, calc(100% - 1rem));
            }

            .page {
                margin-top: 0.9rem;
            }

            .stats,
            .grid,
            .endpoint-grid,
            .examples {
                grid-template-columns: 1fr;
            }

            .nav {
                gap: 0.35rem;
            }
        }
    </style>
</head>
<body>
    <header class="top">
        <div class="top-inner">
            <a class="brand" href="/">
                <span class="brand-mark" aria-hidden="true"></span>
                <span>oebb.transport.rest</span>
            </a>
            <nav class="nav">
                <a class="active" href="/">Home</a>
                <a href="/docs">Documentation</a>
                <a href="/api">API Base</a>
                <a href="https://github.com/nocontent06/oebb.transport.rest" target="_blank" rel="noreferrer">GitHub</a>
            </nav>
        </div>
    </header>

    <div class="page">
        <section class="hero">
            <p class="eyebrow">Austrian public transport REST API</p>
            <h1>Build train and mobility apps on top of reliable OEBB data.</h1>
            <p>oebb.transport.rest exposes HAFAS capabilities in a stable HTTP interface, so you can power journey planners, departure boards, and station intelligence with real-time transport data.</p>
            <div class="hero-actions">
                <a class="btn primary" href="/docs">Read documentation</a>
                <a class="btn secondary" href="/api">Open raw API</a>
            </div>
        </section>

        <section class="panel">
            <h2>At a glance</h2>
            <div class="stats">
                <article class="stat-card">
                    <p class="stat-title">Coverage</p>
                    <p class="stat-value">Journeys, stops, trips, radar</p>
                </article>
                <article class="stat-card">
                    <p class="stat-title">Base path</p>
                    <p class="stat-value">/api</p>
                </article>
                <article class="stat-card">
                    <p class="stat-title">Format</p>
                    <p class="stat-value">JSON over HTTP</p>
                </article>
            </div>

            <div class="grid" id="features">
                <article class="feature">
                    <h3>Live departures</h3>
                    <p>Show station boards with delays, directions, and platform context.</p>
                </article>
                <article class="feature">
                    <h3>Journey planning</h3>
                    <p>Plan and refresh connections between stations and cities.</p>
                </article>
                <article class="feature">
                    <h3>Radar and nearby</h3>
                    <p>Build map experiences with live vehicle positions and nearby stop search.</p>
                </article>
            </div>
        </section>

        <section class="panel">
            <h2>Popular Endpoints</h2>
            <p>Use these routes as building blocks for station finders, departure boards, journey planning, and map views.</p>

            <div class="endpoint-grid">
                <article class="api-card">
                    <h3>Nearby Locations</h3>
                    <p>Find stops, addresses, and points of interest near a coordinate.</p>
                    <span class="path">/locations/nearby</span>
                </article>
                <article class="api-card">
                    <h3>Location Search</h3>
                    <p>Search stops and places by text input such as city or station name.</p>
                    <span class="path">/locations</span>
                </article>
                <article class="api-card">
                    <h3>Stop Information</h3>
                    <p>Load details about a station or stop with identifier-based lookup.</p>
                    <span class="path">/stops/:id</span>
                </article>
                <article class="api-card">
                    <h3>Departures & Arrivals</h3>
                    <p>Read upcoming departures and arrivals, including delay and direction.</p>
                    <span class="path">/stops/:id/departures</span>
                </article>
                <article class="api-card">
                    <h3>Journeys</h3>
                    <p>Plan routes between two places with transfer and timing details.</p>
                    <span class="path">/journeys</span>
                </article>
                <article class="api-card">
                    <h3>Reachable From</h3>
                    <p>Find stops reachable from one origin under time and transfer limits.</p>
                    <span class="path">/stops/reachable-from</span>
                </article>
                <article class="api-card">
                    <h3>Trip Details</h3>
                    <p>Fetch trip stopovers and route shape for a specific service.</p>
                    <span class="path">/trips/:id</span>
                </article>
                <article class="api-card">
                    <h3>Live Radar</h3>
                    <p>Track moving vehicles in a bounding box area.</p>
                    <span class="path">/radar</span>
                </article>
                <article class="api-card">
                    <h3>Refresh Journey</h3>
                    <p>Refresh a stored journey reference and get current status updates.</p>
                    <span class="path">/journeys/:ref</span>
                </article>
            </div>
        </section>

        <section class="panel">
            <h2>Quick Start</h2>
            <p>Try these endpoints locally on port 3000.</p>
            <div class="quick">
                <div class="quick-header">
                    <span>Example requests</span>
                    <span>Base URL: http://localhost:3000/api</span>
                </div>
                <pre>curl "http://localhost:3000/api/journeys?from=Wien%20Hbf&to=Salzburg%20Hbf&results=3"

curl "http://localhost:3000/api/stops/8103000/departures?duration=120"

curl "http://localhost:3000/api/locations?query=Graz"</pre>
            </div>

                        <div class="examples">
                                <article class="example-card">
                                        <div class="example-head">Request: Departures</div>
                                        <pre>curl "http://localhost:3000/api/stops/8103000/departures?results=2"</pre>
                                </article>
                                <article class="example-card">
                                        <div class="example-head">Response: Departures</div>
                                        <pre>{
    "departures": [
        {
            "when": "2026-05-11T09:42:00+02:00",
            "delay": 120,
            "platform": "7",
            "direction": "Salzburg Hbf",
            "line": { "name": "RJX 168" }
        }
    ]
}</pre>
                                </article>
                                <article class="example-card">
                                        <div class="example-head">Request: Journey Planning</div>
                                        <pre>curl "http://localhost:3000/api/journeys?from=Wien%20Hbf&to=Graz%20Hbf&results=1"</pre>
                                </article>
                                <article class="example-card">
                                        <div class="example-head">Response: Journey Planning</div>
                                        <pre>{
    "journeys": [
        {
            "type": "journey",
            "legs": [{ "origin": { "name": "Wien Hbf" }, "destination": { "name": "Graz Hbf" } }],
            "price": null
        }
    ]
}</pre>
                                </article>
                        </div>
        </section>

        <footer class="footer">
            <div>Documentation-first API for Austrian rail and public transport data.</div>
            <div><a href="/docs">Open full reference</a></div>
        </footer>
    </div>
</body>
</html>
`;

export default html
