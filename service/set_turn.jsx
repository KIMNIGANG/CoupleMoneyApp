import "firebase/firestore";

export const setTurn = (moneyList, setSum, setTurn) => {
  let sum = 0;
  let turn = 0;
  for (let i = 0; i < moneyList.length; i++) {
    sum += Number(moneyList[i].money);
  }
  turn = Math.floor(sum / 10000);
  setSum(sum);
  setTurn(turn);
};
