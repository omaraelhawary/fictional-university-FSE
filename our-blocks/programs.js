wp.blocks.registerBlockType("ourblocktheme/programs", {
    title: "Programs",
    edit: function () {
        return wp.element.createElement("div", { className: "our-placeholder-block" }, "Programs Placeholder")
    },
    save: function () {
        return null
    }
})