var target = UIATarget.localTarget();
var window = target.frontMostApp().mainWindow();

UIALogger.logStart("iPad button works");
window.buttons()["iPadButton"].tap();

if (window.staticTexts()[0].value() === "iPad Button Pushed") {
    UIALogger.logPass("iPad button works");
}
else {
    UIALogger.logFail("iPad button doesn't work");
}
