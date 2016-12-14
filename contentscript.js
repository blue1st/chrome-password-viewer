chrome.extension.onRequest.addListener (
    function(request, sender, sendResponse) {
        var elms = document.querySelectorAll("input[type='password']");
        for(var i = 0; i < elms.length; i++){
            var elm = elms.item(i);
            elm.setAttribute("type", "text");
        }
    }
)
