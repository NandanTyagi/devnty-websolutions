export function validateContact(data) {
  if (!data || typeof data !== "object" || Array.isArray(data)) return null;
  const limits = { firstName: 100, lastName: 100, email: 254, message: 5000 };
  const clean = {};
  for (const [key, max] of Object.entries(limits)) {
    if (typeof data[key] !== "string") return null;
    clean[key] = data[key].trim();
    if (!clean[key] || clean[key].length > max) return null;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email) || /[\r\n]/.test(clean.email)) return null;
  return clean;
}

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
}
