
const {ccclass, property} = cc._decorator;
/**
 * 游戏管理器
 */
@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

		cc.log("测试git 提交一行新内容666")

        var obj = new Object();
        
        // const result = this.lbClick().then((data) => {
        //     cc.log("data = ", data);
        // })
        // cc.log("result = ", result);

        // const r2 = this.test()
        // cc.log("r2 = ", r2);

        // this.takeLongTime().then(v => {
        //     console.log("got", v);
        // });

		// this.test2();

		// console.time("aaa");
		// for (let index = 0; index < 500; index++) {
		// 	cc.log(index)	
		// }
		// console.timeEnd("aaa");
		
		// this.doIt()
		// this.doIt2()
		// this.doIt3()
		// this.doIt4()

		let testr = this.doIt3()
		cc.log("testr = ", testr);
    }

    public promiseClick() {

        let p = new Promise((resolve, reject) => {
            //做一些异步操作
            setTimeout(() => {
                console.log('执行完成');
                resolve('我是成功！！');
            }, 2000);
        });
    }

    private async lbClick(): Promise<any> {
        // return Promise.resolve("hello async")
        return "hello async"
    }

    getSomething() {
        cc.log("111")
        return "something";
    }
    
    async testAsync() {
        cc.log("222")
        return Promise.resolve("hello async");
    }
    
    async test() {
        const v1 = await this.getSomething();
        const v2 = await this.testAsync();
        console.log(v1, v2);
    }
  
    /*
    takeLongTime() {
        return new Promise(resolve => {
            setTimeout(() => resolve("long_time_value"), 1000);
        });
    }
    
    async test2() {
        const v = await this.takeLongTime();
        console.log(v);
    }
    */

    /**
	 * 传入参数 n，表示这个函数执行的时间（毫秒）
	 * 执行的结果是 n + 200，这个值将用于下一步骤
	 */
	public takeLongTime(n) {
		return new Promise(resolve => {
			setTimeout(() => resolve(n + 200), n);
		});
	}

	// public step1(n) {
	// 	console.log(`step1 with ${n}`);
	// 	return this.takeLongTime(n);
	// }

	// public step2(n) {
	// 	console.log(`step2 with ${n}`);
	// 	return this.takeLongTime(n);
	// }

	// public step3(n) {
	// 	console.log(`step3 with ${n}`);
	// 	return this.takeLongTime(n);
	// }
	
	// public doIt() {
	// 	console.time("doIt");
	// 	const time1 = 300;
	// 	this.step1(time1)
	// 		.then(time2 => this.step2(time2))
	// 		.then(time3 => this.step3(time3))
	// 		.then(result => {
	// 			console.log(`result is ${result}`);
	// 			console.timeEnd("doIt");
	// 		});
	// }

	// public async doIt2() {
	// 	console.time("doIt");
	// 	const time1 = 300;
	// 	const time2 = await this.step1(time1);
	// 	const time3 = await this.step2(time2);
	// 	const result = await this.step3(time3);
	// 	console.log(`result is ${result}`);
	// 	console.timeEnd("doIt");
	// }

	public step1(n) {
		console.log(`step1 with ${n}`);
		return this.takeLongTime(n);
	}
	
	public step2(m, n) {
		console.log(`step2 with ${m} and ${n}`);
		return this.takeLongTime(m + n);
	}
	
	public step3(k, m, n) {
		console.log(`step3 with ${k}, ${m} and ${n}`);
		return this.takeLongTime(k + m + n);
	}

	// step1 with 300
	// step2 with 800 = 300 + 500
	// step3 with 1800 = 300 + 500 + 1000
	// result is 2000 这里是3的结果加上200 每次都是最后一个值加200返回出来的
	// doIt: 2907.387ms
	public async doIt3() {
		console.time("doIt");
		const time1 = 300;
		const time2 = await this.step1(time1);
		const time3 = await this.step2(time1, time2);
		const result = await this.step3(time1, time2, time3);
		console.log(`result is ${result}`);
		console.timeEnd("doIt");

		return "先返回结果吗？"
	}

	public doIt4() {
		console.time("doIt");
		const time1 = 300;
		this.step1(time1)
			.then(time2 => {
				return this.step2(time1, time2)
					.then(time3 => [time1, time2, time3]);
			})
			.then(times => {
				const [time1, time2, time3] = times;
				return this.step3(time1, time2, time3);
			})
			.then(result => {
				console.log(`result is ${result}`);
				console.timeEnd("doIt");
			});
	}
	

    // update (dt) {}
}
