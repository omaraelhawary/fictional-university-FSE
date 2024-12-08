import { ToolbarGroup, ToolbarButton } from "@wordpress/components"
import { RichText, BlockControls } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks";


registerBlockType("ourblocktheme/genericbutton", {
    title: "Generic Button",
    attributes: {
        text: {
            type: "string"
        },
        size: {
            type: "string",
            default: "large"
        },
        color: {
            type: "string",
            default: "orange"
        }
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props) {

    function handleTextChange(x) {
        props.setAttributes({ text: x })
    }

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton onClick={() => props.setAttributes({ size: "large" })} isPressed={props.attributes.size === "large"}>Large</ToolbarButton>
                    <ToolbarButton onClick={() => props.setAttributes({ size: "medium" })} isPressed={props.attributes.size === "medium"}>Medium</ToolbarButton>
                    <ToolbarButton onClick={() => props.setAttributes({ size: "small" })} isPressed={props.attributes.size === "small"}>Small</ToolbarButton>
                </ToolbarGroup>
            </BlockControls>
            <RichText allowedFormats={[]} tagName="a" className={`btn btn--${props.attributes.size}`} value={props.attributes.text} onChange={handleTextChange} />
        </>
    )
}

function SaveComponent(props) {

    return <a href="#" className={`btn btn--${props.attributes.size}`}>{props.attributes.text}</a>
}