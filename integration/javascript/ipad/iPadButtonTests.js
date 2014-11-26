var target = UIATarget.localTarget();
var window = target.frontMostApp().mainWindow();

UIALogger.logStart("iPad button works");
window.buttons()["iPadButton"].tap();

if (window.staticTexts()[0].value() === "iPad Button Pushed") {
    UIALogger.logPass();
}
else {
    UIALogger.logFail();
}
