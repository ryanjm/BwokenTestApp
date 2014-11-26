var target = UIATarget.localTarget();
var window = target.frontMostApp().mainWindow();

UIALogger.logStart("Universal button works");
window.buttons()["universalButton"].tap();

if (window.staticTexts()[0].value() === "Universal Button Pushed") {
    UIALogger.logPass("Universal button works");
}
else {
    UIALogger.logFail("Universal button didn't work");
}

