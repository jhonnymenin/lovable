export const siteConfig = {
  ctaUrl: import.meta.env.VITE_CTA_URL || "",
  whatsappNumber: import.meta.env.VITE_WHATSAPP || "",
  sponsorContact: import.meta.env.VITE_SPONSOR_CONTACT || "",
  gtmId: import.meta.env.VITE_GTM_ID || "",
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID || "",
  flags: {
    showCertificate: true,
    showEndTime: false,
  }
};
