function solve(){
    let jsFund = $('input[name=js-fundamentals]:checked');
    let jsAdvanced = $('input[name=js-advanced]:checked');
    let jsApplication = $('input[name=js-applications]:checked');
    let jsWeb = $('input[name=js-web]:checked');

    let onsite = $('input[name=onsite]');
    let online = $('input[name=online]');

    let signMeUpBtn = $(`<button value="signMeUp">Sign me up</button>`);
    signMeUpBtn.on(function(){
        console.log('check');
    });
}

solve();