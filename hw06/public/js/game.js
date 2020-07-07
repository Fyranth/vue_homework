export const game = {
    data: () => { 
        let cardsArr = []; let count = 100;
        createCards(cardsArr, count);
        return {
            cards: cardsArr, 
            cardcounts: count, 
            cards_checked: [], 
        }
    },
    methods: {
        randomizeCards: function() {
            randomize(this.cards);
        },
        newGame: function() {
            this.cards.splice(0);
            createCards(this.cards, this.cardcounts);    
        },
        cardCheck: function(e) {
            let tag = document.getElementById('card_'+e);
            if(tag.classList.contains('cell')) {
                if(e!=this.cards_checked.length+1) return;
                tag.classList.add('cell-checked');
                this.cards_checked.push(this.cards[this.cards_checked.length-1]);
                if(this.cards_checked.length==this.cards.length) {
                    let vinner_card = {
                        number: "Победа!",
                        style: {
                            color: 'red',
                            fontSize: '2,5em'
                        },
                        boxStyle: {
                            width: '100%',
                            height: '100%', 
                        }
                    };
                    this.cards.splice(0);
                    this.cards.push(vinner_card);
                }
            }
        }
    },
    template: `<div class="w-100 text-center">
                    <div class="d-flex w-100">
                        <h5 class="flex-fill">Номера</h5>   
                    </div>
                    <div class="d-flex w-100">
                        <button class="mx-2" @click="newGame">Новая игра</button>
                        <button class="mx-2" @click="randomizeCards">Перемешать</button>
                        <input class="mx-2" type="number" :key="cardcounts" v-model="cardcounts" step="10" min="10">   
                    </div>
                    <div class="d-flex mw-100 minh-100 flex-row flex-wrap position-relative">
                        <div v-for="card in cards" :id="'card_'+card.number":key="card.number" @click="cardCheck(card.number)" class="cell cell-move text-center align-items-center" v-bind:style="card.boxStyle">
                            <p class="w-100 p-0 m-1" v-text="card.number" v-bind:style="card.style"></p>
                        </div>
                    </div>
                </div>`
}

function createCards(arr, count) {
    //arr = [];
    for(let i=1; i<=count; i++) {
        arr.push({
            number: i,
            style: {
                color: `rgb(${getRandom(0,255)} , ${getRandom(0,255)}, ${getRandom(0,255)})`,
                fontSize: `${getRandom(1,2.5)}em`
            },
            boxStyle: {

            }
        });     
    }
    randomize(arr);
}

function getRandom(min, max) {
    return Math.random()*(max - min) + min;
}

function randomize(arr) {
    arr.sort(function(){
        return Math.random()*2 - 1;
    });
}
