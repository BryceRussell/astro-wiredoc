import { toString } from 'mdast-util-to-string'
import type { AstroVFile } from '@/types';

export interface Options {

}

export const autoTitle = (opts: Options) => {
    return function transformer (root, file: AstroVFile) {
        var children = root.children
        const filepath = file.history.pop()?.replace(file.cwd, '.').replace(/(\/\/)|(\\)+/g, '/');
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