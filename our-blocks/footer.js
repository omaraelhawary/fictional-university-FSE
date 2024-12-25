wp.blocks.registerBlockType("ourblocktheme/footer", {
    title: "footer",
    edit: function () {
        return wp.element.createElement("div", { className: "our-placeholder-block" }, "Footer Placeholder")
    },
    save: function () {
        return null
    }
})