function attachEvents() {
    const url = "https://messanger-4c728.firebaseio.com/messanger/.json";
    loadMessages();

    $("#submit").click(submitMessage);

    function loadMessages() {
        $("#messages").text("");
        $.ajax({
            method: "GET",
            url,
            success: loadMessagesOnSuccess
        });
    }

    function loadMessagesOnSuccess(data) {
        Object.entries(data).sort((a, b) => a[1].timestamp - b[1].timestamp).forEach(e => {
            if (!e) {
                return;
            }

            $("#messages").text($("#messages").text() + `${e[1].author}: ${e[1].content}\n`);
        });
    }

    function submitMessage() {
        let author = $("#author").val();
        $("#author").val("");
        let content = $("#content").val();
        $("#content").val("");
        let timestamp = Date.now();

        $.ajax({
            method: "POST",
            url,
            data: JSON.stringify({
                author,
                content,
                timestamp
            })
        });

        loadMessages();
    }
}