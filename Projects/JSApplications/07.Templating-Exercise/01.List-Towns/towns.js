function attachEvents(){
    $("#btnLoadTowns").click(renderTowns);

    async function renderTowns(){
        const towns = $("#towns").val().split(", ");
        $("#towns").val("");
        const source = await $.get("./town-list.handlebars");
        const template = Handlebars.compile(source);
        const context = {towns};
        const html = template(context);
        $("#root").html(html);
    }
}