function realEstateAgency() {
    $("button[name=regOffer]").click(regOffer);
    $("button[name=findOffer]").click(findOffer);

    function findOffer() {

        let budget = $("input[name=familyBudget]");
        let familyApartmentType = $("input[name=familyApartmentType]");
        let name = $("input[name=familyName]");
        let agencyProfit = $("#roof").find("h1");

        let allOffers = $("#building");
        let offers = Number(allOffers.children().length);

        let message = $("#offerManager").find("#message");

        let amIHomeless = true;

        for (let i = 0; i < offers; i++) {

            let div = allOffers.children().eq(i);

            let rent = +div.children().first().text().split(/: /)[1];
            let type = div.children().eq(1).text().split(/: /)[1];
            let commission = +div.children().eq(2).text().split(/: /)[1];

            let allMoney = (rent + (rent * (commission / 100)));

            let currentAgencyProfit = (rent * (commission / 100)) * 2;
            let entireAgencyProfit = +agencyProfit.text().split(" ")[2] + currentAgencyProfit;

            if (budget.val() >= allMoney && type === familyApartmentType.val()) {

                div.css("border", "2px solid red");

                div.children().first().text(`${name.val()}`);
                div.children().eq(1).text("live here now");
                div.children().eq(2).remove();

                let moveOutBtn = $("<button>");
                moveOutBtn.on("click", function () {
                    div.remove();
                    let familyName = div.children().first().text();
                    message.text(`They had found cockroaches in ${familyName}\'s apartment`);
                });
                moveOutBtn.text("MoveOut");

                div.append(moveOutBtn);

                amIHomeless = false;

                agencyProfit.text(`Agency profit: ${entireAgencyProfit} lv.`);
                break;
            }
        }

        if (amIHomeless) {
            message.text("We were unable to find you a home, so sorry :(");
        } else {
            message.text("Enjoy your new home! :))");
        }

        budget.val("");
        familyApartmentType.val("");
        name.val("");
    }

    function regOffer() {
        $("#message").text("");
        let rent = $("input[name=apartmentRent]").val();
        $("input[name=apartmentRent]").val("");
        let apartmentType = $("input[name=apartmentType]").val();
        $("input[name=apartmentType]").val("");
        let commission = $("input[name=agencyCommission]").val();
        $("input[name=agencyCommission]").val("");

        if (isNaN(rent) ||
            isNaN(commission) ||
            rent <= 0 ||
            commission < 0 ||
            commission > 100 ||
            apartmentType === "" ||
            apartmentType.includes(":")
        ) {
            $("#message").text("Your offer registration went wrong, try again.");
        } else {
            $("#message").text("Your offer was created successfully.");

            let apartmentDiv = $("<div></div>");
            apartmentDiv.addClass("apartment");

            let rentParagraph = $(`<p>Rent: ${rent}</p>`);
            let typeParagraph = $(`<p>Type: ${apartmentType}</p>`);
            let commissionParagraph = $(`<p>Commission: ${commission}</p>`);

            apartmentDiv.append(rentParagraph);
            apartmentDiv.append(typeParagraph);
            apartmentDiv.append(commissionParagraph);

            $("#building").append(apartmentDiv);
        }
    }
}