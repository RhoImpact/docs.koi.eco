import { execSync } from "child_process";

export function remarkModifiedTime() {
  // This function adds a lastModified property to the file object.
  // See rehypeAddLastModified for the export that makes this available in a page.
  return function (tree, file) {
    const filepath = file.history[0];
    const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`);
    file.data.lastModified = result.toString();
  };
}