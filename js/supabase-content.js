(function () {
    "use strict";

    function readConfig() {
        var config = window.SUPABASE_CONFIG || {};
        return {
            url: config.url || "",
            anonKey: config.anonKey || "",
            projectImagesBucket: config.projectImagesBucket || "project-images"
        };
    }

    function createClient() {
        var config = readConfig();
        if (!window.supabase || !window.supabase.createClient) return null;
        if (!config.url || !config.anonKey) return null;
        return window.supabase.createClient(config.url, config.anonKey);
    }

    function getPublicImageUrl(client, bucket, pathOrUrl) {
        if (!pathOrUrl) return "";
        if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
        if (!client) return pathOrUrl;

        var cleanPath = String(pathOrUrl).replace(/^\/+/, "");
        var result = client.storage.from(bucket).getPublicUrl(cleanPath);
        return (result && result.data && result.data.publicUrl) || pathOrUrl;
    }

    async function fetchProjects() {
        var config = readConfig();
        var client = createClient();
        if (!client) return [];

        var response = await client
            .from("projects")
            .select("*")
            .eq("is_published", true)
            .order("sort_order", { ascending: true });

        if (response.error || !Array.isArray(response.data)) return [];

        return response.data.map(function (row) {
            return {
                slug: row.slug,
                title: row.title,
                industry: row.industry || "Case Study",
                tags: Array.isArray(row.tags) ? row.tags : [],
                categories: Array.isArray(row.categories) ? row.categories : [],
                cardImage: getPublicImageUrl(client, config.projectImagesBucket, row.card_image),
                cardAlt: row.card_alt || (row.title + " case study"),
                heroImage: getPublicImageUrl(client, config.projectImagesBucket, row.hero_image || row.card_image),
                heroAlt: row.hero_alt || (row.title + " hero"),
                year: row.year || "2024",
                role: row.role || "Product Designer",
                client: row.client_name || "Confidential client",
                deliverables: row.deliverables || "Research · UX/UI Design · Prototype",
                heroSubtitle: row.hero_subtitle || "Case study detail",
                heroSummary: row.hero_summary || "",
                detail: {
                    product: row.detail_product || ((row.industry || "Digital Product") + " - Web & Mobile"),
                    channels: row.detail_channels || "Website · Product experience · Case study",
                    overview: row.detail_overview || "",
                    contextParagraph1: row.context_paragraph_1 || "",
                    contextParagraph2: row.context_paragraph_2 || "",
                    contextBullets: Array.isArray(row.context_bullets) ? row.context_bullets : [],
                    results: Array.isArray(row.results) ? row.results : [],
                    reflection: Array.isArray(row.reflection) ? row.reflection : []
                }
            };
        });
    }

    window.SUPABASE_CONTENT = {
        readConfig: readConfig,
        createClient: createClient,
        fetchProjects: fetchProjects
    };
})();
