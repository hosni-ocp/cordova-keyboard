#import <Cordova/CDVPlugin.h>

@interface CDVCustomKeyboard : CDVPlugin {
}
@property (nonatomic, copy) NSString* callbackId;
@property (nonatomic, copy) NSString* inputId;
@property (nonatomic) UIKeyboardType keyboardType;
@property (nonatomic, copy) NSString* openCloseCallbackId;

- (void)open:(CDVInvokedUrlCommand*)command;
- (void)setOpenCloseListener:(CDVInvokedUrlCommand*)command;
- (void)unsetOpenCloseListener:(CDVInvokedUrlCommand*)command;
- (void)close:(CDVInvokedUrlCommand*)command;
- (void)change:(CDVInvokedUrlCommand*)command;

@end
