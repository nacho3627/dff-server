Para emular app en legacy mode en ios correr en el comando:
`ionic cordova emulate ios --livereload -- --buildFlag="-UseModernBuildSystem=0"`

Para emular app en legacy mode en ios en Xcode:
File -> Project Settings -> Cambiar Build System

Para que se suscriba al topic de firebase en ios agregar al info.plist la siguente clave-valor (boolean):
`FirebaseAppDelegateProxyEnabled: YES`

Para fijar la pantalla en ios agregar el siguiete codigo al archivo carpeta-del-proyecto/plugins/cordova-plugin-ionic-webview/src/ios/CDVWKWebViewEngine.m
`@implementation UIScrollView (NoBounce)
- (void)didMoveToWindow {
   [super didMoveToWindow];
   self.bounces = NO;
}
@end`