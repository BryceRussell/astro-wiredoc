declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"docs": {
"3rd-party-libraries/chalk/index.md": {
  id: "3rd-party-libraries/chalk/index.md",
  slug: "3rd-party-libraries/chalk",
  body: string,
  collection: "docs",
  data: any
},
"3rd-party-libraries/fast-glob/index.md": {
  id: "3rd-party-libraries/fast-glob/index.md",
  slug: "3rd-party-libraries/fast-glob",
  body: string,
  collection: "docs",
  data: any
},
"3rd-party-libraries/kleur/index.md": {
  id: "3rd-party-libraries/kleur/index.md",
  slug: "3rd-party-libraries/kleur",
  body: string,
  collection: "docs",
  data: any
},
"test/empty-file/index.md": {
  id: "test/empty-file/index.md",
  slug: "test/empty-file",
  body: string,
  collection: "docs",
  data: any
},
"test/heading-test/index.md": {
  id: "test/heading-test/index.md",
  slug: "test/heading-test",
  body: string,
  collection: "docs",
  data: any
},
"test/no-h1/index.md": {
  id: "test/no-h1/index.md",
  slug: "test/no-h1",
  body: string,
  collection: "docs",
  data: any
},
"test/relative-image/index.md": {
  id: "test/relative-image/index.md",
  slug: "test/relative-image",
  body: string,
  collection: "docs",
  data: any
},
"test/youtube-embed/index.md": {
  id: "test/youtube-embed/index.md",
  slug: "test/youtube-embed",
  body: string,
  collection: "docs",
  data: any
},
},

	};

	type ContentConfig = never;
}
