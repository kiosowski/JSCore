$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
        const cats = this.cats;
        const source = await $.get("./catListTemplate.handlebars");
        const template = Handlebars.compile(source);
        const context = {cats};
        const html = template(context);
        $("#allCats").html(html);
    }
});

function showStatusCode(id){
    let statusCodeDiv = $(`#${id}`);
    let currentText = statusCodeDiv.siblings(":button").text();
    currentText.startsWith("Show") ? statusCodeDiv.siblings(":button").text("Hide status code") : statusCodeDiv.siblings(":button").text("Show status code");
    statusCodeDiv.toggle();
}
