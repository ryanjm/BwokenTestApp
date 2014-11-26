var target = UIATarget.localTarget();
var window = target.frontMostApp().mainWindow();

UIALogger.logStart("iPhone button works");
window.logElementTree();
window.buttons()["iPhoneButton"].tap();

if (window.staticTexts()[0].value() === "iPhone Button Pushed") {
    UIALogger.logPass("iPhone button works");
}
else {
    UIALogger.logFail("iPhone button doesn't works");
}
