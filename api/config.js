// Vercel Serverless Function: /api/config
// Mengirim konfigurasi publik Supabase ke frontend TANPA hardcode di HTML.
// Nilainya dibaca dari Environment Variables yang di-set di dashboard Vercel:
//   Settings > Environment Variables
//     SUPABASE_URL      = https://xxxx.supabase.co
//     SUPABASE_ANON_KEY = eyJ... (anon/public key, BUKAN service_role)
//
// Catatan: anon key memang dirancang untuk dipakai di sisi browser,
// jadi aman dikirim ke frontend — selama Row Level Security (RLS) di
// Supabase dikonfigurasi dengan benar. JANGAN PERNAH menaruh
// SUPABASE_SERVICE_ROLE_KEY di sini.

export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    url: process.env.SUPABASE_URL || null,
    anonKey: process.env.SUPABASE_ANON_KEY || null,
  });
}
