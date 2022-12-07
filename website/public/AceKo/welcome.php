
<?php
    session_start();
    if (!isset($_SESSION['SESSION_EMAIL'])) {
        header("Location: ");
        die();
    }

    include 'config.php';

    $query = mysqli_query($conn, "SELECT * FROM users WHERE email='{$_SESSION['SESSION_EMAIL']}'");

    if (mysqli_num_rows($query) > 0) {
        $row = mysqli_fetch_assoc($query);

    }
?>




<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <link rel="shortcut icon" href="./img/ace.png" type="image/svg+xml">
  <title>ACEKO</title>
</head>

<body>
  <!-- Header -->

  <section id="header">
    <div class="header container">
      <div class="nav-bar">
        <div class="brand">
          <a href="#hero">
           
        <div class="logo"><img src="./img/logo.png"></div>
      
          </a>
        </div>
        <div class="nav-list">
          <div class="hamburger">
            <div class="bar"></div>
          </div>
          <ul>
            
            <li><a href="about.html" data-after="Home">About</a></li>
            <li><a href="devs.html" data-after="Service">The Developers</a></li>
            <li><a href="contact.html" data-after="Projects">Contact Us</a></li>
            <li><a href='logout.php'>Logout</a><li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- End Header -->


  <!-- Hero Section  -->
  <section id="hero">
    <div class="hero container">
      <div>
        <h2 class="hiii">AceKo </h2>
        <h1>Your virtual</h1>
        <h1>Student buddy</h1>
        
      </div>
      <a href="chatbot.html" type="button" class="cta">Start A Conversation</a>
    </div>
  </section>
  <!-- End Hero Section  -->


  <!-- Footer-->
  <section id="footer">
    <div class="footer container">
      <div class="una"><img src="./img/acee.png"></div>
      <div class="duwa"><img src="./img/bu.png"></div>
    </div>
  </section>
  <!-- End Footer -->
  <script src="./app.js"></script>
</body>

</html>