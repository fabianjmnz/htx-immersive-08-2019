
var player = [];
var dealer = [];
document.getElementById("btnHit").disabled = true;
document.getElementById("btnStand").disabled = true;
btnPlayAgain.style.display = 'none'
//////////////////////////////////DEAL BUTTON////////////////////////////////////////////
document.getElementById("btnDeal").addEventListener("click",function(){
  var card, cardUrl;
btnDeal.style.display = 'none'
document.getElementById("btnHit").disabled = false;
document.getElementById("btnStand").disabled = false;
deck = newDeck();
shuffleDeck(deck);
dealACard(player,"#player-hand");     // putting a # makes a difference why?
dealACard(dealer,"#dealer-hand");
dealACard(player,"#player-hand"); 
//$('#dealer-hand').src = "back_of_card.png";
dealACard(dealer,"#dealer-hand"); 
updateScoreDisplay();
if ((getScore(player)==21)&&(getScore(dealer)==21)){
  $('#Messages').text('NICE BUUUUSTTTT!')
  btnHit.style.display = 'none'
  btnStand.style.display = 'none'
  btnPlayAgain.style.display = 'inline'
}
if (getScore(player)==21){
  $('#Messages').text('YoU wIn!!!!')
  btnHit.style.display = 'none'
  btnStand.style.display = 'none'
  btnPlayAgain.style.display = 'inline'
}
if (getScore(dealer)==21){
  $("#Messages").text('you lose!')
  btnHit.style.display = 'none'
  btnStand.style.display = 'none'
  btnPlayAgain.style.display = 'inline'
 }

});
/////////////////////////////////HIT BUTTON//////////////////////////////////////////////
document.getElementById("btnHit").addEventListener("click",function(){
dealACard(player,"#player-hand")
updateScoreDisplay();
if (getScore(player) > 21)
{
  $("#Messages").text('YOU LOSE!')
  btnHit.style.display = 'none'
  btnStand.style.display = 'none'
  btnPlayAgain.style.display = 'inline'
}
});
/////////////////////////////////STAND BUTTON///////////////////////////////////////////////
document.getElementById("btnStand").addEventListener("click",function(){
while (getScore(dealer)<17)
{ 
  dealACard(dealer,"#dealer-hand");
  updateScoreDisplay(); 
 
} 
if (getScore(dealer)>getScore(player)){
  $("#Messages").text('YOUUUU LOSSSEEE!!')
}
if (getScore(player)>getScore(dealer)){
  $("#Messages").text('YOUU WIN!!!')
}
if (getScore(dealer)==getScore(player)){
  $("#Messages").text('ITS A BUST!')
}
if (getScore(dealer)>21){
 $("#Messages").text('YOOOOUUUU WIN!')
}
if (getScore(dealer)==21){
 $("#Messages").text('you lose!')

}
btnHit.style.display = 'none'
btnStand.style.display = 'none'
btnPlayAgain.style.display = 'inline'
});
/////////////////////////////PLAY AGAIN BUTTON///////////////////////////////////////////
document.getElementById('btnPlayAgain').addEventListener("click",function(){
player = []
dealer = []
deck = []


});


///////////////////////////////////FUNCTIONS/////////////////////////////////////////////

function newDeck() {
  var deck = [];
  for (var i = 1; i <= 13; i++) {
    deck.push({ point: i, suit: 'spades' }); 
    deck.push({ point: i, suit: 'hearts' });
    deck.push({ point: i, suit: 'clubs' });
    deck.push({ point: i, suit: 'diamonds' });
  }
 
  return deck;
}

function CardImage(card) {
  var cardName;
  if (card.point === 1) {
    cardName = 'ace';
  } else if (card.point === 11) {
    cardName = 'jack';
  } else if (card.point === 12) {
    cardName = 'queen';
  } else if (card.point === 13) {
    cardName = 'king';
  } else {
    cardName = card.point;
  }
  return 'images/' + cardName + '_of_' + card.suit + '.png';
  
}
function dealACard(handArray, elementSelector) {
    card = deck.pop();
    handArray.push(card);
    cardUrl = CardImage(card);
    $(elementSelector).append(
      '<img src="' + cardUrl + '"> '     // space after closed bracket creates space in between cards
    );
}
function shuffleDeck(deck){
  for(let i=0;i<deck.length;i++)
  {
    let swapIdx = Math.floor(Math.random()*deck.length);
    let x = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i]= x;
  }
} 
function getScore(cards) {
  cards = cards.slice(0);
  cards.sort(function(a, b) {
    return b.point - a.point;
  });
  return cards.reduce(function(sum, card) {
    var point = card.point;
    if (point > 10) {
      point = 10;
    }
    if (point === 1 && sum < 11) {
      point = 11;
    }
    return sum + point;
  }, 0);
}
function updateScoreDisplay() {
  var dealerPoints = getScore(dealer);
  $("#dealer-points").text(dealerPoints);  // $ turns #dealer-points.text into a function why?
  var playerPoints = getScore(player);
  $('#player-points').text(playerPoints);
}
