class Items {
  constructor(id, name, desc, src, category) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.src = src;
    this.category = category;
  }
}

const itemsData = [
  new Items(
    101,
    "PaulBasset Chocolate",
    "견과류와 함께 즐기는 선물하기 좋은 초콜릿",
    "../image/item001.jpg",
    "food"
  ),
  new Items(
    102,
    "New Tumbler",
    "그립감이 좋은 텀블러 4종",
    "../image/item002.jpg",
    "product"
  ),
  new Items(
    103,
    "Tea & Pistachio",
    "가을에 잘 어울리는 티 & 피스타치오 신제품",
    "../image/item003.jpg",
    "beverage"
  ),
  new Items(
    104,
    "Espresso Cup Set",
    "에스프레소를 가장 맛있게 즐길 수 있는 잔 세트",
    "../image/item004.jpg",
    "product"
  ),
  new Items(
    105,
    "Chocolate Langue de chat",
    "초콜릿의 깊고 진한 달콤함이 가득한 랑드샤",
    "../image/item005.jpg",
    "food"
  ),
  new Items(
    106,
    "Milk Tea Langue de chat",
    "향긋한 밀크티 풍미가 가득한 랑드샤",
    "../image/item006.jpg",
    "food"
  ),
  new Items(
    107,
    "ChestNut Bread",
    "공주 알밤과 달콤한 앙금이 듬뿍 담긴 빵",
    "../image/item007.jpg",
    "food"
  ),
  new Items(
    108,
    "Stick Coffee",
    "폴 바셋 스페셜 티 원두의 풍부한 맛과 향을 담은 스틱 커피",
    "../image/item008.jpg",
    "product"
  ),
  new Items(
    109,
    "Happy Halloween",
    "폴 바셋 할로윈 음료 3종",
    "../image/item009.jpg",
    "beverage"
  ),
];

export default itemsData;
