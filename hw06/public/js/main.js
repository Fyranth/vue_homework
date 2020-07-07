Vue.config.devtools = true;
import {game} from '../js/game.js';

const product = {
    data: ()=>{
        return { }
    },
    props: {
        id: {
            default: () => {}
        },
        item: {
            type: Object,
            default: () => {}
        }   
    },
    template: `<div class="w-100 text-center">
                    <router-link :to="{ name: 'products'}" tag="a" class="text-left pointer">
                        <p>К каталогу</p>
                    </router-link>
                    <div class="d-flex w-100">
                        <h5 class="flex-fill" v-text="item.name"></h5>   
                    </div>
                    <img class="mw-100" :src="'../' + item.img">
                    <div class="d-flex w-100 flex-row-reverse">
                        <h5 v-text="'Цена: ' + item.price"></h5>   
                    </div>
                    <h5 class="flex-fill text-left">Характеристики</h5>
                    <div class="d-flex w-100 flex-row" v-for="characteristic in item.characteristics">
                        <div class="w-25 text-left bg-secondary text-light text-left border-bottom border-primary m-0 p-2"><p class="p-0 m-0" v-text="characteristic.name"></p></div>
                        <div class="flex-fill text-left border-bottom border-primary m-0 p-2"><p class="p-0 m-0" v-text="characteristic.data"></p></div>    
                    </div>
                </div>`
};
const products = {
    data: ()=>{
        return { products_data: {} }
    },
    props: {
           
    },
    mounted: function () {
        this.$nextTick(function () {
            this.products_data = app.products;
        })
    },
    template: 
        `<div class="">
            <div class="d-flex flex-wrap justify-content-around">
                <div class="w-50 d-flex flex-row p-4 mt-2 mb-2 border bg-light text-secondary shadow-sm" v-for="item in products_data" :key="item.id" :item_data="item">
                    <div class="w-100 text-center">
                        <router-link :to="{ name: 'product', params: { id: item.id, item: item } }" tag="div" :key="item.id" class="pointer">
                            <div class="d-flex w-100">
                                <h5 class="flex-fill" v-text="item.name"></h5>   
                            </div>
                            <img class="w-100" :src="'./'+item.img">
                            <div class="d-flex w-100 flex-row-reverse">
                                <h5 v-text="'Цена: ' + item.price"></h5>   
                            </div>   
                        </router-link>
                    </div>
                </div>
            </div>
        </div>`
    
};

const home = {
    template: `<div class="w-100 text-center ">
                    <h3>Домашняя работа 5 Задание 1</h3>
                    <h4>выводим закладки со сменой содержимого через динамические закладки</h4>
                    <img class="mw-100" src="https://images.kashamalasha.com/201610050003-domashnyaya-rabota-kashamalasha-com.jpg">
                </div>`
};
const projects = {
    template: `<div class="w-100 text-center ">
                    <h3>Великие проекты истории</h3>
                    <ol>
                        <li><h4>Еги́петские пирами́ды</h4>
                        <img class="mw-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/All_Gizah_Pyramids-3.jpg/340px-All_Gizah_Pyramids-3.jpg">
                        <p class="w-100 text-justify">Еги́петские пирами́ды — древние каменные сооружения пирамидальной формы, расположенные в Египте.</p>
                        <p class="w-100 text-justify">Количество объектов, идентифицируемых как египетские пирамиды, варьируется от 118 до 138 (по данным ноября 2008 года)[1][2]. Большая часть пирамид была построена в качестве усыпальниц для фараонов Древнего и Среднего царств[3][4]. Древнейшие из известных пирамид находятся в Саккаре. Самой древней считается пирамида Джосера, построенная архитектором Имхотепом в период с 2667 по 2648 гг. до н. э.</p>
                        </li>
                        <li><h4>Вавило́нская ба́шня</h4>
                        <img class="mw-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg/274px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg">
                        <p class="w-100 text-justify">Вавило́нская ба́шня (Мигда́ль Баве́ль) — башня, которой посвящено библейское предание, изложенное в 11-й главе книги Бытие (Быт. 11:1—9). Согласно этому преданию, после Всемирного потопа человечество было представлено одним народом, говорившим на одном языке. С востока люди пришли на землю Сеннаар (в нижнем течении Тигра и Евфрата), где решили построить город, названный Вавилоном, и башню до небес, чтобы «сделать себе имя». Строительство башни было прервано Богом, который заставил людей заговорить на разных языках, из-за чего они перестали понимать друг друга, не могли продолжать строительство города и башни и рассеялись по всей земле. Таким образом, история о Вавилонской башне объясняет появление различных языков после Всемирного потопа.</p>
                        </li>
                        <li><h4>Интерне́т</h4>
                        <img class="mw-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Internet_map_1024.jpg/250px-Internet_map_1024.jpg">
                        <p class="w-100 text-justify">Интерне́т (англ. Internet, МФА: [ˈɪn.tə.net]) — всемирная система объединённых компьютерных сетей для хранения, обработки и передачи информации[1].</p>
                        <p class="w-100 text-justify">Упоминается как Всемирная сеть и Глобальная сеть, а также просто Сеть. Построена на базе стека протоколов TCP/IP[2][3]. На основе Интернета работает Всемирная паутина (World Wide Web, WWW) и множество других систем передачи данных. К середине 2015 года число пользователей достигло 3,3 млрд человек. Во многом это было обусловлено широким распространением сотовых сетей с доступом в Интернет стандартов 3G и 4G, развитием социальных сетей и удешевлением стоимости интернет-трафика[4].</p>
                        </li>
                    </ol>
                </div>`
};
const services = {
    template: `<div class="mw-100 text-center ">
                <h3>Придоставим услуги</h3>
            
                <Ol>
                    <li>Круглое постаскаем</li>
                    <li>Квадратное покатаем</li>
                    <li>Что-то привезем</li>
                    <li>Что-то увезем</li>
                </Ol>
                </div>`
};
const contacts = {
    template: `<div class="mw-100 text-center ">
                <h3>Приёмная Президента Три-десятой федерации по приёму граждан в деревянном городе</h3>
                <h4>Телефоны</h4>
                <ul><li>+22(33)xxx-xxx</li><li>+22(33)xxx-xxx</li><li>+22(33)xxx-xxx</li></ul>
                </div>`
};
const NotFound  = {
    template: '<div class="w-100 text-center"><h2>404 Page Not Found</h2></div>' 
};


const routes = [ 
    { 
        path: '/', 
        component: home,
        name: 'home' 
    }, 
    { 
        path: '/projects', 
        component: projects,
        name: 'projects'
    }, 
    { 
        path: '/services', 
        component: services,
        name: 'services'
    },
    { 
        path: '/contacts', 
        component: contacts,
        name: 'contacts'
    }, 
    { 
        path: '/products', 
        component: products,
        props: true,
        name: 'products'
    },
    { 
        path: '/product/:id', 
        component: product,
        props: true,
        name: 'product'
    },
    {
        path: '/game', 
        component: game,
        props: true,
        name: 'game'
    },
    { 
        path: '*', 
        component: NotFound
    } 
];
const router = new VueRouter(
    {  
        mode: 'history',
        routes: routes 
    }
);

var app = new Vue({
    //el: "#app",
    router: router,
    data: {
        links: [
            {
                name: "Главная",
                path: "home",
                exact: true
            },
            {
                name: "Проекты",
                path: "projects",
                exact: false
            },
            {
                name: "Услуги",
                path: "services",
                exact: false
            },
            {
                name: "Контакты",
                path: "contacts",
                exact: false
            },
            {
                name: "Товары",
                path: "products",
                exact: false
            },
            {
                name: "Игра",
                path: "game",
                exact: false
            }
        ],
        products: [
            {
                id: 0,
                name: 'Уголок Tech-KREP 124408, 105х105х90 мм',
                price: '86 р.',
                img: 'img/1.jpg',
                characteristics: [
                    { name: 'Тип', data: 'уголок' },
                    { name: 'Усиление', data: 'одинарное' },
                    { name: 'Градус крепежного угла', data: '90 градусов' },
                    { name: 'Материал', data: 'оцинкованная сталь' },
                    { name: 'Длина', data: '105 мм' },
                    { name: 'Ширина', data: '105 мм' },
                    { name: 'Высота', data: '90 мм' }
                ]
            },
            {
                id: 1,
                name: 'Лента Сибртех 46549, 25 м, 17х0.55 мм',
                price: '405 р.',
                img: 'img/2.jpg',
                characteristics: [
                    { name: 'Тип', data: 'лента' },
                    { name: 'Назначение', data: 'для воздуховодов' },
                    { name: 'Усиление', data: 'отсутствует' },
                    { name: 'Материал', data: 'оцинкованная сталь' },
                    { name: 'Длина', data: '25000 мм' },
                    { name: 'Ширина', data: '17 мм' },
                    { name: 'Толщина', data: '0.55 мм' },
                    { name: 'Количество в упаковке', data: '1 шт.' }
                ]
            }
        ]
    },
    computed: {
        
    },
    methods: {   
    },
    filters: {
        
    },

}).$mount('#app');