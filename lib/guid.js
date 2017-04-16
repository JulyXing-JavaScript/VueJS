// 声明式渲染
var app1 = new Vue({
    el: '#app1',
    data: {
        message: "Hello World!"
    }
});

// 数据绑定
var app2 = new Vue({
    el: "#app2",
    data: {
        message: '页面加载于' + new Date(),
    }
});

// 条件判断
var app3 = new Vue({
    el: "#app3",
    data: {
        message: "Hello VueJS!",
        seen: true
    }
});

// 循环
var app4 = new Vue({
    el: "#app4",
    data: {
        todos: [
            { text: "标题1" },
            { text: "标题2" },
            { text: "标题3" },
            { text: "标题4" }
        ],
    }
});

// 处理用户操作事件
var app5 = new Vue({
    el: "#app5",
    data: {
        message: "Hello VueJS!",
        info: 'test'
    },
    methods: {
        reserseMessage: function() {
            this.message = this.message.split('').reverse().join('');
        },
        test: function() {
            this.info = new Date();
            console.debug(new Date(), 'test');
        }
    }
});

// 数据双向绑定
var app6 = new Vue({
    el: "#app6",
    data: {
        message: "Hello VueJS",
        info: "请输入内容"
    }
});


// 自定义组件
Vue.component('test', {
    template: '<span>测试组件</span>'
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
    el: "#app7",
    data: {
        groceryList: [
            { text: "事项1" },
            { text: "事项2" },
            { text: "事项3" },
            { text: "事项4" }
        ]
    }
});