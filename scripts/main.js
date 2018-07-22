angular.module("website", ["ngSanitize"]).controller("JobsController", ["$scope", function (a) {
    a.jobs = [{
        name: "Carebot",
        side: !1,
        date: "May 2017 - Now",
        screenshots: ["bots.jpeg"],
        skills: ["Backend", "Python", "Machine Learning", "Tensorflow", "Keras"],
        description: "Building a Machine Learning Search Based on Tensorflow and Keras with LSTM Sequential Linear Network, That remembers past search results and calulates the waitage, and retrains the model to provide accurate search result <br/> <br/>"
    },{
        name: "Service Focus",
        side: !1,
        date: "Apr 2017 - Now",
        skills: ["Backend", "Java", "Springboot", "LDAP", "Remedy"],
        description: "Service focus is an entry point for all other Application Such as Form builder , CTSSP , Chatbot , OTRS and Other Apllication , That Provide and take cares of Authentication of Other Application, It acts as an Entry point of Other Application Managing Local , Remedy , LDAP and OTRS <br/> <br/>"
    }, {
        name: "MatchRX",
        side: !1,
        icon: "images/logo.png",
        date: "Nov 2017 - Mar 2017",
        skills: ["Backend", "Web", "Lumen", "Laravel"],
        screenshots: ["Selection_006.png"],
        description: "We are currently building a <b>new bank</b> for <b>small and medium businesses</b>, from scratch.<br/><br/>I joined the team very early on and it’s the most exciting project I’ve ever been working on, our goal is very ambitious and all the team is very talented. <br/><br/>We’re all working <b>full-stack</b>, from the product definition to the implementations, backend, web, salesforce and mobile.<br/><br/>You can find more information <a href='https://www.matchrx.com/' target='_blank'>here</a>. <br/><br/>"
    }, {
        name: "Caretech Self Service Portal Interface (CTSSPI)",
        side: !1,
        icon: "images/caretech.png",
        date: "Oct 2017 - Now",
        skills: ["Ruby", "Java"],
        screenshots: ["Selection_007.png"],
        description: "I worked on two distinct subjects on the Kinetic Task Engine.<ul><li><b>In Workflow We connected Remedy with our Backend Code</b><li>We provided Dynamic Endpoint Creation for Accessing Remedy Forms</li><li>Implemented OAuth 2.0 Specs With Remedy Login Credentials</li><li>Connected LDAP and performing LDAP Queries</li></ul>."
    }, {
        name: "Kinetic Task Engine",
        side: !0,
        icon: "images/apps/Selection_007.png",
        date: "Oct 2017 - Now",
        skills: ["Ruby", "Java"],
        screenshots: ["Selection_007.png"],
        description: "Kinetic Task Engine that runs on Ruby as a internal core Combined with JRuby as an abstraction with Java that connects ruby code to remedy to provide CRUD operation on Remedy Forms."
    }, {
        name: "Sahaj Vani",
        icon: "images/sahajvani.webp",
        date: "Mar 2017 - Oct 2017",
        screenshots: ["unnamed.webp", "unnamed1.webp", "unnamed2.webp", "unnamed3.webp"],
        description: '<ul><li>ADS App - This app is a personal library linked to Abhyasi Digital Store(ADS). Users can download all items purchased previously in ADS into their local devices and can download free content available in ADS into their devices. Those purchases are available for download any number of times. User can log in using mysrcm credentials and can link upto five devices with a single mysrcm account. This means, content purchased through a single mysrcm id can be downloaded and played in five different devices.' +
        '</li><li>' +
        'The app has three tabs - ' +
        'Catalog - This is the ADS catalog. It lists all products available for purchase/download from ADS. Currently, the app allows purchase and download of free items directly from the app. Also, if the user has purchased store credits in USD, the app will allow the user to purchase content using the store credit.' +
        '</li><li>' +
        'Purchase - This lists all the products purchased by the user. It is available for download to the device.\n' +
        '</li><li>' +
        'My Library - This contains all the content downloaded into the device and available for rendering in the device. For better storage management of the device, the app allows the user to delete downloaded content in the local device. The deleted content can be downloaded later, if needed from the purchased tab <a href="https://play.google.com/store/apps/details?id=com.sahajvani.app&hl=en">Download Here</a>.</li></ul>',
        skills: ["IOS", "Android"]
    }, {
        name: "Sahaj Connect",
        icon: "images/sahajconnect.webp",
        date: "Mar 2017 - Oct 2017",
        screenshots: ["sahaj1.webp", "sahaj2.webp", "sahaj3.webp"],
        description: "<ul><li>Let's Meditate is an innovative app that enables a Seeker to experience meditation with the help of a Meditation Trainer.\n" +
        "Sahaj Marg meditation focuses on the heart, By tuning in to our heart, we learn to be centered and discover the unlimited resources that lie within.\n" +
        "</li><li>" +
        "As a Seeker, you can do a quick one-time registration and get access to a Trainer anytime no matter where you are! All you have to do is login and request for a meditation session. The app immediately connects you with an available Trainer who helps you meditate. You can also provide feedback to the Trainer regarding your session!</li><li>" +
        "As a Trainer, you can provide meditation sessions to new seekers and existing practitioners as often as you like <a href='https://play.google.com/store/apps/details?id=com.letsmeditate&hl=en'> Download Here</a>.</li></ul>",
        skills: ["PHP", "Android"]
    }, {
        name: "SHPT",
        icon: "images/shpt.png",
        date: "Aug 2016 - Oct 2017",
        skills: ["Design", "Web", "Backend", "PHP"],
        screenshots: ["Selection_008.png", "Selection_009.png"],
        description: "SHPT is an Online store for Books CD DVD, and Other Heartfulness Products"
    }, {
        name: "Phoenix",
        icon: "images/guillotine.png",
        date: "Mar 2016 - Aug 2016",
        skills: ["Ruby", "Rails", "MongoDB"],
        description: "Billing Software used for Billing heartfulness products, It uses Rails as internal framework, with backend og MongoDB for document storage"
    }, {
        name: "Heartfulness Magazines",
        icon: "images/magazine.png",
        date: "Dec 2015 - Mar 2017",
        skills: ["Java", "Kotlin", "Cassandra"],
        description: "Heartfulness Magazine for Monthly and Yearly Subscription, Built with Spring Boot, Cassandra as internal data store . <a href='https://heartfulnessmagazine.shpt.in/subscribe'>Visit</a>",
        "screenshots": ["Selection_010.png"]
    },
        {
            name: "Abhiyasi Digital Store",
            icon: "images/digital.png",
            date: "Dec 2015 - Mar 2017",
            skills: ["Java", "Kotlin", "Postgres", "Magento"],
            description: "Online Store to Download Heartfulness Material , Audio, Video and many. <a href='https://www.shriramchandramission.org//digitalstore/'>Visit</a>",
            screenshots: ["Selection_011.png"]
        }, {
            name: "ACS Insurance",
            icon: "images/acs.png",
            date: "Dec 2015 - May 2016",
            skills: ["C#", "MVC 5", "SQL Server"],
            description: "ACS financial Insurance is the backend for user to register their Insurance detail, Subscribe for Notification, and many."
        }, {
            name: "ELS",
            icon: "images/wso2.png",
            date: "Dec 2015 - Jan 2016",
            skills: ["Java", "WSO2"],
            description: "Written a WSO2 wrapper that convert XML response to JSON and vice versa, from client server Communication from WEB to Wsot through ESB(Enterprise Service Bus)."
        }, {
            name: "Global Archives",
            icon: "images/gasbig.png",
            date: "Apr 2015 - Dec 2015",
            skills: ["PHP", "MySQL", "Java Script"],
            screenshots: ["gassmall.PNG"],
            description: "Asset Management System for Storing List of Available Books,CD,DVD,Tapes and more."
        }];
    var b = 250, c = 30, d = -32;
    a.openScreenshot = function (a) {
        window.open("images/screenshots/" + a)
    }, a.togglecard = function (e) {
        var f = $("#card-" + e), g = $("#title-" + e), h = "left" === g.css("text-align"), i = f.children().first(),
            j = $("#more-" + e), k = i.outerHeight(), l = g.children().first().outerHeight();
        if (f.toggleClass("card-displayed"), f.hasClass("card-displayed")) {
            g.css({right: 0, opacity: 1, height: l}), g.transition({
                right: 16,
                opacity: 0,
                height: 0
            }, b), f.css({top: d}), f.transition({height: k, top: 0}, {
                duration: b, complete: function () {
                    f.css({height: "auto"})
                }
            });
            var m = h ? {left: c, opacity: 0} : {right: c, opacity: 0};
            i.css(m);
            var n = h ? {left: 0, opacity: 1} : {right: 0, opacity: 1};
            i.transition(n, b), j && j.transition({opacity: 0}, b), $(".card-displayed").each(function () {
                var b = $(this).attr("id");
                b != "card-" + e && a.togglecard(b.substring(5))
            })
        } else {
            g.transition({right: 0, opacity: 1, height: l}, b);
            var o = h ? {left: c, opacity: 0} : {right: c, opacity: 0};
            i.transition(o, b), f.css({height: f.outerHeight()}), f.transition({
                height: 0,
                top: d
            }, b), j && j.transition({opacity: 1}, b)
        }
    }
}]);