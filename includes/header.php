<?php
// Determine current page for active nav state
$current_page = basename($_SERVER['PHP_SELF'], '.php');

// Page-specific defaults (can be overridden in each page before include)
$page_title    = $page_title    ?? 'Photo Booth Supplier — The Best Photo Booth Supplier in New England';
$page_desc     = $page_desc     ?? "New England's most trusted photo booth supplier since 2012. 30+ booths including AI Photo Booth, 360 Slow Motion, Magic Mirror, Glam, Roamers & more.";
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title><?php echo htmlspecialchars($page_title); ?></title>
<meta name="description" content="<?php echo htmlspecialchars($page_desc); ?>" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/styles.css">
</head>
<body>

<!-- ====== NAVIGATION ====== -->
<nav class="nav">
  <div class="container nav-inner">
    <a href="index.php" class="logo-wrap" aria-label="Photo Booth Supplier">
      <?php include __DIR__ . '/logo.php'; ?>
    </a>

    <ul class="nav-links">
      <li><a href="index.php#about">About</a></li>
      <li>
        <a href="index.php#booths">Booths <span class="caret">▾</span></a>
        <div class="dropdown-panel dropdown-mega">
          <div class="dropdown-mega-col">
            <h6>AI &amp; Smart Booths</h6>
            <a href="ai-studio.php">AI Photo Booth</a>
            <a href="#">Animated GIF Booth</a>
            <a href="#">Virtual Photo Booth</a>
            <a href="#">Digital Graffiti Wall</a>
            <a href="#">Draw Me Bot Station</a>
            <h6 style="margin-top:18px">Mirror Booths</h6>
            <a href="#">Selfie Mirror Booth</a>
            <a href="#">Giant Mirror Booth</a>
            <a href="#">Infinity Mirror Booth</a>
            <a href="#">Vogue Booth</a>
          </div>
          <div class="dropdown-mega-col">
            <h6>360° &amp; Slow Motion</h6>
            <a href="#">360 Slow Motion Booth</a>
            <a href="#">Slow-Motion Open Air</a>
            <a href="#">Glam Photo Booth</a>
            <h6 style="margin-top:18px">Open Air &amp; Classic</h6>
            <a href="#">Open Air Photo Booth</a>
            <a href="#">Branded Open Air Photo Booth</a>
            <a href="#">Custom Photo Booth</a>
            <a href="#">Black Light Booth</a>
            <a href="#">Deluxe Blacklight Booth</a>
          </div>
          <div class="dropdown-mega-col">
            <h6>Roamers &amp; Mobile</h6>
            <a href="#">Deluxe Social Roamer</a>
            <a href="#">Super Social Roamer</a>
            <a href="#">Cool Pix</a>
            <h6 style="margin-top:18px">Sports, Print &amp; Specialty</h6>
            <a href="#">Sports Cards Photos</a>
            <a href="#">Custom Sports &amp; Trading Cards</a>
            <a href="#">Magazine Covers</a>
            <a href="#">Flipbooks</a>
            <a href="#">Step N' Repeat Photos</a>
            <a href="#">3 Sided Photo Wall</a>
            <a href="#">White Screen Photos</a>
            <a href="#">Choose Your Backdrop</a>
            <a href="#">Branded Social Share Booth</a>
            <a href="#">Super Social Booth</a>
          </div>
        </div>
      </li>
      <li>
        <a href="ai-studio.php" class="ai-link<?php echo $current_page === 'ai-studio' ? ' active' : ''; ?>">
          <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:#fff;flex-shrink:0"><path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2zm6 10l.94 2.56L21.5 15l-2.56.94L18 18.5l-.94-2.56L14.5 15l2.56-.94L18 12zM6 14l.94 2.56L9.5 17.5l-2.56.94L6 21l-.94-2.56L2.5 17.5l2.56-.94L6 14z"/></svg>
          AI Studio
        </a>
      </li>
      <li>
        <a href="index.php#events">Events <span class="caret">▾</span></a>
        <div class="dropdown-panel dropdown-simple" style="min-width:220px">
          <a href="#">Weddings</a>
          <a href="#">Mitzvahs</a>
          <a href="#">Sweet Sixteens</a>
          <a href="#">Brand Activations</a>
          <a href="#">Private Events</a>
          <a href="#">Corporate Events</a>
        </div>
      </li>
      <li>
        <a href="index.php#addons">Add-Ons <span class="caret">▾</span></a>
        <div class="dropdown-panel dropdown-simple" style="min-width:200px">
          <a href="#">Dance Floors</a>
          <a href="#">Uplighting</a>
          <a href="#">Custom Backdrops</a>
          <a href="#">Branded Print Templates</a>
        </div>
      </li>
      <li><a href="index.php#gallery">Gallery</a></li>
      <li><a href="index.php#contact">Contact</a></li>
    </ul>

    <div class="nav-cta">
      <a href="tel:8005671676" class="btn btn-phone">
        <svg class="icon-svg" viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
        800-567-1676
      </a>
      <a href="index.php#contact" class="btn btn-primary">Request a Quote →</a>
    </div>
  </div>
</nav>
