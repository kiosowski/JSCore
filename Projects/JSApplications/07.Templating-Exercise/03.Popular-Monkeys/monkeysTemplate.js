$(() => {
    renderMonkeys();

    async function renderMonkeys(){
        const source = await $.get("./monkeyTemplate.handlebars");
        const template = Handlebars.compile(source);
        const context = {monkeys};
        const html = template(context);
        $(".monkeys").html(html);
    }
})

function displayInfo(id){
    $(`#${id}`).toggle();
}