import { toString } from 'mdast-util-to-string'

export const autoTitle = (opts) => {
    return function transformer (root, file) {
        var children = root.children

        const filepath = file.history
            .pop()
            ?.replace(file.cwd, '')
            .replace(/(\/\/)|(\\)+/g, '/')
            .replace('/src/pages/docs','')
            .replace('/index.md', '');

        const heading = {
            type: 'heading',
            depth: 1,
            children: [
                { type: 'text', value: file.data.astro.frontmatter.title || filepath }
            ]
        }

        var node = children.find(child => child.type === 'heading' && child.depth === 1)

        if (node) {
            if (!toString(node)) node = heading
        } else {
            children.unshift(heading)
        }
        
        return
    }
}