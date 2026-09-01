# Neo Media

Static landing page for a hospitality visual-content studio: 360° tours, hotel photography, and drone video/aerials.

## Preview locally

From `/home/dsh/projects/sites`:

For the DSH browser, use the VM-local preview:

```bash
~/bin/preview-serve 4173 neo-media 1800
```

For a browser on the Mac host, use the Mac-accessible preview instead:

```bash
~/bin/preview-serve-mac 4173 neo-media 1800
```

Open the URL printed by the command (it uses the VM IP, not `127.0.0.1`). Preview servers expire after 30 minutes.

## Notes

- The enquiry form currently confirms in-browser only. Connect it to Formspree, a serverless endpoint, or the client's CRM before launch.
- The current gallery uses real Maxis Penthouse photography copied into `assets/`; confirm usage rights and replace/add client project credits before publishing.
- The embedded 360° project tour links to the existing Momento360 tour used on the Maxis site.
- Suggested domain: `neomedia.studio` (brand-forward and immediately communicates a creative studio). Alternatives: `neomediahospitality.com`, `neomedia.visuals`, `neomediafilms.com`.
