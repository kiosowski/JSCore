(function phonebook() {
    const baseUrl = "https://phonebook-nakov.firebaseio.com/phonebook.json";
    $("#btnLoad").click(btnLoad);
    $("#btnCreate").click(btnCreate);

    function btnLoad() {
        $.ajax({
            url: baseUrl,
            method: "GET",
            success: onContactsLoad
        });
    }

    function btnCreate(){
        $.ajax({
            url: baseUrl,
            method: "POST",
            data: JSON.stringify({person: $("#person").val(), phone: $("#phone").val()})
        });

        $("#person").val("");
        $("#phone").val("");
    }

    function onContactsLoad(data){
        let phonebookElement = $("#phonebook");
        phonebookElement.empty();

        Object.keys(data).forEach(id => {
            let liElement = $("<li>").text(`${data[id].person}: ${data[id].phone} `);
            let delButton = $("<button>").attr("id", "btnDelete").text("Delete").on("click", function () {
                $.ajax({
                    method: "DELETE",
                    url: `https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`,
                    success: btnLoad
                });
            });
            liElement.append(delButton);
            phonebookElement.append(liElement);
        });
    }
}());