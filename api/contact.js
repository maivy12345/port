const WEB3FORMS_URL = "https://api.web3forms.com/submit";

function isAllowedOrigin(origin) {
    if (!origin) return false;
    if (origin === "https://meivy-productdesigner.vercel.app") return true;
    return /^https:\/\/meivy-productdesigner-[a-z0-9-]+\.vercel\.app$/.test(origin);
}

function getOrigin(req) {
    if (req.headers.origin) return req.headers.origin;
    var referer = req.headers.referer || req.headers.referrer;
    if (!referer) return "";
    try { return new URL(referer).origin; } catch (e) { return ""; }
}

function trim(str, max) {
    return String(str || "").trim().slice(0, max);
}

module.exports = async function handler(req, res) {
    var origin = getOrigin(req);
    var corsOrigin = isAllowedOrigin(origin) ? origin : "https://meivy-productdesigner.vercel.app";
    res.setHeader("Access-Control-Allow-Origin", corsOrigin);
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (req.method === "OPTIONS") return res.status(204).end();
    if (req.method !== "POST") return res.status(405).json({ success: false });
    if (!isAllowedOrigin(origin)) return res.status(403).json({ success: false });
    var key = process.env.WEB3FORMS_ACCESS_KEY;
    if (!key) return res.status(500).json({ success: false, message: "Not configured" });
    var body = req.body || {};
    if (body.botcheck) return res.status(200).json({ success: true });
    var name = trim(body.name, 200);
    var email = trim(body.email, 254);
    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ success: false });
    }
    var fd = new FormData();
    fd.append("access_key", key);
    fd.append("subject", "Portfolio contact");
    fd.append("name", name);
    fd.append("email", email);
    fd.append("replyto", email);
    if (body.type) fd.append("type", trim(body.type, 80));
    if (body.message) fd.append("message", trim(body.message, 5000));
    try {
        var up = await fetch(WEB3FORMS_URL, { method: "POST", body: fd, headers: { Accept: "application/json" } });
        var data = await up.json();
        return res.status(up.ok ? 200 : 502).json(data);
    } catch (e) {
        return res.status(502).json({ success: false });
    }
};
