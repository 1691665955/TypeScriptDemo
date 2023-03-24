import md5 = require('./jslib/md5');

// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })

    test();
  },
})

function test() {
  const hello: String = "Hello World";
  console.log(hello);

  class Site {
    name(): String {
      return "Runoob"
    }

    haha(): void {
      console.log("say haha");
    }
  }

  var obj = new Site();
  console.log(obj.name());
  obj.haha();

  let x: [String, number];
  x = ["name", 66];
  console.log(x[0]);
  console.log(x[1]);

  // 枚举
  enum Color {
    Red,
    Green,
    Blue
  }

  let c = Color.Blue;
  console.log(c);


  // any
  let aa : any = 1;
  aa = "ce";
  aa = false;
  console.log(aa);

  var bb = 4.2;
  bb.toFixed();
  console.log(bb);

  let array: any[] = [1, false, "fine"];
  console.log(array[2]);

  var kk : Array<String> = ["aa", "bb"];
  console.log(kk);

  // 类型断言
  console.log("类型断言:");
  var str1 = "1";
  var str2 : number = <number> <any>str1;
  console.log(str2);
  console.log(typeof bb);


  // 方法
  console.log("方法:");
  buildName1("zz","kk");
  buildName1("zz");
  buildName2("zz");
  console.log(buildName3("aa","bb","cc","dd","ff"));

  // Number对象
  console.log("Number对象:");
  console.log(Number.MAX_VALUE);
  console.log(Number.MIN_VALUE);
  console.log(Number.NEGATIVE_INFINITY);
  console.log(Number.POSITIVE_INFINITY);

  // 引用js
  console.log("引用js");
  console.log(md5.md5("zzz"));
}

// 可选参数
function buildName1(firstName: string, lastName?: String) {
  console.log(`${firstName} ${lastName}`);
}

// 默认参数
function buildName2(firstName: string, lastName: String = "gof") {
  console.log(`${firstName} ${lastName}`);
}

// 剩余参数
function buildName3(firstName: string, ...restOfName: string[]): string {
  return `${firstName} ${restOfName.join(" ")}`
}