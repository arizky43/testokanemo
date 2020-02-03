let protocol = window.location.protocol + "//";
let host = window.location.host + "/";
let paths = window.location.pathname.split('/');
// let path = (paths.length > 1) ? paths[1] : paths[0];
let path = paths[1];
let baseURL = protocol + host + path + "/";
let apiURL = baseURL + "api/";

$(document).ready(function() {
    let urlString = window.location.href; //window.location.href
    let url = new URL(urlString);
    let page = url.searchParams.get("page");
    loadPage(page);
});

function getParamPage(page) {
    let param = localStorage.getItem(page);
    return JSON.parse(param);
}

function gotoPage(page, param = null) {
    if (param) {
        localStorage.setItem(page, JSON.stringify(param));
    }
    window.location.href = baseURL + "pages/index.php?page=" + page;
}

async function loadPage(page) {
    $('#nav' + page).addClass("active");
    $('#app').load(baseURL + "pages/" + page + "/" + page + ".php");
    // let getHtml = await httpReq("get", "pages/" + page + "/" + page + ".php");
    // if (getHtml.status) {
    //     document.getElementById("app").innerHTML = getHtml.response;
    // }
}

function httpReq(method, url, param = null) {
    return new Promise(function (resolve) {
        let result = {
            status: true,
            msg: null,
            response: null
        };

        if (method == "get") {
            axios.get(apiURL + url).then(function (response) {
                result['response'] = response.data;
                resolve(result);
            }).catch(function (error) {
                result['status'] = false;
                result['msg'] = errorMsg;
                resolve(result);
            });
        } else if (method == "post") {
            let formData = createFormdata(param);
            axios.post(apiURL + url, formData).then(function (response) {
                result['response'] = response.data;
                resolve(result);
            }).catch(function (error) {
                result['status'] = false;
                result['msg'] = errorMsg;
                resolve(result);
            });
        }
    });
}

function createFormdata(obj) {
    var formData = new FormData();
    for (var key in obj) {
        formData.append(key, obj[key]);
    }
    return formData;
}