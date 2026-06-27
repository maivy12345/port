(function () {
    "use strict";

    var SLUG_BY_IMAGE = {
        "Project1-OneIBC-App.jpg": "one-ibc-app",
        "Project2-OCC-Web.jpg": "offshore-companycorp",
        "Project3-Airnoma-App.jpg": "airnoma",
        "Project4-myss-landingpage.jpg": "myss-clinic",
        "Project5-medpro-WebApp.jpg": "medpro",
        "Project6-ntbindustrialpark-web.jpg": "ntb-industrial-park",
        "Project7-md1world-web.jpg": "md1-world",
        "Project8-binmedia-web.jpg": "bin-media",
        "Project9-tamvie-webapp.jpg": "tamvie-health",
        "Project10-spa-landingpage.jpg": "aesthetic-clinic",
        "Project11-manbu-app.jpg": "manbu",
        "Project12-OneIBC-Portal.jpg": "one-ibc-portal",
        "Project13-uom-web.jpg": "uom-immigration",
        "Project14-Elearning-landingpage.jpg": "elearning-platform",
        "Project15-voltorax-web.jpg": "voltorax",
        "Project16-visa-landingpage.jpg": "saudi-evisa",
        "Project18-EcoHHB-web.jpg": "eco-hhb",
        "Project19-JNRVIETNAM-landingpage.jpg": "jnr-vietnam"
    };

    function imageFileFromItem(item) {
        var img = item.querySelector("img");
        if (!img || !img.getAttribute("src")) return "";
        return img.getAttribute("src").split("/").pop().split("?")[0];
    }

    document.querySelectorAll(".cases-marquee__item").forEach(function (item) {
        var file = imageFileFromItem(item);
        var slug = SLUG_BY_IMAGE[file];
        if (!slug) return;

        item.href = "work-detail.html?slug=" + encodeURIComponent(slug);

        var img = item.querySelector("img");
        var label = (img && img.getAttribute("alt")) || slug;
        if (label) {
            item.setAttribute("aria-label", "View " + label + " case study");
        }
    });
})();
