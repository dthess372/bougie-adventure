// Escapes user-supplied text before it is interpolated into an HTML string.
// Used by the contact/subscribe API routes, which splice form fields into
// email bodies sent via Resend — without this, a submitted `<script>` or
// styled fake link would render as live HTML in the recipient's inbox.
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
