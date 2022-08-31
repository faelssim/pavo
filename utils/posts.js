/*
 * @Author: wangkun
 * @Date: 2022-08-31 09:21:32
 * @LastEditTime: 2022-08-31 13:10:23
 * @LastEditors: wangkun
 * @Description: 
 */
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "posts")

export function getSortedPostsData () {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostData = fileNames.map(item => {
        const id = item.replace(/\.md$/, "")
        const fileContent = fs.readFileSync(path.join(postsDirectory, item), "utf8")
        const { data: { title, date } } = matter(fileContent)
        return {
            id,
            title,
            date
        }
    })
    allPostData.sort((a, b) => {
        return new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1
    }) 
    return allPostData
}

export function getAllPostIds () {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        }
    })
}

export async function getPostData (id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContent = fs.readFileSync(fullPath, "utf8")
    const matterResult = matter(fileContent)
    return {
        ...matterResult.data,
        content: matterResult.content
    }
}