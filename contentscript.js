chrome.extension.onRequest.addListener (
    function(request, sender, sendResponse) {
        var elms = document.getElementsByTagName("input");
        for(var i = 0; i < elms.length; i++){
            var elm = elms.item(i);
            if(elm.getAttribute("type") === "password"){
                alert("find password form!!!");
                elm.setAttribute("type", "text");
            }
        }
    }
)
