const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const xml2js = require('xml2js');

const docsDir = path.join(__dirname, 'docs');
const buildDir = path.join(__dirname, 'build');
const outputFile = path.join(buildDir, 'combined.md');
const sitemapFile = path.join(buildDir, 'sitemap.xml');

function getAllMarkdownFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllMarkdownFiles(filePath));
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      results.push(filePath);
    }
  });
  return results;
}

function combineMarkdownFiles() {
  const files = getAllMarkdownFiles(docsDir).map(filePath => {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data, content: body } = matter(content);
    const startIndex = body.indexOf('# ');
    const bodyWithoutHeader = body.slice(startIndex);
    let relativePath = path.relative(docsDir, filePath);
    const ext = path.extname(relativePath);
    relativePath = relativePath.slice(0, -ext.length);
    let defaultSidebarPosition = Math.MAX_SAFE_INTEGER;
    if (relativePath.endsWith('index')) {
      defaultSidebarPosition = 0;
    }
    return { filePath: relativePath, sidebarPosition: data.sidebar_position !== undefined ? data.sidebar_position : defaultSidebarPosition, content: bodyWithoutHeader };
  });

  files.sort((a, b) => {
    const aDir = path.dirname(a.filePath);
    const bDir = path.dirname(b.filePath);
    if (aDir === bDir) {
      if (a.sidebarPosition === b.sidebarPosition) {
        return a.filePath.localeCompare(b.filePath);
      }
      return a.sidebarPosition - b.sidebarPosition;
    }
    return aDir.localeCompare(bDir);
  });

  let combinedContent = '';
  files.forEach(file => {
    let breadcrumb = file.filePath;
    if (breadcrumb.endsWith("index")) {
      breadcrumb = breadcrumb.slice(0, -6);
    }
    if (breadcrumb.endsWith("intro")) {
      breadcrumb = breadcrumb.slice(0, -5) + "/";
    }
    breadcrumb = `<!-- ${breadcrumb} -->`;
    combinedContent += `${breadcrumb}\n${file.content}\n\n`;
  });

  fs.writeFileSync(outputFile, combinedContent, 'utf-8');
  console.log(`Combined markdown file created at ${outputFile}`);

  addUrlsFromSitemap();
}

function addUrlsFromSitemap() {
  fs.readFile(sitemapFile, (err, data) => {
    if (err) {
      console.error(`Error reading sitemap file: ${err}`);
      return;
    }

    xml2js.parseString(data, (err, result) => {
      if (err) {
        console.error(`Error parsing sitemap file: ${err}`);
        return;
      }

      const urls = result.urlset.url.map((url) => url.loc[0]);
      const urlsContent = `# URLs\n\n${urls.join("\n")}\n`;

      fs.appendFileSync(outputFile, urlsContent, "utf-8");
      console.log(`URLs added to combined markdown file`);
    });
  });
}

combineMarkdownFiles();