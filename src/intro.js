// create HTML page
const html = (hostname) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>oebb.transport.rest - OEBB REST API</title>
    <!-- Bootstrap CSS & Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <style>
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background-color: #f8f9fa;
        }
        .navbar {
            margin-bottom: 0;
        }
        .hero-section {
            background: linear-gradient(120deg, #007bff 0%, #6610f2 100%);
            background-size: 200% 200%;
            animation: gradientMove 6s ease-in-out infinite;
            color: #fff;
            padding: 5rem 2rem 3rem 2rem;
            text-align: center;
            border-bottom-left-radius: 2rem;
            border-bottom-right-radius: 2rem;
            box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }
        @keyframes gradientMove {
            0% {background-position: 0% 50%;}
            50% {background-position: 100% 50%;}
            100% {background-position: 0% 50%;}
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
        .btn-light {
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
        .btn-light:hover {
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
            color: #6610f2;
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
        .scroll-down {
            position: absolute;
            left: 50%;
            bottom: 0.1em;
            transform: translateX(-50%);
            font-size: 2.5rem;
            color: #fff;
            opacity: 0.7;
            cursor: pointer;
            animation: bounce 2s infinite;
        }
        @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0);}
            50% { transform: translateX(-50%) translateY(12px);}
        }
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">OEBB Transport</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/docs">API Documentation</a>
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

    <!-- Hero Section -->
    <div class="hero-section position-relative">
        <h1><i class="bi bi-train-front-fill"></i> OEBB Transport REST API</h1>
        <p class="lead">The modern way to interact with OEBB services.<br>
        Real-time journeys, departures, arrivals, radar, and more – all in one place.</p>
        <a href="/docs" class="btn btn-light btn-lg mt-3">
            <i class="bi bi-book"></i> Get Started
        </a>
        <div class="scroll-down" onclick="document.getElementById('features').scrollIntoView({behavior:'smooth'})">
            <i class="bi bi-chevron-double-down"></i>
        </div>
    </div>

    <!-- Features Section -->
    <div class="container features-section" id="features">
        <h2 class="section-title">Why OEBB Transport API?</h2>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="card feature-card h-100 text-center">
                    <div class="card-body">
                        <div class="feature-icon"><i class="bi bi-clock-history"></i></div>
                        <h5 class="card-title">Real-Time Updates</h5>
                        <p class="card-text">Stay up to date with real-time train schedules and journey data for Austrian railway services.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card feature-card h-100 text-center">
                    <div class="card-body">
                        <div class="feature-icon"><i class="bi bi-plug"></i></div>
                        <h5 class="card-title">Easy Integration</h5>
                        <p class="card-text">Seamlessly integrate the OEBB Transport API into your application for smooth transportation data integration.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card feature-card h-100 text-center">
                    <div class="card-body">
                        <div class="feature-icon"><i class="bi bi-shield-check"></i></div>
                        <h5 class="card-title">Reliable Data</h5>
                        <p class="card-text">Access reliable and accurate data from OEBB’s services, ensuring the best experience for your users.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-5">
            <a href="https://${hostname}/api" class="btn btn-primary btn-lg" target="_blank">
                <i class="bi bi-link-45deg"></i> Try the API
            </a>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer mt-5">
        <div class="container">
            <p class="mb-1">&copy; 2024 OEBB Transport REST API &mdash; All Rights Reserved</p>
            <small>
                <a href="https://github.com/nocontent06/oebb.transport.rest" class="text-light text-decoration-underline" target="_blank"><i class="bi bi-github"></i> GitHub</a>
            </small>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
`;


export default html