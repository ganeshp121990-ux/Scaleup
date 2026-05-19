export default function sitemap() {
    return [
        {
            url: "https://www.scaleupaccounting.uk",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },

        {
            url: "https://www.scaleupaccounting.uk/#about",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },

        {
            url: "https://www.scaleupaccounting.uk/#services",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },

        {
            url: "https://www.scaleupaccounting.uk/#compliance",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },

        {
            url: "https://www.scaleupaccounting.uk/#rpo",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },

        {
            url: "https://www.scaleupaccounting.uk/#contact",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
    ];
}