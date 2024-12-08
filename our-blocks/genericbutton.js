import { link } from "@wordpress/icons"
import { ToolbarGroup, ToolbarButton, Popover, Button } from "@wordpress/components"
import { RichText, BlockControls, __experimentalLinkControl as LinkControl } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"
import { useState } from "@wordpress/element"


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
        linkObj: {
            type: "object"
        },
        color: {
            type: "string",
            default: "blue"
        }
    },
    edit: EditComponent,
    save: SaveComponent
})

function EditComponent(props) {

    const [isLinkPickerVisiable, setIsLinkPickerVisiable] = useState(false);

    function handleTextChange(x) {
        props.setAttributes({ text: x })
    }

    function buttonHandler() {
        setIsLinkPickerVisiable(prev => !prev)
    }

    function handleLinkChange(newLink) {
        props.setAttributes({ linkObj: newLink })
    }

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton onClick={buttonHandler} icon={link} />
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarButton onClick={() => props.setAttributes({ size: "large" })} isPressed={props.attributes.size === "large"}>Large</ToolbarButton>
                    <ToolbarButton onClick={() => props.setAttributes({ size: "medium" })} isPressed={props.attributes.size === "medium"}>Medium</ToolbarButton>
                    <ToolbarButton onClick={() => props.setAttributes({ size: "small" })} isPressed={props.attributes.size === "small"}>Small</ToolbarButton>
                </ToolbarGroup>
            </BlockControls>
            <RichText allowedFormats={[]} tagName="a" className={`btn btn--${props.attributes.size} btn--${props.attributes.color}`} value={props.attributes.text} onChange={handleTextChange} />
            {isLinkPickerVisiable && (
                <Popover position="middle center">
                    <LinkControl settings={[]} value={props.attributes.linkObj} onChange={handleLinkChange} />
                    <Button variant="primary" onClick={() => setIsLinkPickerVisiable(false)} style={{ display: "block", width: "100%" }}>Assign Link</Button>
                </Popover >
            )
            }
        </>
    )
}

function SaveComponent(props) {

    return <a href={props.attributes.linkObj.url} className={`btn btn--${props.attributes.size} btn--${props.attributes.color}`}>{props.attributes.text}</a>
}
