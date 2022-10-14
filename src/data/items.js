/**
 * 더미데이터 만드는 클래스
 */
class Items {
  constructor(id, name, desc, src, category, detailSrc, detailDesc) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.src = src;
    this.category = category;
    this.detailSrc = detailSrc;
  }
}

/**
 * 더미데이터
 */
const itemsData = [
  new Items(
    101,
    "PaulBasset Chocolate",
    "견과류와 함께 즐기는 선물하기 좋은 초콜릿",
    `/image/item001.jpg`,
    "food",
    `/image/detail001.jpg`
  ),
  new Items(
    102,
    "New Tumbler",
    "그립감이 좋은 텀블러 4종",
    `/image/item002.jpg`,
    "product",
    `/image/detail002.jpg`
  ),
  new Items(
    103,
    "Tea & Pistachio",
    "가을에 잘 어울리는 티 & 피스타치오 신제품",
    `/image/item003.jpg`,
    "beverage",
    `/image/detail003.jpg`
  ),
  new Items(
    104,
    "Espresso Cup Set",
    "에스프레소를 가장 맛있게 즐길 수 있는 잔 세트",
    `/image/item004.jpg`,
    "product",
    `/image/detail004.jpg`
  ),
  new Items(
    105,
    "Chocolate Langue de chat",
    "초콜릿의 깊고 진한 달콤함이 가득한 랑드샤",
    `/image/item005.jpg`,
    "food",
    `/image/detail005.jpg`
  ),
  new Items(
    106,
    "Milk Tea Langue de chat",
    "향긋한 밀크티 풍미가 가득한 랑드샤",
    `/image/item006.jpg`,
    "food",
    `/image/detail006.jpg`
  ),
  new Items(
    107,
    "ChestNut Bread",
    "공주 알밤과 달콤한 앙금이 듬뿍 담긴 빵",
    `/image/item007.jpg`,
    "food",
    `/image/detail007.jpg`
  ),
  new Items(
    108,
    "Stick Coffee",
    "폴 바셋 스페셜 티 원두의 풍부한 맛과 향을 담은 스틱 커피",
    `/image/item008.jpg`,
    "product",
    `/image/detail008.jpg`
  ),
  new Items(
    109,
    "Happy Halloween",
    "폴 바셋 할로윈 음료 3종",
    `/image/item009.jpg`,
    "beverage",
    `/image/detail009.jpg`
  ),
  new Items(
    110,
    "[E-stamp] 허스키 컵 텀블러",
    "커피 생두 껍질로 만든 텀블러",
    `/image/item010.jpg`,
    "product",
    `/image/detail010.jpg`
  ),
  new Items(
    111,
    "Sweer Corn Sweet Moments",
    "달콤하고 고소한 초당 옥수수 아이스크림 & 옥수수 치즈 브레드",
    `/image/item011.jpg`,
    "ice",
    `/image/detail011.jpg`
  ),
  new Items(
    112,
    "Bingsu",
    "오리지널 팥빙수 & 블루베리 빙수",
    `/image/item012.jpg`,
    "ice",
    `/image/detail012.jpg`
  ),
  new Items(
    113,
    "Recharge Summer!",
    "상큼한 블루베리로 만든 음료 3종",
    `/image/item013.jpg`,
    "beverage",
    `/image/detail013.jpg`
  ),
  new Items(
    114,
    "Stainless steel Tumbler",
    "미르 스테인리스 텀블러 3종",
    `/image/item014.jpg`,
    "product",
    `/image/detail014.jpg`
  ),
  new Items(
    115,
    "Carbon Umbrella",
    "초경량 프리미엄 장우산",
    `/image/item015.jpg`,
    "product",
    `/image/detail015.jpg`
  ),
  new Items(
    116,
    "LUNGO RTD",
    "매장에서 판매하는 룽고 맛을 그대로 구현해낸 RTD",
    `/image/item016.jpg`,
    "product",
    `/image/detail016.jpg`
  ),
  new Items(
    117,
    "LACTOSE FREE LATTE RTD",
    "매장에서 락토프리 라떼의 맛을 그대로 구현해낸 RTD",
    `/image/item017.jpg`,
    "product",
    `/image/detail017.jpg`
  ),
  new Items(
    118,
    "Gift Set",
    "폴 바셋 추석 선물 세트",
    `/image/item018.jpg`,
    "product",
    `/image/detail018.jpg`
  ),
];

export default itemsData;
