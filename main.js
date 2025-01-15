audioElement.play();

if (navigator.getAutoplayPolicy("mediaelement") === "allowed") {
    // The video element will autoplay with audio.
  } else if (navigator.getAutoplayPolicy("mediaelement") === "allowed-muted") {
    // Mute audio on video
    video.muted = true;
  } else if (navigator.getAutoplayPolicy("mediaelement") === "disallowed") {
    // Set a default placeholder image.
    video.poster = "http://example.com/poster_image_url";
  }

  Permissions-Policy: autoplay=(self)

  