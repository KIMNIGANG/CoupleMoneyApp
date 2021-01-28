import "firebase/firestore";

export const setTurn = (setTurn, sum, setLeft) => {
  const turn = Math.floor(sum / 10000);
  const left = sum % 10000;
  setTurn(turn);
  setLeft(left);
};
