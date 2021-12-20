// based on https://stackoverflow.com/a/30269562
// Minimal Pure C code to create a window in Cocoa

// $ clang minimal.c -framework Cocoa -o minimal.app

#include <objc/runtime.h>
#include <objc/message.h>

#include <Carbon/Carbon.h>

#define cls objc_getClass
#define sel sel_getUid
#define msg ((id (*)(id, SEL, ...))objc_msgSend)
#define cls_msg ((id (*)(Class, SEL, ...))objc_msgSend)

// poor man's bindings!
typedef enum NSApplicationActivationPolicy {
    NSApplicationActivationPolicyRegular   = 0,
    NSApplicationActivationPolicyAccessory = 1,
    NSApplicationActivationPolicyERROR     = 2,
} NSApplicationActivationPolicy;

typedef enum NSWindowStyleMask {
    NSWindowStyleMaskBorderless     = 0,
    NSWindowStyleMaskTitled         = 1 << 0,
    NSWindowStyleMaskClosable       = 1 << 1,
    NSWindowStyleMaskMiniaturizable = 1 << 2,
    NSWindowStyleMaskResizable      = 1 << 3,
} NSWindowStyleMask;

typedef enum NSBackingStoreType {
    NSBackingStoreBuffered = 2,
} NSBackingStoreType;

int main(int argc, char *argv[])
{
    // id app = [NSApplication sharedApplication];
    id app = cls_msg(cls("NSApplication"), sel("sharedApplication"));

    // [app setActivationPolicy:NSApplicationActivationPolicyRegular];
    msg(app, sel("setActivationPolicy:"), NSApplicationActivationPolicyRegular);

    struct CGRect frameRect = {0, 0, 600, 500};

    // id window = [[NSWindow alloc] initWithContentRect:frameRect styleMask:NSWindowStyleMaskTitled|NSWindowStyleMaskClosable|NSWindowStyleMaskResizable backing:NSBackingStoreBuffered defer:NO];
    id window = msg(cls_msg(cls("NSWindow"), sel("alloc")),
                    sel("initWithContentRect:styleMask:backing:defer:"),
                    frameRect,
                    NSWindowStyleMaskTitled|NSWindowStyleMaskClosable|NSWindowStyleMaskResizable,
                    NSBackingStoreBuffered,
                    false);
    msg(window, sel("setTitle:"), cls_msg(cls("NSString"), sel("stringWithUTF8String:"), "Pure C App"));

    // [window makeKeyAndOrderFront:nil];
    msg(window, sel("makeKeyAndOrderFront:"), nil);

    // [app activateIgnoringOtherApps:YES];
    msg(app, sel("activateIgnoringOtherApps:"), true);

    msg(app, sel("run"));
}