import type { BlockObjectResponse, RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

// ─── Rich text renderer ───────────────────────────────────────────────────────

function RichText({ items }: { items: RichTextItemResponse[] }) {
  return (
    <>
      {items.map((item, i) => {
        let node: React.ReactNode = item.plain_text;
        if (item.annotations.bold) node = <strong key={i}>{node}</strong>;
        if (item.annotations.italic) node = <em key={i}>{node}</em>;
        if (item.annotations.strikethrough) node = <s key={i}>{node}</s>;
        if (item.annotations.underline) node = <u key={i}>{node}</u>;
        if (item.annotations.code)
          node = <code key={i} className="bg-neutral-100 px-1.5 py-0.5 rounded text-sm font-mono text-accent-warm">{node}</code>;
        if (item.href)
          node = <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent-warm transition-colors">{node}</a>;
        return <span key={i}>{node}</span>;
      })}
    </>
  );
}

// ─── Block renderer ───────────────────────────────────────────────────────────

export default function NotionBlocks({ blocks }: { blocks: BlockObjectResponse[] }) {
  const rendered: React.ReactNode[] = [];

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    switch (block.type) {
      case "paragraph":
        rendered.push(
          <p key={block.id} className="text-neutral-600 leading-relaxed mb-4">
            <RichText items={block.paragraph.rich_text} />
          </p>
        );
        break;

      case "heading_1":
        rendered.push(
          <h1 key={block.id} className="text-3xl font-black text-neutral-900 mt-10 mb-4">
            <RichText items={block.heading_1.rich_text} />
          </h1>
        );
        break;

      case "heading_2":
        rendered.push(
          <h2 key={block.id} className="text-2xl font-black text-neutral-900 mt-8 mb-3">
            <RichText items={block.heading_2.rich_text} />
          </h2>
        );
        break;

      case "heading_3":
        rendered.push(
          <h3 key={block.id} className="text-lg font-bold text-neutral-800 mt-6 mb-2">
            <RichText items={block.heading_3.rich_text} />
          </h3>
        );
        break;

      case "bulleted_list_item":
        rendered.push(
          <li key={block.id} className="text-neutral-600 leading-relaxed ml-4 list-disc mb-1">
            <RichText items={block.bulleted_list_item.rich_text} />
          </li>
        );
        break;

      case "numbered_list_item":
        rendered.push(
          <li key={block.id} className="text-neutral-600 leading-relaxed ml-4 list-decimal mb-1">
            <RichText items={block.numbered_list_item.rich_text} />
          </li>
        );
        break;

      case "quote":
        rendered.push(
          <blockquote key={block.id} className="border-l-4 border-accent-warm pl-5 py-1 my-6 text-neutral-500 italic">
            <RichText items={block.quote.rich_text} />
          </blockquote>
        );
        break;

      case "callout":
        rendered.push(
          <div key={block.id} className="bg-neutral-50 border-l-4 border-accent-warm px-5 py-4 my-6 flex gap-3">
            {block.callout.icon?.type === "emoji" && (
              <span className="text-xl shrink-0">{block.callout.icon.emoji}</span>
            )}
            <p className="text-neutral-600 leading-relaxed">
              <RichText items={block.callout.rich_text} />
            </p>
          </div>
        );
        break;

      case "code":
        rendered.push(
          <pre key={block.id} className="bg-neutral-900 text-neutral-100 rounded p-5 my-6 overflow-x-auto text-sm font-mono">
            <code>{block.code.rich_text.map(r => r.plain_text).join("")}</code>
          </pre>
        );
        break;

      case "image": {
        const src =
          block.image.type === "external"
            ? block.image.external.url
            : block.image.type === "file"
            ? block.image.file.url
            : "";
        const caption = block.image.caption.map(r => r.plain_text).join("");
        rendered.push(
          <figure key={block.id} className="my-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={caption} className="w-full" />
            {caption && (
              <figcaption className="text-sm text-neutral-400 mt-2 text-center">{caption}</figcaption>
            )}
          </figure>
        );
        break;
      }

      case "video": {
        const url =
          block.video.type === "external" ? block.video.external.url : "";
        const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
        if (ytMatch) {
          rendered.push(
            <div key={block.id} className="my-8 aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${ytMatch[1]}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          );
        }
        break;
      }

      case "divider":
        rendered.push(
          <hr key={block.id} className="border-neutral-200 my-8" />
        );
        break;

      case "table_of_contents":
        // skip — could implement later
        break;

      default:
        break;
    }
  }

  return <div>{rendered}</div>;
}
