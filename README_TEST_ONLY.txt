GYPSUM VIEWER v1 - TEST INSTRUMENT ONLY

This folder is a disposable field instrument for verifying one frozen route
package on a physical device. It is NOT EarthEye production.

WHAT IT DOES
  Reads the frozen Gypsum Canyon package embedded in index.html, computes its
  SHA-256 on your device, and compares that against the recorded checksum.
  Renders the accepted network, seven facilities with modes, the closed loop,
  junctions, loose ends, the entrance and the scheduled-access warning.
  Reports the loop reconstruction, browser connection state, service-worker
  state, offline-cache readiness and (on request) device location.

WHAT IT CANNOT DO
  It has no database access, no write endpoints, no analytics, no tracking,
  and no remote dependencies. It cannot modify the route package.

HOW TO RUN THE TEST
  1. Serve or deploy this folder over HTTPS, with index.html at the root.
  2. Open it on the device while connected.
  3. Confirm the panel shows: computed checksum MATCHES the expected value,
     loop "continuous - closed", service worker "registered - active",
     offline cache "READY".
  4. Add to home screen / install.
  5. Enable airplane mode and disable Wi-Fi.
  6. Cold-start the installed viewer. Repeat the whole run twice.
  7. Record every result on the handoff sheet, including failures.

EXPECTED CHECKSUM
  c78fecc93806a014174c9e1c1500d7a1425a170c0295fa6fb694890df0c79f54

IF THE VERDICT SAYS MISMATCH
  Stop. Do not run the device test. The package is not the frozen artifact.

A downloaded route is not permission to enter. Access is scheduled only.
