#[macro_use]
extern crate neon;
extern crate travis_test;

use neon::prelude::*;

fn hello(mut cx: FunctionContext) -> JsResult<JsString> {
    let s = travis_test::testa();
    Ok(cx.string(s.as_str()))
}

register_module!(mut cx, {
    cx.export_function("hello", hello)
});
