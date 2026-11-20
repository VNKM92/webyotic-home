<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Webyotic | Web Development & Digital Solutions</title>
    <meta name="description" content="We Build Websites. We Grow Businesses. Webyotic is a premier web development and digital solutions company specializing in Laravel, React, WordPress, E-commerce, and high-performance modern web apps.">
    <meta name="keywords" content="Web development, Laravel developer, React web applications, WordPress websites, E-commerce development, Ludhiana web agency, India web development, SEO, custom web solutions">
    <meta name="author" content="Webyotic">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{ url('/') }}">
    <meta property="og:title" content="Webyotic | We Build Websites. We Grow Businesses.">
    <meta property="og:description" content="Turn your ideas into powerful digital solutions with Webyotic. 7+ years experience in custom Laravel, React, and WordPress engineering.">
    <meta property="og:image" content="{{ asset('images/og-webyotic.jpg') }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{ url('/') }}">
    <meta property="twitter:title" content="Webyotic | Web Development & Digital Solutions">
    <meta property="twitter:description" content="We Build Websites. We Grow Businesses. Scalable web applications, modern websites & digital solutions.">
    <meta property="twitter:image" content="{{ asset('images/og-webyotic.jpg') }}">

    <!-- Google Fonts: Plus Jakarta Sans & DM Sans -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' stop-color='%2306b6d4'/><stop offset='50%25' stop-color='%23245cff'/><stop offset='100%25' stop-color='%23743bff'/></linearGradient></defs><rect width='100' height='100' rx='25' fill='url(%23g)'/><path d='M25 32 L36 72 L49 42 L62 72 L73 32 L63 32 L55 58 L46 36 L39 58 L33 32 Z' fill='white'/></svg>">
   <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-W745KQZP"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    </script>
    <script>
        window.webyoticConfig = {
            csrfToken: '{{ csrf_token() }}',
            apiUrl: '{{ url("/api/contact") }}',
            email: 'hello@webyotic.com',
            phone: '+91 98765 43210',
            whatsapp: '919876543210',
            location: 'Ludhiana, Punjab, India'
        };
    </script>

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>
<body class="bg-white text-[#152044] antialiased selection:bg-purple-500 selection:text-white">
    <div id="root"></div>
</body>
</html>
