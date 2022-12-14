import {getRandomPositiveInteger, getRandomArrayElement} from './util.js';

const ID = 25;

const DESCRIPTIONS = [
  'Я и пальма',
  'Мы, пацаны, не обижаемся — мы делаем выводы!',
  'Хватит думать сутками о человеке, который не задумывался о тебе даже на час',
  'Кому нибудь мы обязательно понадобимся такими, какие мы есть',
  'Братва — это не когда вас много, а когда несколько, но достойных!',
  'Брат может не быть другом, но друг всегда брат',
  'Меня знают многие, но лишь единицы знают, какой я на самом деле',
  'Делаешь — не бойся, боишься — не делай, а сделал — не сожалей',
  'Маме — поддержку, пацанам — уважение, девушке — любовь, для души — рэпчик',
  'Чем меньше город, тем круче пацаны',
  'Не важно, кто напротив. Важно, кто рядом',
  'Однажды, я приеду и заберу то, что мне принадлежит',
  'Друзей выбираем мы сами, но лучших оставляет время',
  'Никогда не поздно поставить новую цель или обрести новую мечту',
  'Слушай всех, прислушивайся к немногим, решай сам',
  'Улыбку дарю всем. Взгляд — немногим. Сердце — одной',
  'Никто не знает как любит сердце пацана',
  'Упал — встань, а встал — иди',
  'Я буду ценить всегда только тех, кто со мной до последнего',
  'Прощать не сложно, сложно заново поверить',
  'Может и не получится , но попробовать стоит всегда',
  'Порой просто хочется побыть одному',
  'Главное верить в себя, и все получится',
  'Тот, кто молчит, знает в два раза больше, чем тот кто говорит',
  'Улица – это сила',
];

const CountLikes = {
  MIN: 15,
  MAX: 200
};

const COMMENTS = 200;

const createObject = (_item, index) => ({
  id:  index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(CountLikes.MIN, CountLikes.MAX),
  comments: getRandomPositiveInteger(0, COMMENTS),
});

const createArray = () => Array.from({length: ID}, createObject);

export {createArray};
