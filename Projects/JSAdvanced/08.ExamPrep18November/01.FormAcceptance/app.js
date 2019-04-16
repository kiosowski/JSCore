function acceptance() {
    let companyName = $("input[name=shippingCompany]").val();
    $("input[name=shippingCompany]").val("");
    let productName = $("input[name=productName]").val();
    $("input[name=productName]").val("");
    let productQuantity = $("input[name=productQuantity]").val();
    $("input[name=productQuantity]").val("");
    let productScrape = $("input[name=productScrape]").val();
    $("input[name=productScrape]").val("");

    if (companyName !== "" &&
        productName !== "" &&
        !isNaN(productQuantity) &&
        !isNaN(productScrape) &&
        (productQuantity - productScrape) > 0) {
        let wareHouse = $("#warehouse");
        let divElement = $("<div>");
        let productElement = $(`<p>[${companyName}] ${productName} - ${productQuantity - productScrape} pieces</p>`);
        let outOfStockButton = $(`<button type="button">Out of stock</button>`);
        outOfStockButton.click(function () {
            $(this).parent().remove();
        });
        divElement.append(productElement);
        divElement.append(outOfStockButton);
        wareHouse.append(divElement);
    }
}