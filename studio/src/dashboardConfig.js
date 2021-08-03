export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6109846242afb7b8a6a255b5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-wband5q8",
                  apiId: "6f74e992-dde8-4c4c-95f7-b68796db6715",
                },
                {
                  buildHookId: "61098462422fca3853ac717d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-2t2u4cdo",
                  apiId: "1db26460-ea9a-491e-b806-1860de3b2aaf",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/bgao11/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-2t2u4cdo.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
