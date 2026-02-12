/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://react-ko-form.netlify.app",
  generateRobotsTxt: true,
  exclude: ["/providers/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/providers/"],
      },
    ],
  },
  transform: async (config, path) => {
    // 홈페이지는 가장 높은 priority
    if (path === "/") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }

    // 주요 문서 페이지
    if (path === "/get-started" || path === "/docs") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }

    // API 문서 페이지
    if (path.startsWith("/docs/")) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }

    // 기타 페이지
    return {
      loc: path,
      changefreq: "monthly",
      priority: 0.6,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
