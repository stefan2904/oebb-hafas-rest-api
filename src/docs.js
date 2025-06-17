const docs = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OEBB Transport REST API – Documentation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <style>
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background: linear-gradient(120deg, #007bff 0%, #6610f2 100%);
            min-height: 100vh;
            color: #222;
        }
        .navbar {
            margin-bottom: 0;
        }
        .hero-section {
            background: linear-gradient(120deg, #007bff 0%, #6610f2 100%);
            color: #fff;
            padding: 5rem 2rem 3rem 2rem;
            text-align: center;
            border-bottom-left-radius: 2rem;
            border-bottom-right-radius: 2rem;
            box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }
        .hero-section h1 {
            font-size: 3.2rem;
            font-weight: 800;
            letter-spacing: -1px;
        }
        .hero-section p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
        }
        .api-link {
            font-size: 1.2rem;
            font-weight: 600;
            background: #fff;
            color: #6610f2;
            border: none;
            border-radius: 2rem;
            padding: 0.75rem 2rem;
            box-shadow: 0 2px 8px rgba(102,16,242,0.12);
            transition: background 0.2s, color 0.2s;
            text-decoration: none;
        }
        .api-link:hover {
            background: #6610f2;
            color: #fff;
        }
        .features-section {
            margin-top: -3rem;
            z-index: 2;
            position: relative;
        }
        .feature-card {
            border: none;
            border-radius: 1.5rem;
            box-shadow: 0 4px 24px rgba(0,0,0,0.08);
            transition: transform 0.15s;
            background: #fff;
        }
        .feature-card:hover {
            transform: translateY(-6px) scale(1.03);
        }
        .feature-icon {
            font-size: 2.5rem;
            color: #6610f2;
            margin-bottom: 1rem;
        }
        .section-title {
            font-size: 2.2rem;
            font-weight: 700;
            margin-top: 3rem;
            margin-bottom: 2rem;
            text-align: center;
            color: #ffffff;
        }
        .footer {
            background: #222;
            color: #fff;
            text-align: center;
            padding: 1.5rem 0 0.5rem 0;
            margin-top: 4rem;
            border-top-left-radius: 2rem;
            border-top-right-radius: 2rem;
        }
        @media (max-width: 767px) {
            .hero-section { padding: 3rem 1rem 2rem 1rem; }
            .section-title { font-size: 1.5rem; }
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">OEBB Transport</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/docs">API Documentation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/nocontent06/oebb.transport.rest">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="mailto:admin@macistry.com">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <section class="hero-section">
        <h1><i class="bi bi-train-front-fill"></i> OEBB Transport REST API</h1>
        <p class="lead">A modern, reliable, and easy-to-use API for Austrian rail and public transport data.<br>
        Real-time journeys, departures, arrivals, radar, and more – all in one place.</p>
        <a href="https://oebb.macistry.com/api" class="api-link" target="_blank">
            <i class="bi bi-link-45deg"></i> Explore the API
        </a>
    </section>

    <div class="container features-section">
        <h2 class="section-title">API Features & Endpoints</h2>
        <div class="row g-4">
            <div class="col-md-6 col-lg-4">
                <div class="card feature-card h-100">
                    <div class="card-body text-center">
                        <div class="feature-icon"><i class="bi bi-geo-alt-fill"></i></div>
                        <h5 class="card-title">Nearby Locations</h5>
                        <p class="card-text">Find stops, points of interest, and addresses near a given location.<br>
                        <code>/locations/nearby</code></p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card feature-card h-100">
                    <div class="card-body text-center">
                        <div class="feature-icon"><i class="bi bi-search"></i></div>
                        <h5 class="card-title">Location Search</h5>
                        <p class="card-text">Search for stops, addresses, or POIs by name or query.<br>
                        <code>/locations</code></p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card feature-card h-100">
                    <div class="card-body text-center">
                        <div class="feature-icon"><i class="bi bi-pin-map-fill"></i></div>
                        <h5 class="card-title">Stop Information</h5>
                        <p class="card-text">Get detailed info about a stop or station, including lines and facilities.<br>
                        <code>/stops/{id}</code></p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card feature-card h-100">
                    <div class="card-body text-center">
                        <div class="feature-icon"><i class="bi bi-arrow-up-right-circle-fill"></i></div>
                        <h5 class="card-title">Departures & Arrivals</h5>
                        <p class="card-text">List upcoming departures or arrivals at a stop, with filters for direction, lines, and more.<br>
                        <code>/stops/{id}/departures</code><br>
                        <code>/stops/{id}/arrivals</code></p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card feature-card h-100">
                    <div class="card-body text-center">
                        <div class="feature-icon"><i class="bi bi-signpost-split-fill"></i></div>
                        <h5 class="card-title">Journeys & Connections</h5>
                        <p class="card-text">Plan journeys between any two locations, with support for via points, accessibility, and more.<br>
                        <code>/journeys</code></p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card feature-card h-100">
                    <div class="card-body text-center">
                        <div class="feature-icon"><i class="bi bi-bus-front-fill"></i></div>
                        <h5 class="card-title">Reachable From</h5>
                        <p class="card-text">Find all stops reachable from a given location within a certain time or transfer limit.<br>
                        <code>/stops/reachable-from</code></p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card feature-card h-100">
                    <div class="card-body text-center">
                        <div class="feature-icon"><i class="bi bi-map-fill"></i></div>
                        <h5 class="card-title">Trip Details & Routes</h5>
                        <p class="card-text">Get full trip details, including stopovers, polylines, and live status.<br>
                        <code>/trips/{id}</code><br>
                        <code>/trips</code></p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card feature-card h-100">
                    <div class="card-body text-center">
                        <div class="feature-icon"><i class="bi bi-broadcast-pin"></i></div>
                        <h5 class="card-title">Live Radar</h5>
                        <p class="card-text">Track moving vehicles in real time within a geographic area.<br>
                        <code>/radar</code></p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="card feature-card h-100">
                    <div class="card-body text-center">
                        <div class="feature-icon"><i class="bi bi-arrow-repeat"></i></div>
                        <h5 class="card-title">Refresh Journeys</h5>
                        <p class="card-text">Refresh a journey to get the latest status and updates.<br>
                        <code>/journeys/{ref}</code></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-5">
            <a href="https://oebb.macistry.com/api" class="api-link" target="_blank">
                <i class="bi bi-link-45deg"></i> Open API Endpoint
            </a>
        </div>
        <div class="row mt-5">
            <div class="col text-center">
                <h5>API Version: <span class="badge bg-primary">1.0.1</span></h5>
                <h6>Host: <br/><span class="text-muted">v6.oebb.transport.rest<br/>oebb.macistry.com</span></h6>
            </div>
        </div>
    </div>

    <footer class="footer mt-5">
        <div class="container">
            <p class="mb-1">&copy; 2024-2025 Felix Alexander &mdash; All Rights Reserved</p>
            <small>
                <a href="https://github.com/nocontent06/oebb.transport.rest" class="text-light text-decoration-underline" target="_blank"><i class="bi bi-github"></i> GitHub</a>
            </small>
        </div>
    </footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
`
export default docs
