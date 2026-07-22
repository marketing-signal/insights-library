export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
    
    // The password is now hidden on the server, not in the HTML
    const TRUE_CODE = 'SignalInsights2026!';
    const { attempt } = req.body;

    if (attempt === TRUE_CODE) {
        return res.status(200).json({ success: true });
    } else {
        return res.status(401).json({ success: false });
    }
}
