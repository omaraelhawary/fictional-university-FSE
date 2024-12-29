import { InnerBlocks } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"

registerBlockType("ourblocktheme/slideshow", {
    title: "Slideshow",
    supports: {
        align: ['full']
    },
    attributes: {
        align: {
            type: "string",
            default: "full"
        }
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent() {
    return (
        <div style={{ padding: "2rem", backgroundColor: "#333" }}>
            <p style={{ textAlign: "center", fontSize: "2rem", color: "#fff" }}>Slideshow</p>
            <InnerBlocks allowedBlocks={['ourblocktheme/slide']} />
        </div>
    )
}

function SaveComponent() {
    return <InnerBlocks.Content />
}