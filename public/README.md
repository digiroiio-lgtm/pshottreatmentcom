# Static images

Put real photographs here (doctor, consultation room, equipment) as WebP or JPEG, then set the path in `src/lib/clinic.ts`:

- Doctor portrait: `DOCTOR.photo = "/dr-ozdemir.webp"`. The doctor card shows it with alt text, and the `Physician` schema gets an `ImageObject`.
- Use descriptive file names, a width of about 800 px, and compress to under 150 kB. Do not use stock photos presented as the clinic.
